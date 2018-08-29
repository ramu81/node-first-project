let express = require('express');
let path = require('path');
let app = express();
let port = '2023';

app.set('view engine','ejs');

app.set('views',path.resolve(__dirname,'client','views'));

app.use(express.static(path.resolve(__dirname,'client')));

app.get('/',function(req,res){
	res.render('index.ejs');
});


app.listen(port,function(){
	console.log(' Server Running @ PORT : '+port)
});