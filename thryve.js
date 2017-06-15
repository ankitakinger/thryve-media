$(document).ready(function(){

	var sections ={
		"section1":false,
		"section2":false,
		"section3":true,
		"section4":false,
		"section6":true,
		"section7":false,
		"section8":false
	};

	$(".abtus-top").click(function(){
		var navh = $(".nav-fix").height();
		if(sections[this.dataset.href]==true){
			$("body").animate({scrollTop:($("#"+this.dataset.href).offset().top-navh)},500);
		}
		else{
			$("body").animate({scrollTop:($("#"+this.dataset.href).offset().top)},500);
		}

	});

	$(".svm-top").click(function(){
		var svm_click = this.id;
		var svm_open=$("#section3").find("[data-svm="+svm_click+"]");
		svm_open.toggleClass("blurbg-top-click");
		svm_open.next("p").toggle();
	});

	$(".blurbg-top").click(function(){
		$(this).toggleClass("blurbg-top-click");
		$(this).parent().find("p").toggle();
	});

	$(".bg-img").click(function(){
		$(this).closest("div").find("ul").toggleClass("blurbg-top-click");
		//works
		// $(this).parent().prev("ul").toggleClass("blurbg-top-click");
		// $(this).parent().parent().find("ul").toggleClass("blurbg-top-click");
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
		case (value>663 && value<1315): 
			$("#abtus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>1315 && value<=2440):  
			$("#solns").css("border-bottom","3px solid #a2d557"); 
			break;

		case (value>2440 && value<=3435): 
			$("#whyus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>3435 && value<=4250): 
			$("#reporting").css("border-bottom","3px solid #a2d557");
			break;

		case (value>4250 && value<=4950): 
			$("#cause").css("border-bottom","3px solid #a2d557");
			break;

		case (value>4950 && value<=5740): 
			$("#reachus").css("border-bottom","3px solid #a2d557");
			break;

		default: 
			break;
		}

	},true);

});