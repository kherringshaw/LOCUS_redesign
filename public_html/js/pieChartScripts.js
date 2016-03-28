

      google.load('visualization', '1.0', {'packages':['corechart']});
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ClassCategory');
        data.addColumn('number', 'ClassesTaken');
        data.addRows([
          ['Math', 4],
          ['English', 7],
          ['History', 1],
          ['Computer Science', 0.5],
          ['Communications', 2]
        ]);

        var options = {
            width: 400,
            height: 240,
            title: 'Course Progress',
            legend: 'none',
            colors: ['#ffd700', '#33cc00', '#ffd700', '#ff0000', '#ffd700']};

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    