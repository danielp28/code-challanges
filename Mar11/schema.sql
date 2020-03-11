DROP DATABASE IF EXISTS kill_trakerDB;
CREATE database kill_trakerDB;

USE kill_trakerDB;

CREATE TABLE gameTracker (
    game VARCHAR(100),
    kills INT NULL,
    tips VARCHAR(100) NULL,
    PRIMARY KEY (game)
);