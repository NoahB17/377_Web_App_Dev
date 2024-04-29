CREATE TABLE `match_three`.`high_score` (
  `player_score` INT NOT NULL,
  `player_name` VARCHAR(3) NOT NULL,
  `top_score` INT NOT NULL,
  `top_score_name` VARCHAR(3) NOT NULL,
  `sec_score` INT NOT NULL,
  `sec_score_name` VARCHAR(3) NOT NULL,
  `thrd_score` INT NOT NULL,
  `thrd_score_name` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`player_score`, `player_name`, `top_score`, `top_score_name`, `sec_score`, `sec_score_name`, `thrd_score`, `thrd_score_name`));
