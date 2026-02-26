export default interface ThemeType {
  colors: {
    background: string;
    backgroundImage: string;
    text: string;
    lightText: string;
    cardBackground: string;
    accent: string;
    accentHover: string;
    border: string;
  };
  fontWeight: {
    bold: number;
    regular: number;
    light: number;
    extraLight: number;
  };
  mq: string[];
  breakpoints: number[];
}
