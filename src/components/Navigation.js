import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const SavedList = styled.div`
display: flex;
justify-content: space-evenly;

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

const Navigation = props => (
  <SavedList className="saved-list">
    <NavLink to="/"><PrettyButton>Home</PrettyButton></NavLink>
    <NavLink to="/characters"><PrettyButton>Characters</PrettyButton></NavLink>
  </SavedList>
);

export default Navigation;
