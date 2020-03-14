function displayPieChart(data) {
    //Pie Chart
    let pieChart = document.getElementById("myPieChart").getContext("2d");
    let myPieChart = new Chart(pieChart, {
      type: "pie",
      data: {
        labels: ["Admin", "Member"],
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#949FB1",
              "#4D5360"
            ],
            hoverBackgroundColor: [
              "#A8B3C5",
              "#616774"
            ]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
            display: true,
            text: 'Downloads by User Group'
        },
      }
    });
  }
  export { displayPieChart };
  