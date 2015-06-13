<<<<<<< HEAD


var Glue = require('glue');
var Manifest = require('./manifest');

=======
var Glue = require('glue');
var Manifest = require('./manifest');


>>>>>>> seed/master
var composeOptions = {
    relativeTo: __dirname
};

<<<<<<< HEAD
module.exports = Glue.compose.bind(Glue, Manifest.get('/'), composeOptions);
=======

module.exports = Glue.compose.bind(Glue, Manifest.get('/'), composeOptions);
>>>>>>> seed/master
