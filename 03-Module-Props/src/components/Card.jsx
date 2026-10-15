import { Bookmark, Sun, Moon, MapPin, ArrowUpRight } from "lucide-react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="Card">

        <div className="top">
          <p>Date: {props.dateOfPublish}</p>

          <button className="bookmark">
            <Bookmark size={18} color="#44ff00" />
          </button>
        </div>

        <div className="center">
          <div className="role-row">
            <div>
              <h4>{props.companyName}</h4>
              <h2>{props.role}</h2>
            </div>

            <img src={props.logo} alt="Logo" />
          </div>

          <div className="job-tags">
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </div>

          <div className={`shift ${props.shift === "Night" ? "night" : ""}`}>
            {props.shift === "Morning" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}

            <span>{props.shift} Shift</span>
          </div>
        </div>

        <div className="bottom">
          <div className="job-info">
            <h3>
              {props.salaryPerHour}
            </h3>

            <p>
              <MapPin size={15} />
              {props.location}
            </p>
          </div>

          <button className="apply">
            Apply Now
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
