form.addEventListener("submit",()=>{
    const d6={
        product:product.value,
        quantity:quantity.value,
        price:price.value
    }
    fetch("/api/d6",{
        method: "POST",
        body: JSON.stringify(d6),
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