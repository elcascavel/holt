import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A summary of projects I've worked on.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Below is a summary of public projects I've worked on.</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Communication and Multimedia's Student Group Website
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Skills: Project Management, Backend and Frontend Development
        </p>
        <p>
          I spearheaded the development of a new website for the student group
          as the head of the department. You can access it{" "}
          <a href="https://necm.utad.pt/">here</a>. I utilized Vue, Tailwind,
          and Laravel. Working alongside two contributors, I led by teaching
          them Git and GitHub, conducting regular check-ins to ensure the
          project stayed on track, and assigning tasks effectively.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Unfinished Pokémon Instagram Clone
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Skills: Next.js
        </p>
        <p>
          I started a project to clone Instagram using{" "}
          <a href="https://pokeapi.co/">PokéAPI</a>. I used Next.js to create
          the frontend and connected it to the API to fetch Pokémon data. I
          didn't finish the project, but you can see the demo{" "}
          <a href="https://poke-instagram.vercel.app/">here</a>.
        </p>
      </div>
    </section>
  );
}
