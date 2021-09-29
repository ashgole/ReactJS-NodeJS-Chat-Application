import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Join.css';

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContain">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            className="joinInput"
            placeholder=""
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="joinInput mt-20"
            placeholder=""
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>


      <Link to={`/chat?name=${name}&room=${room}`}>
        <button className="button mt-20" type="submit">
          Sign in
        </button>
      </Link> </div>
    </div>
  );
}

export default Join;
