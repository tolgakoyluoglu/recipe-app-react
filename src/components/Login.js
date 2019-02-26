import React from 'react'

const Login = () => {
    return (
        <div className="rowParent">
            <h5 className="logintitle">Login Here</h5>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Email" id="email" type="email" className="validate"></input>
                        <label htmlFor="email"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Password" id="password" type="password" className="validate"></input>
                        <label htmlFor="password"></label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                </button>
                <a className="registerLink" href="/register">Register</a>
            </form>
        </div>
    )
}

export default Login;