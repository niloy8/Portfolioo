import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
    return (
        <ThemeProvider>
            <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
                <Sidebar />
                <main className="flex-1 ml-20 md:ml-64 p-8 md:p-12 lg:p-16 transition-all duration-300">
                    <div className="max-w-5xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </ThemeProvider>
    );
};
export default Layout;