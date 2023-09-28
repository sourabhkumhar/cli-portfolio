import React from "react";
import Command from "./Command";

const CommandBox = ({ cmd, description, className, element }) => {
  return (
    <div className={`p-3 ${className}`}>
      <div className="text-[#d1d1d1]">{description}</div>
      <Command cmd={cmd} />
      {element}
    </div>
  );
};

export default CommandBox;
