import React, { Component } from "react";
import { nanoid } from "nanoid";


//niekontrolowany
class LoginForm extends Component {

    nameNanoId = nanoid();

  sendToBackend = (data) => {
    console.log('wysylam moje dane do bazy danych',data)
  }

  handleSubmit = (e) => {
    e.preventDefault();
   
    const formHTML = e.currentTarget;

    const name = formHTML.elements.name.value;
    const surname = formHTML.elements.surname.value;
    const age = formHTML.elements.age.value;

    this.sendToBackend({name,surname,age})

  }
 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameNanoId}>Name</label>
       <input id={this.nameNanoId} type="text" name="name" placeholder="name"/>
       <input type="text" name="surname" placeholder="surname"/>
       <input type="number" name="age" placeholder="age"/>
       <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
