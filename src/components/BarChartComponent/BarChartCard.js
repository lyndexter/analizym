import React, { useState } from "react";
import { CardHeader, Typography } from "@material-ui/core";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  CardContentStyled,
  CardStyled,
  InfoContainer,
  PickerContainer,
} from "./BarChartCard.styled";
import { DateRangePicker } from "rsuite";
import ColumnBarStyled from "./column-bar/ColumnBar";

export default function BarChartCard({ data }) {
  const [valueTime, setValue] = useState([1630454399, 1632898397]);

  const setDatesPeriod = (value) => {
    if (value[0] == undefined) {
      setValue([1630454399, 1632898397]);
    } else {
      setValue([value[0].getTime() / 1000, value[1].getTime() / 1000]);
    }
  };

  return (
    <CardStyled>
      <CardHeader title="Billings Overview" />
      <CardContentStyled>
        <div>
          <PickerContainer>
            <DateRangePicker
              placeholder="Select Date Range"
              onChange={setDatesPeriod}
            />
          </PickerContainer>
          <BarChart
            width={1000}
            height={300}
            data={data.filter(
              (element) =>
                element.timeUnix >= valueTime[0] &&
                element.timeUnix <= valueTime[1]
            )}
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
        </div>
        <InfoContainer>
          <Typography variant="h6">{3333} UAH</Typography>
          <Typography variant="h6">{"Thu 25 September 2021"}</Typography>
          <Typography variant="h6">CashBack {0.78} UAH</Typography>
        </InfoContainer>
      </CardContentStyled>
    </CardStyled>
  );
}
