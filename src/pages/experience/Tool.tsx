import React from "react";
import styled from "styled-components";
import { Colors, Paragraph } from "../../styles/styles";

const Tool: React.FC<{ tool: string }> = ({ tool }) => {
  return <StyledParagraph>{tool}</StyledParagraph>;
};

const StyledParagraph = styled(Paragraph)`
  background: ${Colors.ashGrey};
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export default Tool;
