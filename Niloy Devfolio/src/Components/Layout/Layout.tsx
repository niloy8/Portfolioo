import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
                <Sidebar />
                <main className="flex-1 ml-24 md:ml-32 p-8 md:p-16 lg:p-24 transition-all duration-300 flex justify-center lg:justify-start items-center md:items-start min-h-screen">
                    <div className="w-full max-w-4xl lg:ml-20">
                        <Outlet />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
};
export default Layout;