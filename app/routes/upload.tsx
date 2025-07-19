import Navbar from "~/components/Navbar";
import { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget.closest("form");
    if (!form) return;

    const formData = new FormData(form);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    console.log("Form Data:", {
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
                  <label htmlFor="job-description">Job Title</label>
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
