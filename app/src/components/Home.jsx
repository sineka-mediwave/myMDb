import { useEffect, useState } from "react";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>
        Rating:
        {(() => {
          const stars = [];
          for (let i = 0; i < Number(movie.rating); i++) {
            stars.push(
              <span key={i} className="star gold">
                ★
              </span>
            );
          }
          for (let i = Number(movie.rating); i < 5; i++) {
            stars.push(
              <span key={i} className="star">
                ★
              </span>
            );
          }
          return stars;
        })()}
      </p>
    </>
  );
};

const Home = (props) => {
  const { movies } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    if (!searchTerm) {
      setFilteredMovies(movies);
    }
    setFilteredMovies(filtered);
  }, [searchTerm]);
  const handleSearch = () => {
    console.log("clicked search");
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="movie-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by movie title..."
        />
        <button id="search-button" onClick={handleSearch}>
          search
        </button>
      </div>
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
