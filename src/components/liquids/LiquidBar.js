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
        domain={[0, 15]}
        theme={VictoryTheme.material}
        offsetX={50}
        standalone={false}
      />
    
      {/* LINE GRAPH WITH DEFAULT DATA */}
      <VictoryLine />

      {/* STACKED BAR CHART */}
      <VictoryStack>
        {/* WATER */}
        <VictoryBar
          alignment={'end'}
          animate={{
            duration: 1500,
            onLoad: { duration: 1500 }
          }}
          style={{
            data: { fill: 'cyan', fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
            labels: { fontSize: 6 },
          }}
          data={[
            {x: 1, y: 4}, 
            {x: 2, y: 1}, 
            {x: 3, y: 3}, 
            {x: 4, y: 5},
            {x: 5, y: 2},
            {x: 6, y: 2},
            {x: 7, y: 4}
          ]}
        />
        {/* COFFEE */}
        <VictoryBar
          alignment={'end'}
          animate={{
            duration: 1500,
            onLoad: { duration: 1500 }
          }}
          style={{
            data: { fill: 'tan', fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
            labels: { fontSize: 6 },
          }}
          data={[
            {x: 1, y: 1}, 
            {x: 2, y: 3}, 
            {x: 3, y: 1}, 
            {x: 4, y: 1},
            {x: 5, y: 2},
            {x: 6, y: 1},
            {x: 7, y: 3}
          ]}
        />
        {/* SODA */}
        <VictoryBar
          alignment={'end'}
          animate={{
            duration: 1500,
            onLoad: { duration: 1500 }
          }}
          style={{
            data: { fill: 'tomato', fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
            labels: { fontSize: 6 },
          }}
          data={[
            {x: 1, y: 0}, 
            {x: 2, y: 2}, 
            {x: 3, y: 0}, 
            {x: 4, y: 1},
            {x: 5, y: 1},
            {x: 6, y: 0},
            {x: 7, y: 3}
          ]}
        />
      </VictoryStack>

    {/* data={[
        [{x: 1, y: 4}, {x: 2, y: 3}, {x: 3, y: 2}, {x: 4, y: 6}, {x: 5, y: 3}, {x: 6, y: 4}, {x: 7, y: 3}],
        [{x: 1, y: 1}, {x: 2, y: 5}, {x: 3, y: 3}, {x: 4, y: 1}, {x: 5, y: 0}, {x: 6, y: 1}, {x: 7, y: 1}],
        [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 3}, {x: 6, y: 0}, {x: 7, y: 2}],
        [{x: 1, y: 0}, {x: 2, y: 1}, {x: 3, y: 2}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 1}]
      ]} */}
      </VictoryChart>
    </Fragment>
  )
}