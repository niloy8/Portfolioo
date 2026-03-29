import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="flex bg-[var(--bg)] text-[var(--text-primary)]">
                <Sidebar />
                <main className="flex-1 ml-0 md:ml-32 min-h-screen p-8 md:p-16 lg:p-24 pb-32 md:pb-16 transition-all duration-300">
                    <div className="w-full max-w-4xl mx-auto pt-20 md:pt-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
};
export default Layout;