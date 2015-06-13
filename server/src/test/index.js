<<<<<<< HEAD
'use strict';

=======
>>>>>>> seed/master
var Lab = require('lab');
var Code = require('code');
var Composer = require('../index');

<<<<<<< HEAD
var lab = exports.lab = Lab.script();

=======

var lab = exports.lab = Lab.script();


>>>>>>> seed/master
lab.experiment('App', function () {

    lab.test('it composes a server', function (done) {

        Composer(function (err, composedServer) {

            Code.expect(composedServer).to.be.an.object();

            done(err);
        });
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> seed/master
