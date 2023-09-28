import { projects } from "@/sources/values";
import React from "react";
import ExecuteLine from "../UI/ExecuteLine";
import Router from "next/router";
const curlyOpen = "{";
const curlyClose = "}";

const Projects = ({ showDescription }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>Prjects Array{showDescription && <> with Descriptions</>}:</div>[
      {projects.map((elem, ind) => {
        return (
          <>
            <ExecuteLine delay={ind * 0.5} key={ind} className="text-[#cbcbcb]">
              <span className="text-[#62aef4]">&#34;project_{ind}&#34;:</span>{" "}
              {curlyOpen} <br />
              &emsp;<span className="text-white">&#34;name&#34;: </span>
              <span className="text-[#ffad8d]">&#34;{elem.name}&#34;</span>,
              <br />
              &emsp;
              <span className="text-white">&#34;tech_stack&#34;: </span>
              <span className="text-[#ffad8d]">
                [&#34;{elem.tags.join(`", "`)}&#34;]
              </span>
              ,
              <br />
              &emsp;<span className="text-white">&#34;deploy_link&#34;: </span>
              <span className="text-[#ffad8d] cursor-pointer hover:text-[#3e85c8]">
                &#34;{elem.link}&#34;
              </span>
              ,
              <br />
              &emsp;<span className="text-white">&#34;github_link&#34;: </span>
              <span
                onClick={() =>
                  elem.github && window.open(elem.github, "_blank")
                }
                className={`text-[#ffad8d] ${
                  elem.github && "cursor-pointer hover:text-[#3e85c8]"
                }`}
              >
                &#34;{elem.github}&#34;
              </span>
              ,
              {showDescription && (
                <>
                  <br />
                  &emsp;
                  <span className="text-white">&#34;description&#34;: </span>
                  <span className="text-[#ffad8d]">
                    &#34;{elem.description}&#34;
                  </span>
                  ,
                </>
              )}
              <br />
              {curlyClose},
            </ExecuteLine>
          </>
        );
      })}
      ]
    </div>
  );
};

export default Projects;
