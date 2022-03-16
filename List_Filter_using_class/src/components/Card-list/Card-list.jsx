import { Component } from "react";
import "./card-list.styles.css";

class Cardlist extends Component {
  render() {
    const { people } = this.props;

    return (
      <div className="card-list">
        {people.map((people) => {
          const { name, email, id } = people;

          return (
            <div className="card-container" key={id}>
              <img
                alt={`people ${name}`}
                src={`https://robohash.org/${id}?set=set1&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cardlist;
