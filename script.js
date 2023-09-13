//helper function
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

    let usermail = data.get("email")

    if(accountExist(usermail) === null){
        alert("Account does not exist, sign up first!!");
        return;
    }

    //fetch userDetails from local storage
    let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));
    //validating the password
    if(USERDATA[usermail]["password"]!= data.get("password")){
        alert("Incorrect email or password, try again!!");
        return;
    }

    //redirecting to dashboard
    alert("Login successful");

    //storing it in local storage
    localStorage.setItem("usermail",  usermail);
    window.location.href = "dashboard.html";  
}



function dashboard(){
    //fetch usermail from local storage
    let usermail = localStorage.getItem("usermail")

    //fetch userDetails from local storage
    let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));
    
     //get the table
    let dashboardContent = document.getElementById("dashboardContent")

    //creating a row in the table
    let row = dashboardContent.insertRow();

    let data = Object.values(USERDATA[usermail]);
    
    //iterate through each of the form element
    data.forEach((datium, index) => {
    let newCell = row.insertCell()

      newCell.textContent = datium;
    
      // Check if this is the last element
      //masked the password from being displayed
        if (index === data.length - 1) {
            maskedPassword = datium.replace(/./g, '*');
            newCell.textContent = maskedPassword;
        }
    })

}

function recover(e){
    e.preventDefault();

    let recoverData = document.forms["recoverData"];
     
    //getting the data through the formdata
    let formdata = new FormData(recoverData);

    let usermail = formdata.get("email")

    if(accountExist(usermail) === null){
        alert("Account does not exist, verify and try again!!");
        return;
    }

    //fetch userDetails from local storage
    let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));

    let storageData = USERDATA[usermail];

    if(formdata.get("email") == storageData['email'] && formdata.get("userName") == storageData['name'] && formdata.get("userAge") == storageData['age']){
        alert(storageData['password']);
        recoverData.reset();
    } else{
        alert("Invalid Details, verify and try again.")
    }
}










