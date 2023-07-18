import { useState } from "react"

export const FirstStateFC = () => {

    //tak nie robimy bo mozemy hooka useState dzielic na wiecej rzeczy i nie renderujemy wszystkiego tylko to co akurat chcemy uzycie w LegitStateFc.
    const [state, setState] = useState({
        members: [{id:1,name:'Basia',job:"Programmer"},{id:1,name:'Tomek',job:"UX Designer"}],
        isLoading: false,
        isOpenMessage: true,
        teachers:[]
    })


    const handleAddNewMember = () => {
        setState(prevState => ({...prevState, members:[...prevState.members, {id:'xx',name:'Janka',job:'Elektryk'}]}))
    }

    return (
        <div>
            {state.members.map(el => (<div>{el.name}</div>))}
            <button onClick={handleAddNewMember}>Dodaj mi do membersow nowa osobe</button>
        </div>
    )
}

