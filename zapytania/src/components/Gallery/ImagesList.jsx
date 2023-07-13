import React, { Component } from "react";

class ImagesList extends Component {
    render() {
      const { images } = this.props;
  
      return (
        <div>
          {images.length > 0 ? (
            <div>
              {images.map((el) => (
                <img key={el.id} src={el.previewURL} alt={el.tags} />
              ))}
            </div>
          ) : (
            <div>Brak wyszukanej frazy</div>
          )}
        </div>
      );
    }
  }

  export default ImagesList