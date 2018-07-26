import React from "react";

class Game extends React.Component {
  constructor() {
    super();
    this.state= {
      drink: {},
      listOfIng: [],
    }
    this.countIngredients = this.countIngredients.bind(this);
  }

  countIngredients() {
    let acc = [];
    Array(15).fill(0).forEach((item, index) => {
      if (this.state.drink[`strIngredient${index+1}`]){
        acc.push(this.state.drink[`strIngredient${index+1}`]);
      }
    });

    let slow = []
    acc.forEach( ingredient => {
      setTimeout( () => {
        slow.push( ingredient )
        this.setState({listOfIng: slow})
      }, 1000)
    })
  }

  componentDidMount() {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          drink: res.drinks[0],
        })
        this.countIngredients()
      })
  }

  render() {
    let ingredients = this.state.listOfIng
    return(
      <div>
        <section className="time">

        </section>
        <section className="question">
          <h1>Guess the drink!</h1>
          <ul>
            {
              this.state.listOfIng.map( (ingredient,index) => {
                return <li key={index}>{ingredient}</li>
              })
            }
          </ul>
        </section>
        <form>
          <input type="text" name="answer"/>
          <input type="submit" value="Go!"/>
        </form>
      </div>
    )
  }

}

export default Game;
