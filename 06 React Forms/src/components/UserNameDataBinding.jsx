import React, { useState } from "react";


let UserNameDataBinding = () => {
    let [state , setState] = useState( {
        username : 'Rajesh'
    })

    let toUpdateInput = (event) => {
        setState((state) => ({
            username : event.target.value
        }));
    };
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">
                                <h1>User Name</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input 
                                        value={state.username}
                                        onChange = {toUpdateInput}
                                        type="text" className="form-control" />
                                    </div>
                                    <h3>{state.username}</h3>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default UserNameDataBinding;