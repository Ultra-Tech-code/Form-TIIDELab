function accountExist(email) {  
//fetch userDetails from local storage
let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));

USERDATA !== null && USERDATA[email] ? ` ${alert("account already exist")} ${window.location.href = "login.html" }` : null;

}


function signUP(e){
  e.preventDefault();

  let studentData = document.forms["studentData"];
     
    //getting the data through the formdata
    let data = new FormData(studentData);

    let userinput = {
        name: data.get("studentName"),
        email: data.get("email"),
        age: data.get("studentAge"),
        password: data.get("password"),
    }

    accountExist(data.get("email"));  //checking if account exist

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

}