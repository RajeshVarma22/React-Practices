import React from "react";

let ContactCard = (props) => {

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(props.selectedContactCard)}</pre> */}
            {
                Object.keys(props.selectedContactCard).length > 0 &&
                <div className="card shadow-lg">
                <div className="card-header bg-danger">
                    <h1 className="text-white text-center"><b>Contact Info</b></h1>
                </div>
                <div className="card-body bg-warning">
                    <div className="text-center bg-light p-3 br mb-4 shadow-lg">
                        <img src={props.selectedContactCard.picture.large} alt=""  className="shadow-lg"/>
                    </div>
                    <div className="text-dark">
                        <h6><b className="text-primary">Name: </b>{props.selectedContactCard.name.title} {props.selectedContactCard.name.first} {props.selectedContactCard.name.last}</h6>
                        <h6><b className="text-primary">Age: </b>{props.selectedContactCard.dob.age}</h6>
                        <h6><b className="text-primary">Gender: </b>{props.selectedContactCard.gender}</h6>
                        <h6><b className="text-primary">Email: </b>{props.selectedContactCard.email}</h6>
                        <h6><b className="text-primary">Phone: </b>{props.selectedContactCard.phone}</h6>
                        <h6><b className="text-primary">Address: </b>{props.selectedContactCard.location.street.number}, {props.selectedContactCard.location.street.name}, {props.selectedContactCard.location.city}, {props.selectedContactCard.location.state}, {props.selectedContactCard.location.country}, {props.selectedContactCard.location.street.postcode}.</h6>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    )
}

export default ContactCard;