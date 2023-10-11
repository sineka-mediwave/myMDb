import { useState } from "react";

const Home = (props) => {
  const { movies } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  return (
    <>
      <div className="search-container">
        <input type="text" id="movie-search" placeholder="Search for a movie" />
        <button id="search-button">search</button>
      </div>
      <div className="movie-cards">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
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
                      &#9733;
                    </span>
                  );
                }
                for (let i = Number(movie.rating); i < 5; i++) {
                  stars.push(
                    <span key={i} className="star">
                      &#9733;
                    </span>
                  );
                }
                return stars;
              })()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
