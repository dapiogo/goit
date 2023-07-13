import React, { Component } from "react";



class Gallery extends Component {

    state = {
        images:[],
        inputSearch:''
    }

    async componentDidMount() {
        this.fetchImages()
    }

    async componentDidUpdate(prevProps,prevState) {
        if(prevState.inputSearch !== this.state.inputSearch) {
            this.fetchImages();
        }

        if (this.state.inputSearch.length === 0 && this.state.images.length !== 0) {
            this.setState({ images: [] });
        }

     
    }


    fetchImages = async () => {
        try {
            const {inputSearch} = this.state

            const response = await fetch(`https://pixabay.com/api/?key=38240917-a3d7c9351f3e7e3fe8e3a9bdf&q=${inputSearch}&image_type=photo&pretty=true`);

            const data = await response.json();

            this.setState((prevState)=> ({...prevState, images: data.hits}))

        } catch (error) {
            console.log('errr',error)
        }


    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.fetchImages();
    }

    handleChange = (e) => {
        const {value,name} = e.target 
        this.setState((prevState)=> ({...prevState, [name]: value}))
    }

    render(){
        return (
            <div>
                <h1>Szukamy teraz {this.state.inputSearch}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="inputSearch"
                        value={this.state.inputSearch}
                        onChange={this.handleChange}
                        placeholder="wyszukaj obrazy"
                    />
                    <button type="submit">Szukaj</button>
                </form>
                {this.state.images.length > 0 ? (
                    <div>
                        {this.state.images.map(el => (
                            <img key={el.id} src={el.previewURL} alt={el.tags} />
                        ))}
                    </div>
                ) : <div>brak</div>}
            </div>
        )
    }
 }

 export default Gallery