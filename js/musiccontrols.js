window.onload=function(){
	//音乐控制界面
	var img =document.getElementById('music');
	var speed = 10;
	var deg = 0;
	timer=setInterval(function () {
		img.style.transform='rotate(' + deg + 'deg)';
		deg+=1;
		if (deg >= 360) {
		    deg = 0;
		}
	}, speed);
    //登录控制页面
	var box1=document.getElementById('QR-box');
	var box2=document.getElementById('phone');
	var box3=document.getElementById('close-coin');
	var box4=document.getElementById('log-box');
	box1.onmouseover=function(){
		box2.style.opacity='1';
	};
	box1.onmouseout=function(){
		box2.style.opacity='0';
	};
	box3.onclick=function(){
		box4.style.display='none';
	};
}
function music(){
    var audio = document.getElementById('music-box');
	var img =document.getElementById('music');
	var speed = 10;
	var deg = 0;
    if(audio.paused){                 
        audio.play();//播放  
		img.style.backgroundImage="url(img/music_play.png)";
		timer=setInterval(function () {
		img.style.transform='rotate(' + deg + 'deg)';
		deg+=1;
		if (deg >= 360) {
		    deg = 0;
		}
		}, speed);
    }
    else{
        audio.pause();//暂停
		img.style.backgroundImage="url(img/music_clos.png)";
		clearInterval(timer);
		img.style.transform="rotate(0)";
    };
}
function logclose(){
	var box4=document.getElementById('log-box');
	box4.style.display='block';
}