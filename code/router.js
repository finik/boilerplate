exports.init = function(app) {
	app.get('/example', function(req, res){
	    res.render('example');
	});	
}