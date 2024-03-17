# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

***NOTES***
### reference: 
[https://www.youtube.com/watch?v=LyxCWXOq4uQ&list=PLolI8AY2AS9ZHVcFVrmBHsaPXhz30W00A&pp=iAQB]


npm i webpack-dev-server webpack-cli --save-dev webpack

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react

npm i --save  @babel/runtime 

npm i @babel/plugin-transform-runtime
or
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev


***step-1***
create file webpack.config.js and babelrc
write code for it

***step-2***
changes in package.json
1."start": "webpack serve --mode production --open --hot", //mode development
2."build": "webpack --mode production",

***step-3*** 
create file index.html in src folder
npm i html-webpack-plugin

***LOADERS****
npm install style-loader css-loader --save-dev
npm install file-loader --save-dev
npm install html-loader --save-dev

***CODE SPLITTING***
npm i react-lodable // for splite and seperate chunks of components

***CLEAN WEBPACK***
npm i clean-webpack-plugin
npm i mini-css-extract-plugin
npm i css-minimizer-webpack-plugin //for optimization css files
Use minify object to remove comments, whitespace, etc

***COPY WEBPACK***
npm i copy-webpack-plugin //store images using src='./xyz'