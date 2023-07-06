import React, { Component } from "react"; 


const INITIAL_STATE ={
    productName:'',
    count:''
}

class ProductForm extends Component {

    state = {
        productName:'',
        count:''
    }

    handleChange = (e) => {
        const {value,name} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state)
        this.setState({...INITIAL_STATE})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange}/>
                    <input type="number" name="count" value={this.state.count} onChange={this.handleChange}/>
                    <button type="submit">Dodaj produkt</button>
                </form>
            </div>
        )
    }
}

export default ProductForm;