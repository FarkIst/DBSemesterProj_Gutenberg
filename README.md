# DBSemesterProj_Gutenberg
Express - React Application using MongoDB & MYSQL Databases

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

#### Server
* Go to \server
* `npm install`
* `npm run start`

#### Client
* Go to \client
* `npm install`
* Open .development.env 
To run using MongoDB set
API=http://localhost:8000/api/mongo/
To run using MySQL set
API=http://localhost:8000/api/sql/
* `npm run start`

#### Data-insertion