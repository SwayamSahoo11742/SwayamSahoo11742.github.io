let graph = document.getElementById('solves')
let csvfile = document.getElementById('csvfile')
let lineGraph = new Chart(graph, {
    type:'line',
    data:
        {
            labels: [],
            datasets: [{
              label: 'My First Dataset',
              data: [],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
})

csvfile.addEventListener('change', function (event) {
  const f = event.target.files[0];
  if(f){
    const reader = new FileReader();
    var times = []
    reader.onload = function (e) {
        const fileContent = e.target.result;
        const lines = fileContent.split("\n")
        for(let i = 1; i < lines.length; i++){
          times.push(parseFloat(lines[i].split(";")[1]))
        }
        let labels = [];
        for(let i = 1; i <= lines.length; i++){
          labels.push(i)
        }
        let lineGraph = new Chart(graph, {
          type:'line',
          data:{
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: times,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
      })
    };
    reader.readAsText(f);

  console.log(data)
    
  }
});