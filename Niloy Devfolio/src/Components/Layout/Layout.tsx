import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../../Fotter/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
export default Layout;