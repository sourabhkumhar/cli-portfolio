import Router from "next/router";
import { createContext, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [expand, setExpand] = useState(250);
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

    executeCommand(cmd);
  };

  const executeCommand = (cmd) => {
    if (cmd === "initialize getting data") {
      Router.push("/sourabhkumhar");
      return;
    }
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
