import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="header">
      <div className="container">
        <h1> Weather Search Engine </h1>
        <Weather />
      </div>
      <small>
        <a
          href="https://github.com/cigdembhceci/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        <span> by Cigdem B.</span>
      </small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
