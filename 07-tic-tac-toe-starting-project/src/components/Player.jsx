import { useState } from "react";

export default function Player({ name, symbol }) {
  const [ isEditing, setIsEditing ] = useState(false);
  
  const handleClick = () => setIsEditing((editing) => !editing );

  const playerName = isEditing 
  ? <input type="text" required value={name} /> 
  : <span className="player-name">{name}</span>;

  const btnCaption = isEditing ? "save" : "edit";

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