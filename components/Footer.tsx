import { css, useTheme } from "@emotion/react";
import Logo from "./Logo";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer
      css={css`
        width: 100%;
        margin-top: 120px;
        border-top: 1px solid ${theme.colors.border};
        transition: background-color 0.2s, border-color 0.2s;
      `}
    >
      <div
        css={css`
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          ${theme.mq[2]} {
            flex-direction: column;
            gap: 28px;
            padding: 36px 24px;
            text-align: center;
          }
        `}
      >
        <div>
          <p
            css={css`
              margin: 0 0 4px;
              font-size: 0.9rem;
              font-weight: ${theme.fontWeight.regular};
              color: ${theme.colors.lightText};
            `}
          >
            Reza Hosseini
          </p>
          <p
            css={css`
              margin: 0;
              font-size: 0.75rem;
              color: ${theme.colors.text};
              opacity: 0.6;
            `}
          >
            &copy; {new Date().getFullYear()} &middot; Built with Next.js
          </p>
        </div>

        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 16px;
          `}
        >
          <Logo size={20} name="email" />
          <Logo size={20} name="linkedin" />
          <Logo size={20} name="github" />
          <Logo size={20} name="instagram" />
        </div>
      </div>
    </footer>
  );
}
