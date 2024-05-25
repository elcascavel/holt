import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm Simão 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a web developer. My last working job was at Imaginary Cloud where I contributed to various internal projects with a focus on frontend development. Previously, I interned as a UX/UI designer at EDP, creating wireframes and final product designs, and as a backend developer at Xplora, developing API endpoints. I hold a BSc in Communication & Multimedia from Universidade de Trás-os-Montes e Alto Douro. I'm currently looking for new opportunities.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
