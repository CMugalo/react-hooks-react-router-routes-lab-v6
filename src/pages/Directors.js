import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(directors);

  const directorList = directors.map((director) => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </article>
    );
  });
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      {<main>{/* Director info here! */}</main>}
      <main>{directorList}</main>
    </>
  );
}

export default Directors;
