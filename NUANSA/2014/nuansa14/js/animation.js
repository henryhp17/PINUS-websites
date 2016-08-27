jQuery(document).ready(function() {
	var current = changePage();
	changeTab(current, '');
	$('#popup-bg').hide();
	$('#writeup div').hide();

	$('#head-menu ul li[id]').hover(function(){
		$('#selection').css({'marginLeft':$('#' + this.id).offset().left - $('#head-menu').offset().left, 'width':$('#' + this.id).width()});
		$('#selection').show();
		document.getElementById('test').innerHTML = $('#' + this.id).offset().left;
	}, function(){
		$('#selection').hide();
	});


	$('.namelist ul li[id]').click(function(){
		if (this.id != current) {
			changeTab(this.id, current);
			current = this.id;
		}
	});

	$(window).on('hashchange', function() {
		current = changePage();
		changeTab(current, '');
	});

	$('#close').click(function(){
		$('#popup-bg').fadeOut();
		$('#writeup div').hide();
	});
	$('.crew-photo[id]').click(function(){
		$('#popup-bg').fadeIn();
		$('#'+this.id+'c').show();
	})
})

function changeTab(tabname, prev) {
	if(prev == '') {
		$('.tab-content').hide();
		$('#crewlink li').css({'background-color':'rgba(255,222,0,0)'});
	}
	else {
		$('#' + prev + 'c').slideUp('fast');
		$('#' + prev).css({'background-color':'rgba(255,222,0,0)'});
	}
	$('#' + tabname + 'c').slideDown('fast');
	if (location.hash == '#crew') $('#' + tabname).css({'background-color':'rgba(255,222,0,1)'});
}

function changePage() {
	var linkpage = location.hash;
	if (linkpage == '') linkpage = '#synopsis';
	
	$('.content').hide();
	$(linkpage + 'c').fadeIn();
	$('#sub-menu ul li a').css({'color':'rgba(255,255,255,0.8)'});
	$(linkpage + '-nav a').css({'color':'rgba(255,255,255,1)'});
	modifySize();

	if((linkpage == '#sponsors')||(linkpage == '#partners')) $('#priyayi-title').css({'visibility':'hidden'});
	else $('#priyayi-title').css({'visibility':'visible'});

	if (linkpage == '#crew') return 'admin';
	else if (linkpage == '#cast') return 'lantip';
	else return 'none';
}

function modifySize() {
	var posVideo = ($('#trailer').height()-$(window).height())/2 + 56;
	$('#trailer').css({'marginTop': -posVideo });

	if($(window).height() < 640) {
		$('#footer').hide();
		$('#crews').height($('#main').height()-25);
		$('#synopsis-content').height($('#main').height()-20);
		$('#sponsors-content').height($('#main').height()-20);
		$('#partners-content').height($('#main').height()-20);
		$('#castlink').css({'bottom':'0'});
	}
	else {
		$('#footer').show();
		$('#crews').height($('#main').height()-$('#footer').height()-32);
		$('#synopsis-content').height($('#main').height()-$('#footer').height()-26);
		$('#sponsors-content').height($('#main').height()-$('#footer').height()-26);
		$('#partners-content').height($('#main').height()-20);
		$('#castlink').css({'bottom':$('#footer').height()});
	}
	if($(window).width() < 1280) $('body').css({'overflow-x':'auto'});
	else $('body').css({'overflow-x':'hidden'});

	$('#main').height($(window).height()-56);
	$('.char-desc').css({'marginTop':$('#main').height()*0.2});
}