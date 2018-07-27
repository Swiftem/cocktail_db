import React from "react";
import Form from "./Form";
import Drink from "./Drink";

class Profile extends React.Component {
  constructor() {
    super();
    this.state= {
      drinkObj: {},
    }
    this.listIngredients = this.listIngredients.bind(this);
  }

  listIngredients(d) {
    let response = []
    for (let i = 1; i<16; i++ ) {
      if (d[`strIngredient${i}`]!== "") {
        response.push(<dd className="col-sm-9" key={i}>{d[`strIngredient${i}`]}</dd>)
      }
    }
    return response;
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
        <img src={d.strDrinkThumb} alt={d.strDrink} class="img-thumbnail"/>
        <dl className="row">
          <dt className="col-sm-3">Glass</dt>
          <dd className="col-sm-9">{d.strGlass}</dd>
          <dt className="col-sm-3">Instructions</dt>
          <dd className="col-sm-9">{d.strInstructions}</dd>
          <dt className="col-sm-3">Ingredients</dt>
          { this.listIngredients(d)}
        </dl  >
      </div>

    )
  }
}

export default Profile;
