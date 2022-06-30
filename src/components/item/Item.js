import "./Item.css";
import { useState } from "react";

const Item = ({ card }) => {
  const { name, img, options } = card;
  const [showCard, setShowCard] = useState(true);
  return (
    <div className="ıtem" onClick={() => setShowCard(!showCard)}>
      {showCard ? (
        <div>
          <img className="card-image" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
