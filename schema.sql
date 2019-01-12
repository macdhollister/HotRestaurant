CREATE DATABASE hotRestaurant;

USE hotRestaurant;

CREATE TABLE reservations(
	userID INT AUTO_INCREMENT,
    name VARCHAR(50),
    phone VARCHAR(15),
    email VARCHAR(50),
    PRIMARY KEY(userID)
);