import React, { Component } from "react";

//componentDidMount
class ComponentDidUpdate extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  state = {
    isOpen:true
  }

  componentDidMount(prevProps,prevState){
    console.log('pobieranie z local storage i dodanie tych danych do statu')
    // console.log('ustaw mi moj stan na fale ----- componentDidMount')
    this.setState({ isOpen: false })
  }


  componentDidUpdate(prevProps,prevState) {
    console.log('componentDidUpdate------', prevProps, prevState)

    const scrollH = 100;
    if(scrollH > 80) {
        console.log('dodaj notyfikacje')
    }
  }

  handleAddUser = () => {
    this.props.addNewUser("nowy");
  };


  render() {
    console.log("render", this.state);
    return <div>
            <h1>componentDidMount</h1>
            {this.props.users.map((item, index) => (
            <div key={index}>{item}</div>
             ))}
          <button onClick={this.handleAddUser}>Aktualizuj</button>
        </div>;
  }
}

export default ComponentDidUpdate;