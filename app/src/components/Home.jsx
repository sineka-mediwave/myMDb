import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const Home = (props) => {
  const { movies } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(JSON.parse(localStorage.getItem("My-IMDB")) || []);
  }, [movies]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    !searchTerm && setFilteredMovies(movies);
    searchTerm && filtered.length < 1
      ? alert("not found")
      : setFilteredMovies(filtered);
  }, [searchTerm]);

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
