$(document).ready(function(){
	$(".core").hide();
	$(".content div").hide();
	
	var x = $(location).attr('hash')+"cont";
	if(x!="cont"){
		$(".core").slideDown();
		$("#header").hide();
		$(x).show();
		$(".sidemenu").show();
	}
	
	$('#back').click(function(){
		$(".core").slideUp('fast');
		$(".content div").hide();
		$("#header").slideDown('slow', function(){
			$(".open").slideDown('fast');
		});
	});
	
	$('.open a[id]').click(function(){
		var vmen = this.id +"ont";
		$(".open").hide();
		$("#endnote").fadeOut();
		$("#header").slideUp('slow',function(){
				$(".content div").hide();
				$("#" + vmen).show(); 
				$(".sidemenu").animate({'marginLeft' : "750px"});
				$(".core").fadeIn('slow',function(){
					$(".content").show('slow');
					$(".sidemenu").show('slow');
				});
				$("#endnote").fadeIn();
			});
		return false;
	});
		
	$('.sidemenu a[id]').click(function(){
		var vsubmen = this.id +"cont";  
		if( $(".content").is(":visible") == false ) {
			$('.sidemenu').animate({'marginLeft' : "+=500px"});
			$("#" + vsubmen).show('fast',function() {
				$(".content").slideDown();
				$('.sidemenu').animate({'marginLeft' : "-=500px"});
			});
		} else if ( $("#" + vsubmen).is(":visible") == false ) {
			$('.sidemenu').animate({'marginLeft' : "+=500px"},function(){
				$('.sidemenu').hide(1,function(){
					$('.sidemenu').animate({'marginLeft' : "1050px",'marginTop' : "0px"},1,function(){
						$(".content").slideUp('slow',function(){
							$(".content div").hide();
							$("#" + vsubmen).show();
							$(".content").slideDown('slow');
							$('.sidemenu').animate({'marginLeft' : "-=300px"},'fast');
							$('.sidemenu').show();
						});
					});
				});
			});
		}
		return false;
	});
});

jQuery(document).ready(function($){
	$('#shellc').hover(function(){
		$("#selection").animate({"left": "0px", "width": "105px"}, "fast", false);
	});
	$('#historyc').hover(function(){
		$("#selection").animate({"left": "143px", "width": "59px"}, "fast", false);
	});
	$('#visionc').hover(function(){
		$('#selection').animate({'left': "235px", "width": "125px"}, "fast", false);
	});
});

jQuery(document).ready(function($){
	$("#selection").css({"left": $('#topc').offset().left - $('.link').offset().left, "width": $('#topc').width()});
	$('#topc').hover(function(){
		$("#selection").animate({"left": $('#topc').offset().left - $('.link').offset().left, "width": $('#topc').width()}, "fast", false);
	});
	$('#pnac').hover(function(){
		$("#selection").animate({"left": $('#pnac').offset().left - $('.link').offset().left, "width": $('#pnac').width()}, "fast", false);
	});
	$('#bizdevc').hover(function(){
		$("#selection").animate({"left": $('#bizdevc').offset().left - $('.link').offset().left, "width": $('#bizdevc').width()}, "fast", false);
	});
	$('#pubdocc').hover(function(){
		$("#selection").animate({"left": $('#pubdocc').offset().left - $('.link').offset().left, "width": $('#pubdocc').width()}, "fast", false);
	});
	$('#socialc').hover(function(){
		$("#selection").animate({"left": $('#socialc').offset().left - $('.link').offset().left, "width": $('#socialc').width()}, "fast", false);
	});
	$('#sportsc').hover(function(){
		$("#selection").animate({"left": $('#sportsc').offset().left - $('.link').offset().left, "width": $('#sportsc').width()}, "fast", false);
	});
	$('#welfarec').hover(function(){
		$("#selection").animate({"left": $('#welfarec').offset().left - $('.link').offset().left, "width": $('#welfarec').width()}, "fast", false);
	});
	$('#artsc').hover(function(){
		$("#selection").animate({"left": $('#artsc').offset().left - $('.link').offset().left, "width": $('#artsc').width()}, "fast", false);
	});
});