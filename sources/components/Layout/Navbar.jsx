import { GrFormClose } from "react-icons/gr";
import { GoSquare } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";

const ActionButton = ({ color, icon, action }) => {
  return (
    <div
      className="w-4 h-4 rounded-full flex items-center justify-center text-black group cursor-pointer"
      style={{ background: color }}
    >
      <span className="group-hover:opacity-100 opacity-0 duration-300">
        {icon}
      </span>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-[#3C3C3C] flex items-center justify-between">
      <div className="flex items-center gap-1.5 p-1.5">
        <ActionButton color="#df5149" icon={<GrFormClose />} />
        <ActionButton color="#FDBC2E" icon={<GoSquare />} />
        <ActionButton color="#27C940" icon={<HiMinusSm />} />
      </div>

      <div>Sourabh Kumhar</div>

      <div></div>
    </div>
  );
};

export default Navbar;
