import ContentType from "../types/Content";
import Project from "./Project";

interface Props {
  projects: ContentType[];
}

export default function Projects({ projects }: Props) {
  return (
    <div>
      {projects.map((p) => (
        <Project key={p.data.title} project={p} />
      ))}
    </div>
  );
}
