
CREATE TABLE `ecolokids_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `familyname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `ageGroup` VARCHAR(255) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  `ecologicalLevel` VARCHAR(255) NOT NULL,
  `score` INT NULL,
  `avatarUrl` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`activities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `duration` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `ageGroup` VARCHAR(255) NOT NULL,
  `ecologicalLevel` VARCHAR(255) NOT NULL,
  `description` VARCHAR(5000) NOT NULL,
  `requirements` VARCHAR(5000) NULL,
  `userId` VARCHAR(255) NOT NULL,
  `pictureActivity` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `startDate` DATE NOT NULL,
  `endDate` DATE NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `eventLocation` VARCHAR(255) NOT NULL,
  `ageGroup` VARCHAR(255) NOT NULL,
  `ecologicalLevel` VARCHAR(255) NOT NULL,
  `description` VARCHAR(5000) NOT NULL,
  `requirements` VARCHAR(5000) NULL,
  `userId` VARCHAR(255) NOT NULL,
  `pictureActivity` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`challenges` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(5000) NOT NULL,
  `pointsScored` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`reservation_activities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `activityId` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`participation_events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `eventId` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ecolokids_db`.`participation_challenges` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `challengeId` INT NOT NULL,
  PRIMARY KEY (`id`));