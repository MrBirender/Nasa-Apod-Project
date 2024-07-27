import React from "react";

export default function Sidebar({handleToggleModel, data}) {
    function handleClick(){
        handleToggleModel()
    }
  return (
    <div className="sidebar">
      <div className="bg-overlay"></div>
      <div className="sidebar-content">
        <h2>{data.title}</h2>
        <div>
          <p>{data.date}</p>
          <p>
            {data.explanation}
          </p>
        </div>
        <button onClick={handleClick}><i className="fa-solid fa-right-long fa-xl"></i></button>
      </div>
    </div>
  );
}
