import React, { useState } from "react";


let RegistrationForm = () => {

    let[state , setState] = useState({
        user : {
            username : '',
            email : '',
            password : '',
            designation : '',
            bio : '',
            terms : false
        }
    })

    let {user} = state;

    let userUpdate = (event) => {
        setState( (state) => ({
            user : {
                ...state.user,
                [event.target.name] : event.target.value
            }
        }));
    };

    let checkCondition = (event) => {
        setState( (state) => ({
            user : {
                ...user,
                [event.target.name] : event.target.checked
            }
        }))
    }

    let handle = (event) => {
        event.preventDefault();
        console.log(user)
    }

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h3 className="display-3">Registration Form</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handle}>
                                    <div className="mb-3">
                                        <input 
                                        name="username"
                                        onChange={userUpdate}
                                        value={user.username}
                                        type="text" className="form-control" placeholder="user name"/>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                        name="email"
                                        onChange={userUpdate}
                                        value={user.email}
                                        type="email" className="form-control" placeholder="email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                        name="password"
                                        onChange={userUpdate}
                                        value={user.password}
                                        type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="mb-3">
                                        <select 
                                            name = "designation" 
                                            onChange={userUpdate}
                                            value={user.designation}
                                            className="form-control">
                                            <option>Slect language</option>
                                            <option value="Python">Python</option>
                                            <option value="React">React</option>
                                            <option value="Java Script">Java Script</option>
                                            <option value="Bootstrap">Bootstrap</option>
                                            <option value="HTML">HTML</option>
                                            <option value="CSS">CSS</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                        name="bio" 
                                        value={user.bio}
                                        onChange={userUpdate}
                                        rows="04" className="form-control" placeholder="Bio"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                        name="terms" 
                                        onChange={checkCondition}
                                        type="checkbox" className="form-check-input me-2"/> Accept Terms and Conditions
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-success" placeholder="Submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default RegistrationForm;