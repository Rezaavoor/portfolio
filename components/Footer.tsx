import { css, useTheme } from "@emotion/react";
import Logo from "./Logo";

export default function Footer() {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${theme.colors.cardBackground};
        margin-top: 20vh;
        padding: 20px;
      `}
    >
      <h4>Reza Hosseini 2023</h4>
      <br />
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <p css={css``}>Source:</p>
        <Logo
          size={30}
          name="github"
          link="https://github.com/Rezaavoor/portfolio"
        />
      </div>
    </div>
  );
}
