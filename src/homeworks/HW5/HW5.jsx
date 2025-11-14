import "./styles.css";

import Product from "../../components/Product/Product";
import data from "./data";

function HW5() {
  const cards = data.map((product) => {
    return (
      <Product
        key={product.id}
        label={product.name}
        price={product.price}
      />
    );
  });

  return <div className="HW5-wrapper">{cards}</div>;
}

export default HW5;
