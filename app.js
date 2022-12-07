function verify() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    //var password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if (username == "abCD12" && password == "123QW321"){
        alert ("Login successful");
        window.location.assign("http://127.0.0.1:5500/webpage2.html"); // Redirecting to other page.
    }
    else if (username == "" || password == "") {
        alert("THIS FIELD CAN'T BE EMPTY!");
    }
    else{
        alert("INVALID LOGIN CREDENTIALS!");
        }
}



 
