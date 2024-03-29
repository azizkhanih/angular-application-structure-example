# Angular workspace example
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Demo 
See [Demo](http://runsensible.ir) page.


## Project Structure 
This project is an angular workspace that contains an application and a library.
- The library project contains:
  - Loading component prevents users from clicking on elements when we are fetching data or actions. 
  - Snack bar component and service that shows messages.
- The application project contains:
  - Account module, that is responsible for authentication and authorization.
  - Shared module, that contains share interceptors, validators, storage service, and shared constants.
  - Layout module, that contains account and shared layouts and shared layout components.
  - Core folder, that contains an abstract class to unsubscribe on OnDestroy.
  - Pages folder, that contains main pages of the application.

The application is using ngx-translate to handle multi-language and manage text resources.

The styles folder in Assets contains typography and variable files, general variables such as colors and shared styles, are stored in this folder.

## First Step 
Run `npm i` for install all packages dependencies. 


## Development server
Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`.


## Build
Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests
Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Getting started
Serve or open [Demo](http://runsensible.ir) page.


