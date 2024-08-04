import styled from "styled-components";

export const Breakpoint = {
  desktop: 1280,
  tablet: 768,
};

export const Colors = {
  ashGrey: "#a4b6a7",
  alabaster: "#e8e8d9",
  isabellene: "#f9f6f0",
  champagnePink: "#eaded7",
  mountbattenPink: "#a47985",
  black: "#363537",
};

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  padding-bottom: 10px;
  line-height: 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 20px;
    line-height: 24px;
  }
`

export const H1 = styled.h1 `
  font-family: "Luckiest Guy", cursive;
  font-weight: 900;
  font-size: 24px;
  margin: 0;
  padding-bottom: 10px;

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 46px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 46px;
  }
`

export const H2 = styled.h2 `
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  padding-bottom: 10px;

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 36px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 36px;
  }
`

export const H3 = styled.h3 `
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding-bottom: 10px;

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 24px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 24px;
  }
`

export const H4 = styled.h4 `
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding-bottom: 10px;

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 18px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 18px;
  }
`

export const Link = styled.a`
  text-decoration: none;

  &:hover {
    color: ${Colors.alabaster};
  }
`