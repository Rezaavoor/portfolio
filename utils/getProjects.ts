import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import ContentType from "../types/Content";

const postsDirectory = join(process.cwd(), "_projects");

function getProject(filename: string): ContentType {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, description, image, techStack, link, source },
    content,
  } = matter(fileContents);
  return {
    data: { title, description, image, techStack, link, source, slug },
    content,
  };
}

export default function getProjects(): ContentType[] {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => getProject(file));
}

export function getProjectBySlug(slug: string): ContentType {
  return getProject(`${slug}.md`);
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => file.replace(/\.md$/, ""));
}
