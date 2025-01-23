
import './Feautred.css'
import React, { useState } from 'react';
import book from '../../img/book.png'; // مثال: استيراد صورة "Thematic Learning"
import sun from '../../img/sun.png';
import star from '../../img/star.png';
import brush from '../../img/brush.png';
import wifi from '../../img/wifi.png';
import puzzel from '../../img/puzzel.png';
import c1 from '../../img/c1.png';
import c2 from '../../img/c2.png';
import c3 from '../../img/c3.png';
import c4 from '../../img/c4.png';
import c5 from '../../img/c5.png';
import c6 from '../../img/c5.png';
import class1 from '../../img/class1.png';
import class2 from '../../img/class2.png';
import class3 from '../../img/class3.png';
import class4 from '../../img/class4.png';
import l1 from '../../img/l1.png';
import l2 from '../../img/l2.png';
import l3 from '../../img/l3.png';
import l4 from '../../img/l4.png';
import s1 from '../../img/s1.png';
import s2 from '../../img/s2.png';
import s3 from '../../img/s3.png';
import s4 from '../../img/s4.png';
const features = [
  { icon: book, title: 'Thematic Learning', description: 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.' },
  { icon: sun, title: 'STEAM Education', description: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.' },
  { icon: star, title: 'Language Immersion', description: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.' },
  { icon: brush, title: 'Art and Creativity', description: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.' },
  { icon: wifi, title: 'Outdoor Education', description: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.' },
  { icon: puzzel, title: 'Play-Based Learning', description: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.' },
];
const learningAreas = [
  { icon: c1, title: 'Language Arts', description: 'Reading, writing, storytelling, and communication skills.' },
  { icon: c2, title: 'Mathematics', description: 'Number sense, basic operations, problem solving, and logic.' },
  { icon: c3, title: 'Science', description: 'Exploring the natural world through hands-on experiments and investigations.' },
  { icon: c4, title: 'Social Studies', description: 'Cultivating an understanding of diverse cultures and communities.' },
  { icon: c5, title: 'Arts and Crafts', description: 'Encouraging creativity through various art forms and crafts.' },
  { icon: c6, title: 'Physical Education', description: 'Promoting physical fitness, coordination, and teamwork.' },
];


  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Classrooms', value: 'classrooms' },
    { name: 'Library', value: 'library' },
    { name: 'Science Lab', value: 'scienceLab' },
    { name: 'Computer Lab', value: 'computerLab' },
    { name: 'Garden and Nature Area', value: 'garden' },
  ];
  const classrooms = [
    { src: class1, alt: 'Classroom 1' },
    { src: class2, alt: 'Classroom 2' },
    { src: class3, alt: 'Classroom 3' },
    { src: class4, alt: 'Classroom 4' },
  ];
  

const libraryImages = [
  { src: l1, alt: 'Library 1' },
  { src: l2, alt: 'Library 2' },
  { src: l3, alt: 'Library 3' },
  { src: l4, alt: 'Library 4' },
];
/* ScienceLabImages*/

const ScienceLabImages = [
  { src: s1, alt: 'Science Lab 1' },
  { src: s2, alt: 'Science Lab 2' },
  { src: s3, alt: 'Science Lab 3' },
  { src: s4, alt: 'Science Lab 4' },
];

function Feautred(){
  const [activeFilter, setActiveFilter] = useState('all'); // حالة لتتبع الفلتر النشط
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % classrooms.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + classrooms.length) % classrooms.length);
  };
  return (
    <div>
       <section className="special-features-section">
      <div className="special-features-content">
        <button className="features-button">Our Features</button>
        <h2>Our Special Features</h2>
        <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
      </div>
    </section>
    <section className="features-cards-section">
      <div className="features-cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={feature.title + " Icon"} className="card-icon" /> {/* عرض الصورة */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="what-students-learn-section">
      <div className="what-students-learn-content">
        <button className="features-button">Our Features</button>
        <h2>What Students Learn</h2>
        <p>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</p>
      </div>
    </section>
    <section className="what-students-learn-details-section">
      <div className="what-students-learn-details-container">
        {learningAreas.map((area, index) => (
          <div className="learning-area" key={index}>
             <img src={learningAreas.icon} alt={learningAreas.title + " Icons"} /> {/* عرض الصورة */}
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="rooms-gallery-section">
      <div className="rooms-gallery-content">
        <button className="gallery-button">Our Gallery</button>
        <h2>Our Rooms Gallery</h2>
        <p>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        {/* هنا سيتم عرض الصور المُفلترة لاحقاً */}
      </div>
    </section>
    <section className="classrooms-section">
      <div className="classrooms-conten">
         <div className="classrooms-card"> {/* حاوية الكرت الأبيض */}
        <div className="classrooms-images-container">  
          {classrooms.map((image, index) => (
            <div className="classrooms-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="classrooms-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    <section className="library-section">
      <div className="library-content">
         <div className="library-card"> {/* حاوية الكرت الأبيض */}
        <div className="library-images-container">  
          {libraryImages.map((image, index) => (
            <div className="library-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="library-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    <section className="ScienceLab-section">
      <div className="ScienceLab-content">
         <div className="ScienceLab-card"> {/* حاوية الكرت الأبيض */}
        <div className="ScienceLab-images-container">  
          {ScienceLabImages.map((image, index) => (
            <div className="ScienceLab-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="ScienceLab-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>

    <section className="library-section">
      <div className="library-content">
         <div className="library-card"> {/* حاوية الكرت الأبيض */}
        <div className="library-images-container">  
          {libraryImages.map((image, index) => (
            <div className="library-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="library-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>


    <section className="library-section">
      <div className="library-content">
         <div className="library-card"> {/* حاوية الكرت الأبيض */}
        <div className="library-images-container">  
          {libraryImages.map((image, index) => (
            <div className="library-image-wrapper" key={index}>
              <img src={image.src} alt={image.alt} className="library-image" />
              
            </div>
          ))}
          
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Feautred
