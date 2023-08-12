import React, { useState } from "react";

let ChildComponent = (props) => {

    let [state , setState] = useState({
        location : "Location : Child"
    });

    let sender = () => {
        props.recieverRequest(state.location)
    }

    return(
        <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <div className="card bg-info text-dark">
                        <div className="card-body">
                            <h1>Iam Child Component</h1>
                            <h1>Iam Form {props.comingFrom}</h1>
                            <button className="btn btn-danger" onClick={sender}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChildComponent;