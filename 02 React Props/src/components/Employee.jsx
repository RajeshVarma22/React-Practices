import React from "react";

class  Employee extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h2>Welcome to employee component</h2>
                        <h2>Name : {this.props.name}</h2>
                        <h2>Age : {this.props.age}Yrs</h2>
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}

export default Employee;