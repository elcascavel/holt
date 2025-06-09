import React from "react";
import ProjectCard from "../../components/ui/project-card";
import { projects } from "@/lib/config/getProjects";
import { IconTool } from "@tabler/icons-react";
import SectionTitle from "@/components/ui/section-title";

export default async function Page() {
  return (
    <main className="p-5">
      <SectionTitle icon={IconTool}>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
