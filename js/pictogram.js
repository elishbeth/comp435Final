<!DOCTYPE html>
<meta charset="utf-8">
<html>
  <head>
	<script src="http://d3js.org/d3.v4.js"></script>
  </head>

<body>
	<div id='grid-container'>
		<div id='grid-chart'></div>
	</div>
</body>
<script>

var drawGraph = function(){

	//number of circles to color in to visualize percent
	var percentNumber = 92;

	//variables for the font family, and some colors
	var fontFamily = "helvetica";
	var twitterFill = "#4D908E";
	var twitterFillActive = "#adf7b6";
	var svgBackgroundColor = '#264653';

	//width and height of the SVG
	const width = 500;
	const height = 500;

	//create an svg with width and height
	var svg = d3.select('#grid-chart')
		.append('svg')
		.attr("width", width)
		.attr("height", height)
    	.style('background-color', svgBackgroundColor);

	//10 rows and 10 columns 
	var numRows = 10;
	var numCols = 10;

	//x and y axis scales
	var y = d3.scaleBand()
		.range([0,250])
		.domain(d3.range(numRows));

	var x = d3.scaleBand()
		.range([0, 250])
		.domain(d3.range(numCols));

	//the data is just an array of numbers for each cell in the grid
	var data = d3.range(numCols*numRows);

	//container to hold the grid
	var container = svg.append("g")
		.attr("transform", "translate(135,130)");
	

	container.selectAll("circle")
			.data(data)
			.enter().append("circle")
			.attr("id", function(d){return "id"+d;})
			.attr('cx', function(d){return x(d%numCols);})
			.attr('cy', function(d){return y(Math.floor(d/numCols));})
			.attr('r', 12)
			.attr('fill', function(d){return d < percentNumber ? twitterFillActive : twitterFill;})
			.style('stroke', 'black');

}

	//call function to draw the graph
	drawGraph();

</script>
</html>
