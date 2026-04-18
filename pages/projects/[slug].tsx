import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import ContentType from "../../types/Content";
import { getProjectBySlug, getAllSlugs } from "../../utils/getProjects";
import Logo from "../../components/Logo";

interface Props {
  project: ContentType;
}

export default function ProjectPage({ project }: Props) {
  const theme = useTheme();
  const { title, description, image, techStack, link, source } = project.data;

  return (
    <div
      css={css`
        max-width: 860px;
        margin: 0 auto;
        padding: 20px 40px 80px;
        ${theme.mq[2]} {
          padding: 10px 20px 60px;
        }
      `}
    >
      <Link
        href="/#projects"
        css={css`
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: ${theme.colors.text};
          opacity: 0.7;
          margin-bottom: 28px;
          transition: opacity 0.2s;
          &:hover {
            opacity: 1;
          }
        `}
      >
        &larr; Back to projects
      </Link>

      <div
        css={css`
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 10px;
          overflow: hidden;
          background: ${theme.colors.cardBackground};
        `}
      >
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 860px"
          style={{ objectFit: "cover" }}
          alt={`Screenshot of ${title}`}
          priority
        />
      </div>

      <div
        css={css`
          margin-top: 32px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
          `}
        >
          <h1
            css={css`
              font-size: 2rem;
              margin: 0;
              ${theme.mq[2]} {
                font-size: 1.5rem;
              }
            `}
          >
            {title}
          </h1>
          <div
            css={css`
              display: flex;
              gap: 10px;
              align-items: center;
            `}
          >
            <Logo size={22} name="github" link={source} />
            <Logo size={22} name="website" link={link} />
          </div>
        </div>

        <p
          css={css`
            font-size: 1rem;
            color: ${theme.colors.lightText};
            font-weight: ${theme.fontWeight.regular};
            margin: 12px 0 8px;
            ${theme.mq[2]} {
              font-size: 0.9rem;
            }
          `}
        >
          {description}
        </p>

        <p
          css={css`
            font-size: 0.9rem;
            line-height: 1.8;
            margin: 8px 0 32px;
            ${theme.mq[2]} {
              font-size: 0.85rem;
            }
          `}
        >
          {project.content}
        </p>

        <div>
          <h4
            css={css`
              margin: 0 0 10px;
              font-size: 0.9rem;
              color: ${theme.colors.lightText};
            `}
          >
            Tech stack
          </h4>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            `}
          >
            {techStack.split(" - ").map((stack) => (
              <span
                key={stack}
                css={css`
                  display: inline-block;
                  padding: 4px 12px;
                  border-radius: 4px;
                  font-size: 0.8rem;
                  font-weight: ${theme.fontWeight.regular};
                  border: 1px solid ${theme.colors.border};
                  color: ${theme.colors.text};
                `}
              >
                {stack.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = getProjectBySlug(params!.slug as string);
  return { props: { project } };
};
