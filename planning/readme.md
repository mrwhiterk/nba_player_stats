# NBA Fantasy Manager

An application of compiled NBA data to help you track your favorite players and create custom teams using those players.

## Purpose

This is our planning Document to conceptualize our project and create a roadmap to build it out.

### Needs

We need to build out a few models/views to let a user view NBA teams, their rosters, and an information card about individual players. Users will also be able to compile players on their own custom teams and be able to view and store the teams they created. We'll need to include pages for logging in and viewing your profile which will include lists of your custom teams and and list of your favorite players.

## Data Relationship

A user can have one account.
The user can have many favorite players.
The user can have many teams.
The user can take a group of players from their favorite players list to compile a custom team.
A team belongs to one user

## Wireframe

We wireframed basic layouts for our homepage, team and favorite player view, and player information cards. We will use these as a base to conceptualize our model and general layout of our application.

Here is our ourpage
![]('./projectHP.jpg')

and a view of our player card, including our goals to add more features beyond the MVP
![]('/.playercard.jpg')

and the first look at how our models may look
![]('/.newmodels.jpg')

# Deployment

We will be deploying our front end on surge.

## Built With

- [create-react-app](https://www.npmjs.com/package/create-react-app) - The web framework used
- [npm](https://www.npmjs.com/) - Dependency Management
