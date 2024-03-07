import { Col } from "react-bootstrap";

import rightArrow from "../assets/img/right-arrow.svg";

export const ProjectCard = ({ link, time, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="proj-card">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5>{time}</h5>
          <span>{description}</span>
          <br />
          <a href={link} target="_blank" rel="noreferrer">
            <img
              alt=""
              src={rightArrow}
              style={{ width: "8%", marginTop: "15px" }}
            />
          </a>
        </div>
      </div>
    </Col>
  );
};
