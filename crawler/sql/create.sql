CREATE SCHEMA `gutenberg` ;

CREATE TABLE `gutenberg`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(255) NULL,
  `title` VARCHAR(255) NULL,
  `number` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `gutenberg`.`cities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `utf_name` VARCHAR(100) NULL,
  `ascii_name` VARCHAR(100) NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `geoname_id` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `gutenberg`.`books_cities_mentions` (
  `book_id` INT NOT NULL,
  `city_id` INT NOT NULL
);

ALTER TABLE `gutenberg`.`books_cities_mentions` 
ADD INDEX `book_id_idx` (`book_id` ASC) VISIBLE;
;
ALTER TABLE `gutenberg`.`books_cities_mentions` 
ADD CONSTRAINT `book_id`
  FOREIGN KEY (`book_id`)
  REFERENCES `gutenberg`.`books` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `gutenberg`.`books_cities_mentions` 
ADD INDEX `city_id_idx` (`city_id` ASC) VISIBLE;
;
ALTER TABLE `gutenberg`.`books_cities_mentions` 
ADD CONSTRAINT `city_id`
  FOREIGN KEY (`city_id`)
  REFERENCES `gutenberg`.`cities` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
