import CommandBox from "@/sources/components/UI/CommandBox";
import { profileCommands, accessCommand } from "@/sources/values";
import React, { Fragment } from "react";

const CmdCard = ({ data, index }) => {
  return (
    <Fragment key={index}>
      <CommandBox
        cmd={data.cmd}
        description={data.description}
        key={index}
        className="relative border-4 border-dotted border-[#757575] rounded-xl p-1 flex flex-col justify-between gap-2"
        element={
          <div className="absolute bg-black w-7 h-7 flex items-center justify-center rounded-full -top-2 -left-2 ">
            {index}
          </div>
        }
      />
    </Fragment>
  );
};

const Page = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        List of commands:
        <div onClick={() => window.close()} className="cursor-pointer">
          close
        </div>
      </div>

      <div className="mt-5 mb-1 text-[#468ee6]">Profile Commands:</div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {profileCommands.map((elem, ind) => {
          return <CmdCard key={ind} data={elem} index={ind} />;
        })}
      </div>

      <div className="h-[2px] bg-[#595959] mb-10 mt-12 rounded-full" />

      <div className="mt-5 mb-1 text-[#468ee6]">
        Website Controlling Commands:
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {accessCommand.map((elem, ind) => {
          return <CmdCard key={ind} data={elem} index={ind} />;
        })}
      </div>
    </>
  );
};

export default Page;
