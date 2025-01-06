/* eslint-disable react/no-unescaped-entities */

import React, { FC } from 'react';
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

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.6;
`;

interface Props {
  onClick: (event: React.FormEvent) => void;
}

const QuestionnaireFinish: FC<Props> = ({ onClick }) => {
  return (
    <Container>
      <Paragraph>
        Thank you for completing the questionnaire. Your answers have been submitted successfully. </Paragraph>
      <Button label={'Finish'} onClick={onClick} />
    </Container>
  );
};

export { QuestionnaireFinish };
