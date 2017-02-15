var minSize=5;
var maxSize=50;
var newOn=800;
var flakeColor='red';
var flake=$("<div></div>").css({"position":"absolute","top":"-100px"}).html("<img src='img/fly.png' style='width:100px'>");
$(function(){
	var documentHight=$(document).height();
	var documentWidth=$(document).width();
	setInterval(function(){
		var startPositionLeft=Math.random()*documentWidth;
		var startOpacity=0.7+Math.random()*0.3;
		var endPositionTop=documentHight-100;
		var endPositionLeft=Math.random()*documentWidth;
		var durationFall=10000+Math.random()*3000;
		var sizeFlake=minSize+Math.random()*maxSize;
		flake.clone().appendTo("body").css({
			"left":startPositionLeft,
			"opacity":startOpacity,
			"font-size":sizeFlake,
			"color":flakeColor
		}).animate({
			"top":endPositionTop,
			"left":endPositionLeft,
			"opacity":0.5
		},durationFall,function(){$(this).remove();});
	},newOn)
});
