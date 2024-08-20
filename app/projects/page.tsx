import projectsData from '../data/projects.json';
import { Metadata } from "next";
import Badge from '../components/badge';

export const metadata: Metadata = projectsData.metadata;

export default function ProjectsPage() {
  const { section } = projectsData.content;

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {section.header}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{section.description}</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {section.projects.map((project, index) => (
          <div key={index}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              <a href={project.link}>{project.title}</a>
            </h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.skills.map((skill, i) => (
                <Badge
                  key={i}
                  text={skill}
                />
              ))}
            </div>
            <p>{project.details}</p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          </div>
        ))}
      </div>
    </section>
  );
}
