// import { Component } from "react";

import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        setMonsters(res);
        setFilteredMonsters(res);
      });
  }, []);

  useEffect(() => {
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(inputValue);
    });

    setFilteredMonsters(filteredArray);
  }, [monsters, inputValue]);

  const handleSearch = (e) => {
    const inputValueString = e.target.value.toLocaleLowerCase();

    setInputValue(inputValueString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        handleSearch={handleSearch}
        type="search"
        placeholder="Search Monsters..."
        className="search"
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       filteredMonsters: [],
//       inputValue: "",
//     };
//   }

//   componentDidMount() {
//     const apiUrl = "https://jsonplaceholder.typicode.com/users";

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users, filteredMonsters: users };
//         })
//       );
//   }

//   handleSearch = (e) => {
//     const inputValue = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { inputValue };
//     });

//     const filteredArray = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(inputValue);
//     });

//     this.setState(() => {
//       return { filteredMonsters: filteredArray };
//     });
//   };

//   render() {
//     const { filteredMonsters } = this.state;
//     const { handleSearch } = this;

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           handleSearch={handleSearch}
//           type="search"
//           placeholder="Search Monsters..."
//           className="search"
//         />
//         <CardList filteredMonsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
