import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Nav() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
        toast.error("Logged-out", { 
            autoClose: 800,
            theme: "dark",
         });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        navigate(`/search?query=${encodeURIComponent(trimmed)}`);
        setMobileOpen(false);
    };

    // -------------------------- Styles --------------------------
    const linkBase =
        "relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-brand-600 dark:hover:text-brand-400";
    const linkActive =
        "text-brand-600 dark:text-brand-400 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-brand-500 after:to-fuchsia-500";
    const linkInactive =
        "text-gray-600 dark:text-gray-300";
    const linkStyle = ({ isActive }) =>
        isActive ? `${linkBase} ${linkActive}` : `${linkBase} ${linkInactive}`;
    const mobileItem =
        "px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors";
    // -------------------------- Styles --------------------------

    return (
        <header className="sticky top-0 z-50 border-b bg-gray-900 border-gray-200/70 dark:border-gray-800/70 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
                {/* Logo */}
                <Link to="/home" className="flex items-center gap-2 shrink-0">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-lg text-white shadow-lg shadow-brand-500/30">
                        <i className="bi bi-camera-reels-fill"></i>
                    </span>
                    <span className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white sm:block">
                        Cine<span className="text-gradient">Scope</span>
                    </span>
                </Link>

                {/* Desktop links */}
                {localStorage.getItem("token") && (
                    <nav className="hidden shrink-0 items-center gap-1 md:flex">
                        <NavLink to="/home" className={linkStyle}>Home</NavLink>
                        <NavLink to="/movies" className={linkStyle}>Movies</NavLink>
                        <NavLink to="/tv" className={linkStyle}>TV Shows</NavLink>
                    </nav>
                )}

                {/* Search */}
                {localStorage.getItem("token") && (
                    <form
                        onSubmit={handleSearch}
                        className="relative ml-auto hidden w-full max-w-xs md:block"
                    >
                        <i className="bi bi-search pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"></i>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search movies & shows..."
                            className="w-full rounded-full border border-gray-200 bg-white/70 py-2 pl-9 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100"
                        />
                    </form>
                )}

                {/* Right side */}
                <div className="hidden items-center gap-2 md:flex">
                    {localStorage.getItem("token") ? (
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50 hover:brightness-110"
                        >
                            <i className="bi bi-box-arrow-right"></i>
                            Logout
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="rounded-full px-5 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-500/50 hover:brightness-110"
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="ml-auto grid h-10 w-10 place-items-center rounded-lg text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
                    aria-label="Toggle menu"
                >
                    <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`}></i>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-gray-200/70 bg-white/95 backdrop-blur dark:border-gray-800/70 dark:bg-gray-950/95 md:hidden">
                    <div className="space-y-1 px-4 py-3">
                        {localStorage.getItem("token") && (
                            <div className="flex justify-center py-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                                <NavLink to="/home" className={mobileItem} onClick={() => setMobileOpen(false)}>
                                    <i className="bi bi-house-door mr-2"></i>Home
                                </NavLink>
                                <NavLink to="/movies" className={mobileItem} onClick={() => setMobileOpen(false)}>
                                    <i className="bi bi-film mr-2"></i>Movies
                                </NavLink>
                                <NavLink to="/tv" className={mobileItem} onClick={() => setMobileOpen(false)}>
                                    <i className="bi bi-tv mr-2"></i>TV Shows
                                </NavLink>
                            </div>
                        )}

                        {/* Mobile search */}
                        {localStorage.getItem("token") && (
                            <form onSubmit={handleSearch} className="relative">
                                <i className="bi bi-search pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400"></i>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search movies & shows..."
                                    className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-800 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                />
                            </form>
                        )}

                        <div className="pt-2">
                            {localStorage.getItem("token") ? (
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
                                >
                                    <i className="bi bi-box-arrow-right"></i>Logout
                                </button>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <NavLink
                                        to="/login"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-200"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        onClick={() => setMobileOpen(false)}
                                        className="rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

