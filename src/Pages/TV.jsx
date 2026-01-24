import Title from "../components/Title";
import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function TV() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e");
    const data = await res.json();
    setMovies(data.results || []);
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