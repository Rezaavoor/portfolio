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
        boxShadow: 6,
        backgroundColor: theme.colors.background,
        height: 70,
      };
    else
      return {
        boxShadow: 0,
        backgroundColor: "transparent",
        height: 80,
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
        width: 100%;
        padding: 20px 50px;
        box-shadow: 0 ${onScroll.boxShadow + "px"} ${onScroll.boxShadow + "px"}
          ${"-" + onScroll.boxShadow + "px"} ${theme.colors.text};
        height: ${onScroll.height + "px"};
        background-color: ${onScroll.backgroundColor};
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: 0.5s ease;
      `}
    >
      <Logo size="55px" />
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
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
      <ToggleButton darkState={[isDark, setIsDark]} />
    </div>
  );
}
