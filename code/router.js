var main = require('./main');

var routing_table = {
	'/': {
		get: main.index
	}
};

exports.init = function(app) {
	app.map(routing_table);
};