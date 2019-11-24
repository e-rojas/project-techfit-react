import React, { Component } from 'react';
import { CanvasJSReact, CanvasJS } from '../../canvasjs-2.3.2/canvasjs.react';
// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJS.Chart;

// console.log(CanvasJS)

class ChartContainer extends Component {	
  render() {
  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{				
    type: "column",
    dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
      ]
    }]
  }

  return (
  <div>
    <CanvasJSChart options = {options}
        /* onRef = {ref => this.chart = ref} */
    />
  </div>
  );
  }
}

export default ChartContainer;