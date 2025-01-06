import React, { FC, useState } from "react";
import { Questionnaire as QuestionnaireType } from "../models/questionnaire";
import { Question } from "./Question.tsx";
import styled from "styled-components";
import { QuestionnaireIntro } from "./QuestionnaireIntro.tsx";
import { QuestionnaireFinish } from "./QuestionnaireFinish.tsx";

interface Props {
  questionnaire: QuestionnaireType;
}

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 20px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;

  &.enter {
    animation: slideIn 0.3s forwards;
  }

  &.exit {
    animation: slideOut 0.3s forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
`;

const Questionnaire: FC<Props> = ({ questionnaire }) => {
  const [questionnaireFinished, setQuestionnaireFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [animationClass, setAnimationClass] = useState("enter");

  const currentQuestion = questionnaire.questions[currentIndex];

  const handleAnswerSubmit = (answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    // Trigger exit animation
    setAnimationClass("exit");

    // Move to the next question after animation
    setTimeout(() => {
      if (currentIndex < questionnaire.questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        // Trigger enter animation
        setAnimationClass("enter");
      } else {
        setQuestionnaireFinished(true);
      }
    }, 300);
  };

  const handleQuestionnaireStart = () => {
    setCurrentIndex(0);
  };

  const handleBack = () => {
    setAnimationClass("exit");
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setAnimationClass("enter");
    }, 300);
  };

  const handleFinish = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Questionnaire completed:", answers);
    setCurrentIndex(-1);
    setQuestionnaireFinished(false);
    setAnimationClass("enter");
    // send the answers to the server
  };

  if (currentIndex !== -1) {
    return (
      <>
        <Title>{questionnaire.title}</Title>
        <Description>{questionnaire.description}</Description>
        {questionnaireFinished && <QuestionnaireFinish onClick={handleFinish} />}

        <QuestionContainer className={animationClass}>
          <Question question={currentQuestion} onSubmit={handleAnswerSubmit} handleBack={handleBack} hasBackButton={currentIndex !== 0} />
        </QuestionContainer>
      </>
    );
  }

  return <QuestionnaireIntro onClick={handleQuestionnaireStart} />;
};

export { Questionnaire };
