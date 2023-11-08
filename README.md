# Movie Database 

This Node.js application is a project for a course regarding Internet Client-Server Systems. A movie database service which accepts comments and can serve information on specific movies. It uses Express.js, Express Handlebars to handle views, and a NoSql MongoDB database to store all the movie data.

- API Documentation: https://documenter.getpostman.com/view/2210306/UUy1emqV
- Dataset: https://www.kaggle.com/rounakbanik/the-movies-dataset

## Environment File

To connect to the MongoDB databse, you need to create an environment variables file
called `.env` in the root of the project. Then populate the `.env` file with your
MongoDB connection string:

```env
MONGO_CONN_URL=$YOUR_MONGODB_CONNECTION_STRING
```

Make sure to replace `$YOUR_MONGODB_CONNECTION_STRING` with your connection string.
If the connection string is correct, you will see the following message on your screen:

```output
Server is up:

      http://localhost:3000


[MONGODB] Connected!
```

## Commands

To install the dependencies:

```sh
npm install
```

To run the code:

```sh
npm run start
```

To run the code in development mode (using `nodemon`):

```sh
npm run dev
```