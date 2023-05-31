const express=require("express");
const db=require("./routes/db-config");
const app=express();
const cookie=require("cookie-parser");
const body_parser=require("body-parser");
const session=require("express-session");
const PORT= process.env.PORT || 5000;
app.use("/js",express.static(__dirname+"/public/js"))
app.use("/css",express.static(__dirname+"/public/css"))
app.use("/vendor",express.static(__dirname+"/public/vendor"))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
// app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.json());
db.connect((err) => {
    if (err) throw err;
    console.log("database connected");
})
app.use("/api",require("./controllers/auth"));
app.use(session({
    secret:'1234567890abcdefghijklmnopqrstuvwxyz',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
    
}));
app.use("/",require("./routes/pages"))

// const jsonParser = body_parser.json()

app.get('/remove_item', (request, response) => {
	const id = request.query.id;
  
	for(let i = 0; i < request.session.cart.length; i++)
	{
		if(request.session.cart[i].id === id)
		{
            const quan=request.session.cart[i].quantity;
            console.log(quan);
            db.query('update products set quantity=quantity+? where id=? ',[quan,id],async(err,result)=>{
                if(err) throw err;
            })
			request.session.cart.splice(i, 1);
		}
	}

	response.redirect("/d7");

});

app.post('/add_cart', (req, res) => {
    const id = req.body.id;
    const product = req.body.product;
    const price = req.body.price;
    const oquan=req.body.quantity;
    let count = 0;
    let f=0;
    for (let i = 0; i < req.session.cart.length; i++) {
        if(req.session.cart[i].id === id) {
            req.session.cart[i].quantity += 1;
            count += 1;
            f=1;
            console.log(id);
            db.query('update products set quantity=quantity-1 where id=? ',[id],async(err,result)=>{
                if(err) throw err;
            })
            
          }
    }
    if (count === 0 && f==0) {
        db.query('update products set quantity=quantity-1 where id=? ',[id],async(err,result)=>{
            if(err) throw err;
        })
        const cart_data = {
            id: id,
            product: product,
            price: parseFloat(price),
            quantity: 1

        };
        req.session.cart.push(cart_data);
    }
    res.redirect("/d7");
});

app.listen(PORT);

