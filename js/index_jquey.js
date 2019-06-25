$(function(){
	gouwucheIn()
	function gouwucheIn () {
		$(".nav_gouwuche").mouseenter(function () {
			$("#gouwuchebox").slideDown(200);
			$(".nav_whith_right").fadeOut(0);
		});
	}
	
	gouwucheOut()
	function gouwucheOut () {
		$(".nav_gouwuche").mouseleave(function () {
			$("#gouwuchebox").slideUp(200);
			$(".nav_whith_right").fadeIn(0);
		});
	}
// 	gouwuche()
// 	function gouwuche () {
// 	$(".nav_gouwuche").mouseenter(function () {
// 		$("#gouwuchebox").slideDown(200);
// 	}
})