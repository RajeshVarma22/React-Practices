import React, { useState } from "react";

let LoginForm = () => {
    let [state , setState] = useState({
        user : {
            username : '',
            password : ''
        }
    });
    let {user} = state;

//     let usernameChange = (event) => {
//         setState( (state) => ({
//             user : {
//                 ...state.user,
//                 username : event.target.value
//             }
//         }));
//     }

//     let changePassword = (event) => {
//         setState( (state) => ({
//             user : {
//                 ...user,
//                 password : event.target.value
//             }
//         }))
//     }


    let inputField = (event) =>{
        setState( (state) => ({
            user : {
                ...user,
                [event.target.name] : event.target.value
            }
        }));
    }

    let submitInfo = (event) => {
        event.preventDefault();
        console.log(user)
    }

    return(
        <React.Fragment>
            <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center bg-info text-white">
                                <h1>Login Form</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitInfo}>
                                    <div className="mb-3">
                                        <input 
                                        name = "username"
                                        value={user.username}
                                        // onChange = {usernameChange}
                                        onChange = {inputField}
                                        type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                        name = "password"
                                        value={user.password}
                                        // onChange = {changePassword}
                                        onChange = {inputField}
                                        type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-success" value="LogIn"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default LoginForm;