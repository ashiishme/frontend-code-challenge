import styled from '@emotion/styled';

export const AppNavigation = styled.div`
    margin-top: 45px;
`;

export const NavList = styled.ul`
    padding: 0;
    li {
        border-radius: 0px 23px 0px 24px;
        height: 47px;
        line-height: 47px;
        text-align: left;

        a {
            margin-left: 40px;
            text-decoration: none;
            font-size: 12px;
            color: #ffffff;
            display: block;
            line-height: 47px;
        }
    }

    li:hover {
        background: rgba(242, 242, 242, 0.1);
    }

    .active-nav {
        background: rgba(242, 242, 242, 0.1);
    }
`;
