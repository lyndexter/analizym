import styled from "styled-components";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypographyStyled = styled(Typography)`
  && {
    padding: 30px;
  }
`;
