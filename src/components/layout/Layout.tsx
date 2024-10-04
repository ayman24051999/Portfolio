import { FC } from "react";
import Sidebar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
    return (
        <div className='main-page'>
            <div className='flex flex-1'>
                <Sidebar />
                <main className='flex-1 p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
