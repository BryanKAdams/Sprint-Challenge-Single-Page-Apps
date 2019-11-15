import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";
import styled from "styled-components"

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`
const PrettyButton = styled.button`
margin: 5px;
border: 1px solid gray;
color: black;
background-color: rgb(255, 255, 255, .6);
width: 100px;
height: 40px;
border-radius: 4px;
text-decoration: none;

`
const ButtonFlex = styled.div`
display: flex;
justify-content: center;

`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter]  = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => {
      
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Rick and Morty", response);
      setCharacter(characters);
    })
    .catch(error => {
      console.log('Server Error', error);
      setPage(page - 1);
    })

  }, [query, page]);
  

  return (
    <section className="character-list">
    <div className="character-list">
    {page !== 1 ? (<ButtonFlex><PrettyButton onClick={() => setPage(page - 1)}>Previous</PrettyButton> <PrettyButton onClick={() => setPage(page + 1)}>Next</PrettyButton> </ButtonFlex>) : (<ButtonFlex><PrettyButton onClick={() => setPage(page + 1)}>Next</PrettyButton></ButtonFlex>)}
    <SearchForm handleInputChange={handleInputChange} query={query}/>
    <StyledDiv>
        {characters.map((character, index) => (
         
            <CharacterCard key={index} character={character}/>
         
        ))}
         </StyledDiv>
      </div>
    </section>
  );
}
