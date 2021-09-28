import React from "react";
import { Card } from "@material-ui/core";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CardStyled } from "./BarChartComponent.styled";
const data = [
  {
    time: "01/09/2021",
    amount: 2400,
  },
  {
    time: "02/09/2021",
    amount: 0,
  },
  {
    time: "03/09/2021",
    amount: 9800,
  },
  {
    time: "04/09/2021",
    amount: 3908,
  },
  {
    time: "05/09/2021",
    amount: 4800,
  },
  {
    time: "06/09/2021",
    amount: 3800,
  },
  {
    time: "07/09/2021",
    amount: 4300,
  },
  {
    time: "08/09/2021",
    amount: 1398,
  },
  {
    time: "09/09/2021",
    amount: 9800,
  },
  {
    time: "10/09/2021",
    amount: 3908,
  },
  {
    time: "11/09/2021",
    amount: 4800,
  },
  {
    time: "12/09/2021",
    amount: 3800,
  },
  {
    time: "13/09/2021",
    amount: 4300,
  },
];

export default function BarChartComponent() {
  return (
    <CardStyled>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis dataKey="time" />
        <YAxis axisLine={false} tickLine={false} />

        <CartesianGrid vertical={false} stroke="#EAECEF" />
        <Bar
          dataKey="amount"
          fill=" #007bff"
          // radius={[6, 6, 0, 0]}
          shape={<ColumnBarStyled />}
        />
      </BarChart>
    </CardStyled>
  );
}

const getPath = (x, y, width, height, round) =>
  `M${x},${y + height} v-${height - round} q0,-${round},${round},-${round} h${
    width - round * 2
  } q${round},0,${round},${round} v${height - round} z`;

const ColumnBarStyled = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <path
      d={getPath(x, y, width, height, 6)}
      stroke={fill}
      stroke-dasharray="30,20,15,10"
      stroke-width="2"
      fill="#E5F2FF"
    />
  );
};
