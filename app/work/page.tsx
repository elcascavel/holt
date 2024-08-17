import type { Metadata } from "next";
import workData from "../data/work.json";

export const metadata: Metadata = {
  title: workData.metadata.title,
  description: workData.metadata.description,
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {workData.metadata.title.toLowerCase()}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>{workData.metadata.description}</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {workData.workExperience.map((job, index) => (
          <div key={index}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              <a href={job.link}>{job.company}</a>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {job.role}, {job.duration}
            </p>
            <p>{job.description}</p>
            {index < workData.workExperience.length - 1 && (
              <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
