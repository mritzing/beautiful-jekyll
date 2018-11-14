//Draw a line

/**
context.moveTo(startX, startY);
context.lineTo(endX, endY);
context.stroke();
*/

run();
function clear() {
	var node = document.getElementById('foo');
	while (node.hasChildNodes()) {
    	node.removeChild(node.firstChild);
	}

}
function run() {
	context = createCanvas();
	squareTile(context, 40, true);
	context = createCanvas();
	squareTile(context, 40, false);
	context = createCanvas();
	rectTile(context, 40, 50);
	context = createCanvas();
	arcTile(context, 10);
	context = createCanvas();
	joyD(context);
}

function createCanvas() {
	var canvas = document.createElement('canvas');
	canvas.width = 400;
	canvas.height = 400;
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(canvas);
	var context = canvas.getContext('2d');
	fillCanvas(context, "white");
	return context;
}

function fillCanvas(context, color) {
	context.rect(0, 0, context.canvas.height, context.canvas.height);
	context.fillStyle = color;
	context.fill();
}

function lrLine(context, startX, startY, endX, endY, diag) {
	var leftToRight = Math.random() > .5;
	if (diag) {
		if (leftToRight) {
			drawLine(context, startX, startY, endX, endY);
		} else {
			drawLine(context, startX, endY, endX, startY);
		}
	} else {
		var sep = 0;
		var xMid = ((endX - startX) / 2) + startX;
		var yMid = ((endY - startY) / 2) + startY;
		if (leftToRight) {
			drawLine(context, xMid, startY + sep, xMid, endY - sep);
		} else {
			drawLine(context, startX + sep, yMid, endX - sep, yMid);
		}
	}
}

function drawLine(context, startX, startY, endX, endY) {
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(endX, endY);
	context.stroke();
}

function squareTile(context, dimension, diag) {
	// height /width per tile
	var height = context.canvas.height / dimension;
	var width = context.canvas.width / dimension;
	for (var r = 0; r < dimension; r++) {
		for (var c = 0; c < dimension; c++) {
			lrLine(context, c * width, r * height, (c + 1) * width, (r + 1) * width, diag);
		}
	}
}

function rectTile(context, rows, segments) {
	// height /width per tile
	var height = context.canvas.height / rows;
	var width = context.canvas.width / segments;
	for (var r = 1; r < rows - 1; r++) {
		prevY = r * height + height / 2;
		for (var c = 0; c < segments; c++) {
			midY = r * height + height / 2;
			var ratio = (r + c) / (rows + segments)
			randNum = (Math.random() * 3 * ratio ** 3 * height);
			//var ratio = Math.log( (r* c ) )/ Math.log((rows * segments));
			//console.log(ratio);
			//randNum = randNum * ratio ;
			midY = midY + randNum
			if (midY > context.canvas.height) {
				midY = context.canvas.height;
			}
			drawLine(context, c * width, prevY, c * width + width, midY);
			prevY = midY;
		}
	}
}

function drawArc(context, startX, startY, radius, sAngle, eAngle, counterClockwise = false) {
	//assumes square 
	context.beginPath();
	context.arc(startX, startY, radius, sAngle, eAngle, counterClockwise);
	context.stroke();
}

function arcTile(context, dimension) {
	// height /width per tile
	var height = context.canvas.height / dimension;
	var width = context.canvas.width / dimension;
	var radius = width / 2;
	for (var r = 0; r < dimension; r++) {
		for (var c = 0; c < dimension; c++) {
			//draws from centers 	
			// also the angle measurements are backwards from any normal circle ie 3pi/2 is actually pi/2

			if (Math.random() > .5) {

				drawArc(context, c * width, r * height, radius, 0, Math.PI / 2);
				drawArc(context, ((c + 1) * width), (r + 1) * height, radius, Math.PI, 3 * Math.PI / 2);
			} else {
				drawArc(context, (c * width), (r + 1) * height, radius, 3 * Math.PI / 2, 0);
				drawArc(context, ((c + 1) * width), (r) * height, radius, Math.PI / 2, Math.PI);
			}
		}
	}
}

function rectTile(context, rows, segments) {
	// height /width per tile
	var height = context.canvas.height / rows;
	var width = context.canvas.width / segments;
	for (var r = 1; r < rows - 1; r++) {
		prevY = r * height + height / 2;
		for (var c = 0; c < segments; c++) {
			midY = r * height + height / 2;
			var ratio = (r + c) / (rows + segments)
			randNum = (Math.random() * 3 * ratio ** 3 * height);
			//var ratio = Math.log( (r* c ) )/ Math.log((rows * segments));
			//console.log(ratio);
			//randNum = randNum * ratio ;
			midY = midY + randNum
			if (midY > context.canvas.height) {
				midY = context.canvas.height;
			}
			drawLine(context, c * width, prevY, c * width + width, midY);
			prevY = midY;
		}
	}
}

//not finished
function curveRep(context, segments) {
	var height = 10;
	var width = context.canvas.width / segments;
	//starting variance
	var pointsList = [];
	//draw first line
	var yCoord = context.canvas.height / 2;
	console.log(yCoord);
	context.beginPath();
	context.moveTo(0, yCoord);
	for (var c = 0; c < segments; c++) {
		var min = c * width;
		var max = (c + 1) * width;
		var randomNumber = Math.floor(Math.random() * height * 2 + 1) - height;
		console.log(randomNumber);
		var cp1x = Math.random() * (max - min) + min;
		var cp2x = Math.random() * (max - min) + min;
		var cp1y = Math.floor(Math.random() * height * 2 + 1) - height + yCoord;
		var cp2y = Math.floor(Math.random() * height * 2 + 1) - height + yCoord;
		yCoord = yCoord + randomNumber;
		console.log(yCoord);
		console.log(cp1x, cp1y, cp2x, cp2y, max, yCoord);
		context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, max, yCoord);
		context.stroke();
	}
}
//now with lists
function joyD(context) {
	var step = 10
	var size = context.canvas.width;
	lines = [];
	for (var i = step; i <= size - step; i += step) {
		var line = [];
		for (var j = step; j <= size - step; j += step) {
			var distanceToCenter = Math.abs(j - size / 2);
			var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
			var random = Math.random() * variance / 2 * -1;
			var point = {x: j, y: i + random};
			line.push(point);
		}
		lines.push(line);
	}
	for (var i = 0; i < lines.length; i++) {	
		context.beginPath();
		context.moveTo(lines[i][0].x, lines[i][0].y);
		for (var j = 0; j < lines[i].length; j++) {
			context.lineTo(lines[i][j].x, lines[i][j].y);
		}
		context.stroke();
	}
}