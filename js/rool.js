window.onload=function(){
	//轮播控制
	var oul=document.getElementById('rool-1');
	var odiv=document.getElementById('rool-i');
	var ois=odiv.getElementsByTagName('i');
	var left=0;
	var i=0;
	timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	var otor=document.getElementById('toright');
	otor.onmouseover=function(){
		clearInterval(timer);
	};
	otor.onclick=function(){
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	};
	otor.onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	var otol=document.getElementById('toleft');
	otol.onmouseover=function(){
		clearInterval(timer);
	};
	otol.onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	otol.onclick=function(){
		left=left+501;
		i=i-1;
		if(left==501){
			left=-3507;
		};
		if(i<=-1){
			i=7;
		};
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
	};
	ois[0].onmouseover=function(){
		clearInterval(timer);
		left=0;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[0].style.backgroundColor='red';
		ois[0].style.border='2px solid white';
		i=0;
	};
	ois[0].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[1].onmouseover=function(){
		clearInterval(timer);
		left=-501;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[1].style.backgroundColor='red';
		ois[1].style.border='2px solid white';
		i=1;
	};
	ois[1].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[2].onmouseover=function(){
		clearInterval(timer);
		left=-1002;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[2].style.backgroundColor='red';
		ois[2].style.border='2px solid white';
		i=2;
	};
	ois[2].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[3].onmouseover=function(){
		clearInterval(timer);
		left=-1503;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[3].style.backgroundColor='red';
		ois[3].style.border='2px solid white';
		i=3;
	};
	ois[3].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[4].onmouseover=function(){
		clearInterval(timer);
		left=-2004;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[4].style.backgroundColor='red';
		ois[4].style.border='2px solid white';
		i=4;
	};
	ois[4].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[5].onmouseover=function(){
		clearInterval(timer);
		left=-2505;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[5].style.backgroundColor='red';
		ois[5].style.border='2px solid white';
		i=5;
	};
	ois[5].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[6].onmouseover=function(){
		clearInterval(timer);
		left=-3006;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[6].style.backgroundColor='red';
		ois[6].style.border='2px solid white';
		i=6;
	};
	ois[6].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
	ois[7].onmouseover=function(){
		clearInterval(timer);
		left=-3507;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[7].style.backgroundColor='red';
		ois[7].style.border='2px solid white';
		i=7;
	};
	ois[7].onmouseout=function(){
		timer=setInterval(function(){
		if(left==-3507){
			left=501;
		};
		left=left-501;
		i++;
		oul.style.marginLeft=left+'px';
		for(var a=0;a<ois.length;a++){
			ois[a].style.backgroundColor='rgba(0,0,0,0.5)';
			ois[a].style.border='2px solid gray';
		};
		ois[i].style.backgroundColor='red';
		ois[i].style.border='2px solid white';
		if(left==-3507){
			left=501;
		};
		if(i>=7){
			i=-1;
		};
	},3000);
	};
//	第一栏
	var oli1=document.getElementById('c1li1');
	var oli2=document.getElementById('c1li2');
	var oli3=document.getElementById('c1li3');
	var oli4=document.getElementById('c1li4');
	var oli5=document.getElementById('c1li5');
	var oi1=document.getElementById('c1l1');
	var oi2=document.getElementById('c1l2');
	var oi3=document.getElementById('c1l3');
	var oi4=document.getElementById('c1l4');
	var oi5=document.getElementById('c1l5');
	oi2.onmouseover=function(){
		oli1.style.backgroundPosition='-50px -50px';
		oi1.style.color='#2A2C45';
		oli2.style.backgroundPosition='0 0';
	};
	oi2.onmouseout=function(){
		oli2.style.backgroundPosition='-50px -50px';
		oli1.style.backgroundPosition='0 0';
		oi1.style.color='#ff3052';
	};
	oi3.onmouseover=function(){
		oli1.style.backgroundPosition='-50px -50px';
		oi1.style.color='#2A2C45';
		oli3.style.backgroundPosition='0 0';
	};
	oi3.onmouseout=function(){
		oli3.style.backgroundPosition='-50px -50px';
		oli1.style.backgroundPosition='0 0';
		oi1.style.color='#ff3052';
	};
	oi4.onmouseover=function(){
		oli1.style.backgroundPosition='-50px -50px';
		oi1.style.color='#2A2C45';
		oli4.style.backgroundPosition='0 0';
	};
	oi4.onmouseout=function(){
		oli4.style.backgroundPosition='-50px -50px';
		oli1.style.backgroundPosition='0 0';
		oi1.style.color='#ff3052';
	};
	oi5.onmouseover=function(){
		oli1.style.backgroundPosition='-50px -50px';
		oi1.style.color='#2A2C45';
		oli5.style.backgroundPosition='0 0';
	};
	oi5.onmouseout=function(){
		oli5.style.backgroundPosition='-50px -50px';
		oli1.style.backgroundPosition='0 0';
		oi1.style.color='#ff3052';
	};
	//第二栏
	var otl1=document.getElementById('c2l1');
	var otl2=document.getElementById('c2l2');
	var otl3=document.getElementById('c2l3');
	var obl1=document.getElementById('cnl1');
	var obl2=document.getElementById('cnl2');
	var obl3=document.getElementById('cnl3');
	var oml1=document.getElementById('c2li1');
	var oml2=document.getElementById('c2li2');
	var oml3=document.getElementById('c2li3');
	otl1.onmouseover=function(){
		oml2.style.backgroundPosition='-50px -50px';
		obl2.style.display='none';
		otl2.style.color='#2A2C45';
		oml3.style.backgroundPosition='-50px -50px';
		obl3.style.display='none';
		otl3.style.color='#2A2C45';
		oml1.style.backgroundPosition='0 -10px';
		obl1.style.display='block';
		otl1.style.color='#309DFF';
	};
	otl2.onmouseover=function(){
		oml1.style.backgroundPosition='-50px -50px';
		obl1.style.display='none';
		otl1.style.color='#2A2C45';
		oml3.style.backgroundPosition='-50px -50px';
		obl3.style.display='none';
		otl3.style.color='#2A2C45';
		oml2.style.backgroundPosition='0 -10px';
		obl2.style.display='block';
		otl2.style.color='#309DFF';
	};
	otl3.onmouseover=function(){
		oml1.style.backgroundPosition='-50px -50px';
		obl1.style.display='none';
		otl1.style.color='#2A2C45';
		oml2.style.backgroundPosition='-50px -50px';
		obl2.style.display='none';
		otl2.style.color='#2A2C45';
		oml3.style.backgroundPosition='0 -10px';
		obl3.style.display='block';
		otl3.style.color='#309DFF';
	};
	//第三栏
	var ottl1=document.getElementById('c3l1');
	var ottl2=document.getElementById('c3l2');
	var ottl3=document.getElementById('c3l3');
	var ottl4=document.getElementById('c3l4');
	var ottl5=document.getElementById('c3l5');
	var ottl6=document.getElementById('c3l6');
	
	var otbl1=document.getElementById('vb-1');
	var otbl2=document.getElementById('vb-2');
	var otbl3=document.getElementById('vb-3');
	var otbl4=document.getElementById('vb-4');
	var otbl5=document.getElementById('vb-5');
	var otbl6=document.getElementById('vb-6');
	
	var otml1=document.getElementById('c3li1');
	var otml2=document.getElementById('c3li2');
	var otml3=document.getElementById('c3li3');
	var otml4=document.getElementById('c3li4');
	var otml5=document.getElementById('c3li5');
	var otml6=document.getElementById('c3li6');
	ottl1.onmouseover=function(){
		otml2.style.backgroundPosition='-50px -50px';
		otbl2.style.display='none';
		ottl2.style.color='#2A2C45';
		otml3.style.backgroundPosition='-50px -50px';
		otbl3.style.display='none';
		ottl3.style.color='#2A2C45';
		otml4.style.backgroundPosition='-50px -50px';
		otbl4.style.display='none';
		ottl4.style.color='#2A2C45';
		otml5.style.backgroundPosition='-50px -50px';
		otbl5.style.display='none';
		ottl5.style.color='#2A2C45';
		otml6.style.backgroundPosition='-50px -50px';
		otbl6.style.display='none';
		ottl6.style.color='#2A2C45';
		otml1.style.backgroundPosition='0 -20px';
		otbl1.style.display='block';
		ottl1.style.color='#03bc33';
	};
	ottl2.onmouseover=function(){
		otml1.style.backgroundPosition='-50px -50px';
		otbl1.style.display='none';
		ottl1.style.color='#2A2C45';
		otml3.style.backgroundPosition='-50px -50px';
		otbl3.style.display='none';
		ottl3.style.color='#2A2C45';
		otml4.style.backgroundPosition='-50px -50px';
		otbl4.style.display='none';
		ottl4.style.color='#2A2C45';
		otml5.style.backgroundPosition='-50px -50px';
		otbl5.style.display='none';
		ottl5.style.color='#2A2C45';
		otml6.style.backgroundPosition='-50px -50px';
		otbl6.style.display='none';
		ottl6.style.color='#2A2C45';
		otml2.style.backgroundPosition='0 -20px';
		otbl2.style.display='block';
		ottl2.style.color='#03bc33';
	};
	ottl3.onmouseover=function(){
		otml2.style.backgroundPosition='-50px -50px';
		otbl2.style.display='none';
		ottl2.style.color='#2A2C45';
		otml1.style.backgroundPosition='-50px -50px';
		otbl1.style.display='none';
		ottl1.style.color='#2A2C45';
		otml4.style.backgroundPosition='-50px -50px';
		otbl4.style.display='none';
		ottl4.style.color='#2A2C45';
		otml5.style.backgroundPosition='-50px -50px';
		otbl5.style.display='none';
		ottl5.style.color='#2A2C45';
		otml6.style.backgroundPosition='-50px -50px';
		otbl6.style.display='none';
		ottl6.style.color='#2A2C45';
		otml3.style.backgroundPosition='0 -20px';
		otbl3.style.display='block';
		ottl3.style.color='#03bc33';
	};
	ottl4.onmouseover=function(){
		otml2.style.backgroundPosition='-50px -50px';
		otbl2.style.display='none';
		ottl2.style.color='#2A2C45';
		otml3.style.backgroundPosition='-50px -50px';
		otbl3.style.display='none';
		ottl3.style.color='#2A2C45';
		otml1.style.backgroundPosition='-50px -50px';
		otbl1.style.display='none';
		ottl1.style.color='#2A2C45';
		otml5.style.backgroundPosition='-50px -50px';
		otbl5.style.display='none';
		ottl5.style.color='#2A2C45';
		otml6.style.backgroundPosition='-50px -50px';
		otbl6.style.display='none';
		ottl6.style.color='#2A2C45';
		otml4.style.backgroundPosition='0 -20px';
		otbl4.style.display='block';
		ottl4.style.color='#03bc33';
	};
	ottl5.onmouseover=function(){
		otml2.style.backgroundPosition='-50px -50px';
		otbl2.style.display='none';
		ottl2.style.color='#2A2C45';
		otml3.style.backgroundPosition='-50px -50px';
		otbl3.style.display='none';
		ottl3.style.color='#2A2C45';
		otml4.style.backgroundPosition='-50px -50px';
		otbl4.style.display='none';
		ottl4.style.color='#2A2C45';
		otml1.style.backgroundPosition='-50px -50px';
		otbl1.style.display='none';
		ottl1.style.color='#2A2C45';
		otml6.style.backgroundPosition='-50px -50px';
		otbl6.style.display='none';
		ottl6.style.color='#2A2C45';
		otml5.style.backgroundPosition='0 -20px';
		otbl5.style.display='block';
		ottl5.style.color='#03bc33';
	};
	ottl6.onmouseover=function(){
		otml2.style.backgroundPosition='-50px -50px';
		otbl2.style.display='none';
		ottl2.style.color='#2A2C45';
		otml3.style.backgroundPosition='-50px -50px';
		otbl3.style.display='none';
		ottl3.style.color='#2A2C45';
		otml4.style.backgroundPosition='-50px -50px';
		otbl4.style.display='none';
		ottl4.style.color='#2A2C45';
		otml5.style.backgroundPosition='-50px -50px';
		otbl5.style.display='none';
		ottl5.style.color='#2A2C45';
		otml1.style.backgroundPosition='-50px -50px';
		otbl1.style.display='none';
		ottl1.style.color='#2A2C45';
		otml6.style.backgroundPosition='0 -20px';
		otbl6.style.display='block';
		ottl6.style.color='#03bc33';
	};
	//第四栏
	var ofli1=document.getElementById('c4li1');
	var ofli2=document.getElementById('c4li2');
	var ofli3=document.getElementById('c4li3');
	var ofli4=document.getElementById('c4li4');
	var ofli5=document.getElementById('c4li5');
	var ofi1=document.getElementById('c4l1');
	var ofi2=document.getElementById('c4l2');
	var ofi3=document.getElementById('c4l3');
	var ofi4=document.getElementById('c4l4');
	var ofi5=document.getElementById('c4l5');
	ofi2.onmouseover=function(){
		ofli1.style.backgroundPosition='-50px -50px';
		ofi1.style.color='#2A2C45';
		ofli2.style.backgroundPosition='0 -29px';
	};
	ofi2.onmouseout=function(){
		ofli2.style.backgroundPosition='-50px -50px';
		ofli1.style.backgroundPosition='0 -29px';
		ofi1.style.color='#8F8F8F';
	};
	ofi3.onmouseover=function(){
		ofli1.style.backgroundPosition='-50px -50px';
		ofi1.style.color='#2A2C45';
		ofli3.style.backgroundPosition='0 -29px';
	};
	ofi3.onmouseout=function(){
		ofli3.style.backgroundPosition='-50px -50px';
		ofli1.style.backgroundPosition='0 -29px';
		ofi1.style.color='#8F8F8F';
	};
	ofi4.onmouseover=function(){
		ofli1.style.backgroundPosition='-50px -50px';
		ofi1.style.color='#2A2C45';
		ofli4.style.backgroundPosition='0 -29px';
	};
	ofi4.onmouseout=function(){
		ofli4.style.backgroundPosition='-50px -50px';
		ofli1.style.backgroundPosition='0 -29px';
		ofi1.style.color='#8F8F8F';
	};
	ofi5.onmouseover=function(){
		ofli1.style.backgroundPosition='-50px -50px';
		ofi1.style.color='#2A2C45';
		ofli5.style.backgroundPosition='0 -29px';
	};
	ofi5.onmouseout=function(){
		ofli5.style.backgroundPosition='-50px -50px';
		ofli1.style.backgroundPosition='0 -29px';
		ofi1.style.color='#8F8F8F';
	};
	var ofix=document.getElementById('fix-close');
	var ofix1=document.getElementById('fixed2');
	ofix.onclick=function(){
		ofix1.style.display='none';
	};
}