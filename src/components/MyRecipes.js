import React, { Component } from 'react'
import Axios from 'axios';

export default class MyRecipes extends Component {
    state = {
        recipe: []
    }

    deleteRecipe = (id) => {
        Axios.post('http://recipe-react.test/api/delete', id)
            .then(res => {
                console.log(res)
            })
        console.log(id)
    }

    componentDidMount() {
        Axios.get('http://recipe-react.test/api/showrecipe')
            .then(res => {
                console.log(res)
                this.setState({
                    recipe: res.data
                })
            })
    }

    render() {
        return (
            <div className="wrap">
                <h4>My Saved Recipes</h4>
                {this.state.recipe.map(item => {
                    return <div className="hej">
                        <li key={item.id}>{item.label}</li>
                        <button onClick={() => this.deleteRecipe(item.id)}>Delete</button>
                    </div>
                })}
            </div>
        )
    }
}
