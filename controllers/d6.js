const db=require("../routes/db-config");


const d6=async(req,res)=>{
    const{product,quantity,price}=req.body
    db.query(`select * from products WHERE product = '${product}'`,async(err,result)=>{
        if(err) throw err;
        // console.log("here:" ,!!result);
        if(result.length == 0) return res.json({status:"error",error:"Product not found"})
        else{
            db.query(`UPDATE products SET quantity = '${quantity}', price = '${price}' WHERE product = '${product}'`,async(error,result)=>{
                if(error) throw error;
                return res.json({status: "error", error:"Product Details Updated."})
                
            })
        }
    })
                
            }
    
module.exports=d6;