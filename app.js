
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  // , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// The below 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross           
// Domain Request
// res.header("Access-Control-Allow-Origin", "http://localhost");
// res.header("Access-Control-Allow-Methods", "GET, POST");
        
app.get('/', routes.index);
app.get('/1col', routes.index);
app.get('/2col', routes.index);
app.get('/3col', routes.index);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
