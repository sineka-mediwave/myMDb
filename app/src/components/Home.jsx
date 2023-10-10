const Home = (props) => {
  const { movies } = props;
  return (
    <>
      <div className="movie-cards">
        <div className="movie-card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BODBiMTcwMDktZGUxZi00MjhiLTgwMTQtOTc4MmViZjg5YTVhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
            alt="Escape Room poster"
          />
          <h3>Movie title : Escape Room</h3>
          <p>release year : 2017</p>
          <p>Rating: ★★★★★</p>
        </div>
      </div>
    </>
  );
};

export default Home;

// {movies.map((movie, index) => (
//     <div className="movie-card" key={index}>
//       <img src={movie.image} alt={movie.title} />
//       <h3>{movie.title}</h3>
//       <p>Year: {movie.year}</p>
//       <p>Rating: {movie.rating}</p>
//     </div>
//   ))}
