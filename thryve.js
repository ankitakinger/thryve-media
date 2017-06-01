$(document).ready(function(){
	
	$(".blurbg-top").click(function(){
		$(this).toggleClass("blurbg-top-click");
		$(this).parent().find("p").toggle();
	});

	$("#search").click(function(){
		$("#black-dual-first").find("ul").toggleClass("blurbg-top-click");
		$("#black-dual-first").find("p").toggle();
	});

	$("#video").click(function(){
		$("#black-dual-mid").find("ul").toggleClass("blurbg-top-click");
		$("#black-dual-mid").find("p").toggle();
	});

	$("#mobile").click(function(){
		$("#black-dual-last").find("ul").toggleClass("blurbg-top-click");
		$("#black-dual-last").find("p").toggle();
	});

	$(".bg-img").click(function(){
		// works
		$(this).closest("div").find("ul").toggleClass("blurbg-top-click");
		//works
		// $(this).parent().prev("ul").toggleClass("blurbg-top-click");
		// $(this).parent().parent().find("ul").toggleClass("blurbg-top-click");
		// works but how come this ul only y not siblings - kindof understood
		//$(this).parentsUntil("#section3").find("ul").toggleClass("blurbg-top-click");
		$(this).parent().toggle();
	});

});