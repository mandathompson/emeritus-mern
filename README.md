# emeritus-mern

Full-Stack MERN App

1. Create root directory; inside that directory, create two dirs titled:

- frontend
- backend

2. In root dir:

- npm init

3. Install Dependencies:

- in root, install express dotenv
- install concurrently and nodemon as dev dependencies 
- add scripts to package and update start to look for server.js

4. Add a .gitignore in root and add

- node_modules
- .env

5. In backend dir:

- create a server.js file

DataBase:

- install mySql

Now we will create a new DB to run locally :

- from mysql in the terminal:

CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
id integer PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
contents TEXT NOT NULL,
created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');

Now we need mysql as a dependency so we can use it in our app

- npm install mysql2
- in package add module type
- in backend, create a database.js file and import mysql from 'mysql2'
- create the connection with:
  const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'notes_app',
  }).promise()
