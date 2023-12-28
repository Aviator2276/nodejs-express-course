# Modules Lesson

## Managing Modules
npm - global command, comes with node
```bash
npm --version
```

### local dependency - use it only in this particular project
Most commonly used
```bash
npm i <packageName>
```

```json
"dependencies": {
  "lodash": "^4.17.21"
},
```

### Global dependency - use it in any project
```bash
npm install -g <packageName>
```

### Dev Dependencies:
```bash
npm i <packageName> -D
```
Dependencies that are not needed in the production application. These
dependencies are only used in development of the application.

```json
"devDependencies": {
    "nodemon": "^3.0.2"
}
```

### Uninstall dependencies:
```bash
npm uninstall <packageName>
```

You can also delete the node_modules folder and run npm install to
reinstall modules. This is useful for clearing out cache or bugs
that may occur with packages.

## Package.json
package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, create properties etc)
npm init (step by step, enter to skip)
npm init -y (everything default)
 - Contains the dependencies required for this project

node_modules folder, where all the dependencies are stored.
Dependencies that require other dependencies will automatically be
downloaded with the main dependency.

### Package-lock.json
Dependencies that require other dependencies are stored here and
specific versions are stored so all your dependencies work together

### Version
```
4.26.34
X.XX.XX
^------- Breaking Change
   ^---- Non-breaking Change
      ^- Bug fixes
```

## Publishing to GitHub
When publishing your projects/packages to GitHub or another service,
you don't want to also push your node_modules folder. This is because
your dependencies can get very large. So we use a .gitignore to ignore
this folder when pushing code.

But this presents a question, how does the user get the dependencies of
this project?
By using the package.json, node can automatically download
the project dependencies.
"npm install" - will install all dependencies for this project.

## NPM Scripts
You can define your commands to run when running npm start.
```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
},
```
Running "npm start" will run the start script
Running "npm run dev" will run the dev script

## App.js
When importing built-in modules, do not specify the './' This is so
that NodeJS knows you're using a built-in or third party module
```javascript
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World");
```