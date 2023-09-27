import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Command = ({ cmd }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className="sticky bottom-0 mt-3 text-emerald-400 flex items-center">
      <span className="mr-1">command:</span> <span className="">{cmd}</span>
      <button onClick={handleCopy} className="mx-2">
        <FaCopy />
      </button>
      {isCopied && <span className="text-green-500">Copied!</span>}
    </div>
  );
};

export default Command;
