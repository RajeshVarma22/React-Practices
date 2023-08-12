import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

let ContactApp = () => {
    let [state , setState] = useState({
        selectedContact : {}
    })

    let recieveContact = (contactInfo) => {
        setState( (state) => ({
            ...state,
            selectedContact : contactInfo
        }));
    }

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.selectedContact)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-primary"><em><b>Contacts</b></em></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore velit, fugiat, minus impedit voluptas facere quam praesentium dolores amet quisquam reiciendis rem architecto odio.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <ContactList contactForParent={recieveContact}/>
                    </div>
                    <div className="col-4">
                        <ContactCard selectedContactCard = {state.selectedContact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactApp;