﻿var hott1=new Image(18, 33);
var hott2=new Image(18, 33);
hott1.src="images/h3.gif";
hott2.src="images/h4.gif";
document.write("<div id='hottab'><img alt='Hottab' width='18' height='33' border='0'/></div>");
document.getElementById('hottab').style.position='absolute';
var sHeight=screen.height;
var sWidth=screen.width;
document.getElementById('hottab').style.top=sHeight*Math.random()+10+'px';
document.getElementById('hottab').style.left=sWidth*Math.random()+10+'px';
document.getElementById('hottab').style.display='none';
document.getElementById('hottab').style.filter="alpha(opacity:0)";
document.getElementById('hottab').style.KHTMLOpacity="0";
document.getElementById('hottab').style.MozOpacity="0";
document.getElementById('hottab').style.opacity="0";
document.getElementById('hottab').getElementsByTagName('img')[0].src=hott1.src;
setTimeout("pshih(1, 0);", 4000);
function smex(pik, kol){
document.getElementById('hottab').getElementsByTagName('img')[0].src=hott2.src;
if(kol<20){
if(pik){
document.getElementById('hottab').style.top=parseInt(document.getElementById('hottab').style.top)-2+'px';
pik=0;
}else{
document.getElementById('hottab').style.top=parseInt(document.getElementById('hottab').style.top)+2+'px';
pik=1;
}
setTimeout('smex('+pik+', '+(kol+1)+');', 50);
}else{
document.getElementById('hottab').getElementsByTagName('img')[0].src=hott1.src;
setTimeout("pshih(0, 100);", 10);
}
}
function pshih(vis, value){
if(vis){
if(value==0){
if(document.body.scrollTop){
var scrollT=document.body.scrollTop;
}else if(window.pageYOffset){
var scrollT=window.pageYOffset;
}else{
scrollT=0;
}
document.getElementById('hottab').style.top=parseInt(document.getElementById('hottab').style.top)+scrollT+'px';
}
if(value>=100){
smex(1, 0);
document.getElementById('hottab').style.filter="alpha(opacity:100)";
document.getElementById('hottab').style.KHTMLOpacity="1";
document.getElementById('hottab').style.MozOpacity="1";
document.getElementById('hottab').style.opacity="1";
}else{
document.getElementById('hottab').style.display='block';
value=value+4;
if(value<10){var b='0';}else{var b='';}
document.getElementById('hottab').style.filter="alpha(opacity:"+value+")";
document.getElementById('hottab').style.KHTMLOpacity="0."+b+value;
document.getElementById('hottab').style.MozOpacity="0."+b+value;
document.getElementById('hottab').style.opacity="0."+b+value;
setTimeout('pshih(1, '+value+')', 1);
}
}else{
if(value<=0){
document.getElementById('hottab').style.display='none';
document.getElementById('hottab').style.filter="alpha(opacity:0)";
document.getElementById('hottab').style.KHTMLOpacity="0";
document.getElementById('hottab').style.MozOpacity="0";
document.getElementById('hottab').style.opacity="0";
document.getElementById('hottab').style.top=sHeight*Math.random()+10+'px';
document.getElementById('hottab').style.left=sWidth*Math.random()+10+'px';
setTimeout("pshih(1, 1);", 2000);
}else{
value=value-4;
if(value<10){var b='0';}else{var b='';}
document.getElementById('hottab').style.filter="alpha(opacity:"+value+")";
document.getElementById('hottab').style.KHTMLOpacity="0."+b+value;
document.getElementById('hottab').style.MozOpacity="0."+b+value;
document.getElementById('hottab').style.opacity="0."+b+value;
setTimeout('pshih(0, '+value+')', 1);
}
}
}
