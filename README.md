# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run this project with yarn on npm
#### npm instructions (recommended) ####

### `npm install --save-dev`
Install the dependencies

### `npm add -D tailwindcss@npm:tailwindcss/postcss7 -compat postcss@^7 autoprefixer@^9`
### `npm add @tailwindcss/forms`
### `npm add @craco/craco dayjs`
Additional dependencies

### `npm audit --force`
Troubleshooting::If you are having difficulties starting the app you can fix the dependencies using this command 

### `export NODE_OPTIONS=--openssl-legacy-provider`
Troubleshooting::Newer versions of node (after 16 may require this)

### `npm run start`
Start the app

Navigate to `localhost:3000`


#### yarn instructions (alternative) ####

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Test Execution Instructions

### Note: The test code has been integrated with the app code itself. The app needs to be executed first

### 1. Clone/Fork the repository 

### Testing scripts
In the project directory ,execute the below commands


### 2. `npm install --save-dev` 
This would install all the dependencies needed for both executing the app as well as the dependencies needed for cypress test execution

### 3. `Follow the instructions stated above for executing the app`

### 4. Note for windows machines 
```Use set NODE_OPTIONS=--openssl-legacy-provider in the start script of package.json ```

### For MAC/Linux Machines
``` Use export NODE_OPTIONS=--openssl-legacy-provider in the start script of package.json```
### 5. Install cypress 

### `npm install cypress@12.14.0 --save-dev`

### 6. Using the scripts defined in package.json to execute the tests
### FOR RUNNING THE TESTS:
Keep the app open in 1 terminal
``` npm run start ```

In the second terminal, FOR
### 7. Headless execution
#### `npm run e2e:test` 

### 8. Headed execution
### `npm run e2e:test:headed`