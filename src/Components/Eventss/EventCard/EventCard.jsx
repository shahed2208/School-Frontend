import { Card as BootstrapCard } from 'react-bootstrap';
import './EventCard.css';

const EventCard = ({ title, desc, img }) => {
  return (
    <div className="event-card">
      <BootstrapCard>
        <BootstrapCard.Img variant="top" src={img} className="event-image" />
        <BootstrapCard.Body>
          <BootstrapCard.Title className="card-title">{title}</BootstrapCard.Title>
          <BootstrapCard.Text className="card-text">{desc}</BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </div>
  );
};

export default EventCard;
