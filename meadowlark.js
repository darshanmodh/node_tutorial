/**
 * Created by Darshan on 11/6/2015.
 */
var express = require('express');

var app = express();

//hadlebars view engine
var handlebars = require('express-handlebars').create( {defaultLayout:'main'} );
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//public directory for images and CSS
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    //res.type('text/plain');
    //res.send('Meadowlark Travel');
    res.render('home');
});

//for dynamic view
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];
app.get('/about', function(req, res){
    //res.type('text/plain');
    //res.send('About Meadowlark Travel');
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune:randomFortune});
});

//custom 404 page
app.use( function(req, res, next) {
    //res.type('type/plain');
    res.status(404);
    //res.send('404 - Not Found - Custom');
    res.render('404');
});

//custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    //res.send('500 - Server Error');
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; Press Ctrl + C to terminate.');
});