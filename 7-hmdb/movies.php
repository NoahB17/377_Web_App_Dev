

        <h2>Movie List</h2>
    <table class="table table-striped">

        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>

        </tr>

        <!--list of Movies here! -->
<?php

include("library.php");

$connection=getDatabaseConnection();

$sql = "SELECT mov_title,mov_year,mov_genre FROM movies ORDER BY mov_title,mov_year";


$result=$connection->query($sql);
while($row=$result->fetch_assoc())
{
    
    echo"<tr>";
    echo"<td>".$row["mov_title"]."</td>";
    echo"<td>".$row["mov_year"]."</td>";
    echo"<td>".$row["mov_genre"]."</td>";
    echo"</tr>";

}



?>

    </table>
    <a href="new-movie.php">Add a movie</a>
  