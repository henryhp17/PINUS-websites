<?php
$dbhost = 'localhost';
$dbuser = 'username';
$dbpass = 'password';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

$insname = $_POST['name'];
if (isset($_POST['feedback'])) {
	$insemail = $_POST['email'];
	$insabout = $_POST['about'];
	$insfeedback = $_POST['feedback'];
	
	$sql = "INSERT INTO content ".
    	"(name, email, about, feedback) ".
    	"VALUES ('$insname', '$insemail', '$insabout', '$insfeedback')";
	
	mysql_select_db('pinusnu1_feedback');
	$retval = mysql_query($sql, $conn);
	if(! $retval )
	{
		die('Could not enter data: ' . mysql_error());
	}

	$emailSubject = 'New feedback from PINUS Website!';
	$body = <<<EOD
		<br><hr><br>
		Name: $insname <br>
		Email: $insemail <br>
		About: $insabout <br>
		Comments: $insfeedback <br>
EOD;
	$headers = "From: $insemail\r\n";
	$headers .= "Content-type: text/html\r\n";

	$webMaster = 'giovanni.v.wicaksono@gmail.com, marvingowinatra@gmail.com, angeline.j.kuotakusuma@gmail.com, jonathansteven24@gmail.com, henryhp17@gmail.com, pna@pinusonline.com';
	$success = mail($webMaster, $emailSubject, $body, $headers);
}

echo "<html><head><title>PINUS</title>";
include('inc/intro.php');
echo "</head><body id='start'><div class='recentform' align='center'><font size='3'>";
echo $insname.",<br>";
echo "Thank you for your feedback.<br>";
echo "<a href='./contact.php'>Back to previous page</a> or <a href='./index.php'>Back to home</a><br><br><br>";
echo "Sincerely,</font><br><img src='./img/banner.png'></div></body></html>";

mysql_close($conn);
?>