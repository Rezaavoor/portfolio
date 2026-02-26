import { css, useTheme } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  darkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

export default function ToggleButton({
  darkState: [isDark, setIsDark],
}: Props) {
  const theme = useTheme();

  const styles = {
    outerBorderColor: isDark ? theme.colors.accent : theme.colors.border,
    outerColor: isDark ? theme.colors.cardBackground : theme.colors.background,
    innerColor: isDark ? theme.colors.accent : theme.colors.lightText,
    innerTransform: isDark ? "-32px" : "-4px",
  };

  return (
    <div
      role="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      tabIndex={0}
      onClick={() => setIsDark(!isDark)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsDark(!isDark);
        }
      }}
      css={css`
        width: 58px;
        height: 26px;
        border: 3px solid ${styles.outerBorderColor};
        border-radius: 17.5px;
        background-color: ${styles.outerColor};
        position: relative;
        cursor: pointer;
        transition: border-color 0.2s, background-color 0.2s;
      `}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          position: absolute;
          top: -8px;
          pointer-events: none;
          transition: transform 0.2s ease-out;
          transform: translateX(${styles.innerTransform});
          border-radius: 50%;
        `}
      >
        <ellipse
          cx="18"
          cy="18.25"
          rx="14.5"
          ry="15.25"
          fill={styles.innerColor}
        />
        <path
          d="M15.37 11.51C15.1894 12.1579 15.0985 12.8274 15.1 13.5C15.1 17.58 18.42 20.9 22.5 20.9C23.18 20.9 23.85 20.81 24.49 20.63C23.9647 21.9207 23.0668 23.0257 21.9109 23.804C20.755 24.5823 19.3935 24.9987 18 25C14.14 25 11 21.86 11 18C11 15.07 12.81 12.55 15.37 11.51ZM18 9C16.22 9 14.4799 9.52784 12.9999 10.5168C11.5198 11.5057 10.3663 12.9113 9.68509 14.5558C9.0039 16.2004 8.82567 18.01 9.17294 19.7558C9.5202 21.5016 10.3774 23.1053 11.636 24.364C12.8947 25.6226 14.4984 26.4798 16.2442 26.8271C17.99 27.1743 19.7996 26.9961 21.4442 26.3149C23.0887 25.6337 24.4943 24.4802 25.4832 23.0001C26.4722 21.5201 27 19.78 27 18C27 17.54 26.96 17.08 26.9 16.64C26.4003 17.3407 25.7401 17.9115 24.9746 18.3046C24.2091 18.6978 23.3606 18.902 22.5 18.9C21.3552 18.9 20.24 18.5364 19.3152 17.8617C18.3904 17.1869 17.7038 16.2358 17.3545 15.1456C17.0052 14.0554 17.0112 12.8824 17.3717 11.7959C17.7321 10.7093 18.4284 9.76528 19.36 9.1C18.92 9.04 18.46 9 18 9Z"
          fill="#F8E3A1"
        />
      </svg>
    </div>
  );
}
