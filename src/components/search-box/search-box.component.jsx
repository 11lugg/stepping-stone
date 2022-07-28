import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { handleSearch } = this.props;

    return (
      <>
        <input
          type="search"
          className="search-box"
          placeholder="Search Monsters..."
          onChange={handleSearch}
        />
      </>
    );
  }
}

export default SearchBox;
