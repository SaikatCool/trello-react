
# This is a Trello-like app where frontend is built on React-Redux and backend is built on NodeJS with TypeScript

## Run the app

The repository includes frontend as well as the backend. 
Ensure that you have NodeJS installed.
Clone the repository and follow the below instructions:

### Start the backend

Move to the back-end folder, install the NPM dependencies and start the app.
```
cd back-end
npm install
npm run start
```
The port for backend is configured as 3001, feel free to change it from config.ts if required.

### Start the frontend

Move to the front-end folder, install the NPM dependencies and start the app.
```
cd front-end
npm install
npm start
```
Browse to http://localhost:3000 to load the frontend. Use Google Chrome V80 or greater for the best experience.


## Backend

The backend is built with NodeJS, expressJS and TypeScript. Additionally, I like to use Inversion of control (IOC) to develop a highly maintainable and testable code, therefore, "inversify" is used .

There are currently 3 APIs:

#### Get Board
This api returns a preconfigured Trello board with the existing lists and cards.

```
GET /api/v1/board
```
Sample response:

```
200 OK

{
    "lists": [
        {
            "id": "60388ecc9ab3847a0ac4dca0",
            "name": "To Do",
            "cards": [
                {
                    "id": "60388f15b86d964b9aca0ee0",
                    "name": "Task review"
                },
                {
                    "id": "60388f309740e92a4c2ea440",
                    "name": "Final interview"
                },
                {
                    "id": "60388f3687859920bcc49f09",
                    "name": "Onboarding"
                }
            ]
        }
    ]
}
```

#### Add a new card
This api allows to create a new card. It accepts the card name and also the list id where the card needs to be added.

```
POST /api/v1/cards
{
	"name": "Test",
	"listId": 1234
}
```

sample response
```
201 CREATED
{
"name": "api-card",
"id": "6038bb4fe239f951fd420e1f"
}
```

#### Move a card to another list
This api allows to move a card to another list. It accepts the card id and also the destiination list id.
```
PUT /api/v1/cards
{
	"id": 1,
	"listId": 1234
}
```
sample response
```
201 OK
```

## Frontend
Frontend is built on React with Redux. The Frontend interacts with the backend to load, add or move the cards.


## Planned improvements

 - Add further tests
 - Convert frontend to TypeScript code
 - Implement static code analysis
 - Handle error scenarios
 - Implement progress message in the UI during the API calls
 - Auto update of board