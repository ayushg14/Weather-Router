import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const navigateToWeather = () => {
    navigate("/weather");
  };
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Welcome to our page
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={navigateToWeather}>
          Click to check weather forecast
        </button>
      </div>
    </div>
  );
}

export default App;
