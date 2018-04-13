$("#dropDown").on("click", function(){
	$("#nav-w").removeClass("closable").toggleClass("closed");
});

$("#dropDown").hover(
	function(){
		$("#nav-w").addClass("closable");
	},
	function(){
		$("#nav-w").removeClass("closable");
	}
);