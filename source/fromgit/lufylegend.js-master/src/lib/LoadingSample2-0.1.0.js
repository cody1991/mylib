function LoadingSample2(size,background,color){
	base(this,LSprite,[]);
	var s = this,c = LGlobal.canvas,t = "Loading...",l;
	s.backgroundColor = background==null?"#000000":background;
	s.graphics.drawRect(1,s.backgroundColor,[0,0,LGlobal.width,LGlobal.height],true,s.backgroundColor);

	if(color==null)color = LGlobal._create_loading_color();
	s.color = color;
	s.progress = 0;
	s.size = size==null?LGlobal.height*0.2:size;
	l = new LTextField();
	l.text = t;
	l.size = s.size;
	l.color = "#ffffff";
	l.x = (LGlobal.width - l.getWidth())/2;
	l.y = (LGlobal.height - s.size)/2;
	s.addChild(l);
	s.backLabel = l;
	
	l = new LTextField();
	l.text = "***%";
	l.size = s.size*0.3;
	l.color = color;
	l.x = (LGlobal.width - l.getWidth())/2;
	l.y = (LGlobal.height - s.size)/2 - s.size*0.4;
	s.addChild(l);
	s.progressLabel = l;
	
	l = new LTextField();
	l.text = t;
	l.size = s.size;
	l.color = s.color;
	l.x = (LGlobal.width - l.getWidth())/2;
	l.y = (LGlobal.height - s.size)/2;
	l.mask = new LGraphics();
	s.screenX = l.x;
	s.screenY = l.y;
	s.screenWidth = l.getWidth();
	s.addChild(l);
	s.showLabel=l;

	c.shadowOffsetX = 2;  
	c.shadowOffsetY = 2;
	c.shadowColor = "blue"; 
	s.setProgress(s.progress);
}
LoadingSample2.prototype.setProgress = function (value){
	var s = this,c = LGlobal.canvas;
	s.progressLabel.text = value + "%";
	s.showLabel.mask.clear();
	s.showLabel.mask.drawRect(0,"#000000",[s.screenX,0,s.screenWidth*value*0.01,LGlobal.height]);
	if(value >= 100){
		c.shadowOffsetX = 0;
		c.shadowOffsetY = 0;
	}
};