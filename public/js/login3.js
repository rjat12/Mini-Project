form.addEventListener("submit", () => {
    const login3 = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login3", {
        method: "POST",
        body: JSON.stringify(login3),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = "none"
                error.style.display = "block"
                error.innerText = data.error
            }
             else {
                window.location.href = data.redirect
            }
        })
})