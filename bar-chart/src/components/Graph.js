import CanvasJSReact from '../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
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
    <article class="container">
      <CanvasJSChart options = {options} />
    </article>
  )
}

export default Graph
