import { useState } from "react";

export default function Player({ name, symbol }) {
  const [ isEditing, setIsEditing ] = useState(false);
  
  const handleClick = () => setIsEditing((editing) => !editing );

  let playerName = !isEditing ? <span className="player-name">{name}</span> : <input type="text" required value={name} />;
  let btnCaption = !isEditing ? "edit" : "save";

  return ( 
    <li>
      <span className="player"> 
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}