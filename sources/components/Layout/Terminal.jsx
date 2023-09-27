import { IoClose } from "react-icons/io5";
import TerminalInput, { PastCmd } from "./TerminalInput";
import { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Data } from "@/sources/context/DataProvider";

const Terminal = () => {
  const { cmdHistory, handleTerminalHeight, expand } = useContext(Data);

  return (
    <div
      className="fixed w-full bottom-0 bg-[#222222] z-50 border-0 border-t-2 border-neutral-700 p-1.5 select-none overflow-hidden"
      style={{ height: expand ? 250 : 37 }}
    >
      <div className="flex justify-between">
        <div className="bg-neutral-600 rounded-md px-1 text-sm cursor-pointer hover:bg-neutral-700 duration-300">
          cmd list
        </div>
        <div onClick={handleTerminalHeight}>
          {expand ? (
            <IoClose size={22} color="white" cursor="pointer" />
          ) : (
            <IoIosArrowUp size={22} color="white" cursor="pointer" />
          )}
        </div>
      </div>

      <div className="px-2 mt-3 text-neutral-400 flex flex-col gap-1">
        <div className="max-h-[130px] overflow-x-hidden overflow-scroll">
          {cmdHistory.map((elem, i) => {
            return <PastCmd key={i} cmd={elem} />;
          })}
        </div>
        <TerminalInput />
      </div>
    </div>
  );
};

export default Terminal;
