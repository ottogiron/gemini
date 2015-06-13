<<<<<<< HEAD
'use strict';

=======
>>>>>>> seed/master
var Lab = require('lab');
var Code = require('code');
var Manifest = require('../manifest');

<<<<<<< HEAD
var lab = exports.lab = Lab.script();

=======

var lab = exports.lab = Lab.script();


>>>>>>> seed/master
lab.experiment('Manifest', function () {

    lab.test('it gets manifest data', function (done) {

        Code.expect(Manifest.get('/')).to.be.an.object();

        done();
    });

<<<<<<< HEAD
=======

>>>>>>> seed/master
    lab.test('it gets manifest meta data', function (done) {

        Code.expect(Manifest.meta('/')).to.match(/this file defines the plot device/i);

        done();
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> seed/master
