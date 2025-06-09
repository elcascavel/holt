import { metadata as necmMetadata } from "@/app/projects/all/necm/metadata";
import { metadata as gtaBbMetadata } from "@/app/projects/all/gta-bb/metadata";
import { metadata as vendettaMetadata } from "@/app/projects/all/vendetta/metadata";

import type { ProjectMetadata } from "../types/common";

export const projects = [
  {
    ...gtaBbMetadata,
    slug: `all/${gtaBbMetadata.slug}`,
  },
  {
    ...vendettaMetadata,
    slug: `all/${vendettaMetadata.slug}`,
  },
  {
    ...necmMetadata,
    slug: `all/${necmMetadata.slug}`,
  },
].filter((p) => p.published) as (ProjectMetadata & { slug: string })[];

export const featuredProjects = projects.filter(
  (p) => p.featured
) as (ProjectMetadata & { slug: string })[];
