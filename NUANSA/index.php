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
			<?php include('content/start.php');?>
			<?php include('content/bts.php');?>
			<?php include('content/cast.php');?>
			<?php include('content/crew.php');?>
			<?php include('content/synopsis.php');?>
			<?php include('content/sponsors.php');?>
			<?php include('content/partners.php');?>
		</div>
		<?php include('general/include/footer.php');?>
	</div>
</body>
</html>