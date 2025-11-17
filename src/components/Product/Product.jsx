import "./styles.css";

function Product({ label, price }) {
  return (
    <div className="product-wrapper">
      <h1>{label}</h1>
      {price && <div>{price}$</div>}
    </div>
  );
}

export default Product;
