# Description back-rule-of-thumb
Small and simple API Rest to support the rule of thumb application.

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
