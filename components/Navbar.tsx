import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";

interface Props {
  darkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function Navbar({ darkState: [isDark, setIsDark] }: Props) {
  const theme = useTheme();

  //make Navbar switching smooth and runnable with dark/light mode
  const setScrollStyle = ({ withBorder }: { withBorder: boolean }) => {
    if (withBorder)
      return {
        backgroundColor: theme.colors.background,
        height: 70,
        border: isDark ? 0 : 2,
      };
    else
      return {
        backgroundColor: "transparent",
        height: 80,
        border: 0,
      };
  };

  const [onScroll, setOnScroll] = useState(
    setScrollStyle({ withBorder: false })
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 10)
        setOnScroll(setScrollStyle({ withBorder: true }));
      else setOnScroll(setScrollStyle({ withBorder: false }));
      window.onscroll = () => {
        currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 10)
          setOnScroll(setScrollStyle({ withBorder: true }));
        else setOnScroll(setScrollStyle({ withBorder: false }));
      };
    }
  }, [isDark]);
  //Navbar switching config is done here

  return (
    <div
      css={css`
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${onScroll.height + "px"};
        background-color: ${onScroll.backgroundColor};
        text-align: center;
        transition: 0.5s ease;
        border-bottom: ${onScroll.border + "px"} ${theme.colors.cardBackground}
          solid;
        ${theme.mq[2]} {
          //768
          font-size: 0.9rem;
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
        `}
      >
        <Logo size={50} />
        <ul
          css={css`
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;
            justify-content: space-around;
            width: 250px;
            transition: width 2s;
            li {
              ::after {
                content: "";
                width: 0px;
                height: 1px;
                display: block;
                background: ${theme.colors.text};
                transition: 300ms;
              }
              :hover::after {
                width: 100%;
              }
            }
          `}
        >
          <li>
            <Link href="/?">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              Projects
            </Link>
          </li>
        </ul>
        <ToggleButton darkState={[isDark, setIsDark]} />
      </div>
    </div>
  );
}
