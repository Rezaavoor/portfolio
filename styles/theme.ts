const breakpoints = [1050, 900, 768, 576];

const others = {
  breakpoints,
  mq: breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
  fontWeight: {
    bold: 700,
    regular: 400,
    light: 300,
    extraLight: 200,
  },
};

export default {
  darkTheme: {
    colors: {
      background: "#151515",
      backgroundImage: 'url("/Background-Dark.svg")',
      text: "#CCCCCC",
      lightText: "#FFFFFF",
      cardBackground: "#242424",
      accent: "#6E40C9",
      accentHover: "#7C52D3",
      border: "#333333",
    },
    ...others,
  },
  lightTheme: {
    colors: {
      background: "#E5E5E5",
      backgroundImage: 'url("/Background-Light.svg")',
      text: "#242424",
      lightText: "#151515",
      cardBackground: "#DDD",
      accent: "#5B32A8",
      accentHover: "#4A2890",
      border: "#C0C0C0",
    },
    ...others,
  },
};
