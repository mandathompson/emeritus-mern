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

CREATE DATABASE mern_app;
USE mern_app;

CREATE TABLE user (
id integer PRIMARY KEY AUTO_INCREMENT,
userName VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
firstName VARCHAR(255) NOT NULL,
lastName VARCHAR(255) NOT NULL,
created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user(userName, password, firstName, lastName)
VALUES
('manda', 'pass123', 'Amanda', 'Thompson');

Now we need mysql as a dependency so we can use it in our app

- npm install mysql2
- in package add module type
- in backend, create a database.js file and import mysql from 'mysql2'
- create the connection with:
  const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'mern_app',
  }).promise()

In terminal from root, run 'npm run server' to start the server. The terminal should print our statement.

Open a browser and go to localhost:5000; we should see our get request message defined for our root!

Set up backend dirs
create userController
install jsonwebtoken and bcryptjs and express-async-handler
Create db.config and put db variables in that file
Change variables in DB to be dynamic from dbconfig file
Create connection and change pool to connection

Make a constructor for our User model:

- here we will write some CRUD functions to be able to create a user, find a user, find all users, update and remove

Routes:
set up routes to determine how the server will response when a user makes a request

GET, POST, DELETE user
GET, PUT, DELETE user/:id

Create user.routes.js file in routes folder
We're using a controller we haven't created yet; let's create it!
The controller is going to contain methods for handling our CRUD operations. we ALSO need to include our routes in our server file before our app.listen

Our app will crash here bc it's trying to use a controller we haven't created yet:

require model
create and get all to start

TEST creating a user

Now let's talk about password hashing and webtokens!
We need to hash our users password in our controller; this protects their data from us and from potential breach

Add var in ENV file JWT_SECRET = abc123

Create a middleware we can use to authorize a user and give them a token
