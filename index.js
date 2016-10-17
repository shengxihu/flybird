var high = 0;
var time;
function test (){
	var t = 0;
	var bird = document.getElementById('bird');
	time = setInterval(function(){
	 	t += 1;
	 	if (high < 660) {
	 		high = (500*Math.pow(t,2))/2;
	 	} else {
	 		high = 660;
	 	}
	 	console.log(high);
	 	bird.style.marginTop = high + 'px';
	},1000)
}

var cont = document.getElementById('cont');
cont.addEventListener('click',function(){
	clearTimeout(time);
	high = 200;
	test ();
})
test();