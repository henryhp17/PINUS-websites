var castName = {};
castName[1] = 'teweraut';
castName[2] = 'anggrek';
castName[3] = 'akatpits';
castName[4] = 'hendro';
castName[5] = 'benwar';
var castView = 1;

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "37") {
        castView = castSliderLeft(castView);
    }
    else if (e.keyCode == "39") {
        castView = castSliderRight(castView);
    }
}

jQuery(document).ready(function() {
	modifyMenu();
	var current = changePage();
	changeTab(current, '');

	$('#sub-menu ul li[id]').hover(function(){
		$('#selection').css({'marginLeft':$('#' + this.id).offset().left - $('#head-menu').offset().left, 'width':$('#' + this.id).width()});
		$('#selection').show();
		document.getElementById('test').innerHTML = $('#' + this.id).offset().left;
	}, function(){
		$('#selection').hide();
	});


	$('.tab-menu li[id]').click(function(){
		if (this.id != current) {
			changeTab(this.id, current);
			current = this.id;
		}
	});

	$(window).on('hashchange', function() {
		current = changePage();
		if (current != 'trailer') changeTab(current, '');
		else $('.videoWrapper').show();
	});

	$('#cast-left-arrow').click(function(){
		castView = castSliderLeft(castView);
	});
	$('#cast-right-arrow').click(function(){
		castView = castSliderRight(castView);
	});
})

function modifyMenu() {
	var linkpage = '#home'
	$('#head-menu ul li a').css({'color':'rgb(255,255,255)'});
	$(linkpage + '-nav a').css({'color':'rgb(255,222,0)'});
}

function changeTab(tabname, prev) {
	if(prev == '') {
		$('.tab-content div').hide();
		$('.background-custom img').hide();
		$('.tab-menu li').css({'background-color':'rgba(0,0,0,0.3)'});
	}
	else {
		$('#' + prev + 'c').slideUp('fast');
		$('#' + prev + 'p').hide();
		$('#' + prev).css({'background-color':'rgba(0,0,0,0.3)'});
	}
	$('#' + tabname + 'c').slideDown('fast');
	$('#' + tabname + 'p').show();
	$('#' + tabname).css({'background-color':'rgba(255,234,0,0.3)'});
	
}

function changePage() {
	var linkpage = location.hash;
	if (linkpage == '') linkpage = '#start';
	
	$('.content').hide();
	$(linkpage + 'c').fadeIn();
	$('#sub-menu ul li a').css({'color':'rgb(255,255,255)'});
	$(linkpage + '-nav a').css({'color':'rgb(255,222,0)'});
	modifySize();

	if (linkpage == '#cast') return 'teweraut';
	else if (linkpage == '#synopsis') return 'story';
	else if (linkpage == '#cast') {
		$('#tewerauti').css({'opacity':'0.5'});
		return 'teweraut';
	}
	else if (linkpage == '#crew') return 'exco';
	else return 'none';
}

function modifySize() {
	$('.trailerc').width(($(window).height()-205)*16/9);

	if($(window).height() < 640) $('#footer').hide();
	else $('#footer').show();
	if($(window).width() < 1280) $('body').css({'overflow-x':'auto'});
	else $('body').css({'overflow-x':'hidden'});

	$('#main').height($(window).height()-56);
	$('#synopsis-content').height($(window).height()-200);
	$('#crew-content').height($(window).height()-200);
	$('#sponsors-content').css({'marginTop':($(window).height()-200)*0.1, 'height':($(window).height()-200)*0.75});
	$('#partners-content').css({'marginTop':($(window).height()-200)*0.1, 'height':($(window).height()-200)*0.75});
	$('#about-content').height($('#main').height()*0.8);
	$('#cast-right-arrow').css({'marginTop':0.3*(200+($(window).height()-200)/2)});
	$('#cast-left-arrow').css({'marginTop':0.3*(200+($(window).height()-200)/2)});
	$('#nav-selection').css({'marginLeft':0.5*($(window).width()-50)});
}

function castSliderRight(castIndex) {
	if (castIndex < 5) castNow = castIndex + 1;
	else castNow = 1;
	
	$('#' + castName[castIndex] + 'c').hide();
	$('#' + castName[castIndex] + 'p').slideUp();
	$('#' + castName[castIndex] + 'i').css({'opacity':'1'});
	$('#' + castName[castNow] + 'c').show();
	$('#' + castName[castNow] + 'p').slideDown();
	$('#' + castName[castNow] + 'i').css({'opacity':'0.5'});

	return castNow;
}
function castSliderLeft(castIndex) {
	if (castIndex > 1) castNow = castIndex - 1;
	else castNow = 5;
	
	$('#' + castName[castIndex] + 'c').hide();
	$('#' + castName[castIndex] + 'p').slideUp('fast');
	$('#' + castName[castIndex] + 'i').css({'opacity':'1'});
	$('#' + castName[castNow] + 'c').show();
	$('#' + castName[castNow] + 'p').slideDown('fast');
	$('#' + castName[castNow] + 'i').css({'opacity':'0.5'});

	return castNow;
}