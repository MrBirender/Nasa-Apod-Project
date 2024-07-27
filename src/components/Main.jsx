import React from "react";

export default function Main({data}) {
  return (
    <div className="img-container">
      <img src={data.hdurl} className="main-img" />
    </div>
  );
}
