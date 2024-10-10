import React from "react";
import SidebarItem from "./SideBarItems";
import { router } from "../../../config";

const SidebarMenu: React.FC = () => {
    const menuItems = [
        { title: "To do List", path: router.home.home },
        { title: "Tik Tak", path: router.home.tiktok },
        { title: "Porteille", path: router.home.portfeille },
    ];

    return (
        <aside className='bg-cloud dark:bg-darkButtons h-screen w-60 p-6 shadow-md'>
            <ul className='space-y-4'>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <SidebarItem
                            title={item.title}
                            path={item.path}

                        />
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SidebarMenu;
