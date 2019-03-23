import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = this.login.bind(this)
    onChange = this.onChange.bind(this)

    login(e) {
        e.preventDefault()
        axios.post('http://recipe-react.test/api/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="wrap">
                <div className="rowParent">
                    <h5 className="logintitle">Login Here</h5>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Email" id="email" type="email" className="validate" name="email" onChange={this.onChange}></input>
                                <label htmlFor="email"></label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Password" id="password" type="password" className="validate" name="password" onChange={this.onChange}></input>
                                <label htmlFor="password"></label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.login} name="action">Submit
            </button>
                        <a className="registerLink" href="/register">Register</a>
                    </form>
                </div>
            </div>
        )
    }
}
