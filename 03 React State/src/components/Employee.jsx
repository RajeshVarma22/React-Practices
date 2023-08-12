import React from "react";

class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : [
                {
                    name : "Rajesh",
                    age : 22
                },
                {
                    name : "Gireesh",
                    age : 21
                },
                {
                    name : "Wilson",
                    age : 27
                },
                {
                    name : "Rock",
                    age : 30
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[0].name}</span>
                        <br/><br/>
                        <span>AGE : {this.state.employees[0].age}</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[1].name}</span>
                        <br/><br/>
                        <span>AGE : {this.state.employees[1].age}</span>
                    </div>
                </div>
                
                    <pre>{JSON.stringify(this.state.employees)}</pre>
            </React.Fragment> 
        )
    }
}

export default Employee;