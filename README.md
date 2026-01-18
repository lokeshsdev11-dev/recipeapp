# Recipes App

A full-featured backend CRUD application for managing recipes, built using Node.js, Express.js, and MongoDB with Mongoose. The app is structured using the MVC (Model-View-Controller) pattern.

## Features

* Create a new recipe
* Retrieve all recipes
* Retrieve a recipe by ID
* Update a recipe by ID
* Delete a recipe by ID

##  API Endpoints

Base URL: `http://localhost:PORT/api/recipes`

| Method | Endpoint | Description           |
| ------ | -------- | --------------------- |
| POST   | `/`      | Create a new recipe   |
| GET    | `/`      | Get all recipes       |
| GET    | `/:id`   | Get a recipe by ID    |
| PUT    | `/:id`   | Update a recipe by ID |
| DELETE | `/:id`   | Delete a recipe by ID |

## 📄 Sample Request & Response

### POST /api/recipes

**Request Body:**

```json
{
  "title": "Pasta",
  "ingredients": ["noodles", "sauce"],
  "instructions": "Boil noodles and add sauce."
}
```

**Response:**

```json
{
  "_id": "...",
  "title": "Pasta",
  "ingredients": ["noodles", "sauce"],
  "instructions": "Boil noodles and add sauce."
}
```
To use the API routes, append the appropriate path:

* `GET /api/v1/recipes` – Get all recipes
* `GET /api/v1/recipes/:id` – Get a specific recipe
* `POST /api/v1/recipes` – Add a new recipe
* `PUT /api/v1/recipes/:id` – Update a recipe
* `DELETE /api/v1/recipes/:id` – Delete a recipe

## 📬 API Documentation

Postman documentation is publicly available here:
[https://documenter.getpostman.com/view/43648661/2sB34oDdcQ]