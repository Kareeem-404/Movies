import Title from "../components/Ui-components/Title";
import Card from "../components/Ui-components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TV() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e");
    setMovies(res.data.results || []);
  };

  return (
    <>
      <Title title="TV Trend" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <Card key={movie.id} title={movie.name} rating={movie.vote_average} type="tv" image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} movieId={movie.id} />
        ))}
      </div>
    </>
  );
}