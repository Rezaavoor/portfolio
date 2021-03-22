import { Theme } from "@emotion/react";

export interface ThemeType extends Theme{
    colors: {
        background: string;
        text: string;
        lightText: string;
        cardBackground: string;
    };
    fontWeight: {
        regular: number;
        light: number;
        extraLight: number;
    };
    mq: string[];
    breakpoints: number[];
}
