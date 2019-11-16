import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'astroturf';

const Button: FC<Props> = styled('button')`
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  &.variant-primary {
    color: #fff;
    background-color: #3f51b5;
    &:hover {
      background-color: #303f9f;
    }
  }
  &.variant-secondary {
    color: #fff;
    background-color: #f50057;
    &:hover {
      background-color: #c51162;
    }
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

// Button.defaultProps = {
//   type: 'button'
// };

export default Button;
