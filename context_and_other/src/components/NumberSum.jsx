import {useState, useMemo} from 'react';

export const NumberSum = ({numbers}) => {
    const [name,setName] = useState('dawid')
    // const sum = () => { 
    //     return numbers.reduce((acc,num) => acc + num,0);
    // }

    const sum = useMemo(() => {
        return numbers.reduce((acc,num) => acc + num,0);
    },[numbers])


    // const sum = useMemo(() => a +b / 100)

    console.log('NumberSum')

    return (
        <div>
            <p>{numbers.join(', ')}</p>
            <div>suma {sum}</div>
            <button onClick={()=> setName('Paulina')}>Click</button>
        </div>
    )
}