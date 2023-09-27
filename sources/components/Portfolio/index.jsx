import { Data } from "@/sources/context/DataProvider";
import React, { useContext } from "react";
import InitialScreen from "./InitialScreen";
import BasicInfo from "./BasicInfo";
import CommandBox from "../UI/CommandBox";
import Error from "./Error";

const Portfolio = () => {
  const { output } = useContext(Data);

  if (!output) {
    return <InitialScreen />;
  }

  switch (output) {
    case "get basic info":
      return <BasicInfo />;
    case "list projects link":
      return <>List</>;
    default:
      return <Error message="Invalid command!" />;
  }
};

export default Portfolio;
