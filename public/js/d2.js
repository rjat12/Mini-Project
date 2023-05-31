form.addEventListener("submit",()=>{
    const d2={
        product:product.value,
        
    }
    fetch("/api/d2",{
        method: "POST",
        body: JSON.stringify(d2),
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