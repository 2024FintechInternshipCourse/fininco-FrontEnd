import React, { useState } from "react";
import StepOne from "../../components/tutorial/StepOne";
import StepTwo from "../../components/tutorial/StepTwo";
import StepThree from "../../components/tutorial/StepThree";
import StepFour from "../../components/tutorial/StepFour";
import Footer from "../../components/tutorial/Footer";
import "../../components/tutorial/TutorialPage.css";

const TutorialPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="tutorial-container">
      {renderStep()}
      <Footer
        handleBack={handleBack}
        handleNext={handleNext}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    </div>
  );
};

export default TutorialPage;
