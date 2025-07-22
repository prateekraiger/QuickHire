import Navbar from "~/components/Navbar";
import { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { convertPdfToImage } from "~/lib/pdf2Image";
import { prepareInstructions, AIResponseFormat } from "../../constants";

const upload = () => {
  const { auth, isLoading, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  // Only redirect to login if not authenticated and trying to access upload
  if (!isLoading && !auth.isAuthenticated) {
    navigate(`/auth?next=/upload`);
    return null;
  }

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyse = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File | null;
  }) => {
    if (!file) {
      setStatusText("No file selected for upload.");
      setIsProcessing(false);
      return;
    }
    setIsProcessing(true);
    setStatusText("Processing your resume...");

    try {
      const uploadedFile = await fs.upload([file]);
      if (!uploadedFile) {
        setStatusText("Failed to upload the file.");
        setIsProcessing(false);
        return;
      }

      setStatusText("Converting To image...");
      const imageFile = await convertPdfToImage(file);
      if (!imageFile || !imageFile.file) {
        setStatusText("Failed to convert PDF to image.");
        return;
      }
      setStatusText("Analysing your resume...");
      const uploadedImage = await fs.upload([imageFile.file]);
      if (!uploadedImage) {
        setStatusText("Failed to Upload Image.");
        return;
      }

      setStatusText("Preparing Data...");

      // Use a browser-safe UUID generator
      const uuid =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).substring(2) + Date.now().toString(36);

      const data = {
        id: uuid,
        resumePath: uploadedFile.path,
        imagePath: uploadedImage.path,
        companyName,
        jobTitle,
        jobDescription,
        feedback: "",
      };
      await kv.set(`resume:${uuid}`, JSON.stringify(data));

      setStatusText("Saving Data...");

      const feedback = await ai.feedback(
        uploadedFile.path,
        prepareInstructions({ jobTitle, jobDescription, AIResponseFormat })
      );

      if (!feedback) {
        setStatusText("Failed to get feedback from AI.");
        return;
      }

      const feedbackText =
        typeof feedback.message.content === "string"
          ? feedback.message.content
          : feedback.message.content[0].text;

      data.feedback = JSON.parse(feedbackText);
      console.log("AI Feedback Result:", data.feedback);
      navigate(`/resume/${uuid}`);

      await kv.set(`resume:${uuid}`, JSON.stringify(data));
      setStatusText("Analysis Completed Redirecting!");
    } catch (err) {
      setStatusText("Error uploading file.");
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget.closest("form");
    if (!form) return;

    const formData = new FormData(form);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    if (!file) {
      return;
    }

    handleAnalyse({
      companyName,
      jobTitle,
      jobDescription,
      file,
    });
  };
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart Feedback For Your Dream Job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="resume-gif"
                className="w-full"
              />
            </>
          ) : (
            <>
              <h2>Drop Your Resume For An ATS Score and Improvement Tips</h2>
              <form
                id="upload-form"
                className="mt-4 flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div className="form-div">
                  <label htmlFor="company-name">Company Name</label>
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    placeholder="Enter the company name"
                  />
                </div>

                <div className="form-div">
                  <label htmlFor="job-title">Job Title</label>
                  <input
                    type="text"
                    name="job-title"
                    id="job-title"
                    placeholder="Enter the Job title"
                  />
                </div>

                <div className="form-div">
                  <label htmlFor="job-description">Job Discription</label>
                  <textarea
                    rows={5}
                    name="job-description"
                    id="job-description"
                    placeholder="Enter the Job description"
                  />
                </div>

                <div className="form-div">
                  <label htmlFor="uploader">Upload Resume</label>
                  <div>
                    <FileUploader onFileSelect={handleFileSelect} />
                  </div>
                </div>

                <button type="submit" className="primary-button">
                  Analyse Result
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
