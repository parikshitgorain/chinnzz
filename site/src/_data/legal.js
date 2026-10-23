import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..", "..");
const legalDir = join(root, "content", "legal");
const md = new MarkdownIt({ html: false, linkify: true });

const pages = ["privacy", "terms", "responsible-gambling"];
const out = {};
for (const name of pages) {
  const { data, content } = matter(readFileSync(join(legalDir, `${name}.md`), "utf8"));
  out[name] = {
    title: data.title,
    description: data.description,
    lastUpdated: data.lastUpdated,
    html: md.render(content),
  };
}

export default out;
