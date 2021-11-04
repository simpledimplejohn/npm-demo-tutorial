# __Creating a basic Node.js setup__

### __Description__
Node Package Manager NPM setup from the Coding With Mosh Node.js tutorial.

### __Instructions For Building This Setup__
1. Install/update node with homebrew
   run `brew upgrade node`
3. Check version of node and npm
   `node -v`
   `npm -v`
2. run `npm init` to create package.json file
  enter fields for meta data
3. install underscore library
  `npm i underscore`
4. Create a .gitignore file with `node_modules` in it
5. Install Mongoose package with `npm install mongoose`
6. Install jshint for hints about code with `npm install jshint --save-dev` to save to development dependency 


### __Working with NPM__
1. Change the version of underscore with `npm install underscore@1.4.0`
2. Look for outdated versions with `npm outdated`
3. Fix outdated versions with `npm update` for minor and patch releases
4. To uninstall a package use `npm un mongoose` also removes from node_modules folder

