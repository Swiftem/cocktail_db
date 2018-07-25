import React from "react";
import Form from "./Form";

class Drink extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      id: this.props.drinkId,
      strInstructions: [],
    }
    this.getIngredients = this.getIngredients.bind(this)
  }

  getIngredients(event) {
      this.props.history.push(`/Drink/${this.props.drinkId}`);
  }

  render() {
    return(
      <li className="drink name">
        {this.props.name}
        <img src={this.props.imgSrc} width="100" alt={this.props.name}/>
        <button type="submit" onClick={this.getIngredients}>Click here for profile</button>
      </li>
    )
  }
}

export default Drink;
