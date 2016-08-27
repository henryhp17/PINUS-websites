<html>
<head>
	<?php include('inc/intro.php'); ?>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script src="js/jquery.glide.js"></script>
	<title>PINUS</title>
	<meta name="keywords" content="pelajar, indonesia, pelajar indonesia, nus, student, indonesian students, indonesian students in singapore, indonesian nus, indonesian students in nus, singapura, singapura student, nuansa, komunitas indonesia, kuliah di singapura, PPIS, pelajar indonesia di singapura, Perhimpunan Pelajar Indonesia Singapura, PINUS, Singapore, National University of Singapore"/>
	<meta name="description" content="PINUS is a group of Indonesian Students in National University of Singapore (NUS) established in 2006. Starting as a humble group of Indonesians created to facilitate simple gatherings, PINUS has now grown into one of the most established Indonesian student groups in Singapore. Currently, we have more than five hundred members, and the number is still growing steadily every year.">
</head>
<body>
	<?php include('inc/header.php'); ?>
	<div class="slider">
		<ul class="slides">
			<li class="slide"><a href="guide.php"><img src="img/home/1.jpg" width="960px" height="350px"></a></li>
			<li class="slide"><a href="http://instagram.com/pinusonline" target="_blank"><img src="img/home/2.jpg" width="960px" height="350px"></a></li>
			<li class="slide"><a href="event.php#nuansa"><img src="img/home/3.jpg" width="960px" height="350px"></a></li>
			<li class="slide"><a href="http://manusia.pinusonline.com/" target="_blank"><img src="img/home/4.jpg" width="960px" height="350px"></a></li>
		</ul>
	</div>
	<div class="recent">
		<div id="lrecent"><h3>RECENT NEWS</h3>
			<hr size="1" color="#AAA" width="100%" align="left">
			<a class="twitter-timeline" width="310px" height="315px" href="https://twitter.com/pinusonline"  data-widget-id="336856382349393923">Tweets by @pinusonline</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>
		<div id="mrecent"><img src="./img/manusia1.png" height="20px" id="manusia">
			<hr id="recent2" size="1" color="#A1A1A1" width="100%" align="center">
			<script type="text/javascript" src="./js/rss.js"></script>
			<script type="text/javascript" src="http://feed.mikle.com/js/rssmikle.js"></script>
			<div style="font-size:10px; text-align:right;"><a href="http://feed.mikle.com/en/" target="_blank" style="color:#CCCCCC;">FeedWind</a></div>
		</div>
		<div id="rrecent"><h3>RECENT VIDEOS</h3>
			<hr id="recent3" size="1" color="#A1A1A1" width="100%" align="center">
			<table border=0 id="video" width="100%">
				<tr><td><a href="http://www.youtube.com/watch?v=d6DbHazfIoM" target="_blank"><img src="http://i1.ytimg.com/vi/d6DbHazfIoM/mqdefault.jpg" width="140px" class="vid3"></a></td><td><p><a href="http://www.youtube.com/watch?v=d6DbHazfIoM" target="_blank" class="vid3">Senior Appreciation Night 2015 - Breathing Dreams</a></p></td></tr>
				<tr><td colspan="2"><hr id="recent2" size="1" color="#A1A1A1" width="100%" align="center"></td></tr>
				<tr><td><a href="http://www.youtube.com/watch?v=J_0-wDUVKoo&list=PLNp_2dBI66D8iOwisLDsCqieDkB5sd6v6" target="_blank" class="vid1"><img src="http://i1.ytimg.com/vi/J_0-wDUVKoo/mqdefault.jpg" width="140px"></a></td><td><p><a href="http://www.youtube.com/watch?v=J_0-wDUVKoo&list=PLNp_2dBI66D8iOwisLDsCqieDkB5sd6v6" target="_blank"  class="vid1">PINUS Careersation 2015</a></p></td></tr>
				<tr><td colspan="2"><hr id="recent2" size="1" color="#A1A1A1" width="100%" align="center"></td></tr>
				<tr><td><a href="http://www.youtube.com/watch?v=jfjZMlw9s8s" target="_blank"><img src="http://i4.ytimg.com/vi/jfjZMlw9s8s/mqdefault.jpg" width="140px" class="vid2"></a></td><td><p><a href="http://www.youtube.com/watch?v=jfjZMlw9s8s" target="_blank" class="vid2">NUANSA'14: The Priyayi D-Day Trailer</a></p></td></tr>
				<tr><td colspan="2"><hr id="recent2" size="1" color="#A1A1A1" width="100%" align="center"></td></tr>
				<tr><td colspan="2"><p>Click title to view videos</p></td></tr>
			</table>
		</div>
		<div id="brecent"><h3>RECENT PHOTOS</h3>
			<hr id="recent4" size="1" color="#A1A1A1" width="960px" align="center">
			<!-- SnapWidget -->
			<iframe src="http://snapwidget.com/sc/?u=cGludXNvbmxpbmV8aW58MTUwfDN8M3x8eWVzfDIwfGZhZGVJbnxvblN0YXJ0fHllcw==&v=11114" title="Instagram Widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:960px; height:150px"></iframe>
		</div>
	</div>
	<?php include('inc/footer.php'); ?>
	<script>
		var glide = $('.slider').glide({
			arrowRightText: '→',
			arrowLeftText: '←',
			autoplay: 5000,
        	arrows: 'body',
        	nav: 'body'
		});
	</script>
	<script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-46304346-1', 'pinusonline.com'); ga('send', 'pageview');
	</script>
</body>
</html>