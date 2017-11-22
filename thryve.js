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

	if($(window).width()>768){
		$(".svm-top").click(function(){
			var svm_click = this.id;
			var svm_open=$("#section3").find("[data-svm="+svm_click+"]");
			svm_open.toggleClass("blurbg-top-click");
			svm_open.next("p").toggle();
		});

		if($("body").scrollTop()>$("#section2").offset().top){
			$("#nav").addClass("nav-fix");
			$("#img-nav").css("display","inline-block");
			$("#img-nav").css("animation","example 1s ease forwards");
		}
	}

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


	document.addEventListener("scroll",function(){

		if($(window).width()>768){

		if($("body").scrollTop()>$("#section2").offset().top){
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
		var sec2=$("#section2").offset().top;
		var sec3=$("#section3").offset().top;
		var sec4=$("#section4").offset().top;
		var sec5=$("#section5").offset().top;
		var sec6=$("#section6").offset().top;
		var sec7=$("#section7").offset().top;
		var sec8=$("#section8").offset().top;
		var sec9=$("#section9").offset().top;
		$(".abtus-top").css("border-bottom","none");

		switch(true){
		case (value>sec2 && value<sec3): 
			$("#abtus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>sec3 && value<=sec4):  
			$("#solns").css("border-bottom","3px solid #a2d557"); 
			break;

		case (value>sec4 && value<=sec6): 
			$("#whyus").css("border-bottom","3px solid #a2d557");
			break;

		case (value>sec6 && value<=sec7): 
			$("#reporting").css("border-bottom","3px solid #a2d557");
			break;

		case (value>sec7 && value<=sec8): 
			$("#cause").css("border-bottom","3px solid #a2d557");
			break;

		case (value>sec8 && value<=sec9): 
			$("#reachus").css("border-bottom","3px solid #a2d557");
			break;

		default: 
			break;
		}
	}

	if($(window).width()<768){
		$("#nav").addClass("nav-fix");
		if($("body").scrollTop()>=$("#section2").offset().top){
			$("#nav").addClass("nav-fix");
		}
		$(".nav-fix").click(function(){
				$(".abtus-top").toggleClass("abtus-top2");
				$("#img-nav").css("display","none");
		});

	}

	},true);

});