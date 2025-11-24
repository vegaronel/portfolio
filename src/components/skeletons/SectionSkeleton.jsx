const SectionSkeleton = ({ label }) => (
  <div
    role="status"
    aria-live="polite"
    className="h-32 w-full rounded-2xl bg-slate-100 dark:bg-slate-900 animate-pulse"
  >
    <span className="sr-only">{`Loading ${label} section`}</span>
  </div>
);

export default SectionSkeleton;
