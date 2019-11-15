import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
  const [character, setCharacter] = useState();
  const id = props.match.params.id;
  useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, species, gender, origin, image, episode, created} = character;
  return (
    <div className="save-wrapper">
      <div className="character-card">
        <img src={image} alt={name}/>
        <h2>Name:{name}</h2>
        <h3>Species:{species}</h3>
        <h3>Gender:{gender}</h3>
        <h3>Origin:{origin.name}</h3>
        <h3>Episodes: {episode.length}</h3>
        <h3>Created at: {created}</h3>
      </div>
    </div>
  );
}

export default Character;
