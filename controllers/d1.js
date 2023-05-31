const db=require("../routes/db-config");


const d1=async(req,res)=>{
    const{product,quantity,price,img_url}=req.body
                db.query('INSERT INTO products set ?',{product:product,quantity:quantity,price:price,img_url:img_url},async(error,result)=>{
                    if(error) throw error;
                    return res.json({status: "error", error:"Product Added to Inventory."})
                    
                })
            }
    
module.exports=d1;