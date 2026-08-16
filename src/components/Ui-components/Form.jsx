import { useEffect, useState } from "react";
import Title from "./Title";
import cinemaImage from "../../assets/image.jpg";

const API_URL =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function Form({ children, title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setMovies(data.results?.slice(0, 5) || []);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className="mx-auto max-w-[1500px] px-4">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

        {/* ================= LEFT / CINEMA ================= */}
        <div className="relative hidden min-h-[680px] overflow-hidden rounded-3xl border border-white/10 bg-[#080b16] lg:block">

          {/* Cinema Background */}
          <img
            src={cinemaImage}
            alt="Cinema"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#050817]/65" />

          {/* Purple cinematic glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090d20]/90 via-transparent to-[#10051d]/70" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-[#080b16]/30" />

          {/* Purple light */}
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-pink-600/20 blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col p-8 xl:p-10">

            {/* Branding */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
                Welcome to
              </p>

              <h2 className="mt-2 text-5xl font-extrabold tracking-tight text-white xl:text-6xl">
                CINE
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  SCOPE
                </span>
              </h2>

              <p className="mt-3 text-sm text-white/70">
                Your ultimate destination for movies & TV shows.
              </p>
            </div>

            {/* ================= MOVIE POSTERS ================= */}
            <div className="relative mt-10 flex h-[330px] items-center justify-center">

              {movies.map((movie, index) => {
                const positions = [
                  "left-[0%] rotate-[-9deg] scale-[0.88]",
                  "left-[18%] rotate-[-4deg] scale-[0.94]",
                  "left-[37%] z-20 scale-105",
                  "left-[57%] rotate-[4deg] scale-[0.94]",
                  "left-[76%] rotate-[9deg] scale-[0.88]",
                ];

                return (
                  <div
                    key={movie.id}
                    className={`
                      absolute top-5
                      w-[135px]
                      overflow-hidden
                      rounded-2xl
                      border border-purple-300/30
                      bg-black
                      shadow-2xl
                      shadow-black/70
                      transition-all duration-500
                      hover:z-50
                      hover:-translate-y-6
                      hover:rotate-0
                      hover:scale-110
                      ${positions[index]}
                    `}
                  >
                    {movie.poster_path && (
                      <img
                        src={`${IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="h-[275px] w-full object-cover"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                );
              })}

            </div>

            {/* ================= BOTTOM TEXT ================= */}
            <div className="relative z-30 mt-auto max-w-xl">

              <h3 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Discover your next{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  favorite story
                </span>
              </h3>

              <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />

              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                Explore trending movies and TV shows, discover new stories,
                and find your next favorite movie — all in one place.
              </p>

            </div>
          </div>
        </div>

        {/* ================= RIGHT / FORM ================= */}
        <div className="min-h-[680px] rounded-3xl border border-white/10 bg-[#0b1120]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">

          <Title title={title} />

          {children}

        </div>

      </div>
    </div>
  );
}