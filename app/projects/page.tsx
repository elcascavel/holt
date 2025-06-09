import React from "react";
import ProjectCard from "../../components/ui/project-card";
import { projects } from "@/lib/config/getProjects";
import { IconTool } from "@tabler/icons-react";

export default async function Page() {
  return (
    <main className="p-5">
      <h1 className="mb-8 flex items-center gap-3 text-3xl font-bold">
        <IconTool size={32} className="text-drac-marcelin-400 mr-2" />
        <span>Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
