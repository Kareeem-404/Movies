export default function Title({ title }) {
    return (
        <div className="mx-auto mb-10 max-w-7xl px-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500 dark:text-brand-400">
                Trending now
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                <span className="text-gradient">{title}</span>
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"></div>
        </div>
    );
}

