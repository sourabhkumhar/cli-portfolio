import { createContext, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [expand, setExpand] = useState(250);
  const [isStarted, setStarted] = useState(false);
  const [output, setOutput] = useState(false);

  const handleTerminalHeight = (e) => {
    setExpand((prev) => !prev);
  };

  const callCommand = (cmd) => {
    setCmdHistory((prev) => {
      const temp = [...prev];
      temp.push(cmd);
      return temp;
    });
  };

  return (
    <Data.Provider
      value={{ cmdHistory, callCommand, expand, handleTerminalHeight }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
