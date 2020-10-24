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
            sans: string;
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
        error: string;
    };
}
