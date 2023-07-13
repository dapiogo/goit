import React, { Component } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";

class ContactBook extends Component {

    state = {
        contacts: [{ id:'xxx23234', name:'Dawid', phoneNumber:'234234234' }]
    }

    
    addContact = (name, phoneNumber) => {
        const newContact = { name, phoneNumber, id:`${name}_${phoneNumber}_` }
        this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact]}))
    }

    removeContact = (id) => {
        const updatedContacts = this.state.contacts.filter((el,indexContact) => el.id !== id);
        this.setState({
            contacts: updatedContacts
        })
    }

    componentDidMount(){
        const storedContact = localStorage.getItem('contacts');
        this.setState({
            contacts: JSON.parse(storedContact)
        })
    }

    componentDidUpdate() {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }


    render(){
        return (
            <div>
                <h1>Ksiazka telefoniczna</h1>
                <ContactList contacts={this.state.contacts} removeContact={this.removeContact}/>
                <AddContactForm addContact={this.addContact}/>
            </div>
        )
    }
}

export default ContactBook;