function minus1() {
	var val = document.getElementById('count-1').textContent;
	val-1>=0?val--:val;
	document.getElementById('count-1').textContent = val;
}
function plus1() {
	var val = document.getElementById('count-1').textContent;
	val++;
	document.getElementById('count-1').textContent = val;
}


