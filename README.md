# Penguin API

A simple RESTful API for managing penguin data built with Express.

## Installation

```
git clone https://github.com/yourusername/penguin-api.git
cd penguin-api
npm install
```

## Running the Server

```
node index.js
```

## API Endpoints

### Get All Penguins

- **URL:** `/penguins`
- **Method:** `GET`

### Get Penguin by ID

- **URL:** `/penguins/:penguinId`
- **Method:** `GET`

### Add a New Penguin

- **URL:** `/penguins`
- **Method:** `POST`
- **Request Body Example:**
  ```json
  {
    "name": "Macaroni Penguin",
    "species": "Eudyptes chrysolophus",
    "habitat": "Subantarctic islands",
    "diet": ["Krill", "Fish"],
    "height_cm": 70,
    "weight_kg": 5.5,
    "status": "Least Concern"
  }
  ```

### Update a Penguin

- **URL:** `/penguins/:penguinId`
- **Method:** `PUT`

### Delete a Penguin

- **URL:** `/penguins/:penguinId`
- **Method:** `DELETE`
