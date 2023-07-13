import React, { Component } from "react";

class Search extends Component {
  render() {
    const { inputSearch, handleSubmit, handleChange, isActiveSearchButton } = this.props;

    return (
      <div>
        {isActiveSearchButton ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="inputSearch"
              value={inputSearch}
              onChange={handleChange}
              placeholder="wyszukaj obrazy"
            />
            <button type="submit">Szukaj</button>
          </form>
        ) : (
          <input
            type="text"
            name="inputSearch"
            value={inputSearch}
            onChange={handleChange}
            placeholder="wyszukaj obrazy"
          />
        )}
      </div>
    );
  }
}

export default Search;