/*Slider animation*/
jQuery(document).ready(function($){
	$(".slider").mouseenter(function() {
		$(".slider-arrow").fadeIn('fast')
	});
	$("body").mouseleave(function() {
		$(".slider-arrow").fadeOut('fast')
	});
	$(".recent").mouseenter(function() {
		$(".slider-arrow").fadeOut('fast')
	});
});

/*Main Menu Selection*/
jQuery(document).ready(function($){
	var loc = window.location.pathname;
	var path = "." + loc.substring(loc.lastIndexOf('/')+1,loc.lastIndexOf('.')) + " a";
	$(path).css({"opacity":"1.0","filter":"alpha(opacity=100)"});
});

/*Content Choice*/
jQuery(document).ready(function($) {
	$(".entry-content").hide('fast');
	$(".entry-title").click(function() {
		if ($(this).parent().children(".entry-content").is(":visible")==false) {
			$(".entry-content").slideUp('slow');
			$(this).parent().children(".entry-content").slideToggle(500);
		}
		else {
			$(".entry-content").slideUp('slow');
		}
	});
});

/*Scrollmenu animation*/
$(window).scroll(function() {
    var pxFromBottom = 150;
    if ($(window).scrollTop() > pxFromBottom) {
        $('#scrollmenu').fadeIn('slow');
    } else {
        $('#scrollmenu').fadeOut('slow');
    }
});

/*Side menu sliding*/
$(window).scroll(function(){
	$(".sidemenu").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginRight":($(window).scrollLeft()) + "px"}, "slow" );
});