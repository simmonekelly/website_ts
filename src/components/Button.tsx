import styled from "styled-components";
import { theme, Breakpoint } from "../styles/styles";

export const Button = styled.a<{ primary?: boolean }>`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 6px;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  background: ${({ primary }) =>
    primary ? theme.colors.primary : "transparent"};
  color: ${({ primary }) =>
    primary ? theme.colors.surface : theme.colors.primary};
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background: ${({ primary }) =>
      primary ? theme.colors.primaryHover : theme.colors.primary};
    color: ${theme.colors.surface};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 14px;
  }
`;
