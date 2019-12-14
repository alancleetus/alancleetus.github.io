/*****moves div with mouse****/

var $xPos_mouse = 0;
var $yPos_mouse = 0;
var $newX = 0; 
var $newY =0;

$(document).mousemove(function(e){
	$xPos_mouse = e.pageX;
	$yPos_mouse = e.pageY;

	if($yPos_mouse < 50) $yPos_mouse = 50;
});

	var $loop = setInterval(function(){
	
	// change 12 to alter damping higher is slower
	$newX += (($xPos_mouse - $newX)/12);
	$newY += (($yPos_mouse - $newY)/12);
	$("#seeker").css({left:$newX +'px', top:$newY +'px'});  
}, 3);


/*****************************/

/*global values*/
var score = 0;
var playing = false;
var health = 100;


function game()
{
	//if already an instance of game do nothing
	if(playing == true)return;
	
	playing = true;
	
	var paused = false;
	
	//where the red dot starts
	var originalX =  $("#dot").position().left;
	var originalY =  $("#dot").position().top;

	//varibale that will keep the current position of red dot
	var posX = originalX;
	var posY = originalY;

	var dist = 1;	//how far the dot will move
	var dir = 0;	//what direction the dot moves
	
	var timer = 50;

	//size of the div the game will be in
	var gwHeight = $("#game_window").height()-50;
	var gwWidth = $("#game_window").width()-50;
	
	//console.log(gwHeight+" "+gwWidth);
	var the_dot = document.getElementById("dot");
	
	//this update the game word at each 5 millisec?
	var id = setInterval(playGame,5);
	function playGame()
	{		
		if(timer == 0)
		{
			timer = 50;
			dir = Math.floor(Math.random()*8);
			
			//update score if red ball inside white ball
			
			var r1 = the_dot.style.width/2;
			var r2 = $("#seeker").width()/2;
			
			var c1x = $("#dot").position().left + r1;
			var c1y = $("#dot").position().top + r1;
			
			var c2x = $("#seeker").position().left + r2;
			var c2y = $("#seeker").position().top + r2;
			
			//console.log("r1"+r1+" r2"+r2+" c1x "+c1x+" cx2 "+c2x+" c1y "+c1y+" c2y "+c2y);
			
			var dSqrt = Math.pow((c2y-c1y),2) + Math.pow((c2x - c1x),2);
						
			//console.log(dSqrt + "  "+ Math.pow((r1+r2),2));
			if(dSqrt <= Math.pow((r1+r2),2))
			{
				score += 1;
			
				document.getElementById("val").innerHTML = score;
				
				health++;
				document.getElementById("health").innerHTML = health;
			}
			else
			{
				health--;
				document.getElementById("health").innerHTML = health;
								
				if(health == 0)
				{
					endGame();
				}
			}
			
			/*if(health<25)
				$("health").css('color', 'red');
			else if(health<50)
				$("health").css('color', 'orange');
			else if(health<75)
				$("health").css('color','yellow');
			else if(health == 0)
				$("health").css('color', 'black');
			
			switch(score/100)
			{
				case 0:
					var dist = 1;
					break;
				case 1:
					var dist = 10;
					break;
				case 2:
					var dist = 30;
					break;
				case 3:
					var dist = 40;
					break;
				case 4:
					var dist = 50;
					break;
				default:
					var dist = 100;
					break;
					
			*/
		}
		
		switch(dir)
		{
			case 0:
				moveUp();
				break;
		
			case 1:
				moveDown();
				break;
		
			case 2:
				moveLeft();
				break;
		
			case 3:
				moveRight();
				break;
			
			case 4:
				moveUp();
				moveLeft();
				break;
		
			case 5:
				moveUp();
				moveRight();
				break;
		
			case 6:
				moveDown();
				moveLeft();
				break;
		
			case 7:
				moveDown();
				moveRight();
				break;
		
		}
		timer--;
	}

	function moveUp()
	{
		if(posY-dist > 100) posY-=dist;
		else posY+=dist;
		the_dot.style.top = posY+"px";
		//console.log("up");
	}
	
	function moveDown()
	{
		if(posY+dist < gwHeight) posY+=dist;
		else posY-=dist;
		the_dot.style.top = posY+"px";
		//console.log("down");
	}
	
	function moveLeft()
	{
		if(posX-dist > 50) posX-=dist;
		else posX+=dist;
		the_dot.style.left = posX+"px";
		//console.log("left");
	}
	
	function moveRight()
	{
		if(posX+dist < gwHeight) posX+=dist;
		else posX-=dist;
		the_dot.style.left = posX+"px";
		//console.log("right");
	}
	
		
	function pauseGame()
	{
		clearInterval(id);	
		paused = true;
		playing = false;
	}

	function endGame()
	{
		ended = true;
		clearInterval(id);
		
		the_dot.style.top = originalY;
		the_dot.style.left = originalX
		
		posX = originalX;
		posY = originalY;
		
		alert("Total Score: " + score);
		
		location.reload();
		
		score = 0;
		
		health = 100;
		document.getElementById("val").innerHTML = score;
		document.getElementById("health").innerHTML = health;
		
		return;
	}
	
	
	/*eventlistners*/
	document.getElementById("pauseGame").addEventListener("click",pauseGame,false);
	document.getElementById("endGame").addEventListener("click", endGame,false); 
	
	/*$(window).keypress(function (e) {
		if (e.keyCode === 0 || e.keyCode === 32) {
			e.preventDefault()
			console.log('Space pressed')
			
			if(!paused)
			{
				paused = true;
				pauseGame();
			}
			else 
			{
				paused = false;
				game();
			}
		
	})*/
}