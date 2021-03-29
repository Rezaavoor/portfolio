import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import ContentType from "../types/Content";
import Logo from "../components/Logo";

interface Props {
  project: ContentType;
}

export default function Project({
  project: {
    data: { description, image, title, techStack, link, source },
    content,
  },
}: Props) {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        width: 80%;
        min-height: 200px;
        background-color: ${theme.colors.cardBackground};
        border-radius: 10px;
        margin: 50px auto;
        overflow: hidden;
        ${theme.mq[1]} {
          //900
        }
      `}
    >
      <div
        css={css`
          flex-basis: 50%;
          padding: 40px;
          position: relative;
        `}
      >
        <h2>
          {title}
          <a
            href={source}
            css={css`
              margin: 2px;
            `}
          >
            🔗
          </a>
        </h2>
        <h4>{description}</h4>
        <p>{content}</p>
        <h3>Tech stack:</h3>
        {techStack.split(" - ").map((stack) => (
          <p key={stack}> - {stack}</p>
        ))}
      </div>
      <div
        css={css`
          flex-basis: 50%;
          position: relative;
        `}
      >
        <a href={link}>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
          />
        </a>
      </div>
    </div>
  );
}
