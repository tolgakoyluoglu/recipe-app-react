import React from 'react'

const Register = () => {
    return (
        <div className="wrap">
            <div className="rowParent">
                <h5 className="logintitle">Register Here</h5>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Name" id="name" type="text" className="validate"></input>
                            <label htmlFor="name"></label>
                        </div>
                    </div>

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
                </form>
            </div>
        </div>
    )
}

export default Register;