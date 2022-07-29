import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    const { imageSize } = this.props;

    return (
      <div key={id} className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=${imageSize}`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
