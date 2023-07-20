import {useRef,useEffect} from 'react'

export const InputFocus = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    } ,[])


    return(
        <input ref={inputRef} type="text"/>
    )
}