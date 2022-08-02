// import { Component } from "react";
import Card from "../card-component/card.component";
import "./card-list.styles.css";

const CardList = ({ filteredMonsters }) => {
  const imageSize = "180x180";

  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return (
          <Card key={monster.id} monster={monster} imageSize={imageSize} />
        );
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { filteredMonsters } = this.props;
//     const imageSize = "180x180";

//     return (
//       <div className="card-list">
//         {filteredMonsters.map((monster) => {
//           return <Card monster={monster} imageSize={imageSize} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
