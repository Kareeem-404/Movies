import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const Movie = () => {

  const { id, type } = useParams();
  const movie = useFetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`);


  // -------------------------- Styles --------------------------
  const imageStyle = "w-full h-full object-cover";
  const titleStyle = "text-2xl font-medium dark:text-white";
  const taglineStyle = "text-xl font-medium dark:text-white";
  const genreStyle = "text-white bg-blue-300 px-4 py-3 rounded";
  const spanStyle = "text-blue-300";
  const movieContainerStyle = "md:flex gap-10 mb-10 md:mb-0 max-w-7xl mx-auto";
  const imageContainerStyle = "md:w-1/2";
  const movieContentStyle = "md:w-3/4 space-y-5";
  const genreContainerStyle = "grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4";
  // -------------------------- Styles --------------------------

  return (
    <div className={movieContainerStyle}>
      <div className={imageContainerStyle}>
        <img
          className={imageStyle}
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt=""
        />
      </div>
      <div className={movieContentStyle}>
        <h2 className={titleStyle}>
          Title: <span className={spanStyle}>{type === "movie" ? movie.title : movie.name}</span>
        </h2>
        <p className={taglineStyle}>
          Tagline: <span className={spanStyle}>{type === "movie" ? movie.tagline : movie.tagline}</span>
        </p>
        <div className={genreContainerStyle}>
          {movie.genres?.map((genre) => (
            <p className={genreStyle} key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
        <p className={taglineStyle}>
          Vote Average: <span className={spanStyle}>{movie.vote_average}</span>
        </p>
        <p className={taglineStyle}>
          Vote count: <span className={spanStyle}>{movie.vote_count}</span>
        </p>
        <p className={taglineStyle}>
          Date: <span className={spanStyle}>{type === "movie" ? movie.release_date : movie.first_air_date}</span>
        </p>
        <p className={taglineStyle}>
          Overview: <span className={spanStyle}>{type === "movie" ? movie.overview : movie.overview}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;