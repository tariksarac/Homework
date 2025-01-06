import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 600px;
  min-height: 150px;
  padding: 12px;
  font-size: 1rem;
  font-family: inherit;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.6);
  }

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    border-color: #dee2e6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }
  box-sizing: border-box;
`;

const TextareaContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Textarea: FC<Props> = ({ value, handleInputChange }) => {
  return (
    <TextareaContainer>
      <StyledTextarea id={"free-text"} value={value} onChange={handleInputChange} />
    </TextareaContainer>
  );
};

export { Textarea };