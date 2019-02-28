var express = require('express');
var app = express();   
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var cache = require("nocache");
var upload = require('express-fileupload');

app.set('view engine', 'ejs');
app.set('views', 'views');

//console.log('forntlinnnnnnnnnnnnnnnnnnnnnnnn')


 app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public/website"));
//app.set("views", "./frontlineschool/views/");
//app.use(express.static(__dirname+"/frontlineschool/public/"));
//app.use(express.static(__dirname+"/frontlineschool/public/website/"));
 

app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "TSS", saveUninitialized: true}));
app.use(flash());
app.use(cache());
app.use(upload());
app.use(cors());
// app.use(require("./config/connect"));

app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}));


app.use(function(req, res, next){
	//console.log(req.session)
	res.locals.session = req.session;
	res.locals.user_role = req.cookies.user_role;
	res.locals.appName = "/frontlineschool";
//	console.log(res.locals.appName);
//	app.set("views", "./frontlineschool/views/");
//	app.use(express.static(__dirname+"/frontlineschool/public/"));
//	app.use(express.static(__dirname+"/public/website/"));

	
	
	next();
});

app.use(require("./config/routes"));


// app.get("*", function(req, res){
// 	res.send("<h1>Page Not Found</h1>");
// })

app.listen(process.env.PORT || 8082, function(){
	console.log("Server Running");
});
