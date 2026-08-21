import { rm } from "node:fs/promises";

await Promise.all([
  rm("build/client/blog/__empty", { recursive: true, force: true }),
  rm("build/client/blog/__empty.data", { force: true }),
]);
