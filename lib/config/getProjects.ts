import { metadata as necmMetadata } from "@/app/projects/all/necm/page.mdx";
import { metadata as gtaBbMetadata } from "@/app/projects/all/gta-bb/page.mdx";
import { metadata as vendettaMetadata } from "@/app/projects/all/vendetta/page.mdx";
import type { ProjectMetadata } from "../types/common";

export const projects = [
  {
    ...necmMetadata,
    slug: `all/${necmMetadata.slug}`,
  },
  {
    ...gtaBbMetadata,
    slug: `all/${gtaBbMetadata.slug}`,
  },
  {
    ...vendettaMetadata,
    slug: `all/${vendettaMetadata.slug}`,
  },
].filter((p) => p.published) as (ProjectMetadata & { slug: string })[];
