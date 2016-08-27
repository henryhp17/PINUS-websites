$("<div><p><strong>Sorry! This page doesn't support Internet Explorer.</strong><br /><br />If you'd like to read our content please <a href='http://getfirefox.org'>try another browser</a> or <a href='http://pinus-nus.com/manusia/'>visit our other website</a>.</p></div>")
	.css({
		backgroundColor: 'white',
		'top': '30%',
		'left': '30%',
		marginLeft: -210,
		marginTop: -100,
		width: '100%',
		paddingRight: 10,
		height: '100%',
		'position': 'absolute',
		zIndex: 6000,
		fontFamily: 'Century Gothic',
	})
	.appendTo("body");
$("<div></div>")
	.css({
		position: absolute;
		margin-top: -400px;
		margin-left: -400px;
		width: 2000px;
		height: 1000px;
		background-color: #000000;
		z-index:0;
	})
	.appendTo("body");
$(".flexslider").hide();
