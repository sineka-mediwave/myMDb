import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddMovie, setShowAddMovie] = useState(false);

  return (
    <>
      <h1>My IMDB</h1>
      <div className="navBar">
        <a href="#" onClick={() => setShowAddMovie(false)}>
          Home
        </a>
        <a href="#" onClick={() => setShowAddMovie(true)}>
          Add Movie
        </a>
      </div>
      <main>
        {showAddMovie ? (
          <div id="addMovie">
            <MovieForm />
          </div>
        ) : (
          // <AddMovie onAddMovie={handleAddMovie} />
          <div id="home">
            <Home movies={movies} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
