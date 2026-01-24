import Title from "../components/Title";
import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  // -------------------------- Fetch Movies --------------------------
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e");
    const data = await res.json();
    setMovies(data.results || []);
  };
  // -------------------------- Fetch Movies --------------------------

  // -------------------------- Styles --------------------------
  const cardStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto";
  // -------------------------- Styles --------------------------

  return (
    <>
      <Title title="Movie Trend" />
      <div className={cardStyle}>
        {movies.map((movie) => (
          <Card key={movie.id} title={movie.original_title} rating={movie.vote_average} type="movie" image={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} movieId={movie.id} />
        ))}
      </div>
    </>
  );
}