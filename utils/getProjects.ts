import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import ContentType from "../types/Content";

const postsDirectory = join(process.cwd(), "_projects");

function getProject(project: string) {
  const realProject = project.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realProject}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const {
    data: { title, description, image, techStack },
    content,
  } = matter(fileContents);
  return { data: { title, description, image, techStack }, content };
}

export default function getProjects() {
  const projects = fs.readdirSync(postsDirectory);
  const contents: ContentType[] = [];
  projects.map((project) => {
    contents.push(getProject(project));
  });
  return contents;
}
