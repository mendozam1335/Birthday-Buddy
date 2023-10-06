import React from "react";

const Clear = ({ clear }) => {
  return (
    <button type="button" className="btn" onClick={clear}>
      Clear List
    </button>
  );
};

export default Clear;
