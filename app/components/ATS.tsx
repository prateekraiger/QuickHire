import React from "react";

interface ATSProps {
  score: any;
  suggestions: any;
}
const ATS = ({ score, suggestions }: ATSProps) => {
  return (
    <div>
      ATS Score: {score}
      <br />
      Suggestions:{" "}
      {Array.isArray(suggestions) ? suggestions.join(", ") : suggestions}
    </div>
  );
};

export default ATS;
