import React from "react";
import Icon from "@material-ui/core/Icon";
import { Typography } from "@material-ui/core";
import {
  ItemButton,
  ItemContainer,
  TypographyStyled,
} from "./SideBarItem.styled";

function SideBarItem(props) {
  if (props.heading) {
    return (
      <ItemContainer>
        <Icon children={props.icon} />
        <TypographyStyled variant="h6">{props.text}</TypographyStyled>
      </ItemContainer>
    );
  }

  return (
    <ItemButton
      heading={props.heading}
      disableElevation={props.heading}
      disableRipple={true}
    >
      <Icon children={props.icon} />
      <TypographyStyled variant="h6">{props.text}</TypographyStyled>
    </ItemButton>
  );
}

export default SideBarItem;
