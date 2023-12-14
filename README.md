# NestJS Billing Service

This repository contains the source code for a billing service built with NestJS. The service tracks API usage for IP to location lookup and generates monthly bills for customers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Mercyogbenjuwa/Billing-service.git

2. cd billing-service
3. yarn start:dev

## CONFIGURATION
4. Create a .env file in the root directory and configure your environment variables. 
MONGO_CONNECTION_STRING=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database

5. yarn start:dev

## USAGE
To use the billing service, interact with the provided API endpoints. You can test the functionality using tools like Postman or curl. check requets.http

Send a Test Request
Method: POST
URL: http://localhost:3000/billing

Get All Billing Records:

Method: GET
URL: /billing
Configuration
Configure the application by updating the .env file with the required environment variables.

MONGO_CONNECTION_STRING: MongoDB connection string.

## CONTRIBUTION
Contributions are welcome! If you have improvements or new features to add, please fork the repository and submit a pull request.

## LICENSE
This project is licensed under the MIT License.

Please replace placeholders like `your-username`, `your-password`, `your-cluster`, `your-database`, and update the content according to your project's specifics.
