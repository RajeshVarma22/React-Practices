import React, { useState } from "react";


let WishMessage = () => {

    let [state , setState] = useState({
        message : "Hello"
    });
    
    let Gdmrng = () =>{
        setState( (state) => ({
            message : "Good Morning"
        }));
    };

    let gdevng = (value) => {
        setState( (state) => ({
            message : value
        }));
    }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">
                                <h1>Wish Message</h1>
                            </div>
                            <div className="card-body">
                                <h1 className="display-1">{state.message}</h1>
                                <button onClick={Gdmrng} className="btn btn-success btn-sm">Good Mrng</button>
                                <button onClick={() => {gdevng("Good Afternoon")}} className="btn btn-warning btn-sm">Good Aftrnoon</button>
                                <button onClick={() => {setState( (state) => ({message:"Good Evening"}))}} className="btn btn-danger btn-sm">Good Evng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default WishMessage;