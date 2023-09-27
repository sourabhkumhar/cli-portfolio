import { Anonymous_Pro } from "next/font/google";
import Navbar from "./Navbar";
import Terminal from "./Terminal";
import DataProvider from "@/sources/context/DataProvider";
import Footer from "./Footer";

const font = Anonymous_Pro({ subsets: ["latin"], weight: ["700"] });

const Layout = ({ children }) => {
  return (
    <DataProvider>
      <div style={font.style} className="">
        <Navbar />
        <div className="p-5 overflow-x-auto">{children}</div>
        <Terminal />

        <Footer />
      </div>
    </DataProvider>
  );
};

export default Layout;
