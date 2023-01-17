
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
        const body = document.querySelector('body')
        const div = document.createElement('div')
        div.innerHTML = `
        <p>Username: ${data.name}</p>
        <p>Email: ${data.email}</p>
        `
        body.appendChild(div)
    })
    .catch(error => {
        alert("Error!");
        console.log(error.message)
    })
}


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
