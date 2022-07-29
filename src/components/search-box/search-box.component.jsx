import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { handleSearch, placeholder, className, type } = this.props;

    return (
      <>
        <input
          type={type}
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </>
    );
  }
}

export default SearchBox;
