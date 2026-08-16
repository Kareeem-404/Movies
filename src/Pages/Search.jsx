import { useSearchParams } from "react-router-dom";
import Title from "../components/Ui-components/Title";
import Card from "../components/Ui-components/Card";
import useFetch from "../Hooks/useFetch";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const results = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=44ee5523e457e74020effc2bddc4592e&query=${encodeURIComponent(query)}`
  );

  const cardStyle =
    "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 max-w-7xl mx-auto px-4";

  return (
    <>
      <Title title={`Search results for "${query}"`} />

      {results.length === 0 ? (
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gray-100 dark:bg-gray-900">
            <i className="bi bi-search text-3xl text-gray-400"></i>
          </div>
          <h3 className="mt-6 font-display text-2xl font-semibold text-gray-800 dark:text-gray-100">
            No results found
          </h3>
          <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
            We couldn't find anything matching "{query}". Try a different movie or TV show title.
          </p>
        </div>
      ) : (
        <div className={cardStyle}>
          {results.map((item) => {
            const isMovie = item.media_type === "movie";
            const isTv = item.media_type === "tv";
            if (!isMovie && !isTv) return null;

            return (
              <Card
                key={item.id}
                title={item.title || item.name}
                rating={item.vote_average || 0}
                type={isMovie ? "movie" : "tv"}
                image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                movieId={item.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

