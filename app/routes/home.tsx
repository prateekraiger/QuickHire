import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "QuickHire AI" },
    {
      name: "description",
      content: "Welcome to AI Powered Applicant Tracking System",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume</h1>
          <h2>Review Your Submission and Check Ai Powered Feedback</h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <section className="resumes-section">
          {/* sample resumes  */}
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </section>
      )}
    </main>
  );
}
