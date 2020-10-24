import React, { FC } from 'react';

import { AppNavigation, NavList } from './styled';

const Navigation: FC = () => {
    return (
        <AppNavigation className='app-navigation'>
            <nav className='sidebar-navigation'>
                <div className='sidebar-nav-link'>
                    <NavList className='nav-list'>
                        <li className='nav-item active-nav'>
                            <a href='#'>Dashboard</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Tasks</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Gym Clubs</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Your Connections</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>Settings</a>
                        </li>
                    </NavList>
                </div>
            </nav>
        </AppNavigation>
    );
};

export default Navigation;
