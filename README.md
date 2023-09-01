# fsbtest
// README.md
# Star Bank API

### Introduction
Star Bank API is a simple Bank API where users can create an account and fetch account (s)

### Star Bank Features
* User can create Bank Accounts
* User can fetch A Bank Account
* User can fetch all Bank Accounts

### Installation Guide
* Clone this repository [here](https://github.com/iamlasbrey/fsbtest.git)
* Run npm install to install all dependencies

### Usage
* Run npm run dev to start the application.
* Connect to the API using Postman on port 3003.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/v1/F4BTEST/create | To Create a new Bank Account |
| GET |  /api/v1/F4BTEST/getall  | To Fetch all Bank Accounts |
| GET | /api/v1/F4BTEST/fetchaccount/:id | To Fetch the Bank Account with correspoding ID |


### Technologies Used

* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.

* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.

* [Express Validator](https://express-validator.github.io/docs/) express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js.

### Authors
* [Uzoma Kenkwo] (https://github.com/iamlasbrey)

### License
This project is available for use under the MIT License.