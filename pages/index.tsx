import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import Logo from "../components/Logo";
import getProjects from "../utils/getProjects";
import ContentType from "../types/Content";
import Projects from "../components/Projects";

interface Props {
  projects: ContentType[];
}

export default function Home({ projects }: Props) {
  const theme = useTheme();
  return (
    <div>
      {/* Social sidebar — fixed, only on homepage */}
      <div
        css={css`
          position: fixed;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          z-index: 50;
          ${theme.mq[1]} {
            left: 16px;
            gap: 14px;
          }
          ${theme.mq[2]} {
            display: none;
          }
        `}
      >
        <div
          css={css`
            width: 1px;
            height: 60px;
            background: ${theme.colors.text};
            opacity: 0.4;
          `}
        />
        <Logo size={22} name="email" />
        <Logo size={22} name="facebook" />
        <Logo size={22} name="linkedin" />
        <Logo size={22} name="instagram" />
        <Logo size={22} name="github" />
        <div
          css={css`
            width: 1px;
            height: 60px;
            background: ${theme.colors.text};
            opacity: 0.4;
          `}
        />
      </div>

      {/* Hero */}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
          padding: 0 100px;
          gap: 60px;
          ${theme.mq[1]} {
            padding: 0 60px;
            gap: 40px;
          }
          ${theme.mq[2]} {
            text-align: center;
            flex-direction: column-reverse;
            padding: 0 24px;
            gap: 24px;
            min-height: 70vh;
          }
          ${theme.mq[3]} {
            padding: 0 20px;
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            max-width: 540px;
          `}
        >
          <p
            css={css`
              font-size: 0.9rem;
              margin-bottom: 4px;
              ${theme.mq[2]} {
                font-size: 0.85rem;
              }
            `}
          >
            Hi there! I'm
          </p>
          <h1
            css={css`
              ${theme.mq[3]} {
                font-size: 1.8rem;
              }
            `}
          >
            Reza Hosseini
          </h1>
          <p
            css={css`
              margin-top: 36px;
              font-size: 0.95rem;
              font-weight: ${theme.fontWeight.regular};
              ${theme.mq[2]} {
                font-size: 0.85rem;
                margin-top: 24px;
              }
            `}
          >
            I'm a CS student at KTH from Sweden.
          </p>
          <p
            css={css`
              font-size: 0.85rem;
              max-width: 90%;
              ${theme.mq[2]} {
                max-width: 100%;
                font-size: 0.8rem;
              }
            `}
          >
            I build/design websites, apps and a lot more! If you're interested,
            don't hesitate to contact me :)
          </p>
          <a
            href="mailto:reza.avoor@gmail.com"
            css={css`
              display: inline-block;
              background-color: ${theme.colors.accent};
              border: none;
              color: #ffffff;
              padding: 10px 22px;
              text-decoration: none;
              font-weight: ${theme.fontWeight.bold};
              font-size: 0.8rem;
              letter-spacing: 0.3px;
              border-radius: 6px;
              margin-top: 16px;
              cursor: pointer;
              transition: background-color 0.2s ease, transform 0.2s ease;
              &:hover {
                background-color: ${theme.colors.accentHover};
                transform: translateY(-1px);
              }
              &:active {
                transform: translateY(0);
              }
            `}
          >
            Get in touch
          </a>
        </div>
        <div
          css={css`
            position: relative;
            width: 300px;
            height: 530px;
            flex-shrink: 0;
            ${theme.mq[1]} {
              width: 240px;
              height: 420px;
            }
            ${theme.mq[2]} {
              width: 160px;
              height: 280px;
              opacity: 0.7;
            }
          `}
        >
          <Image
            src="/Me.png"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 900px) 240px, 300px"
            style={{
              objectFit: "contain",
            }}
            alt="Image of myself"
            priority
          />
        </div>
      </div>

      {/* Projects */}
      <div
        css={css`
          margin-top: 100px;
          padding: 0 40px;
          ${theme.mq[2]} {
            padding: 0 20px;
            margin-top: 60px;
          }
        `}
      >
        <div
          id="projects"
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
            scroll-margin-top: 100px;
          `}
        >
          <div
            css={css`
              flex: 1;
              max-width: 300px;
              height: 1px;
              background: ${theme.colors.border};
            `}
          />
          <span
            css={css`
              font-weight: ${theme.fontWeight.bold};
              font-size: 0.9rem;
              white-space: nowrap;
              color: ${theme.colors.lightText};
            `}
          >
            Projects
          </span>
          <div
            css={css`
              flex: 1;
              max-width: 300px;
              height: 1px;
              background: ${theme.colors.border};
            `}
          />
        </div>

        <div
          css={css`
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: { projects },
  };
}
