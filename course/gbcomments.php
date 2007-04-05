<?php
//IMathAS:  Add/modify gradebook comments
//(c) 2006 David Lippman
	
	require("../validate.php");
	
	if (!(isset($teacherid))) {
		require("../header.php");
		echo "You need to log in as a teacher to access this page";
		require("../footer.php");
		exit;
	}
	$cid = $_GET['cid'];
	
	if (isset($_GET['upload'])) {
		require("../header.php");
	
		echo "<div class=breadcrumb><a href=\"../index.php\">Home</a> &gt; <a href=\"course.php?cid={$_GET['cid']}\">$coursename</a> ";
		echo "&gt; <a href=\"gradebook.php?stu=0&gbmode={$_GET['gbmode']}&cid=$cid\">Gradebook</a> ";
		echo "&gt; <a href=\"gbcomments.php?stu=0&gbmode={$_GET['gbmode']}&cid=$cid\">Gradebook Comments</a> &gt; Upload Comments</div>";
		
		echo "<h3>Upload Grades</h3>";
		
		if (isset($_FILES['userfile']['name']) && $_FILES['userfile']['name']!='') {
			if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {
				
				$failures = array();
				$successes = 0;
				
				if ($_POST['useridtype']==0) {
					$usercol = $_POST['usernamecol']-1;
				} else if ($_POST['useridtype']==1) {
					$usercol = $_POST['fullnamecol']-1;
				}
				$scorecol = $_POST['gradecol']-1;
				
				$handle = fopen($_FILES['userfile']['tmp_name'],'r');
				if ($_POST['hashdr']==1) {
					$data = fgetcsv($handle,4096,',');
				}
				while (($data = fgetcsv($handle, 4096, ",")) !== FALSE) {
					$query = "SELECT imas_users.id FROM imas_users,imas_students WHERE imas_users.id=imas_students.userid AND imas_students.courseid='$cid' AND ";
					if ($_POST['useridtype']==0) {
						$query .= "imas_users.SID='{$data[$usercol]}'";
					} else if ($_POST['useridtype']==1) {
						list($last,$first) = explode(',',$data[$usercol]);
						$first = str_replace(' ','',$first);
						$last = str_replace(' ','',$last);
						$query .= "imas_users.FirstName='$first' AND imas_users.LastName='$last'";
						//echo $query;
					} else {
						$query .= "0";
					}
					$result = mysql_query($query) or die("Query failed : " . mysql_error());
					if (mysql_num_rows($result)>0) {
						$cuserid=mysql_result($result,0,0);
						$query = "UPDATE imas_students SET gbcomment='{$data[$scorecol]}' WHERE userid='$cuserid' AND courseid='$cid'";
						mysql_query($query) or die("Query failed : " . mysql_error());
						$successes++;
					} else {
						$failures[] = $data[$usercol];
					}
				}
				
				echo "<p>Comments uploaded.  $successes records.</p> ";
				if (count($failures)>0) {
					echo "<p>Comment upload failure on: <br/>";
					echo implode('<br/>',$failures);
					echo '</p>';
				}
				if ($successes>0) {
					echo "<a href=\"gbcomments.php?stu=0&gbmode={$_GET['gbmode']}&cid=$cid\">Return to comments list</a></p>";
					require("../footer.php");
					exit;
				}
				
				//unlink($_FILES['userfile']['tmp_name']);
			} else {
				echo "File Upload error";
			}
		}
		
		echo "<form enctype=\"multipart/form-data\" method=post action=\"gbcomments.php?cid=$cid&gbmode={$_GET['gbmode']}&upload=true\">\n";
		
		echo "<input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"3000000\" />\n";
		echo "<span class=form>Grade file (CSV): </span><span class=formright><input name=\"userfile\" type=\"file\" /></span><br class=form>\n";
		echo '<span class=form>File has header row?</span><span class=formright>';
		echo ' <input type=radio name="hashdr" value="0" checked=1 />No header<br/>';
		echo ' <input type=radio name="hashdr" value="1" />Has header</span><br class="form" />';
		
		echo '<span class=form>Comments are in column:</span><span class=formright>';
		echo '<input type=text size=4 name="gradecol" value="2"/></span><br class="form" />';
		
		echo '<span class=form>User is identified by:</span><span class=formright>';
		echo '<input type=radio name="useridtype" value="0" checked=1 />Username (login name) in column <input type=text size=4 name="usernamecol" value="1" /><br/>';
		echo '<input type=radio name="useridtype" value="1" />Lastname, Firstname in column <input type=text size=4 name="fullnamecol" value="1" />';
		echo '</span><br class="form" />';
		
		echo "<div class=submit><input type=submit value=\"Submit\"></div>\n";
	
		echo "</form>";
		
		require("../footer.php");
		exit;
		
		
	}
	
	if (isset($_GET['record'])) {
		$query = "SELECT id FROM imas_students WHERE courseid='$cid'";
		$result = mysql_query($query) or die("Query failed : " . mysql_error());
		while ($row = mysql_fetch_row($result)) {
			if ($_POST[$row[0]]!='') {
				$query = "UPDATE imas_students SET gbcomment='{$_POST[$row[0]]}' WHERE id='{$row[0]}'";
				mysql_query($query) or die("Query failed : " . mysql_error());
			}
		}
		header("Location: http://" . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/\\') . "/gradebook.php?stu={$_GET['stu']}&gbmode={$_GET['gbmode']}&cid=$cid");
		exit;
	}
	
	require("../header.php");
	echo "<div class=breadcrumb><a href=\"../index.php\">Home</a> &gt; <a href=\"course.php?cid={$_GET['cid']}\">$coursename</a> ";
	echo "&gt; <a href=\"gradebook.php?stu=0&gbmode={$_GET['gbmode']}&cid=$cid\">Gradebook</a> &gt; Gradebook Comments</div>";
	
	echo '<h2>Modify Gradebook Comments</h2>';
	echo "<p>These comments will display at the top of the student's gradebook score list.</p>";
	echo "<p><a href=\"gbcomments.php?cid=$cid&stu={$_GET['stu']}&gbmode={$_GET['gbmode']}&upload=true\">Upload comments</a></p>";
	
	echo "<form method=post action=\"gbcomments.php?cid=$cid&stu={$_GET['stu']}&gbmode={$_GET['gbmode']}&record=true\">";
	$query = "SELECT i_s.id,iu.LastName,iu.FirstName,i_s.gbcomment FROM imas_students AS i_s, imas_users as iu ";
	$query .= "WHERE i_s.userid=iu.id AND i_s.courseid='$cid' ORDER BY iu.LastName,iu.FirstName";
	$result = mysql_query($query) or die("Query failed : " . mysql_error());
	while ($row = mysql_fetch_row($result)) {
		echo "<span class=form>{$row[1]}, {$row[2]}</span><span class=formright><textarea cols=50 rows=3 name=\"{$row[0]}\">{$row[3]}</textarea></span><br class=form>";
	}
	echo "<div class=\"submit\"><input type=submit value=\"Submit\"/></div>";
	echo "</form>";
	require("../footer.php");
	
?>