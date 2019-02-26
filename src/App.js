import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import MyRecipes from './components/MyRecipes';
import RecipeDetails from './components/RecipeDetails';
import Register from './components/Register';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/myrecipes' component={MyRecipes} />
          <Route path='/details/:id' component={RecipeDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
