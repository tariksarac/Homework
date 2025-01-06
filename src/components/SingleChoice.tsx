import React, { FC } from 'react';
import styled from "styled-components";
import { Option } from "../models/questionnaire";

interface Props {
  option: Option;
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionContainer = styled.div`
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

const StyledRadio = styled.input.attrs({ type: "radio" })`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  accent-color: #ff7eb3;

  cursor: pointer;

  &:focus {
    outline: 2px solid #ff7eb3;
    outline-offset: 2px;
  }
`;

const OptionLabel = styled.label`
  cursor: pointer;
`;

const SingleChoice: FC<Props> = ({ option, selected, onChange }) => {
  return (
    <>
      <OptionContainer>
        <StyledRadio
          id={`radio-${option.id}`}
          name={option.id}
          value={option.id}
          checked={selected === option.id}
          onChange={onChange}
        />
        <OptionLabel htmlFor={`radio-${option.id}`}>{option.text}</OptionLabel>
      </OptionContainer>
    </>
  );
};

export { SingleChoice };
