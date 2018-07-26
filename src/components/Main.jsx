import React from "react";
import Form from "./Form";
import Profile from "./Profile";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Game from "./Game";

const Main = props => {
  return (
    <BrowserRouter>
       <div>
         <Route exact path="/" component={ Form } />
         <Route path={"/Drink/:drink_id"} component={ Profile } />
         <Route path="/Game" component={ Game }/>
       </div>
     </BrowserRouter>
   )
  }


export default Main;
