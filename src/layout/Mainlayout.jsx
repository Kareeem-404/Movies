import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
            <Nav />
            <main className="flex-1 py-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

