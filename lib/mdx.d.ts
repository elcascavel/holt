import { ProjectMetadata } from "./types/common";

declare module "*.mdx" {
  import * as React from "react";
  export const metadata: ProjectMetadata;
  const MDXComponent: React.FC;
  export default MDXComponent;
}
