import React from "react";
import { useState } from "react";
function Player({ name, handleDelete }) {

  name = name || "no name";

  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }
  function decrement() {
    setScore(score - 1);
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center"> <p className="text-center fs-3">{score}</p></div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button className="btn btn-outline-primary w-100" onClick={increment}>
            Add Point +
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-outline-danger w-100" onClick={decrement}>
            Remove Point -
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center pt-4">
          <button className="btn btn-outline-danger w-100" onClick={handleDelete}>
            Delete Player
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;