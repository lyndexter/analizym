import React, { useMemo, useState } from "react";
import { CardHeader, Typography } from "@material-ui/core";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";
import {
  CardContentStyled,
  CardStyled,
  InfoBlock,
  InfoContainer,
  PickerContainer,
} from "./BarChartCard.styled";
import { DateRangePicker } from "rsuite";
import ColumnBarStyled from "./column-bar/ColumnBar";
import ChartLabel from "./chart-label/ChartLabel";
import BarChartContext from "../../utils/BarChartContext";

export default function BarChartCard({ data }) {
  const [valueTime, setValue] = useState([1630454399, 1632898397]);
  const [elementInfo, setElementInfo] = useState({
    amount: null,
    date: null,
    time: null,
    balance: null,
    cashbackAmount: null,
  });
  const value = useMemo(() => ({ elementInfo, setElementInfo }), [elementInfo]);

  const setDatesPeriod = (value) => {
    if (value[0] == undefined) {
      setValue([1630454399, 1632898397]);
    } else {
      setValue([value[0].getTime() / 1000, value[1].getTime() / 1000]);
    }
  };

  return (
    <BarChartContext.Provider value={value}>
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
                  element.time >= valueTime[0] && element.time <= valueTime[1]
              )}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={40}
            >
              <XAxis dataKey="date" />
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
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} info={entry} />
                ))}
              </Bar>
            </BarChart>
          </div>
          <ChartLabel />
        </CardContentStyled>
      </CardStyled>
    </BarChartContext.Provider>
  );
}
