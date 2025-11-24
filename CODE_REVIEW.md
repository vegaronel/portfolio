## Architecture

- **Component structure:** Almost every page directly instantiates feature sections (`About`, `Skills`, `Projects`, `Experience`) inside `App.jsx`. There is no routing or lazy loading despite wrapping the tree in `BrowserRouter`. Extract a `MainContent` layout or use route-based code splitting for each page (`React.lazy` + `<Suspense>`) to improve reusability and future navigation scalability.
- **State management:** Theme state lives both in `ThemeContext` and duplicated `useEffect` logic inside `Sidebar`. Consolidate theme toggling inside the context provider and expose a `toggleTheme` helper so that consumers don't manually mutate DOM/localStorage.
- **File organization:** Helpers mix data, SVG JSX, and animation constants inside `src/helper`. Consider splitting into `data` (JSON/TS), `constants`, and `utils` directories for clarity, and colocate UI components with their domain (e.g., `components/projects/ProjectCard.jsx`) to scale.

## Performance

- **Bundle size:**  Shadcn/Radix UI set plus Lucide icons brings a large baseline bundle. Tree-shake by exporting only needed primitives and import icons via `lucide-react/icons/{name}` instead of the main entry to avoid shipping the full icon pack.
- **Rendering inefficiencies:** `Projects.jsx` wraps its list in `ReusableMotion`, and each `<ProjectList>` also mounts its own `motion.div`, duplicating animation logic. Lift the `motion` wrapper into one place and memoize `ProjectList` to prevent repeated re-renders when parent state changes.
- **Asset loading:** Social avatars in `Sidebar` call `<AvatarImage src={<item.img />} />`, which renders React nodes instead of URLs, resulting in broken network requests and wasted renders. Use actual image URLs or icon components inlined without `AvatarImage`.

## Code Quality

- **Duplication:** `ProjectList` and `CommonCardItem` share almost identical markup. Consolidate into a single `ProjectCard` that accepts props for title/status/links, and reuse for both static cards and dynamic list items.

```6:68:src/components/ProjectList.jsx
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => window.open(project.github, "_blank")}
```

- **Console noise:** `console.log(project);` ships to prod. Remove logging or wrap behind environment guards.
- **Error handling:** External links use `window.open` without verifying URL existence. Add optional chaining or disable buttons when `project.github`/`project.liveDemo` is missing to avoid runtime errors.
- **Accessibility:** Buttons that only open new tabs should be `<a>` with `rel="noreferrer noopener"` so screen readers announce them correctly.

## Refactoring Suggestions

1. **Centralize theme toggling**
   ```jsx
   // ThemeContext.jsx
   export const ThemeContext = createContext({ darkMode: false, toggleTheme: () => {} });
   const toggleTheme = () => setDarkMode(prev => !prev);
   <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
   ```
   ```jsx
   // Sidebar.jsx
   const { darkMode, toggleTheme } = useContext(ThemeContext);
   <Switch checked={darkMode} onCheckedChange={toggleTheme} />
   ```

2. **Project card reuse**
   ```jsx
   function ProjectCard({ title, description, tech, status, links }) {
     return (
       <Card className="...">
         <CardHeader>
           <div className="flex justify-between">
             <CardTitle>{title}</CardTitle>
             {status && <span>{status}</span>}
           </div>
           <CardDescription>{description}</CardDescription>
         </CardHeader>
         {!!tech?.length && (
           <CardContent>
             <div className="flex flex-wrap gap-2">
               {tech.map(t => <Badge key={t}>{t}</Badge>)}
             </div>
           </CardContent>
         )}
         <CardFooter className="flex gap-2">
           {links?.github && <Button asChild><a href={links.github} target="_blank" rel="noreferrer noopener">GitHub</a></Button>}
           {links?.live && <Button asChild><a href={links.live} target="_blank" rel="noreferrer noopener">Live Demo</a></Button>}
         </CardFooter>
       </Card>
     );
   }
   ```
   Use this in `Projects.jsx` and remove `CommonCardItem`.

3. **Leverage data-driven sections**
   Store `About`, `Skills`, and `Experience` copy in JSON or CMS and map over it. This reduces hard-coded text blocks and enables future translations.

4. **Lazy load heavy sections**
   ```jsx
   const About = lazy(() => import("./pages/About"));
   const Skills = lazy(() => import("./pages/Skills"));
   // ...
   <Suspense fallback={<SectionSkeleton />}>
     <About />
   </Suspense>
   ```
   Combine with `React.memo` on lists (`ExperienceList`, `SkillIconsList`) to avoid unnecessary re-renders when theme toggles.

5. **Optimize icons/assets**
   Replace inline SVG strings in `helper/Skills.jsx` with imports or a boring vector sprite to avoid embedding large strings in JS. Use `import { ReactComponent as JSIcon } from "@/assets/icons/js.svg";`.


