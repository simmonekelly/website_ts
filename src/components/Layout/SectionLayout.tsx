import React from "react";
import styled from "styled-components";
import { theme, Breakpoint } from "../../styles/styles";

type SectionLayoutProps = React.PropsWithChildren<{
  id: string;
  variant?: "default" | "alt";
}>;

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  variant = "default",
  children,
}) => {
  return (
    <Section id={id} $variant={variant}>
      <ContentWrapper>{children}</ContentWrapper>
    </Section>
  );
};

const Section = styled.section<{ $variant: "default" | "alt" }>`
  background-color: ${({ $variant }) =>
    $variant === "alt" ? theme.colors.backgroundAlt : theme.colors.background};
  padding: 48px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 64px 32px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export default SectionLayout;
