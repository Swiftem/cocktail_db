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
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={this.props.imgSrc} alt={this.props.name}/>
            <div className="card-body">
              <h5 className="card-title text-center">{this.props.name}</h5>
              <button type="submit" onClick={this.getIngredients} className="btn btn-info btn-block">Click here for profile</button>
            </div>
          </div>
        </div>
    )
  }
}

export default Drink;
