function displayLineChart(labels, xLabel, data) {
    // Line Chart
    let lineChart = document.getElementById("myLineChart").getContext("2d");
    let myLineChart = new Chart(lineChart, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Downloads",
            // lineTension: 0,
            data: data,
            backgroundColor: ["rgba(105, 0, 132, .2)"],
            borderColor: ["rgba(200, 99, 132, .7)"],
            borderWidth: 2
          },
        ]
      },
      options: {
        scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Number of Downloads"
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: xLabel
                }
              }
            ]
          }
      }
    });
  }
  
  export { displayLineChart };
  