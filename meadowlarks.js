let express = require('express');

let app = express();

app.set('port', process.env.PORT || 3000);

// 定制404页面
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.end('404 - Not Found');
});

// 定制500页面
app.use(function(req, res){
    res.type('text/plain');
    res.status(500);
    res.end('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express Started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});