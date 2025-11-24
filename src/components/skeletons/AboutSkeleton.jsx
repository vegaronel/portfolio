const SkeletonBlock = ({ className }) => (
  <div className={`rounded bg-slate-200 dark:bg-slate-800 animate-pulse ${className || ""}`} />
);

function AboutSkeleton() {
  return (
    <section id="about" className="space-y-6 md:py-12">
      <div className="space-y-3">
        <SkeletonBlock className="h-4 w-20" />
        <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="order-2 lg:order-1 space-y-4 flex-1">
            <SkeletonBlock className="h-10 w-3/4 rounded-2xl" />
            <SkeletonBlock className="h-4 w-full" />
            <SkeletonBlock className="h-4 w-11/12" />
            <SkeletonBlock className="h-4 w-10/12" />
          </div>
          <div className="order-1 lg:order-2">
            <SkeletonBlock className="h-[250px] w-[250px] rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={`about-fact-${item}`}
            className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-4"
          >
            <SkeletonBlock className="h-3 w-20" />
            <SkeletonBlock className="mt-3 h-6 w-24" />
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/60 p-6 space-y-3">
        {[1, 2, 3].map((item) => (
          <SkeletonBlock key={`about-value-${item}`} className="h-4 w-full" />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <SkeletonBlock className="h-10 w-40 rounded-full" />
        <SkeletonBlock className="h-10 w-40 rounded-full" />
      </div>
    </section>
  );
}

export default AboutSkeleton;
