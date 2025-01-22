import React from 'react';
import './Events.css'; // ملف CSS لتنسيق القسم
import CustomButton from '../CustomButton/Button';
import EventCard from './EventCard/EventCard'; // استدعاء المكون الخاص بالكارت
import Image1 from '../../img/eventt/Image (1).svg';
import Image2 from '../../img/eventt/Image (2).svg';
import Image3 from '../../img/eventt/Image (3).svg';
import Image4 from '../../img/eventt/Image (4).svg';
import Image5 from '../../img/eventt/Image (5).svg';
import Image6 from '../../img/eventt/Image.svg';

// بيانات الفعاليات
const activityData = [
  {
    img: Image1,
    title: 'Annual Sports Day',
    description: 'A day filled with friendly competition, team spirit, and sportsmanship.',
  },
  {
    img: Image6,
    title: 'Music Festival',
    description: 'An engaging day of melodies and rhythms that highlight students\' musical talents.',
  },
  {
    img: Image5,
    title: 'Science Fair',
    description: 'A platform for students to showcase their scientific projects and innovations.',
  },
  {
    img: Image4,
    title: 'Community Service',
    description: 'Promoting values of kindness and community through various initiatives.',
  },
  {
    img: Image2,
    title: 'Cultural Festivals',
    description: 'Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.',
  },
  {
    img: Image3,
    title: 'Art Exhibitions',
    description: 'Showcasing our students\' artistic talents through exhibitions and displays.',
  },
];

const EventCele = () => {
  return (
    <section className="activity-section">
      <div className="container text-center my-5">
        {/* زر مخصص */}
        <CustomButton text="Our Features" />

        {/* عنوان الفعالية */}
        <h2 className="activity-heading">Events & Celebrations</h2>

        {/* الوصف النصي */}
        <p className="activity-subheading">
          At Little Learners Academy, we celebrate every milestone and create cherished memories for our students.
          Throughout the year, we host a variety of events and celebrations that bring the entire school community together.
          Some of our memorable events include:
        </p>

        {/* شبكة الكروت */}
        <div className="activity-container">
          {activityData.map((activity, index) => (
            <EventCard
              key={index}
              img={activity.img}
              title={activity.title}
              desc={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCele;
