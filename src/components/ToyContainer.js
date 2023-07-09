import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, removeToy}) {
  return (
    <div id="toy-collection">
      {toyArray.map((toy)=> <ToyCard key={toy.id} toy={toy} removeToy={removeToy}/>)}
      </div>
  );
}

export default ToyContainer;
