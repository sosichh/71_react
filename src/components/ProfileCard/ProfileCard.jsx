import "./styles.css";

function ProfileCard({userData}) {

  return (
    <div className="profile-card-wrapper">
      <h3>{userData.name}</h3>
      <img src={userData.imgsrc} alt="avatar image" />
      <div>{userData.profession}</div>
      <div>{userData.hobby}</div>
    </div>
  );
}

export default ProfileCard;