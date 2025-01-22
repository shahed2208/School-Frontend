import './Heading.css';

const Heading = ({ title, description }) => {
  return (
    <div className='text-center'>
      <h2 className='line fs-1'>{title}</h2>
      <p className='graph fs-6 '>{description}</p>
    </div>
  );
};

export default Heading;
