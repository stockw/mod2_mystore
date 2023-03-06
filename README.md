# Welcome to THEE Store.

## About this project

###### This project is designed to show a few things. Adding peices of data needed to create a product that will be sold. A page that will show all the data that was collected, and the ability to delete data when it is not available anymore.

###### First, to be able to get data I had to have a database created and then connect the database to the REACT app. I used Mongoose for the database and then created a product model that requsted the name, price, image, description, and the amount of the item that will be sold in this store.

### Routes Created.
###### I have a route for creating a product that takes in those specific objects. A home page route that displays all the items that was saved into the database from the Create product route but only showing a few peices of data like the price, image, and product name. I have a single item page that will show the individual product that a customer clicks on, displaying all the information. There is a delete button that is connected to a delete route that will delete products from the page and the database.