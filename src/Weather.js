import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";


export default function Weather(props) {

  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: newDate(response.data.dt * 1000),
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });


  }

  function search() {
    let apiKey = "8fdeb8bf137160d6bd019dca8bd80ec7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    search();
  }

  function HandleCityChange(event) {
    setCity(event.target.value);

  }




  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3" onSubmit={HandleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={HandleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
      </div>

    );

  }
  else {
    search();
    return (
      "Loading..."
    );

  }

}
