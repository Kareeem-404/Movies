import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <Nav />
            <main className="p-5 md:p-10">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}