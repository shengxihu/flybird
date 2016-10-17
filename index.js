var high = 0;
var time;
function test (){
	var t = 0;
	var bird = document.getElementById('bird');
	time = setInterval(function(){
		var btm = parseFloat(bird.offsetTop);
	 	t += 1;
	 	if (high < 700 && btm <380) {
	 		high += (Math.pow(t,2))/2;
	 	} else {
	 		alert("碰到下边界，游戏结束！")
	 		clearTimeout(time);
	 		return false;
	 	}
	 	console.log(high);
	 	bird.style.marginTop = high + 'px';
	},100)
}

var cont = document.getElementById('cont');
cont.addEventListener('click',function(){
	clearTimeout(time);
	high -= 100;
	test ();
})
test();