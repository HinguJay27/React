import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProfileCard = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="profile-card">

      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <h2>{user.name}</h2>

      <p className="role">{user.role}</p>

      <div className="user-details">
        <p>📧 {user.email}</p>
        <p>📍 {user.location}</p>
      </div>

      <h3>My Skills</h3>

      <div className="skills">
        {user.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

    </div>
  );
};

export default ProfileCard;