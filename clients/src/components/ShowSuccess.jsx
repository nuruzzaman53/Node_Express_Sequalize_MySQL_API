import React from "react";

const ShowSuccess = ({ success }) => {
  return (
    <>
      <p className="alert alert-success fw-bold">{success}</p>
    </>
  );
};

export default ShowSuccess;
