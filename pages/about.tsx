import { css } from "@emotion/react";

interface Props {
  name: string;
}

export default function About({
  name = "currently this page is under development...",
}: Props) {
  return (
    <div
      css={css`
        display: flex;
        height: 50vh;
        justify-content: center;
        align-items: center;
      `}
    >
      {name}
    </div>
  );
}
