const express=require("express");
const loggedIn = require("../controllers/loggedIn");
const logout = require("../controllers/logout");
const router = express.Router();
const db=require("../routes/db-config")
router.get("/", (req,res) =>{
    res.render("index");
})
router.get('/d3', function(req, res, next) {
    var sql='SELECT * FROM products';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});
router.get("/register1",(req,res) => {
    res.sendFile("register1.html",{root: "./public"});
})
router.get("/login1",(req,res) => {
    res.sendFile("login1.html",{root: "./public/"});
})
router.get("/login2",(req,res) => {
    res.sendFile("login2.html",{root: "./public/"});
})
router.get("/login3",(req,res) => {
    res.sendFile("login3.html",{root: "./public/"});
})
router.get("/dashboard",(req,res) => {
    res.sendFile("dashboard.html",{root: "./public/"});
})
router.get("/dashboard1",(req,res) => {
    res.sendFile("dashboard1.html",{root: "./public/"});
})
router.get("/dashboard2",(req,res) => {
    const email = req.cookies.email;
    res.sendFile("dashboard2.html",{root: "./public/",email:email});
})
router.get("/d1",(req,res) => {
    res.sendFile("d1.html",{root: "./public/"});
})
router.get("/d2",(req,res) => {
    res.sendFile("d2.html",{root: "./public/"});
})
router.get("/logout",logout);
//router.get("/d3",(req,res) => {
//     res.sendFile("d3.html",{root: "./public/"});
// })
router.get("/d4",(req,res) => {
    res.sendFile("d4.html",{root: "./public/"});
})
router.get("/d5",(req,res) => {
    res.sendFile("d5.html",{root: "./public/"});
})
router.get("/d6",(req,res) => {
    res.sendFile("d6.html",{root: "./public/"});
})
router.get("/d7",(req,res)=>{
    const query='select * from products';
    db.query(query,(error,result)=>{
        if(!req.session.cart){req.session.cart=[];}
        res.render('product',{products:result,cart:req.session.cart});
    });
});
module.exports=router;