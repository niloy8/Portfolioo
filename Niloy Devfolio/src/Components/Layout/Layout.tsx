import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
                <main className="flex-1 mr-24 md:mr-32 p-8 md:p-16 lg:p-24 transition-all duration-300 flex justify-center items-center md:items-start min-h-screen">
                    <div className="w-full max-w-4xl mx-auto pt-12 md:pt-24 mt-20">
                        <Outlet />
                    </div>
                </main>
                <Sidebar />
            </div>
        </ThemeProvider>
    );
};
export default Layout;