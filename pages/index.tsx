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
      {/* socials */}
      <div
        css={css`
          position: absolute;
          padding-left: calc(30px);
          top: 130px;
        `}
      >
        <div
          css={css`
            height: calc(100vh - 500px);
            position: relative;
            left: 15px;
            margin-bottom: 30px;
            border-left: ${theme.colors.text} 1px solid;
          `}
        />
        <div
          css={css`
            display: flex;
            height: 300px;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <Logo size="30px" name="email" />
          <Logo size="30px" name="facebook" />
          <Logo size="30px" name="twitter" />
          <Logo size="30px" name="linkedin" />
          <Logo size="30px" name="instagram" />
          <Logo size="30px" name="github" />
        </div>
      </div>
      {/* Home */}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80vh;
          margin: auto 100px;
          ${theme.mq[1]} {
            //900
            font-size: 0.9rem;
          }

          ${theme.mq[2]} {
            //768
            text-align: center;
          }
          ${theme.mq[3]} {
            //576
            font-size: 0.8rem;
          }
        `}
      >
        <div>
          <p>Hi there! I'm</p>
          <h1>Reza Hosseini</h1>
          <h2
            css={css`
              margin-top: 70px;
            `}
          >
            I’m a Software Engineer from Sweden.
          </h2>
          <p
            css={css`
              width: 90%;
            `}
          >
            I have experience in JavaScript, React, NodeJS, PostgreSQL, and a
            lot more.
          </p>
          <button
            css={css`
              background-color: ${theme.colors.text};
              border: none;
              color: ${theme.colors.background};
              padding: 10px 10px;
              text-align: center;
              text-decoration: none;
              font-weight: ${theme.fontWeight.bold};
              word-spacing: 4px;
              border-radius: 5px;
              margin-top: 20px;
              cursor: pointer;
              :hover {
                background-color: ${theme.colors.lightText};
              }
            `}
          >
            <a href="mailto:reza.avoor@gmail.com">Get in touch</a>
          </button>
        </div>
        <div
          css={css`
            position: relative;
            width: 364px;
            height: 638px;
            ${theme.mq[1]} {
              //900
              position: absolute;
              right: 10%;
              z-index: -1;
              opacity: 0.2;
            }
            ${theme.mq[2]} {
              //768
              right: auto;
              h1 {
              }
            }
          `}
        >
          <Image src="/Me.png" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Projects */}
      <div>
        {/* Line separator */}
        <div
          id="projects"
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 200px;
          `}
        >
          <div
            css={css`
              width: 42%;
              border-top: ${theme.colors.text} 1px solid;
              ${theme.mq[1]} {
                //900
                width: 30%;
              }
            `}
          />
          Projects
          <div
            css={css`
              width: 42%;
              border-top: ${theme.colors.text} 1px solid;
              ${theme.mq[1]} {
                //900
                width: 30%;
              }
            `}
          />
        </div>
        <Projects projects={projects} />
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
