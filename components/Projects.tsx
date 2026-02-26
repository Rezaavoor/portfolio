import { css, useTheme } from "@emotion/react";
import ContentType from "../types/Content";
import Project from "./Project";

interface Props {
  projects: ContentType[];
}

export default function Projects({ projects }: Props) {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 28px;
        ${theme.mq[2]} {
          grid-template-columns: 1fr;
          max-width: 400px;
          margin: 0 auto;
          gap: 24px;
        }
      `}
    >
      {projects.map((p) => (
        <Project key={p.data.title} project={p} />
      ))}
    </div>
  );
}
