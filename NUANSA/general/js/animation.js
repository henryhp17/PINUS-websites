jQuery(document).ready(function() {
	var current = changePage();
	changeTab(current, '');

	$('#head-menu ul li[id]').hover(function(){
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

	$('#history-menu tr td img[id]').click(function(){
		if (this.id != current) {
			changeTab(this.id, current);
			current = this.id;
		}
	});

	$(window).on('hashchange', function() {
		current = changePage();
		changeTab(current, '');
	});
})

function changeTab(tabname, prev) {
	if(prev == '') {
		$('.tab-content div').hide();
		$('.background-custom img').hide();
		$('.tab-menu li').css({'background-color':'rgba(0,0,0,0)'});
	}
	else {
		$('#' + prev + 'c').slideUp('fast');
		$('#' + prev + 'p').hide();
		$('#' + prev).css({'background-color':'rgba(0,0,0,0)'});
	}
	$('#' + tabname + 'c').slideDown('fast');
	$('#' + tabname + 'p').show();
	$('#' + tabname).css({'background-color':'rgba(255,234,0,0)'});
	if(tabname == 'corporate-video') $('.videoWrapper').show();
}

function changePage() {
	var linkpage = location.hash;
	if (linkpage == '') linkpage = '#about';
	
	$('.content').hide();
	$(linkpage + 'c').fadeIn();
	$('#head-menu ul li a').css({'color':'rgb(255,255,255)'});
	$(linkpage + '-nav a').css({'color':'rgb(255,222,0)'});
	modifySize();

	if (linkpage == '#about') return 'about-us';
	else if (linkpage == '#event') return 'schedule';
	else if (linkpage == '#contact') return 'admin';
	else if (linkpage == '#join') return 'roles';
	else return 'none';
}

function modifySize() {
	var posVideo = ($('#trailer').height()-$(window).height())/2 + 56;
	$('#trailer').css({'marginTop': -posVideo });

	if($(window).height() < 640) $('#footer').hide();
	else $('#footer').show();
	if($(window).width() < 1280) $('body').css({'overflow-x':'auto'});
	else $('body').css({'overflow-x':'hidden'});

	$('#main').height($(window).height()-56);
	$('#history-content').height($('#main').height()*0.65);
	$('#about-content').height($('#main').height()*0.8);
	$('#press-content').height($(window).height()-140);
	$('#event-content').height($(window).height()-140);
}