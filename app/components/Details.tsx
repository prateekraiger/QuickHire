import React from "react";

interface DetailsProps {
  feedback: any;
}
const Details = ({ feedback }: DetailsProps) => {
  return <div>Details: {JSON.stringify(feedback)}</div>;
};

export default Details;
