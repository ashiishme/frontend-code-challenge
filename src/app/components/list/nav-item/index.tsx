import React, { FC, MouseEventHandler } from 'react';

const NavItem: FC<{
    name: string;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLLIElement>;
}> = (props: {
    name: string;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLLIElement>;
}) => {
    return (
        <li
            className={`nav-item ${props.isActive ? 'active-nav' : ''}`}
            onClick={props.onClick}
        >
            <a href={`#${props.name.replace(/ /g, '-').toLowerCase()}`}>
                {props.name}
            </a>
        </li>
    );
};

export default NavItem;
