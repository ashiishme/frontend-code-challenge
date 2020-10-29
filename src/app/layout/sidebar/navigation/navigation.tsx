/**
 * Project          : Frontend Code Challenge
 * Module           : Navigation component
 * Source filename  : navigation.tsx
 * Description      : Defines Navigation components with nav items
 * Author           : Ashish Yadav <contact@ashiish.me>
 *
 */
import React, { FC, useState } from 'react';

import { AppNavigation, NavList } from './navigation.styled';
import NavItem from 'app/components/list/nav-item';

// Type for nav item
type NavItemProps = {
    name: string;
    notification: number | boolean;
};

type navItem = NavItemProps[];

type NavState = {
    index: number;
};

const nav_item: navItem = [
    { name: 'Dashboard', notification: false },
    { name: 'Tasks', notification: 2 },
    { name: 'Gym Clubs', notification: false },
    { name: 'Your Connections', notification: false },
    { name: 'Settings', notification: false },
];

const Navigation: FC = () => {
    // keep index state to detect the current nav
    const [active, setActive] = useState<NavState>({ index: 0 });

    const toggleActive = (i: number) => {
        setActive({ index: i });
    };

    return (
        <AppNavigation className="app-navigation">
            <nav className="sidebar-navigation">
                <div className="sidebar-nav-link">
                    <NavList className="nav-list">
                        {nav_item.map((item, index: number) => (
                            <NavItem
                                notification={item.notification}
                                key={index}
                                name={item.name}
                                isActive={active.index === index}
                                onClick={() => toggleActive(index)}
                            />
                        ))}
                    </NavList>
                </div>
            </nav>
        </AppNavigation>
    );
};

export default Navigation;
