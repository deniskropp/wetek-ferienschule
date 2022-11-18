DROP TABLE IF EXISTS `Teilnehmer`;
CREATE TABLE `Teilnehmer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `Vorname` text NOT NULL,
  `Klasse` text NOT NULL,
  `Email` text NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klasse`,`Email`) VALUES (1,'Kropp','Denis','36a','denis.o.kropp@gmail.com');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klasse`,`Email`) VALUES (2,'Müller','Viola','9c','violamueller@gmail.com');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klasse`,`Email`) VALUES (3,'Schmidt','Jens','10a','schmidtj@gmail.com');
INSERT INTO `Teilnehmer` (`id`,`Name`,`Vorname`,`Klasse`,`Email`) VALUES (4,'Scholz','Olaf','1a','olaf.scholz@bundestag.com');

DROP TABLE IF EXISTS `Klassen`;
CREATE TABLE `Klassen` (
  `id` int NOT NULL,
  `Name` text NOT NULL,
  `Schule` text NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `Anwesenheit`;
CREATE TABLE `Anwesenheit` (
  `Teilnehmer_id` int NOT NULL,
  `Klassen_id` int NOT NULL,
  `Datum` timestamp NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Teilnehmer_id`, `Klassen_id`, `Datum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`) VALUES (1,0,'2022-11-14 07:27:33');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`) VALUES (1,0,'2022-11-13 08:34:10');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`) VALUES (1,0,'2022-11-12 10:13:20');
INSERT INTO `Anwesenheit` (`Teilnehmer_id`,`Klassen_id`,`Datum`) VALUES (1,0,'2022-11-11 09:11:06');
