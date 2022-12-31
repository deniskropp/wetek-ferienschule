SET FOREIGN_KEY_CHECKS=0;
SET UNIQUE_CHECKS=0;
DROP TABLE IF EXISTS `Anwesenheit`;
CREATE TABLE `Anwesenheit` (
  `Teilnehmer_id` int NOT NULL,
  `Klassen_id` int NOT NULL,
  `Datum` timestamp NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`Teilnehmer_id`,`Klassen_id`,`Datum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`,`dateModified`) VALUES (1,0,'2022-11-11 09:11:06','2022-12-07 17:10:39');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`,`dateModified`) VALUES (1,0,'2022-11-12 10:13:20','2022-12-07 17:10:39');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`,`dateModified`) VALUES (1,0,'2022-11-13 08:34:10','2022-12-07 17:10:39');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`,`dateModified`) VALUES (1,0,'2022-11-14 07:27:33','2022-12-07 17:10:39');
DROP TABLE IF EXISTS `Codes`;
CREATE TABLE `Codes` (
  `Code` varchar(20) NOT NULL,
  `Teilnehmer_id` int NOT NULL,
  `admin` bool,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
INSERT INTO `Codes` (`Code`,`Teilnehmer_id`,`dateModified`) VALUES ('COI60bV1VZK3E7COidEt',1,'2022-12-07 18:48:40');
INSERT INTO `Codes` (`Code`,`Teilnehmer_id`,`dateModified`) VALUES ('x3tZRE4Bb5DPhXVEY9qO',1,'2022-12-07 18:47:15');
DROP TABLE IF EXISTS `Klassen`;
CREATE TABLE `Klassen` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Schule` text NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (3,'10c','Wetek Artec School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (5,'1b','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (6,'2a','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (4,'1a','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (1,'10a','Wetek Artec School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (2,'10b','Wetek Artec School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (8,'3a','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (11,'4b','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (10,'4a','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (9,'3b','Wetek Elementary School','2022-12-07 17:10:39');
INSERT INTO `Klassen` (`id`,`Name`,`Schule`,`dateModified`) VALUES (7,'2b','Wetek Elementary School','2022-12-07 17:10:39');
DROP TABLE IF EXISTS `Teilnehmer`;
CREATE TABLE `Teilnehmer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Vorname` text NOT NULL,
  `Klassen_id` int NOT NULL,
  `Email` text NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klassen_id`,`Email`,`dateModified`) VALUES (1,'Kropp','Denis',1,'denis.o.kropp@gmail.com','2022-12-07 17:10:39');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klassen_id`,`Email`,`dateModified`) VALUES (2,'Müller','Viola',1,'violamueller@gmail.com','2022-12-07 17:10:39');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klassen_id`,`Email`,`dateModified`) VALUES (3,'Schmidt','Jens',1,'schmidtj@gmail.com','2022-12-07 17:10:39');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klassen_id`,`Email`,`dateModified`) VALUES (4,'Scholz','Olaf',1,'olaf.scholz@bundestag.com','2022-12-07 17:10:39');
