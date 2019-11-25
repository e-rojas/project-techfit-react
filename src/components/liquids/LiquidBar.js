import React, { Fragment } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryBar, VictoryStack, VictoryTheme } from 'victory';
import GenerateBar from './GenerateBar.js';

export default function LiquidBar(props) {
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
          {/* WATER */
          GenerateBar('water')}
          {/* COFFEE */
          GenerateBar('coffee')}
          {/* SODA */
          GenerateBar('soda')}
        </VictoryStack>
      </VictoryChart>
    </Fragment>
  )
}