import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity='Derby' />
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/eva-machova/" target="_blank" rel="noreferrer">Eva Machova</a> and is open-sourced on{" "}
        <a href="https://github.com/eva-coding/react-weather-app" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
      </div>
    </div>
  );
}

