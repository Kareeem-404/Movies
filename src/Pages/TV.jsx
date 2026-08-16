import Title from "../components/Ui-components/Title";
import Card from "../components/Ui-components/Card";
import useFetch from "../Hooks/useFetch";

export default function TV() {
  const tv = useFetch("https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e");

  const cardStyle =
    "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 max-w-7xl mx-auto px-4";

  return (
    <>
      <Title title="TV Trend" />
      <div className={cardStyle}>
        {tv.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            rating={item.vote_average}
            type="tv"
            image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            movieId={item.id}
          />
        ))}
      </div>
    </>
  );
}

