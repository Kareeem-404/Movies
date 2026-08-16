import { Link } from "react-router-dom";

export default function Card({ title, image, movieId, rating, type }) {
  return (
    <Link
      to={`/${type}/${movieId}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-500/20 dark:bg-gray-900 dark:shadow-none dark:hover:shadow-brand-500/10"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>

        {/* Rating badge */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
          <i className="bi bi-star-fill text-yellow-400"></i>
          {rating.toFixed(1)}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 backdrop-blur">
            <i className="bi bi-play-fill text-brand-600"></i>
            View Details
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-800 transition-colors group-hover:text-brand-600 dark:text-gray-100 dark:group-hover:text-brand-400">
          {title}
        </h3>
      </div>
    </Link>
  );
}

