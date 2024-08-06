import React from "react";

const ShowError = ({ errors }) => {
  return (
    <div>
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p className="alert alert-danger fw-bold" key={index}>
            {error}
          </p>
        ))}
    </div>
  );
};

export default ShowError;
