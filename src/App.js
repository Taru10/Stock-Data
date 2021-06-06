import React, { useEffect } from 'react'
import { getDailyChartForSymbol } from './ApiConnector';
import Chart from './Chart';

const App = () => {

  return (
    <div style = { { display: 'flex', justifyContent : 'center'}}>
      <div style = { { width : '70%'}}>
        <Chart />
      </div>
    </div>
  );
};

export default App ;