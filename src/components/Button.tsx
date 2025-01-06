import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: (event: React.FormEvent) => void;
  label?: string;
  type?: "button" | "submit" | "reset";
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  color: #fff;
  background-color: #ff7eb3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e96d9f; /* Slightly darker shade for hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(255, 126, 179, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #f5b9cf; /* Muted shade for disabled */
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 16px;
  }
`;

const Button: FC<ButtonProps> = ({ onClick, label, ...restProps }) => {
  return (
    <StyledButton onClick={onClick} {...restProps}>
      {label}
    </StyledButton>
  );
};

export { Button };