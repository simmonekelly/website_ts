import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { theme, H2 } from "../styles/styles";

type SectionHeaderProps = {
  title: string;
  linkText?: string;
  linkTo?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  linkTo,
}) => {
  return (
    <Container>
      <H2>{title}</H2>
      {linkText && linkTo && (
        <StyledLink to={linkTo}>
          {linkText} &rarr;
        </StyledLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`;

const StyledLink = styled(RouterLink)`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;
