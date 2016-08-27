<!DOCTYPE html>
<html>
<head>
	<?php include('include/intro.php');?>
</head>
<body onresize="modifySize()" onload="modifySize()">
	<div id="wrapper">
		<?php include('include/header.php');?>
		<div id="main">
			<?php include('content/about.php');?>
			<?php include('content/press.php');?>
			<?php include('content/events.php');?>
			<?php include('content/contact.php');?>
		</div>
		<?php include('include/footer.php');?>
	</div>
</body>
</html>