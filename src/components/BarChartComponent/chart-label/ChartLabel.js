import { Typography } from "@material-ui/core";
import { animated, useSpring } from "@react-spring/web";
import React, { useContext, useEffect } from "react";
import BarChartContext from "../../../utils/BarChartContext";
import { InfoBlock, InfoContainer, InfoRow } from "./ChartLabel.styled";

export default function ChartLabel() {
  const { elementInfo, setElementInfo } = useContext(BarChartContext);
  const amount = useSpring({
    val: elementInfo.amount,
    from: { val: 0 },
    config: { duration: 800 },
  });
  const cashback = useSpring({
    val: elementInfo.cashbackAmount,
    from: { val: 0 },
    config: { duration: 500 },
  });
  console.log(amount.val);
  const AnimatedTypography = animated(Typography);
  return (
    <InfoContainer>
      <InfoBlock>
        <Typography variant="body1">Amount of money paid in day</Typography>
        <InfoRow>
          <AnimatedTypography variant="h4">
            {amount.val.to((val) => Math.floor(val))}
          </AnimatedTypography>
          <Typography>UAH</Typography>
        </InfoRow>
      </InfoBlock>
      <InfoBlock>
        <Typography variant="body1">Date</Typography>
        <Typography variant="h5">{elementInfo.date}</Typography>
      </InfoBlock>
      <InfoBlock>
        <Typography variant="body1">CashBack</Typography>
        <InfoRow>
          <AnimatedTypography variant="h4">
            {cashback.val.to((val) => Math.floor(val))}
          </AnimatedTypography>
          <Typography>UAH</Typography>
        </InfoRow>
      </InfoBlock>
    </InfoContainer>
  );
}
