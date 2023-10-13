import Layout from "../components/Layout";
import MovieForm from "../components/MovieForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

const FormPage = () => {
  const [movies, setMovies] = useState([]);
  function handleAddMovie(newMovie) {
    const updatedMovies = [{ id: uuidv4(), ...newMovie }, ...movies];
    setMovies(updatedMovies);
    console.log("movies", newMovie);
    localStorage.setItem("My-IMDB", JSON.stringify(movies));
  }
  return (
    <Layout title="MovieForm">
      <div className="formbackground-image">
        <MovieForm onAddMovie={handleAddMovie} />
      </div>
    </Layout>
  );
};

export default FormPage;
