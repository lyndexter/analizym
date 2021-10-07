import React from "react";
import BarChartCard from "../../../components/BarChartComponent/BarChartCard";
import { TypographyStyled } from "../Home.styled";
import { DashboardContainer } from "./Dashboard.styled";

const data = [
  {
    date: "01/09/2021",
    time: 1630454400,
    balance: 1000,
    cashbackAmount: 10,
    amount: 2400,
  },
  {
    date: "02/09/2021",
    time: 1630540800,
    balance: 1000,
    cashbackAmount: 0,
    amount: 0,
  },
  {
    date: "03/09/2021",
    time: 1630627200,
    balance: 1000,
    cashbackAmount: 18,
    amount: 9800,
  },
  {
    date: "04/09/2021",
    time: 1630713600,
    balance: 1000,
    cashbackAmount: 15,
    amount: 3908,
  },
  {
    date: "05/09/2021",
    time: 1630800000,
    balance: 1000,
    cashbackAmount: 1,
    amount: 4800,
  },
  {
    date: "06/09/2021",
    time: 1630886400,
    balance: 1000,
    cashbackAmount: 20,
    amount: 3800,
  },
  {
    date: "07/09/2021",
    time: 1630972800,
    balance: 1000,
    cashbackAmount: 13,
    amount: 4300,
  },
  {
    date: "08/09/2021",
    time: 1631059200,
    balance: 1000,
    cashbackAmount: 3,
    amount: 1398,
  },
  {
    date: "09/09/2021",
    time: 1631145600,
    balance: 1000,
    cashbackAmount: 0,
    amount: 9800,
  },
  {
    date: "10/09/2021",
    time: 1631232000,
    balance: 1000,
    cashbackAmount: 5,
    amount: 3908,
  },
  {
    date: "11/09/2021",
    time: 1631318400,
    balance: 1000,
    cashbackAmount: 7,
    amount: 4800,
  },
  {
    date: "12/09/2021",
    time: 1631404800,
    balance: 1000,
    cashbackAmount: 9,
    amount: 3800,
  },
  {
    date: "13/09/2021",
    time: 1631491200,
    balance: 1000,
    cashbackAmount: 0,
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
