CREATE SCHEMA `gutenberg` ;

CREATE TABLE `gutenberg`.`books` (
  `id` INT NOT NULL,
  `author` VARCHAR(45) NULL,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `gutenberg`.`cities` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `gutenberg`.`books_cities_pivot` (
  `book_id` INT NOT NULL,
  `city_id` INT NOT NULL,
  `occurances` INT NOT NULL
);
