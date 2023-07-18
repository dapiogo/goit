import { useEffect } from "react";
import { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useToggleMessageBox } from "../hooks/useToggleMessageBox";

export const FCCykl = () => {
    const [todos,setTodos] = useState([]);
    const [limit,setLimit] = useState(10);
    const [page,setPage] = useState(1);
    const [message,setMessage] = useState('');
    const {toggle,isOpenMessageBox} = useToggleMessageBox()
    const {handleSetLocalStorage,handleDeleteLocalStorage} = useLocalStorage();

    const addMoreToDo = () => {
        setLimit(prevLimit => prevLimit + 10)
    }

    //zaladowanie na wstepie do komponentu musi byc pusta tablica w useEffect,
    //jezeli jest pusta tablica to jest traktowany jak componentDidMount

    useEffect(()=> {
        console.log('moj useefect na wstepie ---> Funkcyjny');
        fetchToDoDate()
    },[])

        //zmiana czegos ( logiki wewnatrz kiedy zmieni sie jakas wartosc: props,state,var)
        //jezeli w tablicy mamy zaleznosci jakies ktore chcemy zeby byly kontrolowane i po tym byla zmiana to do useEffect dajemy do tablicy dana zaleznosc
    
    useEffect(()=> {
    
        if(limit !== 10) {
            console.log('zmieniaj mi komponent jezeli bedzie sie zmieniac wartosc limit', limit)
            fetchToDoDate()
        }

    },[limit])


    useEffect(()=> {
        if(todos.length > 20 && limit > 40) {
            setMessage('Masz juz powyzej 20 todos wiec zacznij pracowac')
        }
    },[todos, limit])

    //ondmontowanie  componentWillUnmount
    useEffect(()=> {
        return () => {
            console.log('odmontowanie')
            setTodos([])
        }
    },[])

   const fetchToDoDate = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);

            const data = await response.json();
        
            setTodos(data)
        } catch (error) {
            console.log('errr',error)
        }
    }


    const setLocalStorage = () => {
        handleSetLocalStorage({key:'mojKlucz',value: {name:'Piotr'}})
    }


  

    return (
        <div>
            <h1>Cykl funkcyjny</h1>
            <button onClick={setLocalStorage}>Ustaw LocalStorage</button>
            <button onClick={()=> handleDeleteLocalStorage({key:'mojKlucz'})}>Usun LocalStorage</button>
            <button onClick={toggle}>Otworz wiadomosc</button>
            {isOpenMessageBox && (<div> Moja wiadomosc</div>)}
            {message && <h2>{message}</h2>}
            <div>
                <h1>Modal z zadaniami {limit}</h1>
                <ul>
                    {todos.map(el => (<div key={el.id}>{el.id} - {el.title} <span style={{background:'grey'}}> status: {JSON.stringify(el.completed)}</span></div>))}
                </ul>
                <button onClick={addMoreToDo}>Zaladuj 10 wiecej</button>
            </div>
        </div>
    )
}