function open_sidebar() {
   var sidebar = document.getElementById('sidebar');
   sidebar.style.right="0%";
}
function close_sidebar() {
   var sidebar = document.getElementById('sidebar');
   sidebar.style.right="-60%";
}
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	