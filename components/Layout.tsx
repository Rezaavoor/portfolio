import { css, useTheme } from "@emotion/react";
import { Dispatch, ReactElement, SetStateAction } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        background-color: ${theme.colors.background};
        z-index: 0;
        width: 100vw;
        overflow-x: hidden;
        color: ${theme.colors.text};
        font-weight: ${theme.fontWeight.regular};
        font-size: 16px;
        transition-duration: 0.2s;
        transition-property: background-color, color;
        p {
          font-weight: ${theme.fontWeight.light};
        }
        h1 {
          margin: 0;
          padding: 0;
          font-size: 3rem;
          font-weight: ${theme.fontWeight.regular};
        }
        h2 {
          font-size: 1.3rem;
          font-weight: ${theme.fontWeight.regular};
        }
        ${theme.mq[2]} {
          //768
          h1 {
            font-size: 2rem;
          }
          p {
            font-weight: ${theme.fontWeight.regular};
          }
        }
      `}
    >
      <div>
        <Head>
          <title>Reza Hosseini</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar darkState={darkState} />
        <div
          css={css`
            min-height: 100vh;
            padding-top: 120px;
            width: 100%;
            max-width: 1500px;
            margin: auto;
            position: relative;
          `}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
