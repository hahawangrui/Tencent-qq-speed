function flutterl(){
	var oboat=document.getElementById('boat');
	var oz1=document.getElementById('z1');
	var oboatr=oboat.style.right;
	oboat.style.right='-90px';
	oboat.style.bottom='175px';
	oz1.style.right='127px';
	oz1.style.top='446px';
	if(oboatr=-90){
		setTimeout(function(){
			oboat.style.right='-120px';
			oboat.style.bottom='160px';
			oz1.style.right='97px';
			oz1.style.top='461px';
		},500);
	};
};
function flutterq(){
	var oboat=document.getElementById('boat');
	var oboatr=oboat.style.right;
	oboat.style.right='-90px';
	oboat.style.bottom='175px';
	oz1.style.right='127px';
	oz1.style.top='446px';
	if(oboatr=-90){
		setTimeout(function(){
			oboat.style.right='-60px';
			oboat.style.bottom='160px';
			oz1.style.right='160px';
			oz1.style.top='461px';
		},500);
	};
};
setInterval(function(){
	flutterl();
},2000);
setInterval(function(){
	flutterq();
},3000);
var tip=$("<div></div>").css({"position":"absolute","top":"-30px","width":"84px","height":"61px","font-family":"\5FAE\8F6F\96C5\9ED1"}).html("戳我戳我~");
$(function(){
	setInterval(function(){
		var witch=Math.floor(Math.random()*27)+1;
		var wname="red-bags"+witch;
		tip.clone().appendTo("#"+wname).css({
			"background":"url(img/sp1.png)",
			"background-position":"-200px -490px",
			"line-height":"61px",
			"text-align":"center",
			"font-size":"14px",
			"color":"red",
			"font-weight":"bold"
		});
		setTimeout(function(){
			var odiv=document.getElementById(wname);
			var oa=odiv.getElementsByTagName("div");
			oa[0].remove();
		},2000);
	},2000);
	var box1=document.getElementById('fixed3');
	$(window).scroll(function () { 
		var st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
		if(st>800){
			box1.style.display="block";
		};
		if(st<800){
			box1.style.display="none";
		}
	});
});
