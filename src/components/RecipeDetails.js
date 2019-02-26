import React, { Component } from 'react'
import axios from 'axios';


export default class RecipeDetails extends Component {

    state = {
        recipes: []
    }
    componentDidMount = () => {
        axios.get(`http://api.yummly.com/v1/api/recipe/${this.props.match.params.id}?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&`)
            .then(res => {
                this.setState({
                    recipes: res.data,
                })
                console.log(res.data)
            })
    }

    render() {
        const recipe = this.state

        return (
            <div className="post card">
                <div className="card-content" key={recipe.recipes.id}>
                    <span className="card-title">{recipe.recipes.name}</span>
                    <img src={recipe} alt={recipe.recipes.name}></img>
                    <p>Ingredients: {recipe.recipes.ingredientLines}</p>
                    <p>Rating: {recipe.recipes.rating}</p>
                    <p>Total time to cook: {recipe.recipes.totalTime}</p>
                </div>
            </div>
        )
    }
}

