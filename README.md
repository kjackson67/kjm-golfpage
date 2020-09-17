# ** FINAL PROJECT OVERVIEW **

# Project Description

This is the final project - our "Capstone Project" utilizing both Node/Express backend with React frontend apps. Our app will let a user be able to pull up golf courses they'd be interested in playing and if the course a user is looking for is not there, the user will be able to add their favorite course(s). The user will be able to look at the golf courses par, yardage and handicap ratings to get an idea of how easy or difficult the course plays. Just an easy to use app that will allow a user look up golf courses quickly. -->

# USER STORIES

As a user, I want to be able to add any local or national golf courses that I'd be interested to play.
As a user, I want to be able to look up a golf courses main score card information so that I can get an idea of the courses difficulty.
As a user, I want to be able to review a golf course if it is not listed so that I can use it for future use.
As a user, I want to edit a golf course if the golf course has been changed or updated so that I can keep the course information accurate.

# Stretch Goal\*

We would like to make this app able to apply a HDCP recording feature, so that players can keep track of not only their scores but be able to compare against their friends in a "friendly" competitive challenge as well.


# Project Links

Github repo, Heroku deployment to production, Project2, REACT, PGAdmin, Postgres, Postman, Axios


# Wireframes

(https://media.git.generalassemb.ly/user/29081/files/362e5400-f81c-11ea-97ee-9aedda3a21fb)
https://kjm-golfpage.herokuapp.com/



We used/created a wireframe data flow to show a snapshot of what we wanted product to look like flowing from backend into the frontend utilizing a navigation bar to home page and details page.


# TECHNOLOGIES UTILIZED

Google, StackOverflow, W3schools.com, Postman, Instructor

<!-- ** Components **
Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. -->

Component Description
App This will make the initial data pull and include React Router
Header This will render the header include the nav
Footer This will render the header include the nav

** Time Frames **
Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Component Priority Estimated Time Time Invetsted Actual Time
Adding Form H 3hrs 3.5hrs 3.5hrs
Working with API H 3hrs 2.5hrs 2.5hrs
Total H 6hrs 5hrs 5hrs

** Additional Libraries **
Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

** Code Snippet **

1. date: {
   type: Sequelize.DATEONLY
   },
   date: new Date(2020,07,03),
   OR date: "2020-08-03",

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

function reverse(string) {
// here is the code to reverse a string of text
}

** Issues and Resolutions **

1. ERROR: null value in column "createdAt" violates not-null constrain
   RESOLUTION: Changed my migration create-round.js to
   date: {
   type: Sequelize.DATEONLY }, and then needed to change seeder-demo-round date integer to // date: new Date(2020,07,03), or date: "2020-08-03",
2. ERROR: column "userId" of relation "Courses" does not exist
   RESOLUTION: added userId column manually in pgAdmin, should have used npx migrate from "add" userId instead. So I dropped entire db and re-ran createdb 'project_name' in terminal. I also utilized mirgration generate --name rename-courseid to coursename -- Needed to refer back to lessons from class

Use this section to list of all major issues encountered and their resolution.
SAMPLE.....
ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object

<!-- to create an app for keeping track of golf scores on courses people have played.  This will let a user sign-up or log in to be able to either add a course or choose a course they've played and enter the date and score they shot on that date.  The user will be able to continuously add new scores to same course or enter a new course to add their score.


Goal for this app is to make it easy for a user to be able to sign-up or register (As a new user) and keep track of the courses played, when (dates played) and users score so it will make it easier to keep track of handicap.

to enter my round for the date played and enter my score.
As a user, i want to be able to see my past golf scores.
As a user, I want to be able to see what past dates I played and on what courses. -->









<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
