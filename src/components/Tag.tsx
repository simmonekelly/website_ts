import styled from "styled-components";
import { theme } from "../styles/styles";

export const Tag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: ${theme.colors.tagBg};
  color: ${theme.colors.mutedText};
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  font-size: 12px;
  font-weight: 400;
`;
