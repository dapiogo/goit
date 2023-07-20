import { useRef } from 'react'


export const Ref = () => {
    const exampleRef = useRef(null);
    const myCount = useRef(null)


    console.log('renderuje komponent ?')

    const insideRef = () => {
        console.log(exampleRef.current.children[0],'h1');
        console.log(exampleRef.current.children[1],'p');
        console.log(exampleRef.current.children[2],'button');

        exampleRef.current.children[2].style.background = 'blue'
    }

    const add = () => {
        console.log(myCount.current)
    }

    return (
        <div ref={exampleRef}>
            <h1>uzycie useRef</h1>
            <p>Przykladowy tekst</p>
            <button onClick={insideRef}>Kliknij</button>
            <div ref={myCount}></div>
            <button onClick={add}>dodaj</button>
        </div>
    )
}