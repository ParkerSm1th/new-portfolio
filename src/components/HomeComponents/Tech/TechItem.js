import React from "react";
import { Row, Col } from "react-bootstrap";

export default function TechItem(props) {
  let data = props.tech;
  const backgroundColor = {
    backgroundColor: `rgba(${data.color})`,
  };
  const textColor = {
    color: `rgb(${data.color.slice(0, -7)})`,
  };

  let onClick = () => {
    window.open(data.link, "_blank");
  };

  return (
    <Col xs={12} md={4} lg={3}>
      <div onClick={onClick} className="techItem truncate">
        <div className="techItemIcon" style={backgroundColor}>
          <i style={textColor} className={data.icon}></i>
        </div>
        <div className="techItemText truncate">
          <h1 className="truncate">{data.name}</h1>
        </div>
      </div>
    </Col>
  );
}
