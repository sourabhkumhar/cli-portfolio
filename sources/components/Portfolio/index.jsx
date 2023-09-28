import { Data } from "@/sources/context/DataProvider";
import React, { useContext } from "react";
import InitialScreen from "./InitialScreen";
import BasicInfo from "./BasicInfo";
import CommandBox from "../UI/CommandBox";
import Error from "./Error";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";

const Portfolio = () => {
  const { output } = useContext(Data);

  if (!output) {
    return <InitialScreen />;
  }

  switch (output) {
    case "get basic info":
      return <BasicInfo />;
    case "list projects":
      return <Projects />;
    case "list projects --description":
      return <Projects showDescription />;
    case "retrieve skills": 
      return <Skills />;
    case "retrieve experience":
      return <Experience />;
    default:
      return <Error message="Invalid command!" />;
  }
};

export default Portfolio;
