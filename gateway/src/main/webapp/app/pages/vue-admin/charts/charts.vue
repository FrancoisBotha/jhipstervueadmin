<template>
    <div class="container-fluid">

      <!-- Header -->
      <div class="header text-left">
        <h1 class="title">Charts</h1>
        <p class="category mb-4">
          See
          <a target="_blank" href="https://gionkunz.github.io/chartist-js/">Chartist.js</a>.
        </p>
      </div>
  
      <!-- Chart Row -->
      <div class="row">

        <div class="col-md-4">
          <div class="card card-chart">
            <div class="card-header card-header-icon card-header-danger">
              <h4 class="card-title">Bar Chart</h4>
            </div>
            <div class="card-body">
                <div class="ct-chart" ref="simpleBarChart"></div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card card-chart">
            <div class="card-header card-header-icon card-header-danger">
              <h4 class="card-title">Line Chart</h4>
            </div>
            <div class="card-body">
                <div class="ct-chart" ref="roundedLineChart"></div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card card-chart">
            <div class="card-header card-header-icon card-header-danger">
              <h4 class="card-title">Pie Chart</h4>
            </div>
            <div class="card-body">
              <div class="ct-chart" ref="chartPreferences"></div>
            </div>
          </div>
        </div>

  
      </div>
  
      <!-- More Charts Row -->
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header card-header-icon card-header-info">
              <h4 class="card-title">Horizontal Bar Chart</h4>
            </div>
            <div class="card-body">
              <div class="ct-chart" ref="horizontalBarChart"></div>
            </div>
          </div>
        </div>
  
        <div class="col-md-6">
          <div class="card">
            <div class="card-header card-header-icon card-header-rose">
              <h4 class="card-title">Multiple Bars Chart</h4>
            </div>
            <div class="card-body">
              <div class="ct-chart" ref="multipleBarsChart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { LineChart, BarChart, PieChart } from 'chartist';
  
  // Create refs for each chart container
  const roundedLineChart = ref(null);
  const simpleBarChart = ref(null);
  const horizontalBarChart = ref(null);
  const multipleBarsChart = ref(null);
  const chartPreferences = ref(null);
  
  onMounted(() => {
    // Example data for the charts
    const data = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [[12, 9, 7, 8, 5, 10, 4]]
    };

    const dataBarChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [500, 400, 300, 700, 800, 600, 500, 400, 300, 700, 800, 600], // Series 1
      [300, 200, 100, 500, 600, 400, 300, 200, 100, 500, 600, 400]  // Series 2
        ]
    };
  

    const dataHorizontal = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
        [5, 4, 3, 7, 5, 10, 3], // Series 1
        [3, 2, 9, 5, 4, 6, 4]    // Series 2
        ]
    };

    // Options for the horizontal bar chart
    const optionsHorizontal = {
        seriesBarDistance: 10,      // Distance between bars
        reverseData: true,          // Reverse the data to have bars from top to bottom
        horizontalBars: true,       // Display bars horizontally
        axisY: {
        offset: 70                // Offset the Y axis for padding
        },
        height: '300px'             // Adjust height as needed
    };


    const options = {
      height: '200px'
    };

    const optionsBarChart = {
    height: '300px', // Adjust height as needed
    seriesBarDistance: 10, // Distance between bars
    axisX: {
      showGrid: false // Hide the grid for the X axis
    },
    axisY: {
      onlyInteger: true, // Show integer values only on the Y axis
      offset: 20 // Offset the Y axis for padding
    }
  };

  
    new BarChart(simpleBarChart.value, data, options);

    // Create charts using Chartist.js
    new LineChart(roundedLineChart.value, data, options);
    new BarChart(horizontalBarChart.value, dataHorizontal, optionsHorizontal);
    new BarChart(multipleBarsChart.value, dataBarChart, optionsBarChart);

    const segmentColors = ['#3498db', '#e74c3c', '#2ecc71', '#28afc7']; // Colors for each segment

    new PieChart(chartPreferences.value, {
      series: [20, 10, 30, 40],
      labels: ['Apple', 'Samsung', 'Google', 'Microsoft'],
    }).on('draw', function(data) {
        if (data.type === 'slice') {
            // Apply the color from the segmentColors array
            data.element.attr({
            style: `fill: ${segmentColors[data.index]};`
            });
        }
        });;

  });
  </script>
  
  <style>

  .container-fluid {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    padding: 1rem;
  }
  
  .ct-chart {
    height: 300px;
  }

  /* Customizing stroke width */
  .ct-bar {
    stroke-width: 15px;
  }

  /* Adding rounded corners to bars */
  .ct-bar {
    stroke-linecap: square; 
   }

   .ct-series-a .ct-bar {
    stroke: #28afc7; /* Red for the first series */
    }

    .ct-series-b .ct-bar {
    stroke: #d1596d; /* Green for the second series */
    }

    .ct-series-a .ct-line {
      stroke: #28afc7; /* Red for the first line */
    }

    .ct-series-a .ct-point {
        stroke: #28afc7; /* Red for the points on the first line */
    }

  </style>
  