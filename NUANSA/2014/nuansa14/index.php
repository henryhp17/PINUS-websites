<!DOCTYPE html>
<html>
<head>
	<?php include('include/intro.php');?>
</head>
<body onresize="modifySize()" onload="modifySize()">
	<div id="wrapper">
		<?php include('include/header.php');?>
		<?php include('include/subhead.php');?>
		<div id="main">
			<?php include('content/synopsis.php');?>
			<?php include('content/cast.php');?>
			<?php include('content/crew.php');?>
			<?php include('content/sponsors.php');?>
			<?php include('content/partners.php');?>
		</div>
		<?php include('../include/footer.php');?>
	</div>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-46296397-2', 'auto');
  		ga('send', 'pageview');
  	</script>
</body>
</html>