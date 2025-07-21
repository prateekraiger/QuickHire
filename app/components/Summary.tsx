import React from "react";

interface SummaryProps {
  feedback: any;
}
const Summary = ({ feedback }: SummaryProps) => {
  return <div>Summary: {JSON.stringify(feedback)}</div>;
};

export default Summary;
