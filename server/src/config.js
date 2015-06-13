<<<<<<< HEAD


var Confidence = require('confidence');

=======
var Confidence = require('confidence');


>>>>>>> seed/master
var criteria = {
    env: process.env.NODE_ENV
};

<<<<<<< HEAD
var config = {
    $meta: 'This file configures the plot device.',
    projectName: 'gemini',
=======

var config = {
    $meta: 'This file configures the plot device.',
    projectName: 'node-hapi-seed',
>>>>>>> seed/master
    port: {
        web: {
            $filter: 'env',
            test: 9090,
            $default: 8080
        }
    }
};

<<<<<<< HEAD
var store = new Confidence.Store(config);

=======

var store = new Confidence.Store(config);


>>>>>>> seed/master
exports.get = function (key) {

    return store.get(key, criteria);
};

<<<<<<< HEAD
exports.meta = function (key) {

    return store.meta(key, criteria);
};
=======

exports.meta = function (key) {

    return store.meta(key, criteria);
};
>>>>>>> seed/master
