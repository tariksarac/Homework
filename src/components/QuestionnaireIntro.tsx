/* eslint-disable react/no-unescaped-entities */

import { FC } from 'react';
import styled from "styled-components";
import { Button } from "./Button.tsx";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
`;

interface Props {
  onClick: () => void;
}

const QuestionnaireIntro: FC<Props> = ({ onClick }) => {
  return (
    <Container>
      <Title>Welcome to Your Health Assessment</Title>
      <Paragraph>
        This questionnaire is designed to help us understand your health better and provide personalized advice during your video consultation. By answering these questions, your doctor will have essential insights into your medical history, lifestyle, and current symptoms.
      </Paragraph>
      <Paragraph>
        The process should take only a few minutes, and your responses will remain confidential. Please be as accurate and honest as possible so we can provide the best care for you.
      </Paragraph>
      <Paragraph>
        Once you've completed the questionnaire, you'll proceed to your consultation, where the doctor will review your answers and address your concerns.
      </Paragraph>
      <Paragraph>Let's get started and take the first step toward improving your health!</Paragraph>
      <Button label={'Start'} onClick={onClick} />
    </Container>
  );
};

export { QuestionnaireIntro };
