import { FC } from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./sideBar/SideBar";

const Layout: FC = () => {
    return (
        <div className='main-page'>
            <div className='flex flex-1'>
                <SidebarMenu />
                <main className='flex flex-1 items-center justify-center'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
