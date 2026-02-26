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
        gap: 8px;
        background-color: ${theme.colors.cardBackground};
        margin-top: 120px;
        padding: 28px 20px;
        transition: background-color 0.2s;
      `}
    >
      <h4
        css={css`
          margin: 0;
        `}
      >
        Reza Hosseini {new Date().getFullYear()}
      </h4>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Logo
          size={28}
          name="github"
          link="https://github.com/Rezaavoor/portfolio"
        />
      </div>
    </div>
  );
}
