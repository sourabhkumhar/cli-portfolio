import React from "react";
import CommandBox from "../UI/CommandBox";

const Error = ({ message }) => {
  return (
    <>
      <div className="text-red-500">{message}</div>

      <CommandBox
        cmd="reset"
        description="Reset page to re-initialize porfolio."
      />
      <CommandBox
        cmd="open cmd list"
        description="Check correct command list."
      />
    </>
  );
};

export default Error;
