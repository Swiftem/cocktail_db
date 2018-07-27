import React from "react";
import Drink from "./Drink";

class Form extends React.Component {

  constructor() {
    super();
    this.state= {
      ingredients: [],
      results: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    let selection = this.refs["ingredient"].value;
    let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="

    fetch( url + selection )
      .then(res => res.json())
      .then((res) => {
        let filteredDrinks = res.drinks;
        let sixDrinks = filteredDrinks.splice(0, 6);
        this.setState({
          results: sixDrinks,
        })
    });

  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then(res => res.json())
      .then(res => {
        this.setState({
          ingredients: res.drinks.map(ingredient => ingredient.strIngredient1)
        })
      })
  };

  render() {
    return(
      <div class="form-group">
        <h1>Lookup an ingredient!</h1>
        <form onSubmit= { this.handleSubmit }>
          <select name="ingredient" ref="ingredient" class="form-control">
            {
              this.state.ingredients.map((ingredient, index) => {
                return (
                  <option value={ingredient} key={index}>{ingredient}</option>
                )
              })
            }
          </select>
          <button type="submit" class="btn btn-primary">Go</button>
        </form>
        <ol className="results">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {
                  this.state.results.map((result, index) => {
                    return (
                      <Drink
                        imgSrc={result.strDrinkThumb}
                        name={result.strDrink}
                        drinkId={result.idDrink}
                        key={index}
                        history={this.props.history}/>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </ol>
      </div>
    )
  }
}

export default Form;
