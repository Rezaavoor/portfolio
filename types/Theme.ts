import { Theme } from "@emotion/react";

export interface ThemeType extends Theme{
    colors: {
        background: string;
        backgroundImage: string;
        text: string;
        lightText: string;
        cardBackground: string;
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
