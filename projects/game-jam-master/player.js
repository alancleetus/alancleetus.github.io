class Player{
	
	
	constructor(playerSelector,gameWindow){
		this.player = $(playerSelector);
		this.gameWindow = gameWindow;
		this.health = 3;

	}

	 moveRight(){

		this.player.css("margin-left",  ((this.getLeftMargin() + this.getSpeed()) + 'px'));
		this.player.css("background-image",  "url('./assets/sprites/Upside_down_right.gif')");
	}
	
	 moveLeft(){
		this.player.css("margin-left",(this.getLeftMargin() - this.getSpeed()) + 'px');
		this.player.css("background-image",  "url('./assets/sprites/Upside_down_left.gif')");

	}
	
	getSpeed(){
		switch(this.getHealth()) {
			case 1:
			   return 30;
				break;
			case 1:
				return 20;
				break;
			case 3:
				return 8;
				break;
			default:
				return 0;
		}
	}
	
	 isOutsideRightBoundry(){
		//player leftmargin + player width > game window width
		return (this.getLeftMargin() + this.getWidth()) > this.gameWindow.getWidth();			
	}
	
	 isOutsideLeftBoundry(){
		//player leftmargin < 0
		return this.getLeftMargin() < 0;			
	}
	
	 setToRightSideOfGameWindow(){
		// player left margin = game window width - player width
		this.player.css("margin-left",  (this.gameWindow.getWidth() - this.getWidth()) +'px');
	}
	
	 setToLeftSideOfGameWindow(){
		this.player.css("margin-left",'0px');
	}
	
	 getLeftMargin(){
		return parseInt(this.player.css("margin-left"));
	}
	
	
	 getWidth(){
		return parseInt(this.player.width(),10); 
	}
	
	 getHeight(){
		return parseInt(this.player.height(),10); 
	}
	
	 getHealth(){
		return this.health;
	}
	
	decrementHealth(){
		this.health--;
	}
}