import Router from "next/router";
import { createContext, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [expand, setExpand] = useState(true);
  const [output, setOutput] = useState("");

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
    if (cmd === "init profile") {
      Router.push("/portfolio");
      setOutput("");
      return;
    }
    if (cmd === "reset") {
      Router.push("/");
      setOutput("");
      return;
    }
    if (cmd === "reload") {
      Router.reload();
      return;
    }
    if (cmd === "cls" || cmd === "clear") {
      setCmdHistory([]);
      return;
    }

    Router.asPath === "/portfolio" && setOutput(cmd);
  };

  return (
    <Data.Provider
      value={{ cmdHistory, callCommand, expand, handleTerminalHeight, output }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
