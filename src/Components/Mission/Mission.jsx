import React from 'react';
import Heading from '../Heading/Heading';
import CustomCard from './MissionCard/MissionCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '../../img/Icon (2).svg';
import StarIcon from '../../img/Icon (3).svg';
import CustomButton from "../CustomButton/Button"; 
const featuredArray = [
  {
    id: 1,
    title: 'Mission',
    icon: <img src={Icon} alt="Mission Icon" style={{ width: '50px', height: '50px' }} />,
    description: 'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.'
  },
  {
    id: 2,
    title: 'Vision',
    icon: <img src={StarIcon} alt="Vision Icon" style={{ width: '50px', height: '50px' }} />,
    description: 'Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.'
  }
];

const Mission = () => {
  return (
    <div className="container text-center my-5" style={{ backgroundColor: 'var(--primary-color)' }}>
    <CustomButton text="Mission & Visions" />

      <Heading 
        title="Our Mission & Visions" 
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      
      <Row className="justify-content-center mt-4">
        {featuredArray.map((item) => (
          <Col key={item.id} md={6} className="mb-4 d-flex justify-content-center">
            <CustomCard 
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Mission;
