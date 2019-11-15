import React from "react";
import styled from "styled-components"

const RickHeader = styled.header`
text-align: center;

`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <RickHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </RickHeader>
    </section>
  );
}
