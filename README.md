# Sudoku

## Requirements

Sudoku requires the following to run:

  * [Node.js][node] 10.16.3+
  * [npm][npm] (normally comes with Node.js)
  * Nginx
  * Typescript
  * Angular

[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/

##### Nginx
If you are using Ubuntu, installing Nginx can be accomplished 
using the following command:

**Note: This may require super user privates.**

```bash
sudo apt-get install nginx
```

##### Typescript
Once npm has been installed, installing typescript is as easy
as running the following command:

**Note: This may require super user privates.**

```bash
sudo npm install -g typescript
```

##### Angular
In addition to typescript, once npm has been installed, 
installing angular can be accomplished with the following command:

**Note: This may require super user privates.**

```bash
npm install -g @angular/cli
```

## Install
Use the install command found below. This will install
all package dependencies for both the API and UI.

```bash
npm install
```

## Build
Use the build command found below. This will build
the entire solution, including the API, and UI.

Note: This command will also run the API tests,
and UI test.

```bash
npm run build
```

## Usage
##### API
To start start the API use the following command:

```bash
npm run api
```

The Node REST API will now be running on port 8080.
Found here: [localhost:8080](localhost:8080)

Example:
```bash
curl http://localhost:8080/sudoku/board
```

##### UI
To start the UI use the following command:

```bash
npm run ui
```

The UI will now be served on port 4200.
Found here: [localhost:4200](localhost:4200)

To enable Nginx reverse proxy run the following command:

**Note: This may require super user privates.**

```bash
npm run configureReverseProxy
```

This will configure Nginx reverse proxy. Enabling the API 
and the UI to be accessible from to port 3001. 
Found here: [localhost:3001](localhost:3001)

## Instructions
Once the API and UI have been built and run the application,
is now available for local use.

Using chrome, navigate to [localhost:4200](localhost:4200) or 
[localhost:3001](localhost:3001) if reverse proxy has been 
configured. 

The application will load and display a Sudoku board.
A progress spinner will be displayed as the board is loading.

Clicking the 'Reload' button will result in a new, random
board being displayed.

Clicking on one or more cells of the Sudoku board will lock
those values. When the 'Reload' button is pressed after 
locking a cell, a new random board will be generated with
the values of the locked cells remaining the same.

## Testing Notes:
Tested using:

  * NodeJS v10.14.2
  * Chrome Version 77.0.3865.90,
  * MacOS 10.14.5
  * Ubuntu 18.04

