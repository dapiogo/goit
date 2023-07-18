export const useLocalStorage = () => {
    const handleSetLocalStorage = ({key,value}) => {
        localStorage.setItem(key,JSON.stringify(value))
    }

    const handleDeleteLocalStorage = ({key}) => {
        localStorage.removeItem(key)
    }

    const handleGetLocalStorage = ({key}) => JSON.parse(localStorage.getItem(key))


    return {
        handleSetLocalStorage,
        handleDeleteLocalStorage,
        handleGetLocalStorage
    }
}