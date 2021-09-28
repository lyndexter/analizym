import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

export const ItemButton = styled(Button)`
  && {
    display: inline-flex;
    justify-content: start;
    align-items: center;
    padding: 15px 24px;
    width: auto;
    border-radius: 0;
    border-bottom: ${(props) =>
      props.heading == true ? "solid 1px #EAECEF" : "none"};

    box-shadow: "none";
    :focus {
      box-shadow: inset 0.1875rem 0 0 #007bff;
      background-color: #fbfbfb;
      color: #007bff;
    }
    :active {
      box-shadow: inset 0.1875rem 0 0 #007bff;
      background-color: #fbfbfb;
      color: #007bff;
    }
    :hover {
      box-shadow: inset 0.1875rem 0 0 #007bff;
      background-color: #fbfbfb;
      color: #007bff;
    }
  }
`;

export const TypographyStyled = styled(Typography)`
  font-size: 1rem;
  text-transform: initial;
  margin-left: 6px;
`;

export const ItemContainer = styled.div`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  padding: 15px 24px;
  width: auto;
  border-bottom: solid 1px #eaecef;
  user-select: none;
`;
