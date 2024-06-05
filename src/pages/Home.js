import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} title={movie.title} id={movie.id}/>;
  });

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        {/*----- MOVIE LIST -----*/}
        {movieList}
      </main>
    </>
  );
}

export default Home;
