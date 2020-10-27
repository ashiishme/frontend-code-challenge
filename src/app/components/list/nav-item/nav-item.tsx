import React, { FC, MouseEventHandler } from 'react';

const NavItem: FC<{
    name: string;
    notification: number | boolean;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLLIElement>;
}> = (props: {
    name: string;
    notification: number | boolean;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLLIElement>;
}) => {
    return (
        <li
            className={`nav-item ${props.isActive ? 'active-nav' : ''}`}
            onClick={props.onClick}
        >
            {/* make a valid href props with url fragment based on nav name */}
            <a href={`#${props.name.replace(/ /g, '-').toLowerCase()}`}>
                {props.name}
                {props.notification && <span>{props.notification}</span>}
            </a>
        </li>
    );
};

export default NavItem;
