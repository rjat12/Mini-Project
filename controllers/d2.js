const db=require("../routes/db-config");


const d2=async(req,res)=>{
    const{product}=req.body
    db.query(`select * from products WHERE product = '${product}'`,async(err,result)=>{
        if(err) throw err;
        // console.log("here:" ,!!result);
        if(result.length == 0) return res.json({status:"error",error:"Product not found"})
        else{
                db.query('DELETE FROM products where product=?',[product],async(error,result)=>{
                    if(error) throw error;
                    return res.json({status: "error", error:"Product Deleted from Inventory."})
                    
                })
            }
            })
}
    
module.exports=d2;