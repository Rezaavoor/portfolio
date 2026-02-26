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
          Hello! My name is Reza Hosseini. I'm a{" "}
          <b css={highlight}>Master's student</b> in Computer Science at{" "}
          <b css={highlight}>KTH University</b> in Sweden, specializing in
          Data Science and Machine Learning.
        </p>
        <p>
          Coding and building things has always been a passion of mine. Since I
          was a <b css={highlight}>child</b>, I was drawn to computers and
          wanted to understand how they work. Before college, I was a{" "}
          <b css={highlight}>self-taught</b> developer, learning through
          YouTube tutorials, Googling stuff, and scrolling through
          Stackoverflow (RIP) posts, making sure I do not get down-votes when I ask questions!.
        </p>
        <p>
          During <b css={highlight}>high school</b>, I started taking it more
          seriously and saw it as a potential{" "}
          <b css={highlight}>career path</b>. I completed my Bachelor's at KTH
          in 2024 and went straight into my Master's, wanting to learn more about machine learning,
          deep learning, and AI.
        </p>
        <p>
          Along the way, I've worked as a{" "}
          <b css={highlight}>full-stack developer</b> at a consulting company,
          led a team of programming teachers, and currently work with AI
          evaluation systems, RAG, and autonomous agents as an AI software engineer.
        </p>
        <p>
          If you want to get in touch, feel free to send me an email at{" "}
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
          or reach out on any of my social media accounts :)
        </p>
      </div>
    </div>
  );
}
