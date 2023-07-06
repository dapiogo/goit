import React, { Component } from "react";

class Result extends Component {
    render(){
        return (
            <div>
                <h2>Result form</h2>
                <p>name:{this.props.name} </p>
                <p>surname:{this.props.surname} </p>
                <p>age:{this.props.age} </p>
                <p>food:{this.props.food} </p>
                <p>likeReact {this.props.likeReact}</p>
            </div>
        )
    }
}

const LIKE_REACT = {
    YES:'TAK',
    NO:'NIE'
}

const INITIAL_STATE = {
    name:'',
    surname:'',
    age:'',
    agree: false,
    food:'',
    likeReact: null, 
}


//niekontrolowany
class Form2 extends Component {

    state = {
        name:'',
        surname:'',
        age:'',
        agree: false,
        food:'',
        likeReact: null,
    }

    handleChange = (e) => {
        const {name, value, type, checked}= e.target;
        //w inpucie checkbox uzywamy checked jako value

        this.setState((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dane zostaly wyslany ${JSON.stringify(this.state)}`)
        this.setState((prev)=> ({...INITIAL_STATE}))
    }

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor={"labelName"}>Name</label>
                <input id={"labelName"} type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
                <input type="text" name="surname" placeholder="surname" value={this.state.surname} onChange={this.handleChange}/>
            </div>
            <div>
                <input type="number" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange}/>
            </div>
            <label>
                Czy zgadzasz sie na wysylanie newslettera ? 
                <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleChange} />
            </label>
            <div>
                <select name="food" value={this.state.food} onChange={this.handleChange}>
                    <option value="" disabled>Potrawy na wieczor</option>
                    <option value="Frytki">Frytki</option>
                    <option value="Krewetki" >Krewetki</option>
                    <option value="Pierogi" >Pierogi</option>
                </select>
            </div>
            <div>
                <h2>Czy lubisz React ?</h2>
                <label>
                    TAK
                    <input 
                        type="radio" 
                        checked={this.state.likeReact === LIKE_REACT.YES} 
                        name="likeReact" 
                        value={LIKE_REACT.YES}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    NIE
                    <input 
                        type="radio" 
                        checked={this.state.likeReact === LIKE_REACT.NO} 
                        name="likeReact" 
                        value={LIKE_REACT.NO}
                        onChange={this.handleChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        <Result 
            name={this.state.name} 
            surname={this.state.surname} 
            age={this.state.age}  
            food={this.state.food} 
            likeReact={this.state.likeReact}
        />
      </div>
    );
  }
}

export default Form2;
