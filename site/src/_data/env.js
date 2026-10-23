import { env } from "node:process";

const branch = env.CF_PAGES_BRANCH || "";
// Preview deployments are never indexed. Production (main) is indexed.
const robots = branch && branch !== "main" ? "noindex, nofollow" : "index, follow";

export default { branch, robots };
