# Practice Challenge: CAR LOT

Welcome to our Car Lot.

This practice will help you prepare for the code challenge. You will need to put together
a lot of previous learning to get through this one.

The components are built for you, but you need to decide how the information about the car
lot will flow together.

## Setup

The cars for sale in our lot can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm run start` to start up our React app at `http://localhost:3000`.

Go ahead and head to `http://localhost:3001/cars` in your browser to view the data.

## Deliverables

CORE:

- SEE ALL OF THE CARS ON THE LOAD WHEN THE APPLICATION LOADS

- ADD A NEW CAR LISTING TO THE LOT AND HAVE IT SHOW UP IN THE DOM

- SEARCH FOR A CAR BY MODEL AND FILTER BY MANUFACTURER

ADVANCED DELIVERABLES:

- MAKE THE NEW CAR LISTING PERSIST

- EDIT A LISTING AND HAVE THE CHANGE REFLECT ON THE SCREEN

- MARK A VEHICLE AS SOLD AND HAVE IT DISAPPEAR FROM THE DOM

EXTRA/BONUS:

- MAKE THE CHANGE YOU MAKE WHILE EDITING A VEHICLE PERSIST

- MARK THE VEHICLE AS SOLD AND HAVE IT PERSIST

## EXAMPLE

### STEP 1: SHOW ALL THE CARS

Look at your component hierarchy and decide where the cars should be loaded.

### STEP 2: ADD A NEW CAR

There is already a form built, but it isn't connected to anything. How can we get the form
connected to our list of cars so that we can add to it?

### STEP 3: FILTER & SEARCH

People want to be able to filter and search the cars to find exactly what they want.

_NOTE_ the search input text field only needs to look at the MODEL of the car

When the user changes the dropdown, the list of cars should filter.
When the user types a model name in the box, the list should filter.
If both are used at the same time, the list should be filtered by both.

### BONUS!

- MAKE THE NEW CAR LISTING PERSIST (update the db.json) _POST_

- EDIT A LISTING AND HAVE THE CHANGE REFLECT ON THE SCREEN

- MARK A VEHICLE AS SOLD AND HAVE IT DISAPPEAR FROM THE DOM

EXTRA/BONUS:

- MAKE THE CHANGE YOU MAKE WHILE EDITING A VEHICLE PERSIST _PATCH_

- MARK THE VEHICLE AS SOLD AND HAVE IT PERSIST _DELETE_
