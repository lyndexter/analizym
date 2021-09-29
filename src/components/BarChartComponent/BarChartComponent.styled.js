import { Card } from "@material-ui/core";
import styled from "styled-components";

export const CardStyled = styled(Card)`
  && {
    padding: 10px 0;
    margin: 6px;
    width: fit-content;
    border-radius: 20px;
    user-select: none;
  }
`;

export const PickerContainer = styled.div`
  padding: 0 0 30px 30px;
`;

export const SvgStyled = styled.svg`
  transition: all 1s linear;

  :hover {
    transform: scale(1.5);
    background-color: beige;
  }
`;
