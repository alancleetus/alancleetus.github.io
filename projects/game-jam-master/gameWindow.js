class GameWindow{
	
	
	constructor(gameWindowId){
		this.gameWindow = $('#'+gameWindowId);
	}
	
	 getWidth(){
		return this.gameWindow.width();
	}
	
	 getHeight(){
		return this.gameWindow.height();
	}
}