const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "123"){
        message.style.color = "green";
        message.textContent = "Login berhasil!";
    }else{
        message.style.color = "red";
        message.textContent = "Username atau password salah";
    }
});