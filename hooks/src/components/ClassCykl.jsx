import React, { Component } from "react";


class ClassCykl extends Component {

    state = {
        todos:[],
        limit:10,
        page:1,
    }

    async componentDidMount() { 
        console.log('jest startowe zaladowanie -- > Klasowy')
        this.fetchToDoDate();
    }
    
    async componentDidUpdate(prevProps,prevState) {
            if(prevState.limit !== this.state.limit) {
                console.log('jest updated -- > Klasowy')
                this.fetchToDoDate()
            }
    }

    componentWillUnmount(){
        // console.log('jest odmontowanie -- > Klasowy')
        this.setState({ todos:[] })
    }
    

    fetchToDoDate = async () => {
        try {
            const {limit,page} = this.state

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);

            const data = await response.json();
        
            this.setState((prevState)=> ({...prevState, todos: data}))
        } catch (error) {
            console.log('errr',error)
        }
    }

    addMoreToDo = () => {
        this.setState(prevState => ({...prevState, limit: prevState.limit + 10}))
    }

    render(){
        return (
            <div>
                <h1>Modal z zadaniami {this.state.limit}</h1>
                <ul>
                    {this.state.todos.map(el => (<div key={el.id}>{el.id} - {el.title} <span style={{background:'grey'}}> status: {JSON.stringify(el.completed)}</span></div>))}
                </ul>
                <button onClick={this.addMoreToDo}>Zaladuj 10 wiecej</button>
            </div>
        )
    }

}

export default ClassCykl;