import Router from "next/router";
import { createContext, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [cmdHistory, setCmdHistory] = useState([]);
  const [expand, setExpand] = useState(true);
  const [output, setOutput] = useState("");

  const handleTerminalHeight = (val) => {
    setExpand((prev) => {
      return val === undefined ? !prev : val;
    });
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
    if (cmd === "redirect --gui") {
      Router.push("https://sourabhportfolio.vercel.app");
      return;
    }
    if (cmd === "minimize") {
      handleTerminalHeight(false);
      return;
    }
    if (cmd === "reload") {
      Router.reload();
      return;
    }
    if (cmd === "open cmd list") {
      window.open("/cmds", "_blank");
      return;
    }
    if (cmd === "cls" || cmd === "clear") {
      setCmdHistory([]);
      return;
    }
    if (cmd === "contact --whatsapp") {
      window.open("https://wa.me/918560842664", "_blank");
      return;
    }
    if (cmd === "contact --mail") {
      window.open("mailto:mr.sourabhkumhar@gmail.com", "_blank");
      return;
    }
    if (cmd === "visit --linkedin") {
      window.open("https://linkedin.com/in/sourabhkumhar", "_blank");
      return;
    }
    if (cmd === "visit --github") {
      window.open("https://github.com/sourabhkumhar", "_blank");
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
