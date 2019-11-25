import React, { Fragment } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryBar, VictoryStack, VictoryTheme } from 'victory';

export default function LiquidBar(props) {
  return (
    <Fragment>
      {/* CHART CONTAINER */}
      <VictoryChart 
        height={500}
        width={500}
        theme={VictoryTheme.material}
        style={{
          x: 'days'
        }}
      >        
      {/* X AXIS */}
      <VictoryAxis crossAxis
        domain={[0, 7]}
        theme={VictoryTheme.material}
        offsetY={50}
        standalone={false}
      />

      {/* Y AXIS */}
      <VictoryAxis dependentAxis crossAxis
        domain={[0, 10]}
        theme={VictoryTheme.material}
        offsetX={50}
        standalone={false}
      />
      
      
      {/* LINE GRAPH WITH DEFAULT DATA */}
      <VictoryLine />

      {/* STACKED BAR CHART */}
      <VictoryStack>
        {/* BAR SET 1 */}
        <VictoryBar 
          alignment={'start'}
          animate={{
            duration: 1500,
            onLoad: { duration: 1500 }
          }}
          style={{
            data: { fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
            labels: { fontSize: 6 },
          }}
        />

        {/* BAR SET 2 */}
        <VictoryBar 
          alignment={'start'}
          animate={{
            duration: 1500,
            onLoad: { duration: 1500 }
          }}
          style={{
            data: { fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
            labels: { fontSize: 6 }
          }}
        />

        </VictoryStack>
      </VictoryChart>
    </Fragment>
  )
}