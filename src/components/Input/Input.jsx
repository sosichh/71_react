import "./styles.css";

function Input({ id, type, name, placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label htmlFor="id">{label}</label>
      <input name={name} id={id} type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default Input;