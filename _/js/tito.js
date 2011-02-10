//Global parameters
var NUMBER_OF_BALLS = 16;
var GRID_WIDTH = 736;
var GRID_HEIGHT = 449;
var GRID_ORIGIN_X = 47;
var GRID_ORIGIN_Y = 580;
var BALL_RADIUS = 7;
var BALL_DISTANCE_BETWEEN = 25;
var GRAVITY = -0.9;
var VY_BOUNCE_COEFFICIENT = -1;
var Y_BOUNCE_COEFFICIENT = 0;
var GRID_START_X = 0;
var GRID_DISTANCE_BETWEEN_LINES = 25;

//KEY SELECTOR
var KEY_SELECTOR_X = 490;
var KEY_SELECTOR_Y = 40;
var KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN = 30;
var KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN = 80;
var KEY_SELECTOR_ODD_ROW_OFFSET = 20;
var KEY_SELECTOR_BOX_WIDTH = 46;
var KEY_SELECTOR_BOX_HEIGHT = 25;

var KEY_DATA = 
	[
	 	/*Major*/
		{"keySelectorLabel": {"letter":"A", "accidental":"", "majOrMin":"maj"},
			"notes":[57,61,64,67,69,73,76,79,81,85,88,91,93,97,100,103]},
		{"keySelectorLabel": {"letter":"E", "accidental":"", "majOrMin":"maj"},
			"notes":[64,68,71,74,76,80,83,86,88,92,95,98,100,104,107,110]},	
		{"keySelectorLabel": {"letter":"B", "accidental":"", "majOrMin":"maj"},
			"notes":[59,63,66,69,71,75,78,81,83,87,90,93,95,99,102,105]},
		{"keySelectorLabel": {"letter":"F", "accidental":"#", "majOrMin":"maj"},
			"notes":[66,70,73,76,78,82,85,88,90,94,97,100,102,106,109,112]},	
		{"keySelectorLabel": {"letter":"C", "accidental":"#", "majOrMin":"maj"},
			"notes":[61,65,68,71,73,77,80,83,85,89,92,95,97,101,104,107]},	
		{"keySelectorLabel": {"letter":"G", "accidental":"#", "majOrMin":"maj"},
			"notes":[68,72,75,78,80,84,87,90,92,96,99,102,104,108,111,114]},	
		{"keySelectorLabel": {"letter":"D", "accidental":"#", "majOrMin":"maj"},
			"notes":[63,67,70,73,75,79,82,85,87,91,94,97,99,103,106,109]},	
		{"keySelectorLabel": {"letter":"A", "accidental":"#", "majOrMin":"maj"},
			"notes":[58,62,65,68,70,74,77,80,82,86,89,92,94,98,101,104]},	
		{"keySelectorLabel": {"letter":"F", "accidental":"", "majOrMin":"maj"},
			"notes":[65,69,72,75,77,81,84,87,89,93,96,99,101,105,108,111]},	
		{"keySelectorLabel": {"letter":"C", "accidental":"", "majOrMin":"maj"},
			"notes":[60,64,67,70,72,76,79,82,84,88,91,94,96,100,103,106]},	
		{"keySelectorLabel": {"letter":"G", "accidental":"", "majOrMin":"maj"},
			"notes":[67,71,74,77,79,83,86,89,91,95,98,101,103,107,110,113]},	
		{"keySelectorLabel": {"letter":"D", "accidental":"", "majOrMin":"maj"},
			"notes":[62,66,69,72,74,78,81,84,86,90,93,96,98,102,105,108]},
			
			
		/*MInor*/
		{"keySelectorLabel": {"letter":"F", "accidental":"#", "majOrMin":"min"},
			"notes":[66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111]},	//F#min
		{"keySelectorLabel": {"letter":"C", "accidental":"#", "majOrMin":"min"},
			"notes":[61,64,67,70,73,76,79,82,85,88,91,94,97,100,103,106]},	//C#min
		{"keySelectorLabel": {"letter":"G", "accidental":"#", "majOrMin":"min"},
			"notes":[68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113]},//G#min	
		{"keySelectorLabel": {"letter":"D", "accidental":"#", "majOrMin":"min"},
			"notes":[63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108]},	//D#min
		{"keySelectorLabel": {"letter":"A", "accidental":"#", "majOrMin":"min"},
			"notes":[58,61,64,67,70,73,76,79,82,85,88,91,94,97,100,103]},	//A#min
		{"keySelectorLabel": {"letter":"F", "accidental":"", "majOrMin":"min"},
			"notes":[65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110]},	//Fmin
		{"keySelectorLabel": {"letter":"C", "accidental":"", "majOrMin":"min"},
			"notes":[60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105]},	//Cmin
		{"keySelectorLabel": {"letter":"G", "accidental":"", "majOrMin":"min"},
			"notes":[67,70,73,76,79,82,85,88,91,94,97,100,103,106,109,112]},	//Gmin
		{"keySelectorLabel": {"letter":"D", "accidental":"", "majOrMin":"min"},
		"notes":[62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107]},	//Dmin
		{"keySelectorLabel": {"letter":"A", "accidental":"", "majOrMin":"min"},
			"notes":[57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102]},	//Amin
		{"keySelectorLabel": {"letter":"E", "accidental":"", "majOrMin":"min"},
			"notes":[64,67,70,73,76,79,82,85,88,91,94,97,100,103,106,109]},	//Emin
		{"keySelectorLabel": {"letter":"B", "accidental":"", "majOrMin":"min"},
			"notes":[59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104]}	//Bmin
	];

function Ball(ballNumber)
{
	this.number = ballNumber;
	this.x = 0.0;
	this.y = 0.0;
	this.vX = 0.0;
	this.vY = 0.0;
	this.aX = 0.0;
	this.aY = GRAVITY;
	this.radius = BALL_RADIUS;
	this.gridDrawn = false;
	this.canvas = null;
	this.isMuted = false;
}


function Tito (titoCanvasID)
{
	this.canvasID = titoCanvasID;
	this.keySelected = 0;
	this.keyHoveredAbove = 0;
	this.setupBalls();
	var canvas = $('#'+this.canvasID); 
	
	canvas.mousemove(function(evt) {myTito.onMouseMove(evt);});
	//canvas.mousedown(function(evt) {myTito.onMouseMove(evt);});
	//canvas.mouseup(function(evt) {myTito.onMouseMove(evt);});
	canvas.click(function(evt) { myTito.onMouseClick(evt);});
	canvas.css({cursor:'pointer'
			   });
}

Tito.prototype.setupBalls = function setupBalls() {
	this.balls = new Array();
	for(var i=0; i<NUMBER_OF_BALLS;i++)
	{
		this.balls[i] = new Ball(i);
		this.balls[i].x = 12.5 + BALL_DISTANCE_BETWEEN*i;
		this.balls[i].y = 20.0 + BALL_DISTANCE_BETWEEN*i;
		if( (i-3) % 4 == 0) this.balls[i].isMuted = true;
	}
}

Tito.prototype.convertGridX = function convertGridX(x)
{return GRID_ORIGIN_X + x;}

Tito.prototype.convertGridY = function convertGridY(y)
{return GRID_ORIGIN_Y - y + (GRID_HEIGHT - GRID_ORIGIN_Y);}

Tito.prototype.onMouseMove = function onMouseMove(evt)
{
	var canvas = $('#'+this.canvasID); 
	var mouseX = evt.pageX - canvas.offset().left;
	var mouseY = evt.pageY - canvas.offset().top;
	
	$('#mouseX').text(evt.pageX - canvas.offset().left);
	$('#mouseY').text(evt.pageY - canvas.offset().top);
	
	this.keyHoveredAbove = -1;
	for(var row=0;row<12;row++)
		for(var column=0;column<2;column++)
		{
			var offsetLeft = 90;
			rectX1 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY1 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN;
			rectX2 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_WIDTH + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY2 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_HEIGHT;
		
			if(pointInRect(mouseX,mouseY, rectX1, rectY1, rectX2, rectY2))
				{
					this.keyHoveredAbove = row + column*12;
					this.redraw();
				}
			
		}
	d('mouseMove');
}

Tito.prototype.onMouseClick = function onMouseClick(evt)
{
	var canvas = $('#'+this.canvasID); 
	var mouseX = evt.pageX - canvas.offset().left;
	var mouseY = evt.pageY - canvas.offset().top;
	var rectX1, rectX2, rectY1, rectY2;
	
	$('#mouseX').text(mouseX);
	$('#mouseY').text(mouseY);
	
	for(var row=0;row<12;row++)
		for(var column=0;column<2;column++)
		{
			var offsetLeft = 90;
			rectX1 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY1 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN;
			rectX2 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_WIDTH + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY2 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_HEIGHT;
		
			if(pointInRect(mouseX,mouseY, rectX1, rectY1, rectX2, rectY2))
				{
					if(this.keySelected != row + column*12)
					{
						this.keySelected = row + column*12;
						this.redraw();
					}
				}
			
		}
	
	var yPos = -28;
	for(var i=0; i<NUMBER_OF_BALLS; i++)
	{
		var leftOffset = 7;
		rectX1 = this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES);
		rectY1 = this.convertGridY(-10);
		rectX2 = rectX1 + 24;
		rectY2 = rectY1 + 24;
		
		if(pointInRect(mouseX,mouseY, rectX1, rectY1, rectX2, rectY2))
			{this.balls[i].isMuted = !this.balls[i].isMuted;this.redraw();}
	}
	
	

	
}



/*Tito.prototype.onMouseDown = function onMouseDown(evt)
{
	var canvas = $('#'+this.canvasID); 
	$('#mouseX').text(evt.pageX - canvas.offset().left);
	$('#mouseY').text(evt.pageY - canvas.offset().top);
}

Tito.prototype.onMouseUp = function onMouseUp(evt)
{
	var canvas = $('#'+this.canvasID); 
	$('#mouseX').text(evt.pageX - canvas.offset().left);
	$('#mouseY').text(evt.pageY - canvas.offset().top);
}*/

Tito.prototype.moveBalls = function moveBalls() {  
	for(var i=0; i<NUMBER_OF_BALLS;i++)
	{
		this.balls[i].x += this.balls[i].vX;
		this.balls[i].y += this.balls[i].vY;
		
		if (this.balls[i].y  < 0) {
			
			if(!this.balls[i].isMuted)
				playNote(KEY_DATA[this.keySelected].notes[i]);
			
			this.balls[i].y *= Y_BOUNCE_COEFFICIENT;
			
			this.balls[i].y = 0;
			
			//if(this.balls[i].vY < 0)
				this.balls[i].vY *= VY_BOUNCE_COEFFICIENT;
			
		}
		else
			this.balls[i].vY += this.balls[i].aY;
		
		this.balls[i].vX += this.balls[i].aX;
		
	}
}

Tito.prototype.getContext = function getContext() {  
      var canvas = document.getElementById(this.canvasID);  
	  this.canvas = canvas;
      if (canvas.getContext) {  
        var ctx = canvas.getContext("2d");  
		
		return ctx;
	}
	return false;
} 

Tito.prototype.drawBalls = function drawBalls(ctx) {  	
	for(var i=0; i<NUMBER_OF_BALLS;i++)
	{
		ctx.beginPath();
		ctx.arc(
			this.convertGridX(this.balls[i].x),
			this.convertGridY(this.balls[i].y+this.balls[i].radius),
			BALL_RADIUS,
			0,Math.PI*2,true); 
			
		ctx.fillStyle = "rgb(255,255,255)";  
		ctx.fill(); 
	}
} 

Tito.prototype.drawKeySelector = function drawKeySelector(ctx) {
	
	
	var offsetLeft = 90;
	for(var row=0;row<12;row++)
		for(var column=0;column<2;column++)
		{
			var rectX1, rectX2, rectY1, rectY2;
			rectX1 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY1 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN;
			rectX2 = offsetLeft + KEY_SELECTOR_X + column * KEY_SELECTOR_BOX_H_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_WIDTH + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET);
			rectY2 = KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + KEY_SELECTOR_BOX_HEIGHT;
			
			index = row + column*12;
			
			this.drawKeySelectorBox(ctx, rectX1, rectY1, 
									KEY_DATA[index].keySelectorLabel.letter, 
									KEY_DATA[index].keySelectorLabel.accidental, 
									KEY_DATA[index].keySelectorLabel.majOrMin, 
									(this.keySelected == index), 
									(this.keyHoveredAbove == index));	
		}
	
	
	//Draw the word "KEY"
	ctx.fillStyle = "rgb(255,255,255)";

	ctx.font = "20pt LG2";
	ctx.fillText("KEY", KEY_SELECTOR_X, 225);
	
	//Draw line segment 1
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgb(150,150,150)";
	/*
	ctx.beginPath();
	ctx.moveTo(KEY_SELECTOR_X + 28, 217 - (ctx.lineWidth / 2));
	ctx.lineTo(KEY_SELECTOR_X + 36, 217 - (ctx.lineWidth / 2));
	ctx.stroke();
	*/
	
	//Draw line segments 2, 3, and 4 (x12)
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgb(150,150,150)";
	for(var row=0;row<12;row++)
	{
		//segment 2
		ctx.beginPath();
		ctx.moveTo(KEY_SELECTOR_X + 36, 217 - (ctx.lineWidth / 2));
		ctx.lineTo(offsetLeft + KEY_SELECTOR_X - 12, 
				  KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + 12 + (ctx.lineWidth / 2));
		ctx.stroke();	
		
		//segment 3
		ctx.beginPath();
		ctx.moveTo(offsetLeft + KEY_SELECTOR_X - 12, 
				  KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + 12 + (ctx.lineWidth / 2));
		ctx.lineTo(offsetLeft + KEY_SELECTOR_X - 6 + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET), 
				  KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + 12 + (ctx.lineWidth / 2));
		ctx.stroke();	
		
		//segment 4
		
		ctx.beginPath();
		ctx.strokeStyle = "rgb(150,150,150)";
		ctx.moveTo(offsetLeft + KEY_SELECTOR_X + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET) + 51, 
				  KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + 12 + (ctx.lineWidth / 2));
		ctx.lineTo(offsetLeft + KEY_SELECTOR_X + ((row % 2) * KEY_SELECTOR_ODD_ROW_OFFSET) + 74 , 
				  KEY_SELECTOR_Y + row * KEY_SELECTOR_BOX_V_DISTANCE_BETWEEN + 12 + (ctx.lineWidth / 2));
		ctx.stroke();	
	}
	
}

Tito.prototype.drawKeySelectorBox = function drawKeySelectorBox(ctx, boxX, boxY, letter, accidental, majOrMin, selected, hoveredAbove)
{
	if(typeof(selected) == 'undefined') selected = false;
	if(typeof(hoveredAbove) == 'undefined') hoveredAbove = false;
	
	ctx.beginPath();
	ctx.lineWidth = 1;
	
	if(  selected || hoveredAbove || false) 
		ctx.strokeStyle = "rgb(255,255,255)";
	else
		ctx.strokeStyle = "rgb(100,100,100)";
		
	//ctx.strokeStyle = "rgb(100,100,100)"; 
	
	ctx.strokeRect(boxX-(ctx.lineWidth/2), 
								   boxY-(ctx.lineWidth/2), 
								   46, 
								   25);
	
	if(/*selected || hoveredAbove || */ false) 
	{
		ctx.fillStyle = "rgb(100,100,100)"; 
		ctx.fillRect(boxX+1, 
								   boxY+1, 
								   43, 
								   22);
	
		
		ctx.fillStyle = "rgb(100,100,100)"; 
		ctx.fillRect(boxX+1, 
								   boxY+1, 
								   43, 
								   22);
		
	}
	
	
	if(selected || hoveredAbove) 
		ctx.fillStyle = "rgb(255,255,255)";
	else
		ctx.fillStyle = "rgb(100,100,100)";
		
	if(typeof(accidental) != 'undefined' && accidental.length > 0)
	{
		ctx.font = "14pt LG2";
		ctx.fillText(letter, boxX+6, boxY+19);
		
		ctx.font = "7.5pt LG2";
		ctx.fillText(accidental, boxX+13, boxY+13);
		
		ctx.font = "14pt LG2";
		ctx.fillText(majOrMin, boxX+20, boxY+19);
	}
	else
	{
		ctx.font = "14pt LG2";
		ctx.fillText(letter + "  " + majOrMin, boxX+6, boxY+19);
	}
	
	
	
}

Tito.prototype.drawGrid = function drawGrid(ctx) {  	
	
		//Vertical Axis
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo(this.convertGridX(0-(ctx.lineWidth/2)), this.convertGridY(GRID_HEIGHT));
		ctx.lineTo(this.convertGridX(0-(ctx.lineWidth/2)), this.convertGridY(0-2));
		ctx.strokeStyle = "rgb(130,130,130)"; 
		ctx.stroke(); 

		
		//Horizontal Axis
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.moveTo(this.convertGridX(0), this.convertGridY(0-(ctx.lineWidth/2)));
		ctx.lineTo(this.convertGridX(GRID_WIDTH), this.convertGridY(0-(ctx.lineWidth/2)));
		ctx.strokeStyle = "rgb(130,130,130)"; 
		ctx.stroke(); 
		
		for(i=1;i<16;i++)
		{
			//Vertical Axis
			ctx.beginPath();
			ctx.lineWidth = 0.1;
			ctx.moveTo(this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES)-(ctx.lineWidth/2), this.convertGridY(GRID_HEIGHT));
			ctx.lineTo(this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES)-(ctx.lineWidth/2), this.convertGridY(-13));
				
			ctx.strokeStyle = "rgb(172,172,172)"; 
			ctx.stroke();
		}	
		
} 

Tito.prototype.drawGraphLabels = function drawGraphLabels(ctx) { 
	var yPos = -28;

	for(i=0;i<NUMBER_OF_BALLS;i++)
	{
		ctx.fillStyle = (!this.balls[i].isMuted) ? "rgb(255,255,255)" : "rgb(90,90,90)"; 
		var noteName = ConvertMIDINoteNumberToNoteName(KEY_DATA[this.keySelected].notes[i]);
		var noteNameLetterPortion = noteName.substr(0,1);
		var noteNameNumberPortion = noteName.substr(1);
		
		var leftOffset = 7;
		if(noteNameNumberPortion.length == 2) leftOffset = 4;
		
		ctx.font = "14pt LG2";
		ctx.fillText(noteNameLetterPortion, this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES+leftOffset), this.convertGridY(yPos));
		ctx.font = "7.5pt LG2";
		ctx.fillText(noteNameNumberPortion, this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES+leftOffset+8),this.convertGridY(yPos+6));
	

		/*
		var rectX1, rectX2, rectY1, rectY2;
		rectX1 = this.convertGridX(GRID_START_X + i*GRID_DISTANCE_BETWEEN_LINES);
		rectY1 = this.convertGridY(-10);
		rectX2 = rectX1 + 24;
		rectY2 = rectY1 + 24;
		
		ctx.strokeStyle = "rgb(255,0,0)";
		ctx.strokeRect(rectX1, rectY1, rectX2-rectX1, rectY2-rectY1);
		*/
	}	
		
	
} 

Tito.prototype.clearCanvas = function clearCanvas(ctx) {  
	
	ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
}

Tito.prototype.redraw = function redraw()
{

	var ctx = this.getContext();
	if(ctx)
	{
		this.clearCanvas(ctx);
		//if(!this.gridDrawn) {
			this.drawGrid(ctx);
			//this.gridDrawn = true; }
		
		this.drawBalls(ctx);
		this.drawGraphLabels(ctx);
		this.drawKeySelector(ctx);
	}
	
	$('#ball_y').text(this.balls[0].y);
	$('#ball_vY').text(this.balls[0].vY);
	$('#ball_aY').text(this.balls[0].aY);
	
}

Tito.prototype.update = function update()
{
//	this.invalidateBalls();
	this.moveBalls();
	this.redraw();
}