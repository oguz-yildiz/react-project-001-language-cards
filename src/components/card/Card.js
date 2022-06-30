import "./Card.css";
import Item from "../item/Item";
import { languages } from "../../helper/data";

const Card = () => {
  return (
    <div className="card-container">
      <h1 className="card-header">Languages</h1>
      <div className="card-item">
        {languages.map((item, index) => {
          return <Item card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
