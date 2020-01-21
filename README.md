# Fashion Cloud Cache API

## Installation

 - Clone the project by running `git clone https://github.com/fatukunda/fashion-cloud-cache-api.git`
 - Cd into the project and run `yarn` to install the dependencies.
 - Create a `.env` file in the root of the project and provide the following environment variables.
    - PORT=3000
    - MONGODB_URL_DEV=mongodb://localhost:27017/[development-db]
    - MONGODB_URL_TEST=mongodb://localhost:27017/[test-db]
- Run `yarn dev` to run the development server.
- Navigate to `localhost:3000` to ensure that everything is working properly.
- Run `yarn test` to test the API

## Enpoints
 - Create a Cache - `POST localhost:3000/cache`.
 - Get cached data for a given key - `GET localhost:3000/cache/:key`.
 - Get all stored keys in the cache - `GET localhost:3000/cache-keys`.
 - Remove a given key from the cache - `DELETE localhost:3000/cache/:key`.
 - Remove all keys from the cache - `DELETE localhost:3000/cache-keys`.

