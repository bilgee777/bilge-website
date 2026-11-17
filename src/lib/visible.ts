import { projects } from "@/content/projects";
import { showTodos } from "@/content/todo";
import { training } from "@/content/education";

/** Projects that may be rendered: drafts only appear in development / preview. */
export const visibleProjects = () => projects.filter((p) => p.visibility === "public" || showTodos);
export const findProject = (slug: string) => visibleProjects().find((p) => p.slug === slug);

/** Unverified training entries are hidden in production. */
export const visibleTraining = () => training.filter((t) => t.verified || showTodos);
