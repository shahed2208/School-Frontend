import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MissionCard.css';

const CustomCard = ({ icon, title, description }) => {
  return (
    <div className="card custom-card">
      {/* العنوان والأيقونة */}
      <Row className="align-items-center">
        <Col xs={9} className="d-flex align-items-center">
          <h4 className="mb-0 custom-card-title">{title}</h4>
        </Col>
        <Col xs={3} className="text-end">
          <div className="custom-card-icon">
            {icon}
          </div>
        </Col>
      </Row>

      {/* الوصف */}
      <Row className="mt-4">
        <Col>
          <p className="custom-card-description">
            {description}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CustomCard;
