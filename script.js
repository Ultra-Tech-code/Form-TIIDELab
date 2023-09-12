function accountExist(email) {  

//fetch userDetails from local storage
let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));

    return USERDATA !== null && USERDATA[email] ?  true :  null;
}


function signUP(e){
  e.preventDefault();

  let signUpData = document.forms["signUpData"];
     
    //getting the data through the formdata
    let data = new FormData(signUpData);

    let userinput = {
        name: data.get("userName"),
        email: data.get("email"),
        age: data.get("userAge"),
        password: data.get("password"),
    }

    //checking if account exist
    if(accountExist(data.get("email")) === true){
        ` ${alert("account already exist")} ${window.location.href = "login.html" }`
    };  
    

    //validating the password
    if(data.get("password").length < 8 ){
        alert("Password must be at least 8 characters");
        return;
    }else if(data.get("password") != data.get("confirm-password")){
        alert("Password does not match");
        return;
    }

    let userData = {}

    userData[data.get("email")] = userinput;

    //storing it in local storage
    localStorage.setItem("USERDATA",  JSON.stringify(userData));

    //redirecting to login page
    alert("Account created successfully ");
    window.location.href = "login.html";
}

function login(e) {
    e.preventDefault();

    let loginData = document.forms["loginData"];
     
    //getting the data through the formdata
    let data = new FormData(loginData);

    console.log(accountExist(data.get("email")))

    if(accountExist(data.get("email")) === null){
        alert("Account does not exist, sign up first!!");
        return;
    }

    //fetch userDetails from local storage
    let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));
    //validating the password
    if(USERDATA[data.get("email")]["password"]!= data.get("password")){
        alert("Incorrect email or password, try again!!");
        return;
    }

    //redirecting to dashboard
    alert("Login successful");
    window.location.href = "dashboard.html";

}