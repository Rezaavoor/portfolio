import { css, useTheme } from "@emotion/react";
import { ReactElement } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-weight: ${theme.fontWeight.regular};
        font-size: 16px;
        transition-duration: 0.2s;
        transition-property: background-color, color;
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
      <Navbar />
      <div
        css={css`
          min-height: 100vh;
        `}
      >
        {children}
      </div>
      <div>footer</div>
    </div>
  );
}
