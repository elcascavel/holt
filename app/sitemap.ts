import { promises as fs } from "node:fs";
import path from "node:path";

export const SITE_URL = "https://samaral.dev";

async function getProjectSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const projectsDirectory = path.join(process.cwd(), "app", "projects");
  const slugs = await getProjectSlugs(projectsDirectory);

  const projects = slugs.map((slug) => ({
    url: `${SITE_URL}/n/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/projects"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  console.log(projects);

  return [...routes, ...projects];
}
