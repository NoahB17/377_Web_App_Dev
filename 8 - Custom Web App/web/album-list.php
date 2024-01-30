<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Title</th>
            <th>Artists</th>           
            <th>Date</th>
            <th>Genre</th>
            <th>songs in album</th>
            <th>Link</th>
            
        </tr>
    </thead>

    <tbody>
<?php

$connection = get_database_connection();

$sql =<<<SQL
SELECT album_id,album_name,album_artist,album_genre,album_date,album_song_num,album_spotify,album_explicit
  FROM albums
 ORDER BY album_name
SQL;

$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo '<tr>';
    echo '<td>';
    echo '<a href="index.php?content=album-detail&id=' . $row['album_id'] . '">' . $row['album_name'] .'</a>';
    
    if ($row['album_explicit'] == True)
    {
        echo '<i class="bi bi-explicit"></i>';
        }
        
    echo '</td>';
    echo '<td>' . $row['album_artist'] . '</td>';
    echo '<td>' . $row['album_date'] . '</td>';
    echo '<td>' . $row['album_genre'] . '</td>';
    echo '<td>' . $row['album_song_num'] . '</td>';
    echo '<td>';
    if ($row['album_spotify'] != '')
    {
        echo '<a href="https://open.spotify.com/album/' . $row['album_spotify'] . '" target="_blank" title="View on Spotify"><i class="bi bi-spotify"></i></a>';
    }
    echo '</td>';
    echo '</tr>';
}

?>
    </tbody>
</table>

<a href="index.php?content=album-detail" class="btn btn-primary" role="button" aria-disabled="true">Add a album</a>