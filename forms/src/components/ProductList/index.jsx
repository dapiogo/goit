import React, { Component } from "react"; 


class ProductList extends Component {
    render(){
        return (
            <div>
                <ul>
                 {this.props.products.map(({productName, count }, index) => (
                    <li key={index}>{productName} --- {count} <button onClick={()=> this.props.deleteProduct(index)}>usun</button></li>
                 ))}
                </ul>
            </div>
        )
    }
}

export default ProductList