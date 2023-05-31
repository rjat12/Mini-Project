const db=require("../routes/db-config");
const bcrypt=require("bcryptjs");

const d4=async(req,res)=>{
    const{email,password:Npassword}=req.body
    if(!email || !Npassword) return res.json({status: "error",error:"Please Enter your Email and Password"});
    else{
        db.query('SELECT email FROM users WHERE email=? ',[email],async(err,result)=>{
            if(err) throw err;
            if(result[0])return res.json({status: "error",error:"Email has already been registered"})
            else{
                const password= await bcrypt.hash(Npassword,8);
                db.query('INSERT INTO stockkeeper SET ?',{email:email,password:password},async(error,result)=>{
                    if(error) throw error;
                    return res.json({status: "error", error:"Manager has been added"})
                    
                })
            }
        })
    }

}
module.exports=d4;