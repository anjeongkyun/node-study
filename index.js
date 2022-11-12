var express = require('express');
var app = express();
var morgan = require('morgan');
var users = [
    {id:1, name: 'alice'},
    {id:2, name: 'bek'},
    {id:3, name: 'chris'}
]

app.use(morgan('dev'));

app.listen(3000, function() {
    console.log('listening on port 3000 !');
});

app.get('/users', function(req, res) {
    console.log('/users');
    res.json(users);
});