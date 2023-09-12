//fetch userDetails from local storage
let USERDATA = JSON.parse(localStorage.getItem("USERDATA"));

let userEmail = USERDATA[accountnumber]["email"];

userEmail == null ? ` ${alert("account already exist")} ${window.location.href = "login.html" }` : null;


const userData = {}

function signUP(e){
  e.preventDefault();
  let studentData = document.forms["studentData"];
     
  //getting the data through the formdata
      let data = new FormData(studentData);
     data.get("email")

    data.get("password").length < 8 ? alert("Password must be at least 8 characters") : null;

    data.get("password") != data.get("confirm-password") ? alert("Password does not match") : null;

    userData[data.get("email")] = data;

    //storing it in local storage
    localStorage.setItem("USERDATA",  JSON.stringify(userData));

    //redirecting to login page
    alert("Account created successfully ");
    window.location.href = "login.html";
}

function login(e) {
    e.preventDefault();

}