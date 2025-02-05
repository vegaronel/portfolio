import React from "react";
import { skillIcons } from "../helper/Skills";

function Skills() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-base">Skills</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {skillIcons.map((item, index) => (
          <div key={index} className="flex  gap-2 items-center rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer duration-75 px-3 py-1 transition-all">
            <div className="w-[50px] h-[50px] ">{item.icon}</div>
            <small className="">{item.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
