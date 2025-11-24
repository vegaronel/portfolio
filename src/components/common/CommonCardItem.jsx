import React from "react";

function CommonCardItem(props) {
  return (
    <>
      <div bis_skin_checked="1" style="opacity: 1; transform: none;">
        <div
          class="project-item mt-4"
          id="projects"
          bis_skin_checked="1"
          style="opacity: 1; transform: none;"
        >
          <div
            class="rounded-xl border text-card-foreground w-full bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 duration-400 hover:bg-slate-200 cursor-pointer transition-all dark:shadow-[0_0_8px_rgba(8,_112,_184,_0.7)] dark:hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.7)] shadow-[0_0_8px_#4a5568] hover:shadow-[0_0_15px_#a0aec0]"
            bis_skin_checked="1"
          >
            <div class="flex flex-col space-y-1.5 p-6" bis_skin_checked="1">
              <div class="flex justify-between" bis_skin_checked="1">
                <div
                  class="tracking-tight text-2xl font-bold"
                  bis_skin_checked="1"
                >
                  Tell No One{" "}
                </div>
                <span class="text-sm font-light"></span>
              </div>
              <div class="text-sm text-muted-foreground" bis_skin_checked="1">
                A random messaging web app where users can share their link to
                receive anonymous messages. It ensures complete anonymity for
                the sender.
              </div>
            </div>
            <div class="p-6 pt-0" bis_skin_checked="1">
              <div class="flex flex-wrap gap-2" bis_skin_checked="1">
                <div
                  class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  bis_skin_checked="1"
                >
                  Node.js
                </div>
                <div
                  class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  bis_skin_checked="1"
                >
                  Express
                </div>
                <div
                  class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  bis_skin_checked="1"
                >
                  Bootstrap
                </div>
                <div
                  class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  bis_skin_checked="1"
                >
                  EJS
                </div>
                <div
                  class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  bis_skin_checked="1"
                >
                  Postgres
                </div>
              </div>
            </div>
            <div
              class="items-center p-6 pt-0 flex justify-between"
              bis_skin_checked="1"
            >
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-github mr-2 h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub
              </button>
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-external-link mr-2 h-4 w-4"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default CommonCardItem;
