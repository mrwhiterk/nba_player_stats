# NBA Player Stats

This project is being made from a simple love of sports. This application can assist users in creating their own unique lineups using players throughout the NBA league.

## Needs

I will need to import data from an API and save it to my database. I will need to create custom teams from the players in my database. I will need to find a way to create a many to many relationship between my players and my teams.

## Application Models

We are creating two main models:

- MyTeams Model

  - title: String,
  - player: {
    Ref to Player model
    }

- MyPlayers model
  - name: String,
  - team: String,
  - position: String,
  - height: String,
  - age: String,
  - championship: String,
  - college: String

## CRUD

- MyTeams Model will have full CRUD methods.
- MyPlayers Model will have create, read, and delete methods.

## Data Relationship

A team has many players
A player has many teams

## Screenshots

Screenshots of the wire frame and model are attached to planning directory

## Deployment

This application will be deployed to Heroku and MongoDB Atlas

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Mongo](https://www.mongodb.com/) - The Database used
- [Handlebars](https://handlebarsjs.com/) - The templating engine used
- [NPM](https://www.npmjs.com/) - Dependency Management
