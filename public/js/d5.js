
form.addEventListener("submit",()=>{
    const d5={
        email:email.value,
        
    }
    fetch("/api/d5",{
        method: "POST",
        body: JSON.stringify(d5),
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