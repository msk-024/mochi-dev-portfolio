import { appProjects } from "./apps";
import { websiteProjects } from "./websites";

export const projects = [...appProjects, ...websiteProjects] as const;