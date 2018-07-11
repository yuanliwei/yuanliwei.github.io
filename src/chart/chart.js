var myChart;
var backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
]
var borderColor = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]
function initChart(ctx) {
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: JSON.parse(JSON.stringify(backgroundColor)),
              borderColor: JSON.parse(JSON.stringify(borderColor)),
              borderWidth: 1
          },{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: JSON.parse(JSON.stringify(backgroundColor)),
              borderColor: JSON.parse(JSON.stringify(borderColor)),
              borderWidth: 1,
              type: 'line'
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          // Container for pan options
          pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy'
          },

          // Container for zoom options
          zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Enable drag-to-zoom behavior
            // drag: true,

            // Zooming directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'x'
          }
      }
  });
}

function setSpaceSplitDataString(dataStr) {
  dataStr = dataStr.replace(/[^\d\.]+/g,' ').trim()
  var datas = dataStr.split(' ').map((str)=>{
    return parseFloat(str)
  })
  setDatas(datas)
}

function setDatas(datas) {
  for (var i = 0; i < datas.length; i++) {
    var data = datas[i]
    myChart.data.labels.push(i);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        dataset.backgroundColor.push(backgroundColor[i%backgroundColor.length]);
        dataset.borderColor.push(borderColor[i%borderColor.length]);
    });
  }
  myChart.update()
}

function addData(label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        dataset.backgroundColor.push(backgroundColor[i%backgroundColor.length]);
        dataset.borderColor.push(borderColor[i%borderColor.length]);
    });
    myChart.update();
}

function clearData() {
  myChart.data.labels = []
  myChart.data.datasets.forEach((dataset) => {
      dataset.data = [];
      dataset.backgroundColor = [];
      dataset.borderColor = [];
  });
  myChart.update();
}
