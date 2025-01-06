import { FC } from 'react';
import styled from "styled-components";
import { Option } from "../models/questionnaire.ts";

interface Props {
  option: Option;
  handleCheckboxChange: (id: string) => void;
}

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  font-family: inherit;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  accent-color: #ff7eb3; /* Customizes checkbox color in modern browsers */
  cursor: pointer;

  &:focus {
    outline: 2px solid #ff7eb3;
    outline-offset: 2px;
  }
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

const Checkbox: FC<Props> = ({
  option,
  handleCheckboxChange,
}) => {
  return (
    <CheckboxContainer key={option.id}>
      <StyledCheckbox
        id={`checkbox-${option.id}`}
        value={option.id}
        onChange={() => handleCheckboxChange(option.id)}
      />
      <CheckboxLabel htmlFor={`checkbox-${option.id}`}>{option.text}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export { Checkbox };
