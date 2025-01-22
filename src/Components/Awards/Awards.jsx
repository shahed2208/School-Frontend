import React, { useState, useEffect } from "react";
import "./Awards.css";
import CustomButton from "../CustomButton/Button"; 
import Card from "../CustCard/CustCard";
import Icon3 from "../../img/Icon (6).svg";
import Icon1 from "../../img/Icon (7).svg";
import Icon2 from "../../img/Icon (5).svg";


const awardsData = [
  {
    icon: <img src={Icon3} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: (
      <>
        Outstanding Early <br /> Childhood Education Award
      </>
    ),
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
  },
  {
    icon: <img src={Icon2} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: (
      <>
        Innovative STEAM <br /> Education Award
      </>
    ),
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
  },
  {
    icon: <img src={Icon1} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
  },
  {
    icon: <img src={Icon2} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Excellence in Literacy Education Award",
    description:
      "Recognized for our dedication to promoting literacy and fostering a love of reading through innovative programs and resources.",
  },
  {
    icon: <img src={Icon3} alt="Mission Icon" style={{ width: "25px", height: "25px" }} />,
    title: "Creative Arts Education Award",
    description:
      "Awarded for excellence in providing comprehensive arts education, encouraging creativity, and nurturing young talent.",
  },
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(window.innerWidth <= 480 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth <= 480 ? 1 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow < 0
        ? awardsData.length - itemsToShow
        : prevIndex - itemsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= awardsData.length
        ? 0
        : prevIndex + itemsToShow
    );
  };

  const visibleAwards = awardsData.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  if (visibleAwards.length < itemsToShow) {
    visibleAwards.push(
      ...awardsData.slice(0, itemsToShow - visibleAwards.length)
    );
  }

  return (
    <section className="awards-section">
      <div className="container text-center my-5" style={{ backgroundColor: 'var(--primary-color)' }}>
      <CustomButton text="Our Achievements" />
      <h2 className="awards-heading">Our Awards and Recognitions</h2>
      <p className="awards-subheading">
      Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.
      </p>

      <div className="awards-container">
        {visibleAwards.map((award, index) => (
          <Card
            key={index}
            icon={award.icon}
            title={award.title}
            description={award.description}
          />
        ))}
      </div>

      <div className="awards-footer">
        <span className="awards-more">8 More Awards</span>
        <div className="awards-navigation">
          <button className="awards-button" onClick={handlePrev}>
            ⬅
          </button>
          <button className="awards-button" onClick={handleNext}>
            ➡
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Awards;
