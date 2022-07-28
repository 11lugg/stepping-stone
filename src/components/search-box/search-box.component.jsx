import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { handleSearch, placeholder, className, type } = this.props;

    return (
      <>
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </>
    );
  }
}

export default SearchBox;
