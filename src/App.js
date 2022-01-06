import React from "react";
import { MovieState } from "./contexts/MovieContext";
import Hero from "./Components/Hero/Hero";
import "./App.css";

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
};

export default App;
