import { Anonymous_Pro } from "next/font/google";
import Navbar from "./Navbar";
import Terminal from "./Terminal";
import DataProvider from "@/sources/context/DataProvider";
import Footer from "./Footer";
import Router, { useRouter } from "next/router";

const font = Anonymous_Pro({ subsets: ["latin"], weight: ["700"] });

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <DataProvider>
      <div style={font.style} className="">
        {router.asPath !== "/cmds" && <Navbar />}
        <div className="p-5 overflow-x-auto">{children}</div>
        {router.asPath !== "/cmds" && <Terminal />}

        {router.asPath !== "/cmds" && <Footer />}
      </div>
    </DataProvider>
  );
};

export default Layout;
