import React from "react";

function SkillIconsList(props) {
  return (
    <div>
      <div
        key={props.id}
        className="flex  gap-2 items-center rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer duration-75 px-3 py-1 transition-all"
      >
        <div className="w-[50px] h-[50px] ">{props.icon}</div>
        <small className="">{props.name}</small>
      </div>
    </div>
  );
}

export default SkillIconsList;
