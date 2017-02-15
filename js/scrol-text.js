window.onload=function(){
	var oul=document.getElementById('st-u');
	var odiv=document.getElementById('scrol-text');
	var speed=-1;
	function move(){
		oul.style.top=oul.offsetTop+speed+'px';
		if(oul.offsetTop<-750){
			oul.style.top=0+'px';
		};
	};
	timer=setInterval(move,30);
	odiv.onmouseover=function(){
		clearInterval(timer);
	};
	odiv.onmouseout=function(){
		timer=setInterval(move,30);
	};
}
