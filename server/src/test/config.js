<<<<<<< HEAD
'use strict';

=======
>>>>>>> seed/master
var Lab = require('lab');
var Code = require('code');
var Config = require('../config');

<<<<<<< HEAD
var lab = exports.lab = Lab.script();

=======

var lab = exports.lab = Lab.script();


>>>>>>> seed/master
lab.experiment('Config', function () {

    lab.test('it gets config data', function (done) {

        Code.expect(Config.get('/')).to.be.an.object();

        done();
    });

<<<<<<< HEAD
=======

>>>>>>> seed/master
    lab.test('it gets config meta data', function (done) {

        Code.expect(Config.meta('/')).to.match(/this file configures the plot device/i);

        done();
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> seed/master
