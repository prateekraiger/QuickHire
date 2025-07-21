import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import Summary from "~/components/Summary";
import { usePuterStore } from "~/lib/puter";

export function meta() {
  return [
    { title: "QuickHire AI - Auth" },
    { name: "description", content: "Detailled Overview of Resume" },
  ];
}

const resume = () => {
  const { id } = useParams();
  const { auth, isLoading, fs, kv } = usePuterStore();

  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated && !isLoading) {
      navigate(`/auth?next=/resume/${id}`);
    }
  }, [auth.isAuthenticated, isLoading, id, navigate]);

  useEffect(() => {
    const loadResume = async () => {
      try {
        const resume = await kv.get(`resume:${id}`);
        if (!resume) {
          console.error("KV get failed: resume not found for id", id);
          throw new Response("Resume not found", { status: 404 });
        }

        const data = JSON.parse(resume);
        console.log("Loaded KV data:", data);

        const resumeBlob = await fs.read(data.resumePath);
        if (!resumeBlob) {
          console.error(
            "FS read failed: resume file not found at",
            data.resumePath
          );
          throw new Response("Resume file not found", { status: 404 });
        }

        const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
        const resumeUrl = URL.createObjectURL(pdfBlob);
        setResumeUrl(resumeUrl);

        const imageBlob = await fs.read(data.imagePath);
        if (!imageBlob) {
          console.error(
            "FS read failed: image file not found at",
            data.imagePath
          );
          throw new Response("Image file not found", { status: 404 });
        }
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageUrl(imageUrl);

        setFeedback(data.feedback || null);
        console.log("Resume page loaded:", {
          resumeUrl,
          imageUrl,
          feedback: data.feedback,
        });
      } catch (err) {
        console.error("Error loading resume page:", err);
      }
    };

    loadResume();
  }, [id]);

  return (
    <main className="!pt-0">
      <nav className="resume-nav">
        <Link to="/" className="back-button">
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className="text-gray-800 text-sm font-semibold">
            Back to HomePage
          </span>
        </Link>
      </nav>

      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center ">
          {imageUrl && resumeUrl && (
            <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-w-xl:h-fit w-fit">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt="Resume"
                  className="w-full h-full object-contain rounded-xl"
                  title="Resume"
                />
              </a>
            </div>
          )}
        </section>
        <section className="feedback-section ">
          <h2 className="text-4xl text-black font-bold">Resume Review</h2>
          {feedback ? (
            <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
              <Summary feedback={feedback} />
              <ATS
                score={feedback.ATS?.score || 0}
                suggestions={feedback.ATS?.tips || []}
              />
              <Details feedback={feedback} />
            </div>
          ) : (
            <img
              src="/images/resume-scan-2.gif"
              alt="Loading resume analysis"
              className="w-full"
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default resume;
