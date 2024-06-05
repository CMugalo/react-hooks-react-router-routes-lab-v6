import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  if (!movie.genres) {
    return <h1>Loading ...</h1>;
  }

  const genresList = movie.genres.map((genre, index) => {
    return <span key={index}>{genre}</span>;
  });

  return (
    <>
      <header>{/* What component should go here? */}</header>
      <header>
        <NavBar />
      </header>
      <main>{/* Movie info here! */}</main>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genresList}
      </main>
    </>
  );
}

export default Movie;
