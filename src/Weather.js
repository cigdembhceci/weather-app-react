import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState(" ");

  function showTemp(response) {
    setSearch(true);
    setMessage(
      <ul>
        <li>
          It is {Math.round(response.data.main.temp)}°C in {city}
        </li>
        <li> Description:{response.data.weather[0].description} </li>
        <li> Humidity:{Math.round(response.data.main.humidity)} </li>
        <li> Wind:{Math.round(response.data.wind.speed)} </li>
        <img
          src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt={response.data.weather.description}
        />
      </ul>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8613fc13ef9e495cb6053e94849faf9d&units=imperial`;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search a City"
        autoFocus={true}
        onChange={updateCity}
      />
      <button className="btn btn-primary" type="Submit">
        Search
      </button>
    </form>
  );

  if (search) {
    return (
      <div>
        {form} {message}
      </div>
    );
  } else {
    return form;
  }
}
