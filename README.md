# DBSemesterProj_Gutenberg
Express - React Application using MongoDB & MYSQL Databases

#### Group-Name:

maraca ChaCha

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

#### Data Importing Crawler
[Our crawler written in Python](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/crawler/sql_crawler.ipynb) 

First of, our Python crawler utilizes a mysql.connector & import in addition of some common imports which are: re, csv and codecs. 

The mysql.connector utilizes the MySQLConnection cursor() method, which is used to instantiate a MySQLCursor object. 
This is used to create a connection to our database given the right parameters are provided in the crawler and your DB, and when all of the code blocks containing the import methods are done running, the information is then parsed and your DB gets populated with the specific data. 

##### Importing the data into MySQL 
This step required a number of processes to be ran: First of was the Gutenberg Book Files in which where we had to extract the city names, thereafter we had to extract the titles and author names from the RDF Files and process that through our crawler which then would load all of the data into our MySQL Database. 

First of, we use the data from "geonames.org" as provided by the Project Description to provide a list of matching country names and city names in text, which is then further filtered with a provided list of city names "cities15000.txt"-file, which we have read as a .CSV 
Next step was to download all of the Project Gutenberg individual folders of books (+59000), which took over 30 hours to complete and process all of them. This is due to the files being processed individually since it's a single-threaded process which eventually ends up to coming down to read/write IOPS of your hardware. 

For the second step, we simply read the .txt file of the Geonames "cities15000.txt" as a .CSV and insert that into the cities table using a simple "INSERT INTO" query into their rightful columns and adds them to the cities array. 
This is needed for when we generate the mentions. 

For the third step, we generate all of the books titles and offers by reading through the catalogue RDF which is a collection of all the titles and names/details of the books, but in a RDF-extension in an XML format. So we use regular expression "REGEX" to get the titles and names of the books, to save them to the database and the books-arrays. 

For the fourth and last step, here we made use of the Stanford NER Tagger/Classifier for each book (for our explanatory example we used 100 books, which resulted into ~5000 mentions). So essentially the Stanford scans everything concerning the books locations, which is essentially what we're trying to figure out, so we can apply a mention. By doing this we figure out if any of the locations found is in the given book, and if that is true we add it to the mentions. This can turn out to be a lenghty process depending on the specific book-size that has to be processed. 

Further notes on "Cities" & "Books": 
The cities which we work with, logically also contains the names of the cities, which is needed when we cross-mention the Stanford locations to the cities we got, and check if the cities are in the stanford array. 
The books however, only need the IDs and the number of the book.

(...) Basically the cities and books array the contain the data for the cities and the books but they also contain the IDs of each insert that we did previously, so now we know what IDs to insert in the mentions table. So we figure out what mentions are in the cities by looking through the books, and for each book we look through the cities. We figure out if it's mentioned, we use that to generate an array to cross-mention that array to the cities. 

(...) To be able to insert the mentions in Python in memory for the cities, get ids for all the cities then you get the mentions for all the cities, and then you figure out what cities are in each book, and because we have the ideas for that, then we can insert that into the mentions table. So that wouldn't work if we didn't load the cities and the books in memory each time. 
Though if some problems messes up, we have to reinstantiate the whole database.  

### Database

[Our relational-db creation schema](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/crawler/sql/create.sql)

#### ERD Model of our database:

 ![alt text](https://github.com/FarkIst/DBSemesterProj_Gutenberg/blob/master/img/relational_model.png "erd diagram for database")
