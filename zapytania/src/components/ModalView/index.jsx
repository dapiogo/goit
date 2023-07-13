import React, { Component } from "react";


class Modal extends Component {

    state = {
        todos:[],
        limit:10,
        page:1,
    }

   async componentDidMount() {
    // jak klikne otworz modal to wchodzi tutaj poniewaz jest to funkcja startujaca i ona ma w srodku funkcje z pobieraniem zadan 
        this.fetchToDoDate();
        console.log('przy starcie montowania komponentu')
    }

    async componentDidUpdate(prevProps,prevState) {
        //jezeli sie zmieni state lub dostaniemy nowe propsy ta funkcja jest odpalana
        // console.log('update per limit')
//10 - prevState -> aktualny state -> 10 
        if(prevState.limit !== this.state.limit) {
            console.log('aktualizuj mi dane i pobieraj fetcha')
            this.fetchToDoDate()
        }

        // this.fetchToDoDate()
    }


    componentWillUnmount(){
        // console.log('kiedy zamykam moj modal wyczysc moj state z todos')
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
        console.log('dodaj wiecej zadan')
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


class ModalView extends Component {
    // ModalView - jako strona ustawien uzytkownika 
    state = {
       isModalOpen:false
    }



    toggleModal = () => {
        this.setState((prevState) => ({isModalOpen: !prevState.isModalOpen}))
    }

    render(){
        return (
            <div>
                 <h1>Komponenty z ustawieniami etc</h1>
                {!this.state.isModalOpen && <button onClick={this.toggleModal}>moje zadania w pracy</button>}
                {this.state.isModalOpen && ( 
                    <div>
                        <Modal/>
                        <button onClick={this.toggleModal}>Zamknij modal</button>
                    </div>
                 )}
            </div>
        )
    }
}

export default ModalView;