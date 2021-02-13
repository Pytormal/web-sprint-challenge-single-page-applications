import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Pizza from './components/Pizza'


const App = () => {
  return (
    <div ClassName="App">
      <h1>Lambda Eats</h1>
      <p>Welcome to the Pizza Parlor of your dreams!</p>

      <nav>
        <Link to="/">Home </Link>
        <Link to="/pizza">Order Here </Link>
      </nav>
  

    <Switch>
        <Route path="/pizza">
          <Pizza/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> 
    

       </div >
  );
};
export default App;
