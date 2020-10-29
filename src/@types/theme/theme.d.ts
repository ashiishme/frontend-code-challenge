/**
 * Project          : Frontend Code Challenge
 * Module           : Theming Type definition
 * Source filename  : theme.d.ts
 * Description      : Default theming type definition of application
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */
// Default theme interface
interface DefaultTheme {
    font: {
        size: {
            xxsmall: number;
            xsmall: number;
            small: number;
            base: number;
            medium: number;
            large: number;
            xlarge: number;
            xxlarge: number;
            xxxlarge: number;
        };
        family: {
            inter: string;
        };
        weight: {
            normal: number;
            medium: number;
            bold: number;
        };
    };
    color: {
        white: string;
        black: string;
        primary: {
            main: string;
            light: string;
        };
        alice_blue: string;
        brandy_punch: string;
        error: string;
    };
    breakpoints: {
        phone: string;
        tablet: string;
        desktop: string;
    };
}
