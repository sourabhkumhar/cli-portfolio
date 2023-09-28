import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Command = ({ cmd, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className={`text-[#6adf93] flex items-center ${className}`}>
      <span className="mr-1 text-[#e696b3]">command:</span>{" "}
      <span className="">{cmd}</span>
      <button onClick={handleCopy} className="mx-2">
        <FaCopy />
      </button>
      {isCopied && <span>Copied!</span>}
    </div>
  );
};

export default Command;
