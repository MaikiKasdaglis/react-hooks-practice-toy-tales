import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ToyForm({postNew}) {
  const [newToy, setNewToy] = useState({
      id: uuid(),
      name: '',
      image: '' 
  })
  function formSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/toys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(d => {
      postNew(d)
      e.target.name.value = ''
      e.target.image.value = '' 
    })
   

  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={e => formSubmit(e)} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setNewToy({...newToy, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setNewToy({...newToy, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
