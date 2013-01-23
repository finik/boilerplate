var example = require('./example');

var routing_table = {
	'/example': {
		get: example.index
	}
};

exports.init = function(app) {
	app.map(routing_table);
}