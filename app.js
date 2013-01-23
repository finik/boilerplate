var express = require('express');
var router = require('./code/router');
var app = express();

app.map = function(a, route){
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
        // { '/path': { ... }}
        case 'object':
            app.map(a[key], route + key);
        break;
        // get: function(){ ... }
        case 'function':
            app[key](route, a[key]);
        break;
        }
    }
};

app.configure(function(){
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/static'));
    app.use(express.cookieParser());
    app.use(express.session({ secret: "somesecret" }));
    app.enable("jsonp callback");
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    // app.use(express.logger({ format: ':method :url' }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

router.init(app);

app.listen(3000);
console.log('Listening on port 3000');