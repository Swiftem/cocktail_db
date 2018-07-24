import React from "react";

class Form extends React.Component {

  constructor() {
    super();
    this.state= {
      ingredients: [],
    }
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
      <div>
        Forms
        <h1>Lookup any Star Wars Character!</h1>
        <form onSubmit= { this.handleSubmit }>
          <select name="ingredient" onChange={ this.handleSelect } >
            {
              this.state.ingredients.map((ingredient) => {
                return (
                  <option value={ingredient}>{ingredient}</option>
                )
              })
            }
          </select>
          <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

export default Form;
