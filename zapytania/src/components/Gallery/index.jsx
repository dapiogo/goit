import React, { Component } from 'react';
import { fetchImages } from '../../api/ImageAPI'
import ImagesList from './ImagesList';
import Info from './Info';
import Loading from './Loading';
import Search from './Search';



class Gallery extends Component {
    state = {
      isActiveSearchButton: true, // jesli jest na true -> to pobierzemy nowe dane klikajac w  button szukaj, jesli na false to ukrywamy button szukaj i wpisujac w input szuka w locie 
      images: [],
      inputSearch: '',
      isLoading: false,
    };
  
   async componentDidMount() {
     await this.fetchImages();
    }
  
   async componentDidUpdate(prevProps, prevState) {

        const { inputSearch, images, isActiveSearchButton } = this.state;

        if(!isActiveSearchButton) { //kiedy isActiveSearchButton === false wtedy opcja zostaje tutaj odpalona poniewaz !isActiveSearchButton = > true

            if (inputSearch !== prevState.inputSearch && inputSearch.length > 0) {
                await  this.fetchImages();
            }
          
            if (inputSearch.length === 0 && images.length > 0) {
              this.setState({ images: [] });
            }
        }
    }

    fetchImages = async () => {
      const { inputSearch } = this.state;
      this.setState({isLoading : true})

        try {
            const images = await fetchImages(inputSearch);

            this.setState({ images });
        } catch (error) {
            console.log(error)
        } finally {
            this.setState({isLoading : false})
        }

    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.fetchImages();
    };
  
    handleChange = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    };

    toggleButtonSearch = () => {
        this.setState((prevState) => ({...prevState, isActiveSearchButton: !prevState.isActiveSearchButton}))
    }
  
    render() {
      const {inputSearch, isActiveSearchButton, images, isLoading} = this.state
      return (
        <div style={{padding:'20px',border:'1px solid black',margin:'20px'}}>
          <Info
            toggleButtonSearch={this.toggleButtonSearch}
            inputSearch={inputSearch}
            isActiveSearchButton={isActiveSearchButton}
          />
          <Search
            inputSearch={inputSearch}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            isActiveSearchButton={isActiveSearchButton}
          />
          {isLoading ? <Loading/> : <ImagesList images={images} />}
        </div>
      );
    }
  }

 export default Gallery