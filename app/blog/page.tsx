import React from "react";
import { posts } from "@/lib/config/getPosts";
import { IconNews } from "@tabler/icons-react";
import SectionTitle from "@/components/ui/section-title";
import BlogPostCard from "@/components/ui/blog-card";

export default async function Page() {
  return (
    <div className="p-5">
      <SectionTitle icon={IconNews}>Posts</SectionTitle>
      {posts.length > 0 && (
        <>
          <div className="my-8">
            <BlogPostCard key={posts[0].slug} blog={posts[0]} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <BlogPostCard key={post.slug} blog={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
