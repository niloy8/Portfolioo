import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="flex bg-[var(--bg)] text-[var(--text-primary)]">
                <Sidebar />
                <main className="flex-1 ml-24 md:ml-32 min-h-screen p-8 md:p-16 lg:p-24 transition-all duration-300">
                    <div className="w-full max-w-4xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
};
export default Layout;