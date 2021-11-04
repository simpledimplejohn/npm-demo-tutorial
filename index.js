// how to install the underscore module
// without the ./ it will look in the node_modules folder
var _ = require('underscore');

// underscore uses the contains function
// put in an array, then an argument, returns a bool

var result = _.contains([1,2,3], 2);
console.log(result);
