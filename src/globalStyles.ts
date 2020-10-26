import { css } from '@emotion/core';
import theme from 'theme';

const GlobalStyles = css`
    @import-normalize;

    html,
    body {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: ${theme.font.family.inter};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${theme.color.white};
    }

    figure,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    p {
        margin: 0;
        padding: 0;
    }

    ul li {
        list-style: none;
    }

    .app {
        position: relative;
    }

    .container {
        padding-left: 223px;
    }

    .section-pad-l {
        padding-left: 60px;
    }

    .section-pad-r {
        padding-right: 59px;
    }

    .section-pad-t {
        padding-top: 52px;
    }

    .section-pad-b {
        padding-bottom: 52px;
    }

    .btn {
        border: 0;
        background: ${theme.color.alice_blue};
        border-radius: 25px;
        text-align: center;
        width: 192px;
        height: 49px;
    }

    .btn:hover {
        background: ${theme.color.brandy_punch};
    }

    .btn:hover span {
        color: ${theme.color.white};
    }

    .btn-dark {
        background: ${theme.color.primary.main};
    }

    .btn span {
        color: ${theme.color.primary.main};
        text-transform: uppercase;
        font-variant: normal;
        font-style: normal;
        font-weight: ${theme.font.weight.bold};
        font-size: ${theme.font.size.small};
        line-height: 21px;
    }

    .btn-dark span {
        color: ${theme.color.white};
        text-transform: uppercase;
    }
`;

export default GlobalStyles;
