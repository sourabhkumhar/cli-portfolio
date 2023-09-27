import { basicDetails } from "@/sources/values";
import React from "react";
import ExecuteLine from "../UI/ExecuteLine";
import { isURL } from "@/sources/functions";
import Router from "next/router";

const BasicInfo = () => {
  return (
    <div className="flex flex-col gap-1">
      {Object.entries(basicDetails).map(([key, value], ind) => {
        const urlValue = isURL(value);
        return (
          <ExecuteLine
            delay={ind * 0.5}
            key={key}
            className="grid grid-cols-[170px_auto]"
          >
            <span className="text-teal-500 max-w-[160px]">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>
            <span
              onClick={() => urlValue && Router.push(value)}
              className={`w-full ${
                urlValue && "hover:text-sky-500 cursor-pointer"
              }`}
            >
              {value}
            </span>
          </ExecuteLine>
        );
      })}
    </div>
  );
};

export default BasicInfo;
