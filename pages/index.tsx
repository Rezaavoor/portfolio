import { css, useTheme } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  darkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function Home({ darkState: [isDark, setIsDark] }: Props) {
  const theme = useTheme();
  return (
    <div
      css={css`
        height: 300vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 400px;
      `}
    >
      <p>Reza Hosseini</p>
      <button onClick={() => setIsDark(!isDark)}>Toggle darkmode</button>
    </div>
  );
}
