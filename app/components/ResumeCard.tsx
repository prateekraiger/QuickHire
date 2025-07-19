import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card header flex flex-row items-center justify-between gap-4 mb-4">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="!text-black font-bold break-words">{companyName}</h2>
          <h3 className="text-lg-break-words text-gray-500">{jobTitle}</h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-in duration-1000">
        <img
          src={imagePath}
          alt="resume"
          className="w-full h-[500px] rounded-xl shadow-md object-cover object-top border border-gray-200"
        />
      </div>
    </Link>
  );
};

export default ResumeCard;
