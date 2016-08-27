<html>
<head>
	<title>PINUS</title>
	<link rel="stylesheet" type="text/css" href="./css/contact.css">
	<?php include('inc/intro.php'); ?>
</head>

<body>
	<?php include('inc/header.php'); ?>
	<div class="recent" id="formbox">
		<p class="title">GIVE US A MESSAGE!</p>
		<hr size="1" color="#A1A1A1" width="63%" align="left">
		<p>So, have you learned more about us?<br></p>
		<p>For the future of our dearly PINUS, we would like to hear something from you!<br></p>
		<p>Enquiries, complaints, comments, critics are very greatly welcomed!<br><br></p>
		<form name="feedform" action="./form.php" method="POST">
			<p>NAME <span class="subcont">(you can keep this field empty)</span><br>
			<input type="text" name="name" size="30" maxlength="30"><br><br>
			EMAIL <span class="subcont">(you can keep this field empty)</span><br>
			<input type="text" name="email" size="30" maxlength="50"><br><br>
			WHAT IS THIS ABOUT?
			<table border="0"><tr>
			<td width="60%"><p><input type="radio" name="about" value="exco">The Excos Performance<br>
			<input type="radio" name="about" value="event">Our Events<br>
			<input type="radio" name="about" value="web">Our Website</p></td>
			<td><p><input type="radio" name="about" value="manusia">Our Manusia!<br>
			<input type="radio" name="about" value="idea">Ideas for PINUS in the Future!<br>
			<input type="radio" name="about" value="other">Ummhh.. It's not on the list!</p></td>
			</tr></table><br>
			YOUR MESSAGE <span class="subcont">(please limit your message to 900 characters)</span><br>
			<textarea maxlength="950" rows="5" cols="50" name="feedback" required></textarea><br><br>
			<input type="submit" value="Submit" id="submit"></p>
		</form>
	</div>
	<?php include('inc/footer.php'); ?>
	<script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-46304346-1', 'pinusonline.com'); ga('send', 'pageview');
	</script>
</body>
</html>