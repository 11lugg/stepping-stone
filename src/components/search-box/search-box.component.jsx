// import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ handleSearch, placeholder, className, type }) => {
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
};

// class SearchBox extends Component {
//   render() {
//     const { handleSearch, placeholder, className, type } = this.props;

//     return (
//       <>
//         <input
//           type={type}
//           className={`search-box ${className}`}
//           placeholder={placeholder}
//           onChange={handleSearch}
//         />
//       </>
//     );
//   }
// }

export default SearchBox;
