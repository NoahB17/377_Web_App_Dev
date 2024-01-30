CREATE DATABASE `Albums` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `albums` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `album_name` varchar(100) NOT NULL,
  `album_artist` varchar(50) NOT NULL,
  `album_features` varchar(250) DEFAULT NULL,
  `album_genre` varchar(45) DEFAULT NULL,
  `album_song_num` int DEFAULT NULL,
  `album_length` int DEFAULT NULL,
  `album_date` date DEFAULT NULL,
  PRIMARY KEY (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
