# Weather App

> Weather application made with JavaScript and webpack. Uses HTTP requests to return info from a weather API, and is deployed on GitHub Pages


### Desktop view

![screenshot](./dist/img/desktop.png)

### Mobile view

![screenshot](./dist/img/mobile.png)

Javascript with Webpack project from [The Odin Project curriculum](https://www.theodinproject.com/courses/javascript/lessons/working-with-apis)

## Built With:

- HTML,CSS,Javascript
- Webpack
- npm manager
- HTTP Request

## Live Demo

[Live Demo Link](https://mephistodevelop.github.io/WeatherAppExample/)

## Future Features:

- Auto-populate your current location
- Change background according to the current weather

## Getting Started

### Prerequisites

-Before running this project you will need to install webpack and configure the live server on your webpack.config file. You can learn more about it on this [page](https://webpack.js.org/guides/installation/).

[npm install and config: ](https://docs.npmjs.com/cli/install)

### Setup

To use this project you will need to download this repository onto your computer. Afterwards, you will need to install webpack and npm to correctly run this project. In the package.json file, input this:

```
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit >1",
 "build": "webpack --mode production",
 "builddev": "webpack --mode development",
 "start": "webpack-dev-server --mode development >--open"
 }
```

In the `webpack.config.js` file we are going to input this config in order to use live-sync browser reloaded automatically using `npm run start`

```
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(\_\_dirname, 'dist'),
},
watch: true,
module: {
rules: [
{
test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
use: ['file-loader'],
},
],
},
};

module.exports = {
watch: true,
plugins: [
new BrowserSyncPlugin({
host: 'localhost',
port: 3001,
files: [
'./dist/*.html',
'./dist/*.js',
'./dist/*.css',
'./src/*.js',
'./src/img/*.jpg',
],
server: { baseDir: ['dist'] },
}),
],
};
```

### Deployment

To deploy the application and view it on your browser, open your project folder terminal and run these commands:

```
`npm install`
`npm run build`
`npm i -D webpack-dev-server`
`npm i browser-sync --save`
```

To run the linter files you will need to run these command on the terminal

```
`npm install eslint eslint-config-airbnb --save-dev`
`npx eslint --init`
`npx client`
```
Afterwards, open the [Stickler Page](https://stickler-ci.com/) and activate your repository. and activate your repository

## Author

👤 **Cristian Ines Hernandez A. - MephistoDevelop**

- Github: [@MephistoDevelop](https://github.com/MephistoDevelop)
- Twitter: [@MephistoDevelop](https://twitter.com/MephistoDevelop)
- Linkedin: [Cristian Hernandez](https://www.linkedin.com/in/cristian-hernandez1992/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give an ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
