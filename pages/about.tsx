import { css, useTheme } from "@emotion/react";
import Image from "next/image";

export default function About() {
  const theme = useTheme();

  const highlight = css`
    color: ${theme.colors.accent};
    font-weight: ${theme.fontWeight.bold};
  `;

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 40px 80px;
        max-width: 960px;
        margin: 0 auto;
        ${theme.mq[0]} {
          flex-direction: column;
          padding: 30px 40px;
          gap: 28px;
        }
        ${theme.mq[2]} {
          padding: 20px 24px;
          gap: 20px;
        }
        ${theme.mq[3]} {
          padding: 16px 20px;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          width: 260px;
          min-height: 320px;
          flex-shrink: 0;
          border-radius: 10px;
          overflow: hidden;
          ${theme.mq[0]} {
            width: 220px;
            min-height: 268px;
          }
          ${theme.mq[2]} {
            width: 180px;
            min-height: 220px;
          }
        `}
      >
        <Image
          src="/Me2.png"
          fill
          sizes="(max-width: 576px) 160px, (max-width: 1050px) 200px, 260px"
          style={{
            objectFit: "cover",
          }}
          alt="Photo of Reza Hosseini"
        />
      </div>
      <div
        css={css`
          max-width: 520px;
          font-size: 0.85rem;
          ${theme.mq[0]} {
            text-align: center;
            max-width: 100%;
            font-size: 0.82rem;
          }
          ${theme.mq[2]} {
            font-size: 0.78rem;
          }
          ${theme.mq[3]} {
            font-size: 0.75rem;
          }
        `}
      >
        <p
          css={css`
            font-size: 1em;
            font-weight: ${theme.fontWeight.regular};
            line-height: 1.7;
            margin-top: 0;
          `}
        >
          Hello! My name is Reza Hosseini and I'm a Computer Science student at{" "}
          <b css={highlight}>KTH University</b> in Sweden.
        </p>
        <p>
          Coding, hacking and programming has always been a passion of mine.
          Since I was a <b css={highlight}>child</b>, I was always interested in
          computers and wanted to know how they work.
        </p>
        <p>
          Before I started college, I was a <b css={highlight}>self taught</b>{" "}
          developer and learned a lot of stuff by just watching YouTube
          tutorials, Googling stuff, scrolling through Stackoverflow and so on.
          I learned the basics of web development during that time and built a
          good and solid knowledge base for my future studies.
        </p>
        <p>
          During my <b css={highlight}>high school</b> time between 2018 and
          2021, I started to take what I like to do more seriously and see it as
          a potential <b css={highlight}>future career field</b>. At that time I
          realized this is more than just a hobby and I started to learn more
          professionally.
        </p>
        <p>
          If you want to contact me, you are more than welcome to do so by
          sending me an email at{" "}
          <a
            href="mailto:reza.avoor@gmail.com"
            css={css`
              color: ${theme.colors.accent};
              &:hover {
                text-decoration: underline;
              }
            `}
          >
            reza.avoor@gmail.com
          </a>{" "}
          or messaging me on any of my social media accounts :)
        </p>
      </div>
    </div>
  );
}
