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

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.bodyParser());
app.use(express.methodOverride());
if ('development' == app.get('env')) {
    console.log('Development environment, serving files from /static');
    app.use(express.static(__dirname + '/static'));
} else {
    console.log('Production environment, serving precompiled files from /static-compiled');
    app.use(express.static(__dirname + '/static-compiled'));
}
app.use(express.cookieParser());
app.use(express.session({ secret: "somesecret" }));
app.enable("jsonp callback");

if ('development' == app.get('env')) {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    // app.use(express.logger({ format: ':method :url' }));
} else {
    app.use(express.errorHandler());
}

router.init(app);

app.listen(3000);
console.log('Listening on port 3000');