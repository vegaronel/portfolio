import ReusableMotion from "@/components/ReusableMotion";
import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/SpotlightCard";

function About() {
  const quickFacts = [
    { label: "Projects Shipped", value: "3+" },
    { label: "Focus", value: "React · Node · Postgres" },
    { label: "Availability", value: "Open to remote roles" },
  ];

  const values = [
    "Design-first mindset rooted in accessibility.",
    "Motion adds clarity, not distraction.",
    "Iterate fast, measure, and polish.",
  ];

  return (
    <ReusableMotion>
      <section id="about" className="space-y-6 md:py-12">
        <div className="space-y-3">
          <h2 className="text-base">About</h2>

          <div className="relative">
            <div className="float-right md:float-none lg:float-right md:ml-0 lg:ml-8 mb-8">
              <TiltedCard
                imageSrc="/assets/profile.jpg"
                altText="Ronel Vega"
                captionText="Ronel Vega"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Hey, I'm Ronel Vega — a developer who obsesses over the details
                that make interfaces feel alive.
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                I help teams launch clean, fast, accessible experiences using
                React and modern tooling. Whether it's building an anonymous
                messaging platform or wiring up AI-powered job tracking
                dashboards, I love translating ambiguous ideas into
                production-ready products.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Outside of code, you'll find me jogging to reset and reading
                about interaction design—anything that sharpens focus. That
                balance keeps me energized to deliver thoughtful, pixel-perfect
                work.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {quickFacts.map((fact) => (
            <SpotlightCard
              key={fact.label}
              className="custom-spotlight-card bg-white dark:bg-slate-950 shadow-sm"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {fact.label}
              </p>
              <p className="text-xl font-semibold text-slate-900 dark:text-white">
                {fact.value}
              </p>
            </SpotlightCard>
          ))}
        </div>

        <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/60 p-6 space-y-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            How I approach product work
          </p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-slate-300" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="mailto:ronelvega31@gmail.com">Let’s collaborate</a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download resume
            </a>
          </Button>
        </div>
      </section>
    </ReusableMotion>
  );
}
export default About;