import ProfileCard from "../../components/ProfileCard/ProfileCard";
import data from "./data.js";
import "./styles.css";

function HW2() {
  return (
    <div className="HW02-wrapper">
      <ProfileCard userData={data[0]} />
      <ProfileCard userData={data[1]} />
      <ProfileCard userData={data[2]} />
    </div>
  );
}

export default HW2;
