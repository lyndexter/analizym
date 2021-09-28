import React from "react";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {
  Button,
  Drawer,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { DrawerStyled, ToolBarStyled } from "./SideBar.styled";
import SideBarItem from "../../../components/side-bar-item/SideBarItem";

function SideBar() {
  return (
    <DrawerStyled anchor="left" variant="permanent">
      <ToolBarStyled>
        <SideBarItem icon="equalizer" text="Analizym" heading={true} />
        <SideBarItem icon="monetization_on" text="Dashboard" />
        <SideBarItem icon="not_interested" text="Other" />
        <SideBarItem icon="not_interested" text="Second Other" />
      </ToolBarStyled>
    </DrawerStyled>
  );
}

export default SideBar;
