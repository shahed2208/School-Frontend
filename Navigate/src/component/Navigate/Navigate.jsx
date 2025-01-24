import React from 'react';
import styles from './Navigate.module.css';

const Navigate = () => {
  const sections = [
    { title: 'About Us', description: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.', link: '/about' },
    { title: 'Academics', description: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.', link: '/academics' },
    { title: 'Student Life', description: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.', link: '/student-life' },
    { title: 'Admissions', description: 'Learn about our Enrollment Process and how to secure your child\'s place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.', link: '/admissions' },
  ];

  return (
    <section className={styles.navigateSection}>
      <div className={styles.container}>
      <a className={styles.but}>Explore more</a>
        <h2 className={styles.mainTitle}>Navigate through our Pages</h2>
        <p className={styles.mainDescription}>Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.</p>
        <div className={styles.gridContainer}>
          {sections.map((section, index) => (
            <div key={index} className={styles.gridItem}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{section.title}</h3><img src="../src/img/line.jpg" alt="" />
                <p className={styles.cardDescription}>{section.description}</p>
                <a href={section.link} className={styles.cardLink}>Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navigate;
