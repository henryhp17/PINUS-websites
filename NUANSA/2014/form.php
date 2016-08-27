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
	$insemail = $_POST['email'];
	$insabout = $_POST['about'];
	$insfeedback = $_POST['feedback'];
	
$sql = "INSERT INTO content ".
       "(name, email, about, feedback) ".
       "VALUES ('$insname', '$insemail', '$insabout', '$insfeedback')";

mysql_select_db('pinusnu1_feedback');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not enter data: ' . mysql_error());
}

echo "<html><head><title>PINUS</title>";
include('inc/intro.php');
echo "</head><body id='start'><div class='recentform' align='center'><font size='3'>";
echo $insname.",<br>";
echo "Thank you for your feedback.<br>";
echo "<a href='./contact.php'>Back to previous page</a> or <a href='./home.php'>Back to home</a><br><br><br>";
echo "Sincerely,</font><br><img src='./img/banner.png'></div></body></html>";

mysql_close($conn);
?>