# Description back-rule-of-thumb

Small and simple API Rest to support the rule of thumb application. This application uses MongoDB as a database to persist the information.

# Features

This is just an example of an small API Rest, to support the basic infor persistance of the Rule of Thumbs App

## API Rest enpoint of Public Figures
 API Description 
 - GET All public figures, use the HTTP method GET , returns all public figures stored in the database 
   ``` 
   https://<host>:<port>/public-figure 
   ```
 - GET one random public figure, use the HTTP method GET, this return one random objects which has the activeforHero property setted to true
   ``` 
   https://<host>:<port>/public-figure-random 
   ```
 - POST one new public figure, use the HTTP method POST, create a new public figure object.
   ``` 
   https://<host>:<port>/public-figure 
   
   ´´´
 - PUT updates a new user, use the HTTP method PUT, updates a public figure object on the DB
   ```
   https://<host>:<port>/public-figure/:id 
   ```
 - PATCH update a public figure information, use the HTTP PATCH method
   ``` 
   https://<host>:<port>/public-figure/:id 
   ```
 - DELETE a public figure object, use the HTTP PATCH method
   ``` 
   https://<host>:<port>/public-figure/:id 
   ```
 
# Getting started

To get the Node server running locally:

- Clone this repo
 - ``` npm install ``` to install all required dependencies
- Create and Configure the .env file or environment variables, the env variables are the information to connect to the mongodb database

```
    # Environment Config
    # note: .env is a shell file so there can't be spaces around =
    DB_PREFIX=mongodb+srv
    DB_HOST=
    DB_USR=
    DB_PWD=
    DB_NAME=
```
- Run the project using ``` npm start ```

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - ORM For modeling and mapping MongoDB data 
