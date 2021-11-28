# Angular sign-up example workspace
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Demo 
See [Demo](http://kizhangallery.ir) page.


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


## Getting started sign-up form test
Serve or open [Demo](http://kizhangallery.ir) page.

**Step 1**: Click on sign-in button on the top right corner to navigate to the sign-in page

![homepage](https://user-images.githubusercontent.com/82710647/143786387-a946ec33-d870-4ccc-8f1e-1a60b304b0a5.jpg)

**Step 2**: Click on sign-up button on the sign-in page to navigate to the sign-up page

![signin](https://user-images.githubusercontent.com/82710647/143786369-d9e45dc3-70a2-4078-a7b6-bb9a59324290.jpg)

**Step 3**: Fill the sign-up form and submit the form

![signup](https://user-images.githubusercontent.com/82710647/143786378-d8bc7928-708e-43b0-9804-3d1b21eff7e0.jpg)

