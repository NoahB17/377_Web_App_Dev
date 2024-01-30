<!DOCTYPE html>
<html lang="en">
    
    <head>
       <title>Sample school district</title> 
    </head>

    <body>
        <h1>Welcome to Sample School district</h1>
    
        <h2>Student List</h2>


        <p>
        <h3>Filters</h3>
            filter by last name starting with
            

<?php
for ($i=0; $i<26; $i++)
{
    $letter=chr($i+ord("A"));
   echo "<a href ='student-list.php?last_name=$letter'>$letter</a> ";
}

?>
<br>
filter by Gender
<?php

    echo "<a href ='student-list.php?gender=M'>M</a> ";
    echo "<a href ='student-list.php?gender=F'>F</a> ";
?>
        <br>
        filter by first name 
        <form action="student-list.php">
        <input type='text' name="first_name"/>
        <input type='submit' value="Filter"/>
        <br>
        <a href ="student-list.php?">No Filter</a>

        </form>



        </p>

        <table border="1">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>YOG</th>
            </tr>
<?php

$servername="localhost";
$username="root";
$password="317-7933";
$dbname="sis";
//connect to check if successful
$connection= new mysqli($servername, $username, $password, $dbname);
if($connection->connect_error)
{
    die("connection failed". $connection->connect_error);
}
extract($_REQUEST);
//access to $last_name and $first_name variable


$sql = "SELECT stu_first_name, stu_last_name,stu_gender,stu_yog FROM students ";

if(isset($first_name))
{
    $sql .= "WHERE stu_first_name LIKE '%$first_name%' ";

}

if(isset($last_name))
{
$sql .= "WHERE stu_last_name LIKE '$last_name%' ";
}

if(isset($gender))
{
$sql .= "WHERE stu_gender LIKE '$gender%' ";
}

$sql .= "ORDER BY stu_last_name, stu_first_name ";

//echo $sql;

$result=$connection->query($sql);
while($row=$result->fetch_assoc())
{
    
    echo"<tr>";
    echo"<td>".$row["stu_first_name"]."</td>";
    echo"<td>".$row["stu_last_name"]."</td>";
    echo"<td>".$row["stu_gender"]."</td>";
    echo"<td>".$row["stu_yog"]."</td>";
    echo"</tr>";

}
?>
        </table>
        
    

    </body>
      
      </html>