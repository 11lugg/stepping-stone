import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { handleSearch, placeholder, className } = this.props;

    return (
      <>
        <input
          type={className}
          className="search-box"
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </>
    );
  }
}

export default SearchBox;
