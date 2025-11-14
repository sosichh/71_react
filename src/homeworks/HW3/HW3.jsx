import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import "./styles.css";

function HW3() {
  return (
    <div className="HW3-wrapper">
      <form className="form">
        <Input
          name="email"
          id="email_id"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Button label="Send email" type="submit" />
      </form>
    </div>
  );
}

export default HW3;