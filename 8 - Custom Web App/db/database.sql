CREATE TABLE `albums` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `album_name` varchar(100) NOT NULL,
  `album_artist` varchar(50) NOT NULL,
  `album_features` varchar(250) DEFAULT NULL,
  `album_genre` varchar(45) DEFAULT NULL,
  `album_song_num` int DEFAULT NULL,
  `album_length` time DEFAULT NULL,
  `album_date` datetime DEFAULT NULL,
  `album_explicit` varchar(3) DEFAULT NULL,
  `album_spotify` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
