import React from "react";

const defaultData = {
  elementInfo: {
    amount: null,
    date: null,
    time: null,
    balance: null,
    cashbackAmount: null,
  },
};

const BarChartContext = React.createContext(defaultData);

export default BarChartContext;
