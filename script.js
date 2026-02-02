function check(){
    const password = document.getElementById("password").value;
    const regpassword = document.getElementById("regpassword").value;

    if(!regpassword == password){
        document.getElementById("error").textContent = `Password is incorrect!`;
        document.getElementById("error").style.color = `red`;
    }else{
        document.getElementById("error").textContent = `Password matches correctly!`;
        document.getElementById("error").style.color = `green`;
    }
}

function myform(){
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name == "" || name == null){
        alert("Fullname cannot be empty!");
        return false;
    }
    
    if(email == "" || email == null){
        alert("Email cannot be empty!");
        return false;
    }

    if(password == "" || password == null){
        alert("Password cannot be empty!");
        return false;
    }

    alert(`Dear ${name}, your registered email address is ${email} while your password is ${password}.`);
}