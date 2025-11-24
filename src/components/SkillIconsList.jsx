import { memo } from "react";

function SkillIconsList(props) {
  return (
    <div
      className="flex gap-2 items-center rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer duration-75 px-3 py-1 transition-all"
    >
      <div className="w-[50px] h-[50px]">{props.icon}</div>
      <small>{props.name}</small>
    </div>
  );
}

export default memo(SkillIconsList);
