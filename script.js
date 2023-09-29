const form = document.querySelector("button");
const nameUser = document.getElementById("name").value;
const lastnameUser = document.getElementById=("lastname").value;
const dateUser = document.getElementById=("birthdate").value;

form.addEventListener("submit", function(){
    const URL = "https://jsonplaceholder.typicode.com/users";
    const data = {
        nameUser,
        lastnameUser,
        dateUser
    };

fetch(URL,{
    method: "POST",
    body: JSON.stringify(data)})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))
});