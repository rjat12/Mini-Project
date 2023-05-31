form.addEventListener("submit",()=>{
    const d1={
        product:product.value,
        quantity:quantity.value,
        price:price.value,
        img_url:img_url.value
    }
    fetch("/api/d1",{
        method: "POST",
        body: JSON.stringify(d1),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data =>{
            if(data.status="error"){
                success.style.display="none"
                error.style.display="block"
                error.innerText=data.error
            } else {
                error.style.display="none"
                success.style.display="block"
                success.innerText=data.success
                
            }
        })
})