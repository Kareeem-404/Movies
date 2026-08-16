import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const Movie = () => {

  const { id, type } = useParams();
  const movie = useFetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`);

  // -------------------------- Styles --------------------------
  const imageStyle = "w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/20";
  const titleStyle = "text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl";
  const taglineStyle = "text-lg font-medium text-gray-700 dark:text-gray-200";
  const genreStyle = "rounded-full bg-gradient-to-r from-brand-500/15 to-fuchsia-500/15 px-4 py-2 text-sm font-semibold text-brand-600 dark:text-brand-300 border border-brand-500/20";
  const spanStyle = "text-gray-900 dark:text-white";
  const movieContainerStyle = "mx-auto flex max-w-7xl flex-col gap-10 px-4 md:flex-row lg:items-start";
  const imageContainerStyle = "mx-auto  md:w-2/5 shrink-0";
  const movieContentStyle = "space-y-5 lg:w-3/5";
  const genreContainerStyle = "flex flex-wrap gap-2.5";
  // -------------------------- Styles --------------------------

  return (
    <div className={movieContainerStyle}>
      <div className={imageContainerStyle}>
        <img
          className={imageStyle}
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt={type === "movie" ? movie.title : movie.name}
        />
      </div>
      <div className={movieContentStyle}>
        <h2 className={titleStyle}>
          <span className="text-gradient">{type === "movie" ? movie.title : movie.name}</span>
        </h2>
        {movie.tagline && (
          <p className={`${taglineStyle} italic text-gray-500 dark:text-gray-400`}>"{movie.tagline}"</p>
        )}
        <div className={genreContainerStyle}>
          {movie.genres?.map((genre) => (
            <span className={genreStyle} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <i className="bi bi-star-fill text-yellow-400"></i>
            {movie.vote_average} / 10
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <i className="bi bi-people-fill text-brand-500"></i>
            {movie.vote_count} votes
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200">
            <i className="bi bi-calendar-event text-fuchsia-500"></i>
            {type === "movie" ? movie.release_date : movie.first_air_date}
          </span>
        </div>

        {/* Overview */}
        <div className="rounded-2xl border border-gray-200/70 bg-white/60 p-5 dark:border-gray-800/70 dark:bg-gray-900/60">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Overview
          </p>
          <p className={`${taglineStyle} leading-relaxed`}>
            <span className={spanStyle}>{movie.overview || "No overview available."}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

