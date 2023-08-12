import React, { useState } from "react";
import ContactService from "../services/ContactService";

let ContactList = (props) => {

    let [state , setState] = useState({
        contacts : ContactService.getContactList()
    });

    let {contacts} = state;

    let clickOnContact = (contact) => {
        // alert(JSON.stringify(contact))
        props.contactForParent(contact)
    }

    return(
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-danger">
                    <h1 className="text-light text-center"><b>Contact List</b></h1>
                </div>
                <div className="card-body">
                    <table className="table table-hover text-center table-striped table-info">
                        <thead className="text-primary text-center ">
                            <tr>
                                <th className="bg-dark text-light">UID</th>
                                <th className="bg-dark text-light">NAME</th>
                                <th className="bg-dark text-light">EMAIL</th>
                                <th className="bg-dark text-light">PHONE</th>
                                <th className="bg-dark text-light">LOCATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.length > 0 && contacts.map( contact => {
                                    return(
                                        <tr key={contact.login.uuid} onClick={() => {clickOnContact(contact)}}>
                                            <td>{(contact.login.uuid).substring(contact.login.uuid.length-5)}</td>
                                            <td>{contact.name.title} {contact.name.first} {contact.name.last}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.location.country}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </React.Fragment>
    )
}

export default ContactList;