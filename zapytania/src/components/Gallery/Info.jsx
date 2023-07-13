import React, { Component } from 'react';

class Info extends Component {
  render() {
    const { toggleButtonSearch, inputSearch, isActiveSearchButton } = this.props;

    return (
      <div>
        <button onClick={toggleButtonSearch}>
          {isActiveSearchButton ? 'Wyłacz button szukaj' : ' Włącz button szukaj'}
        </button>
        {isActiveSearchButton ? (
            <div>
                <h1>Aby wyszukac: {inputSearch}</h1>
                <p> Kliknij button szukaj</p>
            </div>
        ) : (
          <h1>Aby wyszukac wpisz cos w inputa korzystamy teraz z aktualizacji za pomoca componentDidUpdate</h1>
        )}
      </div>
    );
  }
}

export default Info;