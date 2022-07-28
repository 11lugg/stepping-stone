import { Component } from "react";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}

export default CardList;
