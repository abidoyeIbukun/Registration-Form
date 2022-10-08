// Code for the matching passwords

const confirm = document.querySelector("#confirm");
const password = document.querySelector("#password");
const alert = document.querySelector(".alert");


confirm.addEventListener("input", validPassword);
password.addEventListener("input", validPassword);


function validPassword(){
    if(password.value === '' || confirm.value === ''){
        alert.style = "";
    } else if(confirm.value != password.value){
        alert.textContent = "Password don't match";
        confirm.style.outline = "1px solid red";
    } else if(confirm.value === password.value){
        alert.textContent = "";
        confirm.style.outline = "1px solid lavender"
    }
}


// Code For the submission message 

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
