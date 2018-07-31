CREATE TABLE users
(
	 id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	 username varchar(15) NOT NULL,
	 registration DATETIME DEFAULT now()
);