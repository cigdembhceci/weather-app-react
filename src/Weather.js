import "./Weather.css";
import axios from "axios";
import React, { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpinnerDiamond } from "spinners-react";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState(" ");

  function showTemp(response) {
    setSearch(true);
    setMessage(
      <div className="weatherDesc">
        <div className="city"> {city} </div>
        <div className="temp">{Math.round(response.data.main.temp)}°C</div>
        <div className="desc">
          <div>Description:{response.data.weather[0].description}</div>
          <div>Humidity:{Math.round(response.data.main.humidity)} %</div>
          <div>Wind:{Math.round(response.data.wind.speed)} km/h</div>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt={response.data.weather.description}
        />
      </div>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8613fc13ef9e495cb6053e94849faf9d&units=imperial`;
    axios.get(url).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value.toUpperCase());
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
      </button>{" "}
    </form>
  );

  if (search) {
    return (
      <div>
        {form} {message}
      </div>
    );
  } else {
    return (
      <div>
        <div className="form">{form} </div>
        <div>
          <SpinnerDiamond />
        </div>
      </div>
    );
  }
}
