import React from "react";
import "./Support.css";
import CustomButton from "../CustomButton/Button"; 
import Card from "../CustCard/CustCard";
import Icon3 from "../../img/Icon (11).svg";
import Icon1 from "../../img/Icon (12).svg";
import Icon2 from "../../img/Icon (13).svg";

// Activity data array containing objects with icon, title, and description
const activityData = [
  {
    icon: <img src={Icon1} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <img src={Icon2} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Arts and Crafts",
    description:
      "Engaging in arts and crafts allows students to explore their creativity. Our activities include painting, drawing, sculpture, and more.",
  },
  {
    icon: <img src={Icon3} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Science and Technology",
    description:
      "Our science and technology programs foster curiosity and innovation. Students can engage in hands-on experiments, coding classes, and robotics workshops.",
  },
];

const Support = () => {
  return (
    <section className="activity-section">
      <div className="container text-center my-5" style={{ backgroundColor: 'var(--primary-color)' }}>
        <CustomButton text="Our Achievements" />
        <h2 className="activity-heading">Student Support</h2>
        <p className="activity-subheading">
          At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include:
        </p>
        <div className="activity-container">
          {activityData.map((activity, index) => (
            <Card
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
