import { BlogPosts } from "app/components/posts";
import homeData from "./data/home.json";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {homeData.intro.title}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        {homeData.intro.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
