import { experiences } from "@/sources/values";
import React from "react";
import ExecuteLine from "../UI/ExecuteLine";

const Experience = () => {
  return (
    <>
      <div>My Experiences:</div>
      {experiences.map((elem, ind) => {
        return (
          <ExecuteLine delay={ind} key={ind} className="mt-3 text-[#e5e5e5]">
            <span className="text-[#62f5ab]">Experience {ind}:</span>
            <div className="ml-8">
              <div>
                <span className="text-[#c08efd]">Designation: </span>
                {elem.designation}
              </div>
              <div>
                <span className="text-[#c08efd]">Company Name: </span>
                {elem.company_name}
              </div>
              <div>
                <span className="text-[#c08efd]">Duration: </span>
                {elem.date}
              </div>
              <div>
                <span className="text-[#c08efd]">What I do here: </span>
                <div>
                  {elem.points.map((e, i) => (
                    <ExecuteLine delay={i * 0.1} key={i} className="ml-9">
                      <span>- </span>
                      {e}
                    </ExecuteLine>
                  ))}
                </div>
              </div>
            </div>
          </ExecuteLine>
        );
      })}
    </>
  );
};

export default Experience;
