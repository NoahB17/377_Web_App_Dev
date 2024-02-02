

<h2>Movie List</h2>
    <table class="table table-striped">

        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Number of songs</th>
            <th>Date</th>
            <th>Genre</th>

        </tr>

        <!--list of Movies here! -->
<?php

include("library.php");

$connection=getDatabaseConnection();

$sql = "SELECT * FROM albums ORDER BY album_name,album_date";


$result=$connection->query($sql);
while($row=$result->fetch_assoc())
{
    
    echo"<tr>";
    echo"<td>".$row["album_name"]."</td>";
    echo"<td>".$row["album_artist"]."</td>";
    echo"<td>".$row["album_song_num"]."</td>";
    echo"<td>".$row["album_date"]."</td>";
    echo"<td>".$row["album_genre"]."</td>";
    echo"<td>".$row["album_spotify"]."</td>";
    echo"<td>".$row["album_explicit"]."</td>";
    echo '<td>'.$row['album_length'] . '</td>';
    echo '<td>'.$row['album_features'] . '</td>';

    echo"</tr>";

}




?>

    </table>
    <a href="new-album.php">Add a movie</a>
  