const breakpoints = [1050, 900, 768, 576]

const others = {
  breakpoints,
  mq: breakpoints.map((bp) => `@media (max-width: ${bp}px)`), // media queries
  fontWeight: {
    regular: 400,
    light: 300,
    extraLight: 200,
  },
}

export default {
  darkTheme: {
    colors: {
      background: '#151515',
      text: '#CCCCCC',
      lightText: '#FFFFFF',
      cardBackground: '#242424',
    },
    ...others
  },
  lightTheme: {
    colors: {
      background: '#E5E5E5',
      text: '#151515',
      lightText: '#242424',
      cardBackground: '#CCCCCC',
    },
    ...others
  },
}