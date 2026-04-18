import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import theme from "../styles/theme";
import NProgress from "nprogress";
import Router from "next/router";
import ThemeType from "../types/Theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <ThemeProvider theme={isDark ? theme.darkTheme : theme.lightTheme}>
      <Layout darkState={[isDark, setIsDark]}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
