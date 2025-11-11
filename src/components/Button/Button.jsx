import "./styles.css";

function Button({ type = "button", onClick, label }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {label}
    </button>
  );
}

export default Button;