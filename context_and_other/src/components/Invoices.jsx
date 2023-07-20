import { useContext } from "react"
import { InvoiceContext, InvoiceProvider } from "../context/InvoiceContext"


const CountInvoices = () => {
    const {countInvoices} = useContext(InvoiceContext);
    return (
        <div>Ilosc faktur: {countInvoices}</div>
    )
}

export const Invoices = () => {
    return (
        <InvoiceProvider>
            <CountInvoices/>
            <h1>Drugi komponent</h1>
            <h1>Trzeci komponent komponent</h1>
        </InvoiceProvider>
    )
}