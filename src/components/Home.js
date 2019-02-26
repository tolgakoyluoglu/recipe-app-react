import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'http://api.yummly.com/v1/api/recipes?_app_id=69e22b22&_app_key=9975f783a5f500b7a258d19dbfc63ad4&q='

export default class Home extends Component {
    state = {
        recipes: [],
    }
    getRecipes = (query) => {
        axios.get(`${baseUrl}${query}`)
            .then(res => {
                console.log(res.data.matches)
                this.setState({
                    recipes: res.data.matches
                })
            })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.getRecipes(this.query.value);
        e.currentTarget.reset();
    };

    render() {
        const { recipes } = this.state
        const recipeList = recipes.map(recipe => {
            return (
                <div className="post card">
                    <Link to={{ pathname: '/details/' + recipe.id }}>
                        <div className="card-content" key={recipe.id}>
                            <span className="card-title">{recipe.recipeName}</span>
                            <img src={recipe.imageUrlsBySize[90]} alt={recipe.recipeName}></img>
                            <p>Rating: {recipe.rating}</p>
                        </div>
                    </Link>
                </div>
            )
        })

        return (
            <div className="container">
                <form className="searchForm" onSubmit={this.handleSubmit}>
                    <input type="text" name="search" ref={input => (this.query = input)} placeholder="Search for a recipe ..."></input>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
                {recipeList}
            </div>
        )
    }
}
