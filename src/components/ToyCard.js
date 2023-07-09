import React, {useEffect, useState} from "react";

function ToyCard({toy, removeToy}) {
  const {id, name, image, likes} = toy
  const [newLikes, setNewLikes] = useState(likes)

  function likePatch(id){
    setNewLikes(newLikes+1)
  }

  useEffect(()=>{
        fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({likes: newLikes})
})
  },[newLikes])


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={e =>likePatch(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={e => removeToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
