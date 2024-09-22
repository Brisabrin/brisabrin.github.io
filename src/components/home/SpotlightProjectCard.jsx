import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SpotlightProjects = ({ heading, projects }) => {
  return (
    <div className="spotlight-projects pb-5 text-center">
      <h2 className="display-4 mb-5">{heading}</h2>
      
      <Row>
        {projects.map((project, index) => (
          <Col lg="6" key={index} className="mb-5"> {/* Adds bottom margin between project cards */}
            <div className="pb-5 text-center">
              <img
                className="bg-white mb-3" // Adds margin below the image
                src={project.image}
                alt={project.title}
                style={{ width: '300px', height: '200px' }}
              />
              <p className="lead">
                <strong>{project.title}</strong>
                <br />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link ? "View Project" : ""}
                </a>
              </p>
              <p className="lead">{project.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpotlightProjects;
