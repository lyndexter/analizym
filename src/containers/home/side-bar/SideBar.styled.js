import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import { Drawer } from "@material-ui/core";
import { Stack } from "@mui/material";

export const AppBarStyled = styled(AppBar)`
  width: 100px;
`;

export const ToolBarStyled = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 200px;
  padding: 0;
`;

export const DrawerStyled = styled(Drawer)`
  && {
    display: inline;
    width: 200px;
    height: 10px;
  }
`;
