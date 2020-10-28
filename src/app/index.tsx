import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

import Sidebar from 'app/layout/sidebar';
import Main from 'app/layout/main';

const MobileHeader = styled.div`
    width: 100%;
    position: absolute;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    box-sizing: border-box;

    .mobile-cta {
        button {
            width: 100%;
            height: auto;
            padding: 10px 20px;

            span {
                font-size: ${(props) => props.theme.font.size.xsmall};
            }
        }
    }
    @media ${(props) => props.theme.breakpoints.phone} {
        display: flex;
    }
`;

const MobileMenu = styled.button`
    position: relative;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: 0;
    z-index: 1;

    &.active-menu {
        svg {
            fill: ${(props) => props.theme.color.white};
        }
    }

    svg {
        fill: ${(props) => props.theme.color.primary.light};
    }
`;

const App: FC = () => {
    const [mblMenuActive, setmblMenuActive] = useState(false);

    const showSidebar = () => {
        setmblMenuActive(!mblMenuActive);
    };

    return (
        <div className="app-container">
            <MobileHeader>
                <div className="mobile-menu-btn">
                    <MobileMenu
                        className={`mobile-menu ${
                            mblMenuActive ? 'active-menu' : ''
                        }`}
                        onClick={() => showSidebar()}
                    >
                        <svg viewBox="0 0 100 80" width="25" height="25">
                            <rect width="100" height="15" rx="8"></rect>
                            <rect y="30" width="100" height="15" rx="8"></rect>
                            <rect y="60" width="100" height="15" rx="8"></rect>
                        </svg>
                    </MobileMenu>
                </div>
                <div className="mobile-cta">
                    <button
                        type="button"
                        className="btn btn-dark find-gym-button"
                    >
                        <span>Find A Gym Club</span>
                    </button>
                </div>
            </MobileHeader>
            <Sidebar isMenuActive={mblMenuActive} />
            <Main />
        </div>
    );
};

export default App;
