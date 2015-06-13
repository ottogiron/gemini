var Composer = require('./index');
<<<<<<< HEAD
=======
import {Injector} from 'di';
import {IndexRoute} from './api/index';
>>>>>>> seed/master

Composer(function (err, server) {

    if (err) {
        throw err;
    }
<<<<<<< HEAD

    server.start( () => {    	
        console.log('Started the plot device on port ' + server.info.port);
    });
});	



=======
    var injector = new Injector();
    var indexRoute = injector.get(IndexRoute);
    
    server.register({
    	register: indexRoute
    }, function(err){
    	server.start(function () {
       	console.log('Started the plot device on port ' + server.info.port);
    });
    });

    
});
>>>>>>> seed/master
