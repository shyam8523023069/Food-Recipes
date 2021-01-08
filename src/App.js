import React from 'react';
import { RecipesState } from './context/RecipesContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Hero from './components/Hero';
import FullRecipe from "./components/FullRecipe";


const App = () => {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/" component={Hero} />
        <Route path="/recipes/:id" component={FullRecipe} />
      </Router>
    </RecipesState>


  );
};

export default App;
