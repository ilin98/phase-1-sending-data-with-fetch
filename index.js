const submitData = function(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(response => response.json())
    .then(data => {
        const newUser = document.createElement('div')
        newUser.innerHTML = `
        <p>id: ${data.id}</p>
        `
        document.querySelector("body").append(newUser);

    })
    .catch(error => {
        alert("Error!");
        document.querySelector("body").append(error.message)
    })
}
