# mkreact
Starter package for writing an ES6 React app using Express for the back-end,
SQLite3 for data persistence, Material-UI for front-end visuals, Redux for 
front-end data flow, Babel and Webpack for tooling/building, and Karma, Enzyme, Mocha, 
Sinon and Chai for quality assurance.

## About mkreact
mkreact was created while I was learning React and found the setup process extremely
tedious. This package is a complete project seeder for a React web-app, including a
demo section with a todo list implementation that shows how data flows through the 
full stack, and basic tests to show how a React app can be tested. Feel free to use it
for your own projects.

## Using mkreact
mkreact was not designed to be cloned and worked upon. Install it globally via:
```npm i mkreact -g```

mkreact will install scripts in /usr/local/bin (sorry, Windows is not supported,
fork this repo and add in Windows support if you really want it, will accept your pull
request).

Navigate to your project and use the following command to seed a
fresh project:
```cd ./my-project``` 
Alternatively, create the directory and `cd` into it:
```mkdir new-project-folder; cd ./new-project-folder```
Run `mkreact` to create a project and `npm install --save-dev` to start developing on it.

## Backend
### Express 
The Express framework is used on the back-end server to create an API. 

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
URL Link: https://facebook.github.io/react/

### MaterialUI
URL Link: http://www.material-ui.com/#/

### Redux
URL Link: http://redux.js.org/ 

## Tooling
### Webpack
URL Link: https://webpack.github.io/
Reference Links: [
	http://webpack.github.io/docs/
]

### Babel
URL Link: https://babeljs.io/

## Quality Assurance
### Karma
URL Link: https://karma-runner.github.io/1.0/index.html

### Enzyme
URL Link: http://airbnb.io/enzyme/

### Mocha
URL Link: https://mochajs.org/

### Sinon
URL Link: http://sinonjs.org/

### Chai
URL Link: http://chaijs.com/