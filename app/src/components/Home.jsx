const Home = (props) => {
  const { movies } = props;
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
              Rating: <span className="star">{movie.rating}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
