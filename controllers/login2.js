const jwt=require("jsonwebtoken");
const db=require("../routes/db-config");
const bcrypt=require("bcryptjs");

const login2= async(req,res)=>{
    const {email,password} =req.body;
    if(!email || !password) return res.json({status: "error",error:"Please Enter your Email and Password"});
    else{
        db.query('SELECT * FROM admin WHERE email=? ',[email],async(err,result)=>{
            if(err) throw err;
            if(!result||!await bcrypt.compare(password,result[0].password))return res.json({status:"error",error:"Incorrect Email or Password"});
            else{
                const token=jwt.sign({id:result[0].id},process.env.JWT_SECRET,{
                    expiresIn:process.env.JWT_EXPIRES,
                    //httpOnly:true
                })
                const cookieoptions={
                    expiresIn:new Date(Date.now()+process.env.COOKIE_EXPIRES*24*60*60*1000),
                    httpOnly:true
                }
                res.cookie("userRegistered",token,cookieoptions);
                res.cookie('email', email, { maxAge: 900000, httpOnly: true });
                return res.json({status:"success",success:"User has been logged in",redirect:"/dashboard"})
            }
        })    
}
}
module.exports=login2;