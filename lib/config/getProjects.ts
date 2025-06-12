import { metadata as necmMetadata } from "@/app/projects/all/necm/metadata";
import { metadata as gtaBbMetadata } from "@/app/projects/all/gta-bb/metadata";
import { metadata as vendettaMetadata } from "@/app/projects/all/vendetta/metadata";
import { metadata as altvRpMetadata } from "@/app/projects/all/altv-rp/metadata";
import { metadata as gtaApiMetadata } from "@/app/projects/all/gta-api/metadata";

import type { ProjectMetadata } from "../types/common";

export const projects = [
  {
    ...vendettaMetadata,
    slug: `all/${vendettaMetadata.slug}`,
  },
  {
    ...gtaBbMetadata,
    slug: `all/${gtaBbMetadata.slug}`,
  },
  {
    ...altvRpMetadata,
    slug: `all/${altvRpMetadata.slug}`,
  },
  {
    ...gtaApiMetadata,
    slug: `all/${gtaApiMetadata.slug}`,
  },
  {
    ...necmMetadata,
    slug: `all/${necmMetadata.slug}`,
  },
].filter((p) => p.published) as (ProjectMetadata & { slug: string })[];

export const featuredProjects = projects.filter(
  (p) => p.featured
) as (ProjectMetadata & { slug: string })[];
