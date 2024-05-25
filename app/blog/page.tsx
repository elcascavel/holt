import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      <BlogPosts />
    </section>
  );
}
