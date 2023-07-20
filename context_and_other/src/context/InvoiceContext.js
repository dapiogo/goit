import { useState } from "react";
import { createContext } from "react";

const InvoiceContext = createContext();

const InvoiceProvider = ({children}) => {
    const [countInvoices,setCount] = useState(60);

    const handleChangeCount = (value) => {
        setCount(value)
    }
 
    return (
        <InvoiceContext.Provider value={{ countInvoices, handleChangeCount }}>
            {children}
        </InvoiceContext.Provider>
    )
}

export { InvoiceContext, InvoiceProvider}