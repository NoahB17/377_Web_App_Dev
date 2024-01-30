<?php

$title = '';
$year = '';
$genre = '';
$artist='';
$songnum='';
$spotify='';
$explicit='';
if (isset($id))
{
    $connection = get_database_connection();

    $sql =<<<SQL
    SELECT *
      FROM albums
      WHERE album_id = $id
    SQL;

    $result = $connection->query($sql);
    $row = $result->fetch_assoc();

    $title = $row['album_name'];
    $year = $row['album_date'];
    $genre = $row['album_genre'];
    $artist= $row['album_artist'];
    $songnum= $row['album_song_num'];
    $spotify= $row['album_spotify'];
    $explicit= $row['album_explicit'];

    
}

?>
<form action="save-album.php">
    <input type="hidden" class="form-control" id="id" name="id" value="<?php echo isset($id) ? $id : '' ?>" />

    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" name="title" value="<?php echo $title ?>" />
    </div>



    <div class="mb-3">
        <label for="Artist" class="form-label">Artist</label>
        <input type="text" class="form-control" id="artist" name="artist" value="<?php echo $artist ?>" />
    </div>



    <div class="mb-3">
        <label for="Songnum" class="form-label">number of songs</label>
        <input type="text" class="form-control" id="songnum" name="songnum" value="<?php echo $songnum ?>" />
    </div>


    <div class="mb-3">
        <label for="Year" class="form-label">Date</label>
        <input type="text" class="form-control" id="year" name="year" value="<?php echo $year ?>" />
    </div>


    
    <div class="mb-3">
        <label for="genre" class="form-label">Genre</label>
        <select class="form-select" name="genre">
            <option <?php echo $genre == 'Rap' ? 'selected' : '' ?>>Rap</option>
            <option <?php echo $genre == 'Pop' ? 'selected' : '' ?>>Pop</option>
            <option <?php echo $genre == 'Country' ? 'selected' : '' ?>>Country</option>
            <option <?php echo $genre == 'Alt' ? 'selected' : '' ?>>Alt</option>
        </select>
    </div>

     <div class="mb-3">
        <label for="explicit" class="form-label">Explicit</label>
        <select class="form-select" name="explicit">
            <option <?php echo $explicit == True ? 'selected' : '' ?>>Yes</option>
            <option <?php echo $explicit == False ? 'selected' : '' ?>>No</option>
            
        </select>
    </div>

    <div class="mb-3">
        <label for="spotify" class="form-label">Spotify link</label>
        <input type="text" class="form-control" id="spotify" name="spotify" value="<?php echo $spotify ?>" />
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
    <a href="index.php?content=album-list" class="btn btn-secondary" role="button" aria-disabled="true">Cancel</a>
<?php if (isset($id)) { ?>
    <button type="button" class="btn btn-danger" onclick="deleteAlbum()">Delete</button>
    <script>

    function deleteAlbum() {
        if (confirm('Are you sure you want to delete this Album?')) {
            location.href = 'delete-Album.php?id=<?php echo isset($id) ? $id : '' ?>';
        }
    }

    </script>
<?php } ?>
</form>