import { Link, useLocation, useNavigate } from "react-router-dom"
import { Navigation } from "../components/Navigation"
import { products } from "../consts/products"



export const Products = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (id) => {
        navigate(`/products/${id}`)
    }

    console.log(location)

    return (
        <div>
            <Navigation/>
            {/* {products.map(el => {
                
                return (<Link to={String(el.productID)}>{el.productName}</Link>)
            })} */}
            {products.map(el => (
                <div>
                    <div>{el.productName}</div>
                    <button onClick={()=> handleClick(el.productID)}>Przejdz do produktu</button>
                </div>))}
        </div>
    )
}