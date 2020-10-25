const GlobalStyles = `
    @import-normalize;

    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #ffffff;
    }

    figure, ul, h1, h2, h3, h4, h5, h6 {
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
        background: #ecf4f9;
        border-radius: 25px;
        text-align: center;
        width: 192px;
        height: 49px;
    }

    .btn:hover {
        background: #4648c3;
    }

    .btn:hover span {
        color: #ffffff;
    }

    .btn-dark {
        background: #262758;
    }

    .btn span {
        color: #262758;
        text-transform: uppercase;
        font-variant: normal;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
    }

    .btn-dark span {
        color: #ffffff;
        text-transform: uppercase;
    }
`;

export default GlobalStyles;
