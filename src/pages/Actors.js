import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.log(error));
  }, []);

  const actorsList = actors.map((actor) => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => {
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
        <h1>Actors Page</h1>
      </header>
      <main>{/* Actor info here! */}</main>
      <main>{actorsList}</main>
    </>
  );
}

export default Actors;
