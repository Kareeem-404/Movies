import Title from "../components/Ui-components/Title";
import Card from "../components/Ui-components/Card";
import useFetch from "../Hooks/useFetch";

export default function Movies() {
  const movies = useFetch("https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e");

  const cardStyle =
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 max-w-7xl mx-auto";

  return (
    <>
      <Title title="Movie Trend" />
      <div className={cardStyle}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.original_title}
            rating={movie.vote_average}
            type="movie"
            image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
            movieId={movie.id}
          />
        ))}
      </div>
    </>
  );
}
