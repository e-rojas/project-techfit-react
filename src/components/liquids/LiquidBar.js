import React, { Fragment } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryStack, VictoryTheme } from 'victory';
import GenerateBar from './GenerateBar.js';

export default function LiquidBar(props) {
  //CREATE REQUEST TO SERVER FOR DATA HERE
  //useEffect from React
  //One request for all drink data
  //we want to separate each drink from the results
  //we want to select the most recent 7 results

  //we want to send the value to GenerateBar
  //we want to generate {x, y} pair for each result

  //axios.get()


  return (
    <Fragment>
      {/* CHART CONTAINER */}
      <VictoryChart 
        height={500}
        width={500}
        theme={VictoryTheme.material}>

        {/* X AXIS */}
        <VictoryAxis crossAxis
          domain={[0, 7]}
          theme={VictoryTheme.material}
          offsetY={50}
          standalone={false}
        />

        {/* Y AXIS */}
        <VictoryAxis dependentAxis crossAxis
          domain={[0, 15]}
          theme={VictoryTheme.material}
          offsetX={50}
          standalone={false}
        />
      
        {/* LINE GRAPH WITH DEFAULT DATA */}
        <VictoryLine />

        {/* STACKED BAR CHART */}
        <VictoryStack>
          {GenerateBar('water')}
          {GenerateBar('coffee')}
          {GenerateBar('soda')}
        </VictoryStack>
      </VictoryChart>
    </Fragment>
  )
}