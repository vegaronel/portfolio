import { skillIcons } from "@/data/skills";
import ReusableMotion from "@/components/ReusableMotion";
import SkillIconsList from "@/components/SkillIconsList";

function Skills() {
  return (
    <ReusableMotion>
      <div className="w-full space-y-4">
        <h2 className="text-base">Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {skillIcons.map((item, index) => (
            <SkillIconsList key={index} icon={item.icon} name={item.name} id={index} />
          ))}
        </div>
      </div>
    </ReusableMotion>
  );
}

export default Skills;
