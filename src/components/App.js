import React, { useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(d => setToyArray(d))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function postNew(newToy){
    const newArray = [...toyArray, newToy]
    setToyArray(newArray)
  }
  function removeToy(id) {
    const newArray = toyArray.filter((toy) => toy.id !== id)
    setToyArray(newArray)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm postNew={postNew}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} removeToy={removeToy}/>
    </>
  );
}

export default App;
