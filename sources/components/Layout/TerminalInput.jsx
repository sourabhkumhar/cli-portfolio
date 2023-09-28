import { Data } from "@/sources/context/DataProvider";
import { useContext, useState } from "react";

const cmdPath = "/>";

export const PastCmd = ({ cmd = "Noasds" }) => {
  return (
    <div className="flex items-start gap-2">
      <span>{cmdPath}</span>
      <span className="text-[#dfdfdf]">{cmd}</span>
    </div>
  );
};

const TerminalInput = () => {
  const { callCommand, cmdHistory } = useContext(Data);
  const [historyIndex, setHistoryIndex] = useState(cmdHistory.length);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input?.trim() !== "") {
        callCommand(input);
        setInput("");
        setHistoryIndex((prev) => prev + 1);
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        setInput(cmdHistory[historyIndex - 1]);
        setHistoryIndex((prev) => prev - 1);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < cmdHistory.length) {
        console.log(historyIndex);
        setInput(cmdHistory[historyIndex + 1]);
        setHistoryIndex((prev) => prev + 1);
      }
      if (historyIndex === cmdHistory.length - 1) {
        setInput("");
      }
      return;
    }
  };

  return (
    <div className="flex items-start gap-2 w-full">
      <span className="text-gray-300">{cmdPath}</span>
      <textarea
        type="text"
        value={input}
        onChange={handleChange}
        className="bg-transparent border-none focus:outline-none text-white w-full resize-none overflow-hidden"
        placeholder="Type your command..."
        rows={5}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default TerminalInput;
