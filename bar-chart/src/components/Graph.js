import Chart from 'chart.js/auto';

const Graph = () => {
  return (
    <article class="container">
      <canvas id="myChart"></canvas>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
      {/* <script>{new Chart(document.getElementById('myChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },
      options: {}
      })}</script> */}
    </article>
  )
}

export default Graph
