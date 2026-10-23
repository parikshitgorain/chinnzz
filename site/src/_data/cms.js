import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
// site/src/_data -> repo root is ../../../
const root = join(here, "..", "..", "..");
const contentDir = join(root, "content");

function loadJson(rel) {
  return JSON.parse(readFileSync(join(contentDir, rel), "utf8"));
}

const site = loadJson("site.json");
const sections = {};
for (const file of readdirSync(join(contentDir, "sections"))) {
  if (file.endsWith(".json")) {
    sections[file.replace(/\.json$/, "")] = loadJson(join("sections", file));
  }
}

export default { site, sections };
