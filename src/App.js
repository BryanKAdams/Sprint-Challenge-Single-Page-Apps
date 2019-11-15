import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import Navigation from "./components/Navigation"
import Character from "./components/Character"

export default function App() {
  return (
    <main>
      <Header />
      <Navigation/>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters/" component={CharacterList} />
      <Route exact path="/characters/:id" render={props => <Character {...props}/>} />
    </main>
  );
}
