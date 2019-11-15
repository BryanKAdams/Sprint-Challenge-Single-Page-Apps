import React from "react";
import styled from 'styled-components'
import {Link} from "react-router-dom"

const CharactersDiv = styled.div`
display: flex;
width: 25%;
flex-direction: row;

`
const SingleCharacter = styled.div`
width: 100%;
border: 1px solid black;
`
const CharacterImage = styled.img`
max-width: 100%;
`

export default function CharacterCard(props) {
  return <CharactersDiv className="character-list">
    <SingleCharacter className="character" key={props.character.id}>
      <CharacterImage src={props.character.image}></CharacterImage>
      <h2>{props.character.name}</h2>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Origin: {props.character.origin.name}</p>
      {props.character.type !== "" ? (<p>Type: {props.character.type}</p>):(<></>)}
      <Link to={`/characters/${props.character.id}`}><button>Details</button></Link>
    </SingleCharacter>
</CharactersDiv>
}
