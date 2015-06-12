var Composer = require('./index');


module.exports.start = (done) => {
	Composer(function (err, server) {

	    if (err) {
	        throw err;
	    }

	    server.start( () => {
	    	done();
	        console.log('Started the plot device on port ' + server.info.port);
	    });
	});	
};
