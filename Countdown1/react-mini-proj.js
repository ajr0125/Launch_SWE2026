import React, { useState } from "react";

export default function App() {

  const movies = [
    { id: 1, title: "Inception", year: 2010, director: "Christopher Nolan" },
    { id: 2, title: "The Matrix", year: 1999, director: "Wachowski Sisters" },
    { id: 3, title: "Parasite", year: 2019, director: "Bong Joon-ho" },
    { id: 4, title: "Interstellar", year: 2014, director: "Christopher Nolan" }
  ];

  // (1) Create state to store the selected movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🎬 Movie Picker</h1>

      <h3>Click a movie</h3>

      {/* (2) Use map() to display all movies */}

      <div>
        {/* your code here */}
      </div>

      <hr />

      {/* (4) Show movie details when one is selected */}

    </div>
  );
}
