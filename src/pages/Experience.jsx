import ExperienceList from "@/components/ExperienceList";
import ReusableMotion from "@/components/ReusableMotion";
export default function Experience() {
  return (
    <ReusableMotion>
      <section className="" id="experience">
        <h2 className="text-base">Work Experience</h2>
        <div className="space-y-6 mt-3">
          <ExperienceList />
        </div>
      </section>
    </ReusableMotion>
  );
}
