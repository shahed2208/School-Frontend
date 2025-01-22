import React from "react";
import "./Activities.css";
import CustomButton from "../CustomButton/Button"; 
import Card from "../CustCard/CustCard";
import Icon3 from "../../img/Icon (6).svg";
import Icon1 from "../../img/Icon (7).svg";
import Icon2 from "../../img/Icon (5).svg";
import Icon4 from "../../img/Icon (8).svg";
import Icon5 from "../../img/Icon (9).svg";
import Icon6 from "../../img/Icon (10).svg";


const activityData = [
  {
    icon: <img src={Icon1} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <img src={Icon4} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <img src={Icon5} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
  },
  {
    icon: <img src={Icon6} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Art and Creativity",
    description:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
  },
  {
    icon: <img src={Icon3} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Music and Performing Arts",
    description:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
  },
  {
    icon: <img src={Icon2} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Creative Arts Education Activity",
    description:
      "Awarded for excellence in providing comprehensive arts education, encouraging creativity, and nurturing young talent.",
  },
];

// Activity component to display extracurricular activities
const Activity = () => {
  return (
    <section className="activity-section">
      <div className="container text-center my-5" style={{ backgroundColor: 'var(--primary-color)' }}>
        <CustomButton text="Our Features" />
        <h2 className="activity-heading">Extracurricular Activities</h2>
        <p className="activity-subheading">
        At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including  </p>
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

export default Activity;
