import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent = () => {

    let [state,setState] = useState({
        location : "Location : Parent",
        location2 : ''
    })

    let {location} = state;

    let recieverData = (data) => {
        setState( (state) => ({
            ...state,
            location2 : data
            
        }));
    }
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <div className="card shadow-lg">
                            <div className="card-body bg-primary text-white">
                                <h1>Iam Parent Component</h1>
                                <h1>{state.location2}</h1>
                                <ChildComponent comingFrom = {location} recieverRequest = {recieverData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ParentComponent;