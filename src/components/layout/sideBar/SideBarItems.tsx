import React, { useState } from "react";
import { Link } from "react-router-dom";
interface SidebarItemProps {
    title: string;
    path: string;
    onClick?: () => void;
    isButton?: boolean;
    subItems?: SidebarItemProps[]; // Subitems for nested menus
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    title,
    path,
    onClick,
    isButton,
    subItems,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (onClick) onClick();
        if (subItems) setIsOpen(!isOpen); // Toggle submenu visibility if subitems exist
    };

    if (isButton) {
        return (
            <>
                <button
                    onClick={handleClick}
                    className='navbar-btn-multioptions'>
                    {" "}
                    {title}
                </button>
                {subItems && isOpen && (
                    <ul className='space-y-2 pl-4'>
                        {subItems.map((subItem, index) => (
                            <li key={index}>
                                <SidebarItem
                                    title={subItem.title}
                                    path={subItem.path}
                                    onClick={subItem.onClick}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }

    return (
        <Link to={path} className='navbar-btn'>
            {title}
        </Link>
    );
};

export default SidebarItem;
