import { useState } from "react";
import Button from "../Button";

const Card = () => {
  const [value, setValue] = useState(0);
  function Increment() {
    setValue(value + 1);
  }
  function Decrement() {
    setValue(value - 1);
  }

  return (
    <div className="card">
      <h5 className="card-header">Card</h5>
      <div className="card-body">
        <h5 className="card-title">Azul ++ Vermelho --</h5>
        <Button className="btn btn-primary" onClick={Increment}>
          Somar
        </Button>
        <Button className="btn btn-danger" onClick={Decrement}>
          Subtrair
        </Button>
        <p className="card-text">{value}</p>
      </div>
    </div>
  );
};
export default Card;
