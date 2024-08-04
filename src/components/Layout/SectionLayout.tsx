import React from "react";
import styled from "styled-components";
import { Breakpoint, Colors } from "../../styles/styles";

const SectionLayout: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  return <Section id={id}>{children}</Section>;
};

const Section = styled.section`
  &:nth-child(1) {
    padding: 30px 20px 0;
  }

  &:nth-child(2) {
    border-top: solid 2px ${Colors.mountbattenPink};
    margin-top: 30px;
    padding: 30px 20px 0;
  }

  &:nth-child(3) {
    border-top: solid 2px ${Colors.mountbattenPink};
    margin-top: 30px;
    padding: 30px 20px 0;
  }

   @media (min-width: ${Breakpoint.tablet} {
    &:nth-child(1) {
      padding: 20px 20px 0;
    }
  }
`;

export default SectionLayout;
