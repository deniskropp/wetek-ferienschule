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
DROP TABLE IF EXISTS `Teilnahme`;
CREATE TABLE `Teilnahme` (
  `Teilnehmer_id` int NOT NULL,
  `Datum` timestamp NOT NULL,
  `dateModified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Teilnehmer_id`, `Datum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
