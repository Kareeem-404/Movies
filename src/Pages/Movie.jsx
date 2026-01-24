import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Movie = () => {

  const { id, type } = useParams();
  const [data, setData] = useState([]);

  // -------------------------- Fetch Movie --------------------------
  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`);
      const data = await res.json();
      setData(data);
    };
    fetchMovie();
  }, []);
  // -------------------------- Fetch Movie --------------------------

  // -------------------------- Styles --------------------------
  const imageStyle = "w-full h-full object-cover";
  const titleStyle = "text-2xl font-medium dark:text-white";
  const taglineStyle = "text-xl font-medium dark:text-white";
  const genreStyle = "text-white bg-blue-300 px-4 py-3 rounded";
  const voteAverageStyle = "text-xl font-medium dark:text-white";
  const voteCountStyle = "text-xl font-medium dark:text-white";
  const dateStyle = "text-xl font-medium dark:text-white";
  const spanStyle = "text-blue-300";
  const overviewStyle = "text-xl font-medium dark:text-white";
  const movieContainerStyle = "md:flex gap-10 mb-10 md:mb-0 max-w-7xl mx-auto";
  const imageContainerStyle = "md:w-1/2";
  const movieContentStyle = "md:w-3/4 space-y-5";
  const genreContainerStyle = "flex gap-5";
  // -------------------------- Styles --------------------------

  return (
    <div className={movieContainerStyle}>
      <div className={imageContainerStyle}>
        <img
          className={imageStyle}
          src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
          alt=""
        />
      </div>
      <div className={movieContentStyle}>
        <h2 className={titleStyle}>
          Title: <span className={spanStyle}>{type === "movie" ? data.title : data.name}</span>
        </h2>
        <p className={taglineStyle}>
          Tagline: <span className={spanStyle}>{type === "movie" ? data.tagline : data.tagline}</span>
        </p>
        <div className={genreContainerStyle}>
          {data.genres?.map((genre) => (
            <p
              className={genreStyle}
              key={genre.id}
            >
              {genre.name}
            </p>
          ))}
        </div>
        <p className={voteAverageStyle}>
          Vote Average:{" "}
          <span className={spanStyle}>{data.vote_average}</span>
        </p>
        <p className={voteCountStyle}>
          Vote count: <span className={spanStyle}>{data.vote_count}</span>
        </p>
        <p className={dateStyle}>
          Date: <span className={spanStyle}>{type === "movie" ? data.release_date : data.first_air_date}</span>
        </p>
        <p className={overviewStyle}>
          Overview: <span className={spanStyle}>{type === "movie" ? data.overview : data.overview}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
