var items = document.getElementsByClassName("item");
var points = document.getElementsByClassName("point");
var goPreBtn = document.getElementById("goPre");
var goNextBtn = document.getElementById('goNext');
var time = 30;
var index = 0; 
var leftul1 = document.getElementById('leftUl');
var ull = document.querySelector('#shoujidianhua');
// ull.click = function(){
// 	leftul1.style.display = 'none';
// 	console.log("asdfasdf")
// }
start();
function start(){
<<<<<<< HEAD
	alert("zheshisdhfa");
=======
	alert("注意！这不是官网，是模仿小米商城的主页！");
>>>>>>> 29c3503c391b1ca77dca94cd5f99a95dea7f7b5c
}
function clearActive(){
	for(var i = 0;i < items.length;i ++){
		items[i].className =  'item';
	}
	for(var i = 0;i < points.length;i ++){
		points[i].className =  'point';
	}
}
var goIndex = function(){
	clearActive();
	items[index].className ='item active';
	points[index].className = 'point active';
}
var goPre = function(){
	if(index==0){
		index = 4;
	}
	else{
		index --;	
	}
	goIndex();
	time = 30;
}
var goNext = function(){
	if(index == 4){
		index = 0;
	}
	else{
		index++;
	}
	goIndex();
	time = 30;
	}
	
var point0 = function(){
	index = 0;
	goIndex();
	time = 0;
}
var point1 = function(){
	index = 1;
	goIndex();
	time = 0;
}
var point2 = function(){
	index = 2;
	goIndex();
	time = 0;
}
var point3 = function(){
	index = 3;
	goIndex();
	time = 0;
}
var point4 = function(){
	index = 4;
	goIndex();
	time = 0;
}
setInterval(function(){
	time++;
	if(time == 50){
		goNext();
		time = 30;
	}
}, 100)
