import type { BlogMetadata } from "@/lib/types/common";
import Link from "next/link";
import { IconPhoto } from "@tabler/icons-react";

export default function BlogCard({ blog }: { blog: BlogMetadata }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="border border-drac-nosferatu-700 bg-drac-nosferatu-800 hover:border-drac-marcelin-400 focus-visible:border-drac-marcelin-400 group block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none"
    >
      {blog.image ? (
        <div className="overflow-hidden">
          <img
            src={blog.image?.url}
            alt={blog.image?.alt}
            className="aspect-video w-full"
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-drac-nosferatu-700 flex items-center justify-center text-drac-aro-50">
          <IconPhoto
            className="h-12 w-12 text-drac-aro-400"
            aria-label="No image available"
          />
        </div>
      )}

      <div className="space-y-3 p-5">
        <h3 className="flex justify-between items-center text-drac-aro-50 group-hover:text-drac-marcelin-400 text-xl font-semibold transition-colors">
          {blog.title}
          <span className="text-drac-aro-200 text-sm hidden md:block">
            {blog.date}
          </span>
        </h3>
        <p className="text-drac-aro-50 line-clamp-2 text-sm">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
