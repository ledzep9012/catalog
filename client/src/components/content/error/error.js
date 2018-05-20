import React from "react";

const ShowError = ({ error, bAutoHide = false }) => {
  console.log(bAutoHide);
  return <div className="alert alert-warning">{error}</div>;
};

export default ShowError;
