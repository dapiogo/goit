import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { products } from "../consts/products";

export const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [emptyData, setEmptyData] = useState(false)
   
    const findProduct = products.find(el => el.productID === Number(id));

    const {productName, productID, price } = findProduct

    const handleBack = () => {
        navigate('/products',{ state: {
            code:'Product2343424'
        } })
    }

    useEffect(()=> {
        //dane z api
        setEmptyData(true)
    },[])



    if(emptyData) {
        return <Navigate to="/contact" replace/>
    }

    return (
        <div>
            <div onClick={handleBack}>Wroc do produktow</div>
            <Link to="/products">Wroc do produktow</Link>
            <div>Moj produkt to : {productName} ktory ma id {productID} z cena : {price}</div>
        </div>
    )
}