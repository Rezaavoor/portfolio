import { css, useTheme } from "@emotion/react";

export default function Footer() {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${theme.colors.cardBackground};
        margin-top: 20vh;
        * {
          padding: 0;
          margin: 0;
        }
      `}
    >
      <h4>Reza Hosseini 2021</h4>
      <br />
      <p>
        {"source: "}
        <a href="https://github.com/Rezaavoor/rezaavoor.github.io">Github</a>
      </p>
    </div>
  );
}
