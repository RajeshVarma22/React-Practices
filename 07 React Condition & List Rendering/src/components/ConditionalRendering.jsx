import React, { useState } from "react";

let ConditionalRendering = () => {

    let[state , setState] = useState({
        isLoggedIn : false
    })

    let logIn = () => {
        setState( (state) => ({
            isLoggedIn : true
        }))
    }

    let logout = () => {
        setState( (state) => ({
            isLoggedIn : false
        }))
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-center text-white">
                                <h1>Rover Craft</h1>
                            </div>
                            <div className="card-body">
                                {
                                    state.isLoggedIn?
                                        <p className="h3">Please Login Here</p>:
                                        <p className="h3">Welcome Mr . Rajesh Varma</p>
                                }
                                {
                                    state.isLoggedIn ? 
                                    <button onClick={logout} className="btn btn-danger">LogOut</button> :
                                    <button onClick={logIn} className="btn btn-success">LogIn</button>
                                }
                                                                        
                                                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}


export default ConditionalRendering;