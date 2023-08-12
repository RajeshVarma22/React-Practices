import React, { useState } from "react";


let StudentFun = () => {
    let[state, setState] = useState({
        studentsList : [
            {
                name : "Rajesh",
                village : "Gorantla",
                address : "2/1263 , Shivalayam Colony" 
            },
            {
                name : "Gireesh",
                village : "Gorantla",
                address : "2/1263 , Shivalayam Colony" 
            },
            {
                name : "Murali",
                village : "Kallur",
                address : "Palyam Road" 
            }
        ]
    });
    let {studentsList} = state;{/* Here check destructuring concept is not working.*/}
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                <span>Name : {state.studentsList[0].name}</span>
                <br />
                <span>Village : {state.studentsList[0].village}</span>
                <br />
                <span>Address : {state.studentsList[0].address}.</span>
                <br />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <span>Name : {state.studentsList[1].name}</span>
                <br />
                <span>Village : {state.studentsList[1].village}</span>
                <br />
                <span>Address : {state.studentsList[1].address}.</span>
                <br />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <span>Name : {state.studentsList[0].name}</span>
                <br />
                <span>Village : {state.studentsList[0].village}</span>
                <br />
                <span>Address : {state.studentsList[0].address}.</span>
                <br />
                </div>
            </div>
        </React.Fragment>
    )

}

export default StudentFun;

