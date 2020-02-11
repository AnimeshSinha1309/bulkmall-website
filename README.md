# BulkMall Website

CRUD App with a frontend in React, backend in Express, and database in MongoDB.

## Installation


### Install MongoDB

Use the link here for how to install [MongoDB on any system](https://docs.mongodb.com/manual/administration/install-community/)

Following are the commands for installing on Ubuntu:

`$ sudo apt-get install gnupg`
`$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -`
`$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`
`$ sudo apt-get update`
`$ sudo apt-get install -y mongodb-org`
`$ echo "mongodb-org hold" | sudo dpkg --set-selections`
`$ echo "mongodb-org-server hold" | sudo dpkg --set-selections`
`$ echo "mongodb-org-shell hold" | sudo dpkg --set-selections`
`$ echo "mongodb-org-mongos hold" | sudo dpkg --set-selections`
`$ echo "mongodb-org-tools hold" | sudo dpkg --set-selections`
`$ sudo systemctl daemon-reload`
`$ sudo systemctl start mongod`
`$ sudo systemctl status mongod`
`$ mongo`

### Install Express

This app generated by [Express generator](https://expressjs.com/en/starter/generator.html)

Install npm module express generator globally

`$ npm install -g express-generator`
`$ express`

### Install Requirements and Run

Once you have cloned this repository using `$ git clone https://github.com/AnimeshSinha1309/BulkmallWebsite.git`, follow these steps to run the code:
* `$ cd BulkmallWebsite`

* Navigate to backend `$ cd backend/`.
* Do `$ npm install`
* Run `$ npm run start`
You application will run on *port: 9001*
* Similarly, navigate to frontend `$ cd frontend/`.
* Do `$ npm install`
* Run `$ npm run start`

## Dependencies

- NodeJS [v8.10.0] (https://nodejs.org/en/download/releases/) and NPM [v6.13.7]
- ExpressJS [4.16.1] (https://expressjs.com/)
- MongoDB [4.2] (https://www.mongodb.com/download-center/community)
All other dependencies are laid out in the **package-lock.json** files in the `frontend/` and `backend/` folders.


## ReactJS: Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

* **Code Splitting**: This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
* **Analyzing the Bundle Size**: This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
* **Making a Progressive Web App**: This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
* **Advanced Configuration**: This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
* **Deployment**: This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
* **`npm run build` fails to minify**: This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
