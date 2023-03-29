/* 
POST to server,
Recieve hardcoded token

editpage send token with get request.

*/

function login(form){
    fetch("/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        body: new URLSearchParams({
            'username' : form.username.value,
            'password' : form.password.value
        })
    }).then(response => response.json()).then(result => {
        console.log(result.message);
        renderLoginLogout();
        }
    );
}

function logout(){
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    renderLoginLogout();
}


function renderLoginLogout(){
    if(!document.cookie){
        document.getElementById("login-form").classList.remove("hidden");
        document.getElementById("edit-button").classList.add("hidden");
        document.getElementById("logout").classList.add("hidden");
        return;
    }
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("logout").classList.remove("hidden");
    document.getElementById("edit-button").classList.remove("hidden");
}

function editPage(){
    let url = document.location.href;
    url = url.split("?")[0];

    document.location.href = url + '?edit=true'    
}


renderLoginLogout();