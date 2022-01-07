let btn = document.getElementById("btn")

function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_?><:{}]["

    let passwordLength = Math.floor(Math.random() * 10 + 10);;
    let password = "";

    for(let i=0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById("password").value = password 

    console.log(passwordLength);
}


btn.addEventListener("click", getPassword)