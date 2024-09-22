import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt=""
          style={{ width: '150px', height: '90px' }} // Adjust the values as needed
        />
        <p className="lead">
          <strong>{data.role}</strong> {/* Bolding the role */}
          <br />
          <em>{data.company}</em> {/* Italics for the company */}
          <br />
          <span style={{ fontSize: '0.85em' }}>{data.date}</span> {/* Smaller font for the date */}
        </p>
        <p className="lead">{data.description}</p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
