import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, filteredMonsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  handleSearch = (e) => {
    const inputValue = e.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { inputValue };
      },
      () => {}
    );

    const filteredArray = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(inputValue);
    });

    this.setState(
      () => {
        return { filteredMonsters: filteredArray };
      },
      () => {}
    );
  };

  render() {
    const { filteredMonsters } = this.state;
    const { handleSearch } = this;

    return (
      <div className="App">
        <input
          type="search"
          className="search-box"
          placeholder="Search Monsters..."
          onChange={handleSearch}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
