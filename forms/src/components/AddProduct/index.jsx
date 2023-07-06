import React, { Component } from "react"; 
import ProductForm from "../ProductForm";
import ProductList from "../ProductList";




class AddProduct extends Component {

    state = {
        products: [
            {productName:'Ziemniaki', count:'10'}
        ]
    }


    addProduct =  (newProduct) => {
        this.setState((prevState) => ({
            products:[...prevState.products, newProduct]
        }))
    }

    deleteProduct = (index) => {
        console.log(index)
        this.setState((prevState)=> {
            const updatedProducts = [...prevState.products];
            updatedProducts.splice(index, 1)
            return { products : updatedProducts }
        })
    }


    render(){
        console.log(this.state.products)
        return (
            <div>
                <ProductForm addProduct={this.addProduct}/>
                <ProductList products={this.state.products} deleteProduct={this.deleteProduct}/>
            </div>
        )
    }
}

export default AddProduct