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
          ${theme.mq[2]} {
            //768
            top: 100px;
          }
        `}
      >
        <div
          css={css`
            height: calc(100vh - 500px);
            position: relative;
            left: 15px;
            margin-bottom: 30px;
            border-left: ${theme.colors.text} 1px solid;
            ${theme.mq[2]} {
              //768
              left: 10px;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            height: 300px;
            flex-direction: column;
            justify-content: space-between;
            ${theme.mq[2]} {
              //768
              height: 200px;
            }
          `}
        >
          <Logo size={30} name="email" />
          <Logo size={30} name="facebook" />
          <Logo size={30} name="linkedin" />
          <Logo size={30} name="instagram" />
          <Logo size={30} name="github" />
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
          <h3
            css={css`
              margin-top: 70px;
            `}
          >
            I'm a CS student at KTH from Sweden.
          </h3>
          <p
            css={css`
              width: 90%;
            `}
          >
            I build/design websites, apps and a lot more! If you're interested,
            don't hesitate to contact me :)
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
            }
          `}
        >
          <Image
            src="/Me.png"
            width="0"
            height="0"
            sizes="100vw"
            style={{
              width: "auto",
              height: "100%",
              margin: "auto",
            }}
            alt={"Image of myself"}
          />
        </div>
      </div>
      {/* Projects */}
<div
  css={css`
    margin-top: 200px;
  `}
>
  {/* Line separator */}
  <div
    id="projects"
    css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
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

  {/* Container for Projects with restricted width and padding */}
  <div
    css={css`
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;

      ${theme.mq[2]} {
        //768 and below
        padding: 0 15px;
      }

      ${theme.mq[3]} {
        //576 and below
        padding: 0 10px;
      }
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
