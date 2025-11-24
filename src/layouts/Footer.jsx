import { Button } from "@/components/ui/button";
import ArrowUp from "lucide-react/icons/arrow-up";
import { links } from "@/data/navigation";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Currently in Camarines Norte, Philippines
          </p>
          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            Open to remote-friendly frontend roles.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Let’s build fast, accessible interfaces together.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <a
                href="mailto:vegaronel07@gmail.com"
                aria-label="Send Ronel an email"
              >
                Say hello
              </a>
            </Button>
            <Button variant="outline" onClick={scrollToTop}>
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>

        <div className="flex gap-3">
          {links.map(({ href, icon: Icon, label }) => (
            <Button key={`footer-${label}`} variant="ghost" size="icon" asChild>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} profile`}
              >
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Ronel Vega.
      </p>
    </footer>
  );
}

export default Footer;
