function findWinner(player)
{
	// rat=0; cat=1; ele=2
	
	var cpu = Math.floor(Math.random()*10)%3;
	
	console.log("player = "+player)
	console.log("cpu = "+cpu);
	var winner = ( 3 + player - cpu)%3;
	
	console.log("winner = "+winner)
	var playerpos="";
	var cpupos="";
	if(winner == 1)
	{	
		playerpos = "winner";
		cpupos = "loser";
	}else if(winner == 2)
	{	
		playerpos = "loser";
		cpupos = "winner";
	}else{
		playerpos = "draw";
		cpupos = "draw";
	}
	
	
	var cardType =["rat_card","cat_card","ele_card"]; 
	
	var inner = "<div class='card "+playerpos+"' id='cardPlayer'>";
		inner += "		<h2 class='sectionTitle' >Player's pick</h2>";
		inner += "			<div class='inner'>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<a class='anchorCardPlayer'></a>";
		inner += "				<div class='content "+cardType[player]+"'></div>";
		inner += "			</div>"; 
		inner += "		<h2 class='resultText' >"+playerpos+"!!!</h2>";
		inner += "		</div>";
		 		  
		inner += "			<div class='card "+cpupos+"' id='cardCpu'>";
		inner += "			<h2 class='sectionTitle' >CPU's pick</h2>";
		inner += "				<div class='inner'>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<a class='anchorCardCpu'></a>";
		inner += "					<div class='content "+cardType[cpu]+"'></div>";
						 
		inner += "			</div> ";
		
		inner += "		<h2 class='resultText' >"+cpupos+"!!!</h2>";
		inner += "		</div>";
	
	document.getElementById("result").innerHTML = inner;
}