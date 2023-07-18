import React, { Component } from "react"; 

class ClassFirst extends React.Component {

    state = {
        members: [{id:1,name:'Basia',job:"Programmer"},{id:1,name:'Tomek',job:"UX Designer"}],
        isLoading: false,
        isOpenMessage: false,
        teachers:[]
    }

    handleAddNewMember = () => {
        this.setState(prevState => ({...prevState, members:[...prevState.members, {id:'xx',name:'Janka',job:'Elektryk'}]}))
    }

    render(){
        return (
            <div>
                {this.state.members.map(el => (<div>{el.name}</div>))}
                <button onClick={this.handleAddNewMember}>Dodaj mi do membersow nowa osobe</button>
            </div>
        )
    }
}

export default ClassFirst;