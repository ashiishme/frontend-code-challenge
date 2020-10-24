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
`;

const Sidebar: FC = () => {
    return (
        <SidebarWrapper className='sidebar'>
            <Header />
            <Navigation />
            <Footer />
        </SidebarWrapper>
    );
};

export default Sidebar;
