import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  CardStyled,
  PickerContainer,
  SvgStyled,
} from "./BarChartComponent.styled";
import { DateRangePicker } from "rsuite";
import { useSpring, animated, config } from "react-spring";

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

export default function BarChartComponent() {
  const [valueTime, setValue] = useState([1630454399, 1632898397]);

  return (
    <CardStyled>
      <CardHeader title="Billings Overview" />
      <CardContent>
        <PickerContainer>
          <DateRangePicker
            placeholder="Select Date Range"
            onChange={(value) => {
              if (value[0] == undefined) {
                setValue([1630454399, 1632898397]);
              } else {
                setValue([
                  value[0].getTime() / 1000,
                  value[1].getTime() / 1000,
                ]);
              }
            }}
          />
        </PickerContainer>
        <BarChart
          width={1000}
          height={300}
          data={data.filter((element) => {
            console.log(element.timeUnix, valueTime[0]);
            return (
              element.timeUnix >= valueTime[0] &&
              element.timeUnix <= valueTime[1]
            );
          })}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis dataKey="time" />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, (dataMax) => dataMax * 1.1]}
          />
          <CartesianGrid vertical={false} stroke="#EAECEF" />

          <Bar
            dataKey="amount"
            fill=" #E5F2FF"
            shape={<ColumnBarStyled outlineColor="#007bff" />}
          />
        </BarChart>
      </CardContent>
    </CardStyled>
  );
}

const getPath = (x, y, width, height, round) =>
  `M ${x},${y + height} v ${
    round - height
  } q 0,-${round},${round},-${round} h ${
    width - round * 2
  } q ${round},0,${round},${round} v ${height - round} z`;

const ColumnBarStyled = (props) => {
  const { x, y, width, height, fill, outlineColor } = props;
  const fillColor = fill;

  const [active, setActive] = useState(false);
  const { x_time } = useSpring({
    config: { duration: 300 },
    x_time: active ? 1 : 0,
  });

  const multiplier = 1.1;
  const multiplierWidth = 1.2;

  useEffect(() => {
    setActive(false);
  }, []);

  let round = 6;

  if (round > height) {
    round = height;
  }

  return (
    <SvgStyled
      onMouseMove={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <animated.path
        d={x_time.to({
          range: [0, 1],
          output: [
            getPath(x, y, width, height, round),
            getPath(
              x - (width * (multiplierWidth - 1)) / 2,
              y - height * (multiplier - 1),
              width * multiplierWidth,
              height * multiplier,
              round
            ),
          ],
        })}
        stroke={outlineColor}
        strokeDasharray="30,20,15,10"
        strokeWidth="2"
        fill={fillColor}
      />
    </SvgStyled>
  );
};
