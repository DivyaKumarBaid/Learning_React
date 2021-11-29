# Getting started with React

- To get started first download and install node from here https://nodejs.org/en/download/

- If we want to make a react app from scratch it would require to create many conplex steps thus for our ease , facebook has developed a tool called _create react app_ so for beginners we would use it.

_npx is new which comes with npm 5.2+ and it is a node package manager_

## Create React App

- It is the best way for beginners for creating a single page app

- Commands for getting started

  ```bash
  npx create-react-app <-name->
  cd <-name->
  npm start
  ```

  This basically downloads and sets up the create react app and start the npm host to host the app on localhost in my case on port 3000

- <-name->/src folder is where the main thing happens

- Entry point for react app is index.js inside the src folder

- The index.js imports

  ```JavaScript
  import React from 'react';
  import ReactDOM from 'react-dom';
  ```

  as these two are very critical lib.

  - react is the engine that sees how the DOM works and builds

  - react-dom is related to web which is document object model , it looks after the UI

  - There are different react libs such as:
    - react-native for android
