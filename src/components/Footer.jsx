import React from "react";

export default function Footer({handleToggleModel,data}) {
    const handleClick = ()=> {
        handleToggleModel()
    }
  return (
    <footer>
      <div className="bg-Gradient"></div>
      <div>
        <h1>{data.title}</h1>
        <h2>Apod Project</h2>
      </div>
      <button onClick={handleClick}>
        <i className="fa-solid fa-circle-info fa-2xl"></i>
      </button>
    </footer>
  );
}
