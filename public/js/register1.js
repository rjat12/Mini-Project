form.addEventListener("submit",()=>{
    const register1={
        email:email.value,
        password: password.value
    }
    fetch("/api/register1",{
        method: "POST",
        body: JSON.stringify(register1),
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