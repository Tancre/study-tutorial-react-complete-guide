import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);
  
  const handleClick = () => setIsEditing(true);

  let playerName = !isEditing ? <span className="player-name">{name}</span> : <input />;
  
  return ( 
    <li>
      <span className="player"> 
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  )
}