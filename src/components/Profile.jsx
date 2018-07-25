import React from "react";
import Form from "./Form";
import Drink from "./Drink";

class Profile extends React.Component {
  constructor() {
    super();
    this.state= {
      drinkObj: {},
    }
  }
  componentDidMount() {
    let drinkId = this.props.match.params.drink_id
    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    fetch( url )
      .then( res => res.json() )
      .then( res => {
        console.log(res);
        this.setState({
          drinkObj: res.drinks[0],
        })
      })
  }
  render() {
    let d = this.state.drinkObj;
    return(
      <div>
        <h1>{d.strDrink}</h1>
        <dl class="row">
          <dt class="col-sm-3">Glass</dt>
          <dd class="col-sm-9">{d.strGlass}</dd>
        </dl>
      </div>

    )
  }
}

export default Profile;
