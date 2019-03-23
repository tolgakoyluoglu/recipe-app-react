import React, { Component } from 'react'
import axios from 'axios';
import MyRecipes from './MyRecipes';
import { Link } from 'react-router-dom';

const baseUrl = 'http://api.yummly.com/v1/api/recipe/';
const apiKey = '?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&'

export default class RecipeDetails extends Component {
    state = {
        recipes: [],
        images: [],
        ingredients: [],
        links: [],
        name: []
    }

    componentDidMount = () => {
        axios.get(`${baseUrl}${this.props.match.params.id}${apiKey}`)
            .then(res => {
                this.setState({
                    recipes: res.data,
                    images: res.data.images[0],
                    ingredients: res.data.ingredientLines,
                    links: res.data.source.sourceRecipeUrl,
                    name: res.data.name
                })
                //console.log(this.state)
            })
    }

    saveRecipe = () => {
        let dbModel = this.constructModel(this.state.recipes)
        console.log(dbModel)
        axios.post(`http://recipe-react.test/api/addrecipe`, dbModel)
            .then(res => {
                console.log(res)
            })
    }

    constructModel = () => {
        let dbModel = {
            recipe_id: this.state.recipes.id,
            label: this.state.recipes.name,
        }
        return dbModel
    }


    render() {
        const recipe = this.state
        const image = this.state.images
        const ingredient = this.state.ingredients
        const link = this.state.links
        const label = this.state.name

        return (
            <div className="wrap">
                <div className="cardContainer">
                    <div className="card-content" key={recipe.recipes.id}>
                        <span className="card-title">{label}</span>
                        <img className="imgdetails" src={image.hostedLargeUrl} alt={label}></img>
                        <p>Ingredients:</p>
                        {ingredient.map(item => {
                            return <li key={item}>{item}</li>
                        })}
                        <p>Rating: {recipe.recipes.rating}</p>
                        <p>Total time to cook: {recipe.recipes.totalTime}</p>
                        <a href={link}>Link to guide for recipe</a>
                        <Link to={{ pathname: '/myrecipes' }}>
                            <button onClick={this.saveRecipe}>Add To Favorite</button>
                        </Link>
                    </div>
                </div>
            </div >
        )
    }
}

