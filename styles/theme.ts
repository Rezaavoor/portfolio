const breakpoints = [1050, 900, 768, 576];

const others = {
  breakpoints,
  mq: breakpoints.map((bp) => `@media (max-width: ${bp}px)`), // media queries
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
    },
    ...others,
  },
};
