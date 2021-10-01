function minus2() {
	var val = document.getElementById('count-2').textContent;
	val-1>=0?val--:val;
	document.getElementById('count-2').textContent = val;
}
function plus2() {
	var val = document.getElementById('count-2').textContent;
	val++;
	document.getElementById('count-2').textContent = val;
}
