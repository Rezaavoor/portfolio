import { css, useTheme } from "@emotion/react";
import Image from "next/image";

export default function About() {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        //height: 80vh;
        margin: auto;
        ${theme.mq[0]} {
          //900
          font-size: 0.9rem;
          //height: 100%;
          margin: 0;
          flex-direction: column;
        }

        ${theme.mq[2]} {
          //768
          font-size: 0.8rem;
        }
        ${theme.mq[3]} {
          //576
          font-size: 0.7rem;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          width: 300px;
          height: 358px;
        `}
      >
        <Image
          src="/Me2.png"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          alt={"Image of myself 2"}
        />
      </div>
      <div
        css={css`
          width: 600px;
          text-align: center;
          ${theme.mq[1]} {
            //900
            width: 80%;
          }
        `}
      >
        <h3>
          Hello! My name is Reza Hosseini and I'm a Computer Science student at{" "}
          <b
            css={css`
              color: ${theme.colors.lightText};
              text-decoration: underline;
            `}
          >
            KTH University
          </b>{" "}
          in Sweden. I am currently (August 2023) studying my third year in
          college and if everything goes smoothly I will be graduating in summer
          2026!
        </h3>
        <p
          css={css`
            width: 90%;
          `}
        >
          Coding, hacking and programing has always been a passion of mine.
          Since I was a{" "}
          <b
            css={css`
              color: ${theme.colors.lightText};
              text-decoration: underline;
            `}
          >
            child
          </b>
          , I was always interested in computers and wanted to know how they
          work.
        </p>
        <p>
          Before I started college, I was a{" "}
          <b
            css={css`
              color: ${theme.colors.lightText};
              text-decoration: underline;
            `}
          >
            self taught
          </b>{" "}
          developer and learned a lot of stuff by just watching Youtube
          toturials, Googling stuff, scrolling through Stackoverflow and so on.
          I learned the basics of web development during that time and built a
          good and solid knowledge base for my future studies.
        </p>
        <p>
          During my{" "}
          <b
            css={css`
              color: ${theme.colors.lightText};
              text-decoration: underline;
            `}
          >
            high school
          </b>{" "}
          time between 2018 and 2021, I started to take what I like to do more
          seriously and see it as a potential{" "}
          <b
            css={css`
              color: ${theme.colors.lightText};
              text-decoration: underline;
            `}
          >
            future career field
          </b>{" "}
          . At that time I realized this is more than just a hobby and I started
          to learn more professionally.
        </p>
        <p>
          If you want to contact me, you are more than welcome to do so by
          sending me an email at {"reza.avoor@gmail.com"} or messaging me on any
          of my social media accounts :)
        </p>
      </div>
    </div>
  );
}
