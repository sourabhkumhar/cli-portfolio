import { Data } from "@/sources/context/DataProvider";
import { useContext } from "react";

const Footer = () => {
  const { expand } = useContext(Data);
  return <div style={{ height: expand ? 250 : 40 }}></div>;
};

export default Footer;
