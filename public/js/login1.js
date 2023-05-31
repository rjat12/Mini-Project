form.addEventListener("submit",()=>{
    const login1={
        email:email.value,
        password: password.value
    }
    fetch("/api/login1",{
        method: "POST",
        body: JSON.stringify(login1),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
    .then(data => {
        if (data.status == "error") {
            success.style.display = "none"
            error.style.display = "block"
            error.innerText = data.error
        } else {
            window.location.href = data.redirect
        }
    })
})