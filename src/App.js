
import './Styles.css';
import React from "react";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />


      <footer>
        This project is coded by {" "}
        <a href="https://www.linkedin.com/in/ipeknaz-erel-49516398/?originalSubdomain=uk" target="_blank"> Ipeknaz Erel</a>
      and the open source can be found on
        <a href="https://github.com/ipeknazerel/react-weather-app2" target="_blank"> Github </a>
      </footer>
    </div>

  );
}

export default App;
