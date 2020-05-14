CREATE DATABASE project3;

CREATE TABLE users(
id serial PRIMARY KEY,
username varchar(15) NOT NULL unique,
password varchar(255) NOT NULL
);

