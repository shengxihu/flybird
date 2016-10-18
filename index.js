var high = 0;
var lef = 0;
var time;
function test (){
	var t = 0;
	var bird = document.getElementById('bird');
	var fbi = document.getElementById('fbi');
	time = setInterval(function(){
		var btm_1 = parseFloat(bird.offsetTop);
		var btm_2 = parseFloat(fbi.offsetTop);
		var lef_1 = parseFloat(bird.offsetLeft);
		var lef_2 = parseFloat(fbi.offsetLeft);
	 	t += 1;
	 	if (high < 700 && btm_1 <380) {
	 		high += (Math.pow(t,2))/2;
	 		lef += 10;
	 		if (lef_1 > lef_2 - 20 && btm_1<100) {
	 			alert("碰到障碍物，游戏结束！")
		 		clearTimeout(time);
		 		return false;
	 		}
	 	} else {
	 		alert("碰到下边界，游戏结束！")
	 		clearTimeout(time);
	 		return false;
	 	}
	 	console.log(high);
	 	bird.style.marginTop = high + 'px';
	 	fbi.style.right = lef + 'px';
	},100)
}

var cont = document.getElementById('cont');
cont.addEventListener('click',function(){
	clearTimeout(time);
	high -= 100;
	test ();
})
test();