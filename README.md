# mkreact
Starter package for writing an ES6 React app using Express for the back-end,
SQLite3 for data persistence, Material-UI for front-end visuals, Redux for 
front-end data flow, Babel and Webpack for tooling/building, and Karma, Enzyme, Mocha, 
Sinon and Chai for quality assurance.

## About mkreact
mkreact was created while I was learning React and found the setup process extremely
tedious. This package is a complete project seeder for a React web-app, including a
demo section with a todo list implementation that shows how data flows through the 
full stack, and basic tests to show how a React app can be tested. 

Feel free to use it for your own projects or to learn about React using Redux.

## Using mkreact
### Overview
mkreact was not designed to be cloned and worked upon. Install it globally via:
```npm i mkreact -g```

mkreact will install scripts in /usr/local/bin (sorry, Windows is not supported,
fork this repo and add in Windows support if you really want it, will accept your pull
request).

Navigate to your project and use the following command to seed a fresh project:
```cd ./my-project``` 

Alternatively, create the directory and `cd` into it:
```mkdir new-project-folder; cd ./new-project-folder```

### In-built Scripts
Run `mkreact` to create your project. 

Run `npm install --development` to start development work on it.

Run `npm install` when in CI/production environment.

Run `npm start --development` to start the server in development mode.

Run `npm start --production` to start the server in production mode.

Run `npm build` to create the bundled files using the inbuilt webpack configuration.

Run `npm test` to run tests using the inbuilt karma configuration.

### Notes
In-built behaviour for `development`/`production` differs in that `development` loads
a programatically generated `master.js` file (webpacked bundle) whereas `production`
loads the `master.js` file from the `/assets` folder which needs to be built via `npm build`
before it becomes available. See `/configurations/webpack.js` for more information on this.

## Backend
### Express 
The Express framework is used on the back-end server to serve files and to specify
an API for the React App to draw/send data to the data storage.

URL Link: https://expressjs.com/

Reference Links: [
	https://expressjs.com/en/4x/api.html
]

### SQLite
SQLite3 is the included database and you can swap it out when you are looking to scale.
SQL Syntax is similar to MySQL/Postgres/OracleDB.

URL Link: https://www.sqlite.org/

Reference Links: [
	https://github.com/mapbox/node-sqlite3/wiki/API
]

## Frontend
### ReactJS
A UI framework by Facebook that we will be using.

URL Link: https://facebook.github.io/react/

### MaterialUI
A Material Design implementation for React.

URL Link: http://www.material-ui.com/#/

### Redux
An improved version of Flux - and yes it's approved by the original conceivers of Flux.

URL Link: http://redux.js.org/ 

## Tooling
### Webpack
This packages all specified files into one master file (a bundle) that can be included
on your webpage once built.

URL Link: https://webpack.github.io/

Reference Links: [
	http://webpack.github.io/docs/
]

### WebpackDevMiddleware
A middleware implementation of the `webpack-dev-server` npm package. Allows us to
run our main server and webpack tooling system within the same process.

URL Link: https://github.com/webpack/webpack-dev-middleware

### Babel
This project assumes development in ES6 JavaScript and Babel is required to transpile
the ES6 code into legacy browser compatible code.

URL Link: https://babeljs.io/

## Quality Assurance
### Karma
Karma is a test runner and this project's configuration pairs it with PhantomJS to
render components.

URL Link: https://karma-runner.github.io/1.0/index.html

### Enzyme
Enzyme is a component tester that allows us to mount React components for testing.

URL Link: http://airbnb.io/enzyme/

### Mocha
Mocha is a test framework that implements a `describe '/*feature*/'` and `it '/*does this*/'`
format of testing.

URL Link: https://mochajs.org/

### Sinon
Sinon is used to access hidden properties of JavaScript objects.

URL Link: http://sinonjs.org/

### Chai
Chai is a syntax formatter that allows us to write BDD tests where we can 
`expect(SomeComponent.someValue).to.be.equal(SOME_EXPECTED_VALUE)`.

URL Link: http://chaijs.com/