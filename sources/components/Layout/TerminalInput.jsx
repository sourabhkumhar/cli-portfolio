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
  const [input, setInput] = useState("");
  const { callCommand } = useContext(Data);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior (e.g., new line)
      if (input.trim() !== "") {
        callCommand(input);
        setInput(""); // Clear the input field
      }
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
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default TerminalInput;
