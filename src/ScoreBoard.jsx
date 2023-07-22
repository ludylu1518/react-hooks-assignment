import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {

  const [players, setPlayers] = useState([]);
  const playerInput = useRef();

  function addPlayer() {    
    let player = playerInput.current.value;
    setPlayers([...players, {id: Date.now(), name: player}]);
  
    playerInput.current.value = '';
  }

  function deletePlayer(id) {
    setPlayers(players.filter((player) => {
      return player.id !== id;
    }));
  }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div class="input-group mb-3">
            <input
              ref={playerInput}
              type="text"
              class="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            <button
              class="btn btn-outline-primary"
              onClick={addPlayer}
              type="button"
              id="addPlayer"
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
                handleDelete={() => deletePlayer(player.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;