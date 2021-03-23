import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import Logo from "../components/Logo";

export default function Home() {
  const theme = useTheme();
  return (
    <div>
      <div
        css={css`
          position: absolute;
          top: 130px;
          left: 50px;
        `}
      >
        <div
          css={css`
            height: 30vh;
            position: relative;
            left: 15px;
            margin-bottom: 30px;
            border-left: ${theme.colors.text} 1px solid;
          `}
        ></div>
        <div
          css={css`
            display: flex;
            height: 35vh;
            flex-direction: column;
            justify-content: space-between;
            * {
              :hover {
                cursor: pointer;
              }
            }
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
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80vw;
          height: 80vh;
          margin: auto;
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
        </div>
        <div>
          <Image src="/Me.png" width="364px" height="638px" />
        </div>
      </div>
    </div>
  );
}
