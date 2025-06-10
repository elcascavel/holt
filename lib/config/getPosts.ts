import { metadata as helloWorldMetadata } from "@/app/blog/hello-world/metadata";

import type { BlogMetadata } from "../types/common";

export const posts = [
  {
    ...helloWorldMetadata,
  },
].filter((p) => p.published) as (BlogMetadata & { slug: string })[];
