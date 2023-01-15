var shat1=new Image(18, 33);
var shat2=new Image(18, 33);
shat1.src="images/s1.gif";
shat2.src="images/s2.gif";
document.write("<div id='shaiten'><img alt='Shaytanich' width='18' height='33' border='0'/></div>");
document.getElementById('shaiten').style.position='absolute';
var sHeight2=screen.height;
var sWidth2=screen.width;
document.getElementById('shaiten').style.top=sHeight2*Math.random()+10+'px';
document.getElementById('shaiten').style.left=sWidth2*Math.random()+10+'px';
document.getElementById('shaiten').style.display='none';
document.getElementById('shaiten').style.filter="alpha(opacity:0)";
document.getElementById('shaiten').style.KHTMLOpacity="0";
document.getElementById('shaiten').style.MozOpacity="0";
document.getElementById('shaiten').style.opacity="0";
document.getElementById('shaiten').getElementsByTagName('img')[0].src=shat1.src;
setTimeout("pshih2(1, 0);", 3000);
function smex2(pik2, kol2){
document.getElementById('shaiten').getElementsByTagName('img')[0].src=shat2.src;
if(kol2<20){
if(pik2){
document.getElementById('shaiten').style.top=parseInt(document.getElementById('shaiten').style.top)-2+'px';
pik2=0;
}else{
document.getElementById('shaiten').style.top=parseInt(document.getElementById('shaiten').style.top)+2+'px';
pik2=1;
}
setTimeout('smex2('+pik2+', '+(kol2+1)+');', 50);
}else{
document.getElementById('shaiten').getElementsByTagName('img')[0].src=shat1.src;
setTimeout("pshih2(0, 100);", 10);
}
}
function pshih2(vis2, value2){
if(vis2){
if(value2==0){
if(document.body.scrollT2op){
var scrollT2=document.body.scrollT2op;
}else if(window.pageYOffset){
var scrollT2=window.pageYOffset;
}else{
scrollT2=0;
}
document.getElementById('shaiten').style.top=parseInt(document.getElementById('shaiten').style.top)+scrollT2+'px';
}
if(value2>=100){
smex2(1, 0);
document.getElementById('shaiten').style.filter="alpha(opacity:100)";
document.getElementById('shaiten').style.KHTMLOpacity="1";
document.getElementById('shaiten').style.MozOpacity="1";
document.getElementById('shaiten').style.opacity="1";
}else{
document.getElementById('shaiten').style.display='block';
value2=value2+4;
if(value2<10){var b='0';}else{var b='';}
document.getElementById('shaiten').style.filter="alpha(opacity:"+value2+")";
document.getElementById('shaiten').style.KHTMLOpacity="0."+b+value2;
document.getElementById('shaiten').style.MozOpacity="0."+b+value2;
document.getElementById('shaiten').style.opacity="0."+b+value2;
setTimeout('pshih2(1, '+value2+')', 1);
}
}else{
if(value2<=0){
document.getElementById('shaiten').style.display='none';
document.getElementById('shaiten').style.filter="alpha(opacity:0)";
document.getElementById('shaiten').style.KHTMLOpacity="0";
document.getElementById('shaiten').style.MozOpacity="0";
document.getElementById('shaiten').style.opacity="0";
document.getElementById('shaiten').style.top=sHeight2*Math.random()+10+'px';
document.getElementById('shaiten').style.left=sWidth2*Math.random()+10+'px';
setTimeout("pshih2(1, 1);", 2000);
}else{
value2=value2-4;
if(value2<10){var b='0';}else{var b='';}
document.getElementById('shaiten').style.filter="alpha(opacity:"+value2+")";
document.getElementById('shaiten').style.KHTMLOpacity="0."+b+value2;
document.getElementById('shaiten').style.MozOpacity="0."+b+value2;
document.getElementById('shaiten').style.opacity="0."+b+value2;
setTimeout('pshih2(0, '+value2+')', 1);
}
}
}
