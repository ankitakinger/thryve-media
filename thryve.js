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

	if($("body").scrollTop()>663){
			$("#nav").addClass("nav-fix");
			$("#img-nav").css("display","inline-block");
			$("#img-nav").css("animation","example 1s ease forwards");
		}

	document.addEventListener("scroll",function(){
		if($("body").scrollTop()>663){
			$("#nav").addClass("nav-fix");
			$("#img-nav").css("display","inline-block");
			$("#img-nav").css("animation","example 1s ease forwards");
		}
		else{
			$("#nav").removeClass("nav-fix");
			$("#img-nav").css("animation","example2 1s ease forwards");
			//$("#img-nav").css("animation-fill-mode","forwards");
		}

		var value=$("body").scrollTop();
		$(".abtus-top").css("border-bottom","none");

		switch(true){
		case (value>663 && value<1390): 
			$("#abtus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>1390 && value<=2440):  
			$("#solns").css("border-bottom","3px solid #a2d557"); 
			break;

		case (value>2440 && value<=3510): 
			$("#whyus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>3510 && value<=4250): 
			$("#reporting").css("border-bottom","3px solid #a2d557");
			break;

		case (value>4250 && value<=4950): 
			$("#cause").css("border-bottom","3px solid #a2d557");
			break;

		case (value>4950 && value<=5800): 
			$("#reachus").css("border-bottom","3px solid #a2d557");
			break;

		default: 
			break;
		}

	},true);

});