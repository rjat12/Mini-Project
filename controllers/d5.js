const db=require("../routes/db-config");


const d5=async(req,res)=>{
    const{email}=req.body
                if(!email) return res.json({status: "error",error:"Email ID not registered."});
                else{
                    db.query('DELETE FROM stockkeeper where email=?',[email],async(error,result)=>{
                        if(error) throw error;
                        return res.json({status: "error", error:"Removed Manager."})
                        
                    })
                }
                
            }
    
module.exports=d5;