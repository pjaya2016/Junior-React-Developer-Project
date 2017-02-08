import express from 'express';
var app = express();

app.set('port',(process.env.PORT || 3000));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
	 res.render('index');
})

app.listen(app.get('port'),()=>{
	console.log('Listing at port 3000');
});

