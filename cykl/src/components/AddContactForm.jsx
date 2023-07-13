import React, { Component } from "react";


class AddContactForm extends Component {

    state = {
        name:"",
        phoneNumber:""
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState((prevState) => ({...prevState, [name]: value}))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.phoneNumber)
        this.setState({name:"",phoneNumber:""})
    }


    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="imie" />
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Numer" />
                <button type="submit">Dodaj kontakt</button>
            </form>
            </div>
        )
    }
}

export default AddContactForm;