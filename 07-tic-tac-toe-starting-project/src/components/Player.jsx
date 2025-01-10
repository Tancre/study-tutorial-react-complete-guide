import { useState } from "react";

export default function Player({ initialName, symbol }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [ isEditing, setIsEditing ] = useState(false);
  
  const handleClick = () => setIsEditing((editing) => !editing );
  const handleChange = (e) => setPlayerName(e.target.value);

  const editablePlayerName = isEditing 
  ? <input type="text" required value={playerName} onChange={handleChange}/> 
  : <span className="player-name">{playerName}</span>;

  const btnCaption = isEditing ? "save" : "edit";

  return ( 
    <li>
      <span className="player"> 
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}