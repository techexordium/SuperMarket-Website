function minus() {
	var val = document.getElementById('count').textContent;
	val-1>=0?val--:val;
	document.getElementById('count').textContent = val;
}
function plus() {
	var val = document.getElementById('count').textContent;
	val++;
	document.getElementById('count').textContent = val;
}
