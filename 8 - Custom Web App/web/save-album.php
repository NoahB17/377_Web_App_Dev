<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE albums
       SET album_name = '$title',
           album_date = '$year',
           album_genre = '$genre',
           album_artist='$artist',
           album_song_num=$songnum,
           album_spotify='$spotify',
           album_explicit='$explicit',
           album_features='$features',
           album_length='$length'
     WHERE album_id = $id
    SQL;
}
else
{
    $sql =<<<SQL
    INSERT INTO Albums (album_name, album_date, album_genre,album_artist,album_song_num,album_spotify,album_explicit,album_features,album_length)
    VALUES ('$title', '$year', '$genre','$artist',$songnum,'$spotify','$explicit','$features','$length')
    SQL;
}
echo $sql;
$connection->query($sql);

header('Location: index.php');