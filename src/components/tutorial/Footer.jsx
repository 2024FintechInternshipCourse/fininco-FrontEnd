import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = ({ handleBack, handleNext, currentStep, totalSteps }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (currentStep === totalSteps) {
      navigate("/");
    } else {
      handleNext();
    }
  };

  return (
    <div className="footer-container">
      <button
        onClick={handleBack}
        className="back-button"
        disabled={currentStep === 1}
      >
        Back
      </button>
      <div className="step-indicator">
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index + 1 === currentStep ? "active" : ""}`}
          />
        ))}
      </div>
      <button onClick={handleNextClick} className="next-button">
        {currentStep === totalSteps ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Footer;
