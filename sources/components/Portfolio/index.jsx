import { Data } from "@/sources/context/DataProvider";
import React, { useContext } from "react";
import InitialScreen from "./InitialScreen";
import BasicInfo from "./BasicInfo";
import CommandBox from "../UI/CommandBox";
import Error from "./Error";
import Projects from "./Projects";

const Portfolio = () => {
  const { output } = useContext(Data);

  if (!output) {
    return <InitialScreen />;
  }

  switch (output) {
    case "get basic info":
      return <BasicInfo />;
    case "list projects link":
      return <Projects />;
    default:
      return <Error message="Invalid command!" />;
  }
};

export default Portfolio;
