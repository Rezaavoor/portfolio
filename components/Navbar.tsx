import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

interface Props {
  darkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function Navbar({ darkState: [isDark, setIsDark] }: Props) {
  const theme = useTheme();
  const router = useRouter();

  const getScrollStyle = useCallback(
    (withBorder: boolean) => {
      if (withBorder)
        return {
          backgroundColor: theme.colors.background,
          height: 70,
          border: isDark ? 0 : 1,
        };
      return {
        backgroundColor: "transparent",
        height: 80,
        border: 0,
      };
    },
    [isDark, theme.colors.background]
  );

  const [onScroll, setOnScroll] = useState(getScrollStyle(false));
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setOnScroll(getScrollStyle(scrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getScrollStyle]);

  useEffect(() => {
    setHash(window.location.hash);

    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [router.asPath]);

  const isProjectRoute = router.pathname.startsWith("/projects");

  const navLinkStyle = (path: string) => {
    let isActive = false;
    if (path === "/") {
      isActive =
        router.pathname === "/" && hash !== "#projects" && !isProjectRoute;
    } else if (path === "/#projects") {
      isActive =
        isProjectRoute || (router.pathname === "/" && hash === "#projects");
    } else {
      isActive = router.pathname === path;
    }
    return css`
      ::after {
        content: "";
        width: ${isActive ? "100%" : "0px"};
        height: 2px;
        display: block;
        background: ${theme.colors.accent};
        transition: 300ms;
      }
      :hover::after {
        width: 100%;
      }
    `;
  };

  return (
    <div
      css={css`
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${onScroll.height}px;
        background-color: ${onScroll.backgroundColor};
        text-align: center;
        transition: 0.4s ease;
        border-bottom: ${onScroll.border}px ${theme.colors.border} solid;
        ${theme.mq[2]} {
          font-size: 0.85rem;
          height: ${Math.min(onScroll.height, 60)}px;
        }
      `}
    >
      <div
        css={css`
          height: 100%;
          max-width: 1500px;
          margin: auto;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          ${theme.mq[2]} {
            padding: 0 16px;
          }
        `}
      >
        <Logo size={50} />
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;
            gap: 28px;
            ${theme.mq[2]} {
              gap: 18px;
            }
          `}
        >
          <li css={navLinkStyle("/")}>
            <Link href="/">Home</Link>
          </li>
          <li css={navLinkStyle("/about")}>
            <Link href="/about">About</Link>
          </li>
          <li css={navLinkStyle("/#projects")}>
            <Link href="/#projects">Projects</Link>
          </li>
        </ul>
        <ToggleButton darkState={[isDark, setIsDark]} />
      </div>
    </div>
  );
}
