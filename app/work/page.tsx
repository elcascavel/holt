import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work experience.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Below is a summary of my work experience. I'm currently looking for
          new opportunities.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Imaginary Cloud
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Web Developer, September 2023 - March 2024
        </p>
        <p>
          My first step in the tech industry was with{" "}
          <a href="https://www.imaginarycloud.com/">Imaginary Cloud</a> where I
          contributed to various internal projects with a focus on frontend
          development. I worked with Next.js, Bootstrap and vanilla HTML/CSS.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">EDP</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          UX/UI Designer, March 2023 - July 2023 (Internship)
        </p>
        <p>
          I interned at <a href="https://www.edp.com/">EDP</a> where I created
          wireframes and final product designs. I worked with Figma.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Xplora</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Backend Developer, July 2022 - September 2022 (Internship)
        </p>
        <p>
          I interned at <a href="https://www.xplora.pt/">Xplora</a> where I
          developed API endpoints. I worked with Laravel.
        </p>
      </div>
    </section>
  );
}
