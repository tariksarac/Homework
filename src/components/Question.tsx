import React, { useState, FC } from "react";
import { Question as QuestionType } from "../models/questionnaire";
import styled from "styled-components";
import { Checkbox } from "./Checkbox.tsx";
import { Textarea } from "./Textarea.tsx";
import { SingleChoice } from "./SingleChoice.tsx";
import { Button } from "./Button.tsx";

interface Props {
  question: QuestionType;
  onSubmit: (answer: string | string[]) => void;
  handleBack: () => void;
  hasBackButton: boolean;
}

const QuestionLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: center;
  `;

const ButtonContainer = styled.div`
    display: flex;
  `;

const BackButton = styled(Button)`
    margin-right: 10px;
  `;

const Question: FC<Props> = ({ question, onSubmit, handleBack, hasBackButton }) => {
  const [answer, setAnswer] = useState<string | string[]>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(event.target.value as string);
  };

  const handleCheckboxChange = (optionId: string) => {
    setAnswer((prev) => {
      if (Array.isArray(prev)) {
        if (prev.includes(optionId)) {
          return prev.filter((id) => id !== optionId);
        } else {
          return [...prev, optionId];
        }
      } else {
        return [optionId];
      }
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (question.required && !answer) {
      alert("This question is required!");
      return;
    }
    onSubmit(answer);
    setAnswer('');
  };

  const onClickBack = (event: React.FormEvent) => {
    event.preventDefault();
    handleBack();
  }

  return (
    <Form onSubmit={handleSubmit} id='form'>
      <QuestionLabel id='label'>{question.text}</QuestionLabel>

      {question.type === "free-text" && < Textarea value={typeof answer === 'string' ? answer : ''} handleInputChange={handleInputChange} />}

      {question.type === "single-choice" &&
        question.options?.map((option) => (
          <SingleChoice key={option.id} option={option} selected={typeof answer === 'string' ? answer : ''} onChange={handleInputChange} />
        ))}

      {question.type === "multiple-choice" &&
        question.options?.map((option) => (
          <Checkbox
            key={option.id}
            option={option}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      <ButtonContainer>
        {hasBackButton && <BackButton label={'Back'} onClick={onClickBack} />}
        <Button type="submit" label={'Next'} />
      </ButtonContainer>

    </Form>
  );
};

export { Question };
