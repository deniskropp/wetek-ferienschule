SET FOREIGN_KEY_CHECKS=0;
SET UNIQUE_CHECKS=0;
DROP TABLE IF EXISTS `Anwesenheit`;
CREATE TABLE `Anwesenheit` (
  `Datum` timestamp NOT NULL,
  `Teilnehmer_id` int NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`Datum`,`Teilnehmer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
INSERT INTO `Anwesenheit` (`Datum`,`Teilnehmer_id`) VALUES ('2022-11-11',1);
DROP TABLE IF EXISTS `Codes`;
CREATE TABLE `Codes` (
  `Code` varchar(20) NOT NULL,
  `Teilnehmer_id` int NOT NULL,
  `admin` bool,
  `dateModified` timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP()),
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
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
