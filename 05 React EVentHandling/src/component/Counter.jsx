import React, { useState } from "react";


let Counter = () => {
    let [state , setState] = useState({
        count : 0
    });

    let increment = () => {
        setState( (state) => ({
            count : state.count+1
        }));
    };

    let decrement = () => {
        setState( (state) => ({
            count : state.count-1
        }));
    };

    let reset = () => {
        setState( (state) => ({
            
            count : state.count * 0
        }));
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h1>Counter</h1>
                            </div>
                            <div className="card-body">
                                <h1 className="display-1  text-center">{state.count}</h1>
                                <div className="text-center">
                                    <button className="btn btn-success btn-sm" onClick={increment}>Increment</button>
                                    <button className="btn btn-warning btn-sm" onClick={decrement}>Decrement</button>
                                    <button className="btn btn-danger btn-sm" onClick={reset}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Counter;