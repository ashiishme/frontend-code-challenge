import React, { FC, useState } from 'react';

import { AppNavigation, NavList } from './styled';
import NavItem from 'app/components/list/nav-item';

type NavItemProps = {
    name: string;
};

type navItem = NavItemProps[];

type NavState = {
    index: number;
};

const nav_item: navItem = [
    { name: 'Dashboard' },
    { name: 'Tasks' },
    { name: 'Gym Clubs' },
    { name: 'Your Connections' },
    { name: 'Settings' },
];

const Navigation: FC = () => {
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
