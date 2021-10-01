import { Card } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import BarChartCard from "../../../components/BarChartComponent/BarChartCard";
import { TypographyStyled } from "../Home.styled";
import { DashboardContainer } from "./Dashboard.styled";

const data = [
  {
    time: "01/09/2021",
    timeUnix: 1630454400,
    amount: 2400,
  },
  {
    time: "02/09/2021",
    timeUnix: 1630540800,
    amount: 0,
  },
  {
    time: "03/09/2021",
    timeUnix: 1630627200,
    amount: 9800,
  },
  {
    time: "04/09/2021",
    timeUnix: 1630713600,
    amount: 3908,
  },
  {
    time: "05/09/2021",
    timeUnix: 1630800000,
    amount: 4800,
  },
  {
    time: "06/09/2021",
    timeUnix: 1630886400,
    amount: 3800,
  },
  {
    time: "07/09/2021",
    timeUnix: 1630972800,
    amount: 4300,
  },
  {
    time: "08/09/2021",
    timeUnix: 1631059200,
    amount: 1398,
  },
  {
    time: "09/09/2021",
    timeUnix: 1631145600,
    amount: 9800,
  },
  {
    time: "10/09/2021",
    timeUnix: 1631232000,
    amount: 3908,
  },
  {
    time: "11/09/2021",
    timeUnix: 1631318400,
    amount: 4800,
  },
  {
    time: "12/09/2021",
    timeUnix: 1631404800,
    amount: 3800,
  },
  {
    time: "13/09/2021",
    timeUnix: 1631491200,
    amount: 4300,
  },
];

export default function Dashboard() {
  return (
    <DashboardContainer>
      <TypographyStyled variant="h5">Dashboard</TypographyStyled>
      <BarChartCard data={data} />
    </DashboardContainer>
  );
}
