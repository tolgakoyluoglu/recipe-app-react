import React, { Component } from 'react'
import axios from 'axios';


export default class RecipeDetails extends Component {

    state = {
        recipes: [],
        images: [],
        ingredients: [],
        links: [],
    }
    componentDidMount = () => {
        axios.get(`http://api.yummly.com/v1/api/recipe/${this.props.match.params.id}?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&`)
            .then(res => {
                this.setState({
                    recipes: res.data,
                    images: res.data.images[0],
                    ingredients: res.data.ingredientLines,
                    links: res.data.source.sourceRecipeUrl
                })
                console.log(res.data.source.sourceRecipeUrl)
            })
    }

    render() {
        const recipe = this.state
        const image = this.state.images
        const ingredient = this.state.ingredients
        const link = this.state.links
        console.log(link)

        return (
            <div className="post card">
                <div className="card-content" key={recipe.recipes.id}>
                    <span className="card-title">{recipe.recipes.name}</span>
                    <img src={image.hostedLargeUrl} alt={recipe.recipes.name}></img>
                    <p>Ingredients:</p>
                    {ingredient.map(item => {
                        return <li>{item}</li>
                    })}
                    <p>Rating: {recipe.recipes.rating}</p>
                    <p>Total time to cook: {recipe.recipes.totalTime}</p>
                    <a href={link}>Link to guide for recipe</a>
                </div>
            </div>
        )
    }
}

