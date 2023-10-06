# Nodejs-Api

# Building Nodejs API with MongoDB 
# Superhero API

This is a simple Express.js application that provides a RESTful API for managing superheroes. It allows you to perform CRUD (Create, Read, Update, Delete) operations on superhero data.

## Prerequisites

Before running this application, make sure you have the following prerequisites installed:

- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Create a MongoDB database and update the connection string in `config/db.js` with your database URL.

## Usage

- Start the application by running `npm start` in your terminal.
- The API endpoints are as follows:

  - `GET /superheros`: Retrieve a list of all superheroes.
  - `GET /superheros/:superHeroId`: Retrieve a specific superhero by ID.
  - `POST /superheros`: Create a new superhero.
  - `PUT /superheros/:superHeroId`: Update an existing superhero by ID.
  - `DELETE /superheros/:superHeroId`: Delete a superhero by ID.

- All data is stored in a MongoDB database using Mongoose.
- The application uses Express.js for routing and handling HTTP requests.

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues.


