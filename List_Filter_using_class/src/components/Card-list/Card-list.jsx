import { Component } from "react";
import "./card-list.styles.css";

const Cardlist = ({Robots}) => {
  
    return (
      <div className="card-list">
        {Robots.map((Robots) => {
          const { name, email, id } = Robots;

          return (
            <div className="card-container" key={id}>
              <img
                alt={`Robots ${name}`}
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
export default Cardlist;
