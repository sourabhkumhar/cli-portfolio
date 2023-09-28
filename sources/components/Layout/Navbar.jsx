import { GrFormClose } from "react-icons/gr";
import { GoSquare } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";
import Router from "next/router";
import { useContext } from "react";
import { Data } from "@/sources/context/DataProvider";
import Link from "next/link";

const ActionButton = ({ color, icon, onClick }) => {
  return (
    <div
      className="w-4 h-4 rounded-full flex items-center justify-center text-black group cursor-pointer"
      style={{ background: color }}
      onClick={onClick}
    >
      <span className="group-hover:opacity-100 opacity-0 duration-300">
        {icon}
      </span>
    </div>
  );
};

const Navbar = () => {
  const { handleTerminalHeight } = useContext(Data);

  return (
    <div className="bg-[#3C3C3C] flex items-center justify-between">
      <div className="flex items-center gap-1.5 p-1.5">
        <ActionButton
          color="#df5149"
          icon={<GrFormClose />}
          onClick={() => Router.push("/")}
        />
        <ActionButton
          color="#FDBC2E"
          icon={<GoSquare />}
          onClick={() => handleTerminalHeight(true)}
        />
        <ActionButton
          color="#27C940"
          icon={<HiMinusSm />}
          onClick={() => handleTerminalHeight(false)}
        />
      </div>

      <div>Sourabh Kumhar</div>

      <Link
        href="https://sourabhportfolio.vercel.app"
        className="mr-2 px-1 py-0.5 bg-[#262626] hover:bg-black rounded-md text-sm duration-150"
      >
        GUI Portfolio
      </Link>
    </div>
  );
};

export default Navbar;
