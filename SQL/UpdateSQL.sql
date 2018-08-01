CREATE DATABASE `WebService`;

CREATE TABLE `users`
(
	`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` varchar(15) NOT NULL,
	`registration` DATETIME DEFAULT now()
);

ALTER TABLE `users`
ADD COLUMN password varchar(35) NOT NULL AFTER `username`;