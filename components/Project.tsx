import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import ContentType from "../types/Content";

interface Props {
  project: ContentType;
}

export default function Project({ project }: Props) {
  const theme = useTheme();
  const { title, description, image, slug } = project.data;

  return (
    <Link
      href={`/projects/${slug}`}
      css={css`
        display: block;
        background-color: ${theme.colors.cardBackground};
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
        }
        &:hover img {
          transform: scale(1.03);
        }
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        `}
      >
        <Image
          src={image}
          fill
          sizes="(max-width: 576px) 85vw, (max-width: 768px) 80vw, (max-width: 1050px) 45vw, 400px"
          style={{
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          alt={`Screenshot of ${title}`}
        />
      </div>
      <div
        css={css`
          padding: 16px 20px 20px;
        `}
      >
        <h3
          css={css`
            margin: 0 0 6px;
            font-size: 1rem;
            font-weight: ${theme.fontWeight.bold};
            color: ${theme.colors.lightText};
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            margin: 0;
            font-size: 0.8rem;
            line-height: 1.5;
            color: ${theme.colors.text};
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          `}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
