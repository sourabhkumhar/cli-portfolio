import { skills } from "@/sources/values";
import React from "react";
import ExecuteLine from "../UI/ExecuteLine";

const SkillBox = ({ data, index }) => {
  return (
    <ExecuteLine
      delay={index * 0.5}
      className="flex items-center justify-center h-[100px] border border-dashed"
    >
      {data}
    </ExecuteLine>
  );
};

const Skills = () => {
  return (
    <div>
      <div>My Skills:</div>

      <div className="mt-3 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        {skills.map((elem, ind) => {
          return <SkillBox data={elem} index={ind} key={ind} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
