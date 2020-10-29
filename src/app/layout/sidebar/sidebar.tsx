/**
 * Project          : Frontend Code Challenge
 * Module           : Sidebar root component
 * Source filename  : sidebar.tsx
 * Description      : Wraps all the sidebar components
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */
import React, { FC } from 'react';
import styled from '@emotion/styled';

import Header from './header';
import Navigation from './navigation';
import Footer from './footer';

const SidebarWrapper = styled.div`
    position: fixed;
    background: linear-gradient(
        345deg,
        ${(props) => props.theme.color.primary.main} 0%,
        ${(props) => props.theme.color.primary.light} 100%
    );
    border-radius: 0px 47px 0px 0px;
    width: 223px;
    height: 100%;
    overflow: visible;

    &.active-sidebar {
        margin-left: 0px;
    }

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-left: -223px;
        transition: 0.5s all;
    }
`;

const Sidebar: FC<{ isMenuActive: boolean }> = ({ isMenuActive }) => {
    return (
        <SidebarWrapper
            className={`sidebar ${isMenuActive ? 'active-sidebar' : ''}`}
        >
            <Header />
            <Navigation />
            <Footer />
        </SidebarWrapper>
    );
};

export default Sidebar;
