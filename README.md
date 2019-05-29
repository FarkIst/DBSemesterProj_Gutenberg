# DBSemesterProj_Gutenberg
Express - React Application using MongoDB & MYSQL Databases

#### Group-Name:

**maraca ChaCha**

#### Group-Members:

* Arkadiusz Paryz
* István Farkas
* Mircea Vlad Burac
* Sean Altoft

### API

#### MongoDB Queries
* `/api/mongo/CitiesByBook`
* `/api/mongo/BooksCitiesByAuthor`
* `/api/mongo/BookByGeo`
* `/api/mongo/BooksByCity`

#### MYSQL Queries
* `/api/sql/CitiesByBook`
* `/api/sql/BooksCitiesByAuthor`
* `/api/sql/BookByGeo`
* `/api/sql/BooksByCity`

### How to run

#### About

This application is split into the three parts - the client, server and the crawler(book processing/data insertion).
The client and server is fullstack Javascript, whilst the crawler has been written in Python.

#### Server
* Go to \server
* `npm install`
* In `.env` change to your MySQL and MongoDB settings
* In the ENV file you can also set the distance range at which to search for cities

`DISTANCE={distance}`


* `npm run start`

*Your bash should show which port the server running on*

#### Client
* Go to \client
* `npm install`
* Open .development.env 

To run using MongoDB set - 

API=http://localhost:{?}/api/mongo/

To run using MySQL set - 

API=http://localhost:{?}/api/sql/
* `npm run start`

* Runs on __localhost:27000__

**Navigating through the webpage:**

Homepage: ![alt text](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/img/home.png "Home page nav bar")

| Button Link        | Question           | 
| ------------- |:-------------:| 
| Titles      | 1. Given a city name your application returns all book titles with corresponding authors that mention this city. |
| BookCities      | 2. Given a book title, your application plots all cities mentioned in this book onto a map.      |   
| BookMapByAuthor | 3. Given an author name your application lists all books written by that author and plots all cities mentioned in any of the books onto a map.    | 
| BooksByGeoloc | 4. Given a geolocation, your application lists all books mentioning a city in vicinity of the given geolocation.      | 

*Note: This is a SPA and has no server side rendering, so you must navigate through the links on the home-page shown above.*

#### Crawler


### Database

[Our relational-db creation schema](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/crawler/sql/create.sql)

#### ERD Model of our database:

 ![alt text](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/img/relational_model.png "erd diagram for database")