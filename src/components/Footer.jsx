export default function Footer() {
    return (
        <footer className="border-t border-gray-200/70 bg-white/70 backdrop-blur dark:border-gray-800/70 dark:bg-gray-950/70">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
                <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm text-white">
                        <i className="bi bi-camera-reels-fill"></i>
                    </span>
                    <p className="font-display text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Cine<span className="text-gradient">Scope</span>
                    </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} CineScope — Movies & TV Shows
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <i className="bi bi-github cursor-pointer transition-colors hover:text-brand-500"></i>
                    <i className="bi bi-twitter-x cursor-pointer transition-colors hover:text-brand-500"></i>
                    <i className="bi bi-instagram cursor-pointer transition-colors hover:text-brand-500"></i>
                </div>
            </div>
        </footer>
    );
}

