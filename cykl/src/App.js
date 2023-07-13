import './App.css';
import React, { Component } from "react";
import ShouldComponent from './components/ShouldComponent';
import GetSnapshotBeforeUpdate from './components/GetSnapshotBeforeUpdate';
import ComponentDidUpdate from './components/ComponentDidUpdate';
import ContactBook from './components/ContactBook';
// import DidMountComponent from './components/DidMountComponent';
// import { FnTest } from './components/Fn';
// import GetDerivedStateFromProps from './components/GetDerivedStateFromProps';

class App extends Component {

  state = {
    users: ["Piotr", "Jacek"],
    isOpen: true
  };

  addNewUser = (newUser) => {
    this.setState((prevState) => ({ users: [...prevState.users, newUser] }));
  };

  open = () =>
    this.setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));


    render() {
      return (
        <div className="App">
            {/* <GetDerivedStateFromProps users={['michal','jacek','basia']}/> */}
            {/* <DidMountComponent/> */}
            {/* <ShouldComponent users={this.state.users} addNewUser={this.addNewUser} /> */}
            {/* <GetSnapshotBeforeUpdate users={this.state.users} addNewUser={this.addNewUser}/> */}
            {/* <ComponentDidUpdate users={this.state.users} addNewUser={this.addNewUser}/> */}
            <ContactBook/>
          
        </div>
      )
    }

}

export default App;
