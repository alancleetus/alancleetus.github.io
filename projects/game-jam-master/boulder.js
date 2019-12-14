class Boulder
{
	constructor(boulderId,gameWindow)
	{
		this.boulder = $(boulderId);
		this.gameWindow = gameWindow;
		this.speed = 10;
	}
	
	moveUp()
	{
		this.boulder.css("margin-top",  ((this.getTopMargin() - this.getSpeed()) + 'px'));
	}
	
	getSpeed()
	{
		return this.speed;
	}
	
	isOutsideTopBoundry()
	{
		return this.getTopMargin() < -this.getHeight();
	}
	
	
	getTopMargin()
	{
		return parseInt(this.boulder.css("margin-top"));
	}
	
	getHeight()
	{
		return parseInt(this.boulder.height(),10); 
	}
	
	launch()
	{
		while(!isOutsideTopBoundry)
		{
			this.moveUp();
		}
		
		this.destroy();
	}
	
	destroy()
	{
		document.getElementById(boulder.attr(id)).remove();
	}
}