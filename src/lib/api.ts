import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getBioLinkContent() {
  const fullPath = join(process.cwd(), "/src/biolink.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return { data };
}
