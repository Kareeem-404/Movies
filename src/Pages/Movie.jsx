import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Movie = () => {
  const [data, setData] = useState([]);
  const { id , type } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`);
      const data = await res.json();
      setData(data);
    };
    fetchMovie();
  }, []);

  return (
    <div className="md:flex gap-10 mb-10 md:mb-0 max-w-7xl mx-auto">
      <div className="md:w-1/2">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
          alt=""
        />
      </div>
      <div className="md:w-3/4 space-y-5">
        <h2 className="text-2xl font-medium dark:text-white">
          Title: <span className="text-blue-300">{type === "movie" ? data.title : data.name}</span>
        </h2>
        <p className="text-xl font-medium dark:text-white">
          Tagline: <span className="text-blue-300">{type === "movie" ? data.tagline : data.tagline}</span>
        </p>
        <div className="flex gap-5">
          {data.genres?.map((genre) => (
            <p
              className="text-white bg-blue-300 px-4 py-3 rounded"
              key={genre.id}
            >
              {genre.name}
            </p>
          ))}
        </div>
        <p className="text-xl font-medium dark:text-white">
          Vote Average:{" "}
          <span className="text-blue-300">{data.vote_average}</span>
        </p>
        <p className="text-xl font-medium dark:text-white">
          Vote count: <span className="text-blue-300">{data.vote_count}</span>
        </p>
        <p className="text-xl font-medium dark:text-white">
          Date: <span className="text-blue-300">{type === "movie" ? data.release_date : data.first_air_date}</span>
        </p>
        <p className="text-xl font-medium dark:text-white">
          Overview: <span className="text-blue-300">{type === "movie" ? data.overview : data.overview}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
