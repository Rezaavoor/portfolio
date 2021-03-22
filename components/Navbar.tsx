import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.background};
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 20px 50px;
      `}
    >
      <Logo size="85px" />
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
      <div>toggler</div>
    </div>
  );
}
