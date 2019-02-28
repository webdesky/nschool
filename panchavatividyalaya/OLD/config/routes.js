var express = require('express');
var router =  express.Router();


var admin = require("../model/admin");

// router.use('/',require('../controller/adminlogin'));
/* website Routing  */



router.use('/',require('../controller/websiteController')); 
// router.get("/", function(req, res){
// 	admin.findAll({ table : "tbl_userlogin"}, function(err, result){
// 		console.log(result);
// 		res.send("<h1>hello</h1>");
// 	});
// });
router.use('/about',require('../controller/websiteController'));
router.use('/events',require('../controller/websiteController'));
router.use('/noticeboard',require('../controller/websiteController'));
router.use('/teachers',require('../controller/websiteController'));
router.use('/gallery',require('../controller/websiteController'));
router.use('/gallerydetail',require('../controller/websiteController'));
router.use('/admission',require('../controller/websiteController'));
router.use('/login',require('../controller/websiteController'));
router.use('/forgot_password',require('../controller/websiteController'));








/*******************/

router.use('/admin',require('../controller/adminlogin'));



router.use('/login',require('../controller/loginController'));


 


module.exports=router;
