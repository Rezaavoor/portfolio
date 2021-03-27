import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import ContentType from "../types/Content";

interface Props {
  project: ContentType;
}

export default function Project({
  project: {
    data: { description, image, title, techStack },
    content,
  },
}: Props) {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        width: 80%;
        background-color: ${theme.colors.cardBackground};
        border-radius: 10px;
        height: 450px;
        margin: 50px auto;
      `}
    >
      <div
        css={css`
          padding: 40px;
        `}
      >
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>{content}</p>
        <h3>Tech stack:</h3>
        <p>{techStack}</p>
      </div>
      <div>
        <Image src={image} width="913px" height="942px" />
      </div>
    </div>
  );
}
