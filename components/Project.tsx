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
        flex-direction: row-reverse;
        position: relative;
        width: 80%;
        min-height: 200px;
        background-color: ${theme.colors.cardBackground};
        border-radius: 10px;
        margin: 50px auto;
        overflow: hidden;
        ${theme.mq[0]} {
          //1050
          display: block;
          text-align: center;
        }
      `}
    >
      <div
        css={css`
          flex-basis: 50%;
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          margin: 50px;
          ${theme.mq[0]} {
            //1050
            height: 300px;
          }
        `}
      >
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            margin: "auto",
            borderRadius: "10px",
            
          }}
          alt="Project image"
        />
      </div>
      <div
        css={css`
          flex-basis: 50%;
          flex: 1;
          padding: 40px;
          ${theme.mq[1]} {
            //900
            font-size: 0.9rem;
          }
          ${theme.mq[3]} {
            //576
            font-size: 0.8rem;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            ${theme.mq[0]} {
              justify-content: center;
            }
          `}
        >
          <h2
            css={css`
              margin-right: 20px;
            `}
          >
            {title}
          </h2>
          <div
            css={css`
              margin: auto 0;
              width: 80px;
              display: flex;
              justify-content: space-evenly;
              ${theme.mq[0]} {
                //1050
              }
            `}
          >
            <Logo size={20} name="github" link={source} />
            <Logo size={20} name="website" link={link} />
          </div>
        </div>
        <h4>{description}</h4>
        <p>{content}</p>
        <div
          css={css`
            text-align: left;
          `}
        >
          <h5>Tech stack:</h5>
          {techStack.split(" - ").map((stack) => (
            <p key={stack}> - {stack}</p>
          ))}
        </div>
        <div
          css={css`
            display: flex;
            position: absolute;
            top: 5%;
            left: 35%;
            align-items: center;
            ${theme.mq[1]} {
              //900
              top: unset;
              left: unset;
              right: 10px;
              bottom: 0;
            }
          `}
        ></div>
      </div>
    </div>
  );
}
