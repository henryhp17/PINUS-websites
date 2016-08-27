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

	$(window).on('hashchange', function() {
		current = changePage();
		changeTab(current, '');
	});
})

function changeTab(tabname, prev) {
	if(prev == '') {
		$('.tab-content div').hide();
		$('.tab-menu li').css({'background-color':'rgb(255,222,0)', 'border-color':'rgb(255,222,0)'});
	}
	else {
		$('#' + prev + 'c').slideUp('fast');
		$('#' + prev).css({'background-color':'rgb(255,222,0)', 'border-color':'rgb(255,222,0)'});
	}
	$('#' + tabname + 'c').slideDown('fast');
	$('#' + tabname).css({'background-color':'rgba(255,255,255,0.8)', 'border-color':'rgba(255,255,255,0)'});
	if(tabname == 'corporate-video') $('.videoWrapper').show();
}

function changePage() {
	var linkpage = location.hash;
	if (linkpage == '') linkpage = '#home';
	
	$('.content').hide();
	$(linkpage + 'c').fadeIn();
	$('#head-menu ul li a').css({'color':'rgb(255,255,255)'});
	$(linkpage + '-nav a').css({'color':'rgb(255,222,0)'});
	modifySize();

	if (linkpage == '#about') return 'about-us';
	else if (linkpage == '#history') return 'nuansa13';
	else if (linkpage == '#contact') return 'producers';
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
	$('#about-content').height($('#main').height()*0.6);
}