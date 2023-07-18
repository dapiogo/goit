import { useState } from "react"
import { useToggleMessageBox } from "../hooks/useToggleMessageBox";

export const LegitStateFc = () => {

    const { toggle, isOpenMessageBox} = useToggleMessageBox()

    const [members,setMembers] = useState([{id:1,name:'Basia',job:"Programmer"},{id:2,name:'Tomek',job:"UX Designer"}]);
    const [isLoading,setIsLoading] = useState(false);
    const [teachers,setTeachers] = useState([])
    const [dog,setDog]= useState({
        name:'Tocha',
        breed:'Sznaucer',
        years:12
    })
    const [name,setName] = useState('Jacek')

    const handleAddNewMember = () => {
        setMembers(prevState => [...prevState, {id:3,name:'Jacek',job:"PM"}])
    }



    const handleReplaceDog = () => {
        setDog({
            name:'Azor',
            breed:'Dog Argentynski',
            years:5
        })
    }

    const handleChangeName = () => {
        if(name === 'Paulina') {
            setName('Kasia')
        }

        if(name === 'Jacek') {
            setName('Piotr')
        }
        
    }


    return (
        <div>
            <div>{members.map(el => (<div key={el.id}>{el.name} - {el.job}</div>))}</div>
            <button onClick={toggle}>message</button>
            {isOpenMessageBox && <div>Moj wiadomosc</div>}
            <button onClick={handleAddNewMember}>Dodaj mi do membersow nowa osobe</button>
            <div>
                <p>imie pieska: {dog.name}</p>
                <p>rasa pieska: {dog.breed}</p>
                <p>wiek pieska: {dog.years}</p>
                <button onClick={handleReplaceDog}>Zamien pieska</button>
            </div>
            <div>
                {name === 'Jacek' && <div>Siema Jacek</div>}
                <p>imie: {name}</p>
                <button onClick={handleChangeName}>Zamien</button>
            </div>
        </div>
    )
}

