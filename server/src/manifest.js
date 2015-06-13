<<<<<<< HEAD


var Confidence = require('confidence');
var Config = require('./config');

=======
var Confidence = require('confidence');
var Config = require('./config');


>>>>>>> seed/master
var criteria = {
    env: process.env.NODE_ENV
};

<<<<<<< HEAD
=======

>>>>>>> seed/master
var manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web']
    }],
<<<<<<< HEAD
    plugins: {
        'visionary': {
            engines: { jade: 'jade' },
            path: './server/web'
        },
        './api/index': { basePath: '/api' }
       
    }
};

var store = new Confidence.Store(manifest);

=======
    plugins: {     
        //'./api/index': { basePath: '/api' }
    }
};


var store = new Confidence.Store(manifest);


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
