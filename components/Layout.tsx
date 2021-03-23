import { css, useTheme } from "@emotion/react";
import { Dispatch, ReactElement, SetStateAction } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
  darkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function Layout({ children, darkState }: Props) {
  const theme = useTheme();

  return (
    <div
      css={css`
        position: relative;
        background-image: ${theme.colors.backgroundImage};
        background-position: center 0;
        background-size: 100% auto;
        overflow-x: hidden;
        color: ${theme.colors.text};
        font-weight: ${theme.fontWeight.regular};
        font-size: 16px;
        transition-duration: 0.2s;
        transition-property: background-color, color;
        p {
          font-weight: ${theme.fontWeight.extraLight};
        }
        h1 {
          margin: 0;
          padding: 0;
          font-size: 3rem;
          font-weight: ${theme.fontWeight.light};
        }
        h2 {
          font-size: 1.2rem;
          font-weight: ${theme.fontWeight.regular};
        }
      `}
    >
      <Head>
        <title>Reza Hosseini</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar darkState={darkState} />
      <div
        css={css`
          min-height: 100vh;
          padding-top: 100px;
        `}
      >
        {children}
      </div>
      <div>footer</div>
    </div>
  );
}
