import React from "react";


let StudentPropFun = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                <h2>Welcome to Student by Props</h2>
                <h3>Iam {props.name}</h3>
                <h3>I have completed {props.course}</h3>
                <h3>Present iam in {props.village} </h3>
                <pre>{JSON.stringify(props)}</pre>
                </div>
            </div>
        </React.Fragment>
    )

}

export default StudentPropFun;