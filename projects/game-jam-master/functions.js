//start js here
//game window. dont want player to move past the screen
//boulder-player collision

$(document).ready(function()
{
	document.onkeydown = checkKey;
	document.onkeyup = stopPlayer;
	
	//player score
	var score = 0;
	//game round number
	var roundNum = 1;
	
	//increments score every 200ms
	var scoreIntervalId = setInterval(function()
	{
		score++;
		$('#val').text(""+score);
		//console.log(score);
	}, 200);
	
	//inserts round number into the webpage
	$("#roundVal").text(roundNum);
	
	var gameWindow =  new GameWindow('gameWindow');
	var mPlayer = new Player($('#player'),gameWindow);
	
	var keyPressed=false;
	function checkKey(e) 
	{
		e = e || window.event;

		// console.log(mPlayer.getLeftMargin());

		/*left arrow clicked > move player right*/
		if (e.keyCode == '37') 
		{
			if(keyPressed)	return;
	
			keyPressed=true;

			//player class will set player to right moving animation
			mPlayer.moveRight();
		
			/* ******************************************************
			 * validate that player isn't already out of bounds, 	*
			 * if so, move to player to end of right side		*
			 * else, move player right and parallax background		*
			 ********************************************************/
			if(mPlayer.isOutsideRightBoundry())
			{
		   		mPlayer.setToRightSideOfGameWindow();
			}
			else{
		   		//move backgrounds
		   		$('#parallaxLayer1').css("margin-left", (parseInt($('#parallaxLayer1').css("margin-left"))+3)+'px'   );
				$('#parallaxLayer2').css("margin-left", (parseInt($('#parallaxLayer2').css("margin-left"))+1)+'px'   );
				$('#runText').css("margin-left", (parseInt($('#runText').css("margin-left"))+2)+'px'   );
	
	   		}/*end parallaxing*/
    		}/*end left arrow click*/
		
    		else if (e.keyCode == '39') /*right arrow cliked > move player left*/
		{
			if(keyPressed)	return;
			
			keyPressed=true;
       			
			//player class will set player to left moving animation
	   		mPlayer.moveLeft();
	    
			/* ******************************************************
			 * validate that player isn't already out of bounds, 	*
			 * if so, move to player to end of right side		*
			 * else, move player right and parallax background	*
			 ********************************************************/
	  		if(mPlayer.isOutsideLeftBoundry()){
				mPlayer.setToLeftSideOfGameWindow();
	   		}else{
				//move backgrounds
		   		$('#parallaxLayer1').css("margin-left", (parseInt($('#parallaxLayer1').css("margin-left"))-3)+'px'   );
				$('#parallaxLayer2').css("margin-left", (parseInt($('#parallaxLayer2').css("margin-left"))-1)+'px'   );
				$('#runText').css("margin-left", (parseInt($('#runText').css("margin-left"))-2)+'px'   );
	
	  		}/*end parallaxing*/
    		}/*end right arrow click*/

	
	// move asteroid/boulder-player
	
	//detect collision
	//if collision occurs
		//game end
	//else continue

	
	//after every 5 seconds increase freqency  and increase speed every 7 seconds of boulders
	

	}

	/*changes the player animation to standing still*/
	function stopPlayer(){

		keyPressed=false;

		//change player animation to standing still
		$('#player').css("background-image",  "url('./assets/sprites/UpsidedownStanding.gif')");
	
	}

	/*moves the boulder up by */
	function moveDeathBoulder()
	{
		/*animate boulder and check if user won*/
		$("#giantBoulder").animate({top: '-1500px'},10000-(roundNum*600), function(){	userWon();	});	
	}

	moveDeathBoulder();

	function  userWon()
	{
		var playerLeftMargin = mPlayer.getLeftMargin();
	
	
		if(playerLeftMargin >= 900 || playerLeftMargin <= 100)
		{
			/* check if player wants to play again
			 * if yes > increase round number and reset boulder player, and stars	
			 * else reset page 
			 */
			var s=confirm("You WON!. Continue");
			console.log(s);
			if(s)
			{
				roundNum++;
				$("#roundVal").text(roundNum);
				$("#giantBoulder").animate({top: '800px'},10);
				$('#player').css("margin-left","450px");
				/*reset background*/
				$('#parallaxLayer1').css("left","-50%");
				$('#parallaxLayer2').css("left","-50%");
				$('#runText').css("margin-left","32%");
				$('#runText').css("margin-top","40%");

				moveDeathBoulder();
			}
			else
			{
				location.reload();
			}
		}else{
			var x =confirm("You LOST! Your score was : "+score+" Would you like to go again?");
			console.log(x);
			if(x){
				location.reload();
			}else{
				clearInterval(scoreIntervalId);
			}
			
	
		}
	}
});
