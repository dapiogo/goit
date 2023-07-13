import React, { Component } from "react";

class ContactList extends Component {
    render(){
        return (
            <div>
                {this.props.contacts.map((el, _) => <div key={el.phoneNumber}>{el.name} - {el.phoneNumber} / id: {el.id}
                <button onClick={() => this.props.removeContact(el.id)}>Usun</button>
            </div>)}
            </div>
        )
    }
}

export default ContactList