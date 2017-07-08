var user_Obj = {};
var arr = [];


function validate() {
    var age = 0;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var uname = document.getElementById('uname').value;
    age = document.getElementById('age').value;

    var status = false;

    if (name.length < 1) {
        document.getElementById("nameloc").innerHTML =
            " Please enter your name";
        status = false;
    } else {
        document.getElementById("nameloc").innerHTML = " ";
        status = true;
        var x = "sjadkjk";
    }
    if (uname.length < 1) {
        document.getElementById("unameloc").innerHTML = "Please enter your uname";
        status = false;
    } else {
        document.getElementById("unameloc").innerHTML = " ";
        status = true;
    }
    if (age < 1 || isNaN(age)) {
        document.getElementById("ageloc").innerHTML =
            " Please enter your age";
        status = false;

    } else {
        document.getElementById("ageloc").innerHTML = " ";
    }
    if (password.length < 6) {
        document.getElementById("passwordloc").innerHTML =
            "Password must be at least 6 char long";
        status = false;
    } else {
        document.getElementById("passwordloc").innerHTML = " ";
    }

    if (status == true) {
        console.log(status);

        user_Obj = {
            fullname: name,
            username: uname,
            age: age,
            pwd: password
        }

        arr.push(user_Obj);
        console.log(arr);
        localStorage.setItem('names', JSON.stringify(arr));

        var storedNames = JSON.parse(localStorage.getItem("names"));
        var arrLength = storedNames.length;
        document.getElementById('infoTable').innerHTML = "";

        for (var i = arrLength - 1; i >= 0; i--) {

            document.getElementById('infoTable').innerHTML += "<tr><td>" + storedNames[i].fullname + "<td><td>" + storedNames[i].username + "<td><td>" + storedNames[i].age + "<td><td>" + storedNames[i].pwd + "<td></tr>";
        }
    }
    //return status;


}

function init() {
    if (localStorage.names) {
        arr = JSON.parse(localStorage.names);
    }
}

function clearLS() {
    localStorage.clear();
    alert('Local Storage Cleared');
    document.getElementById('infoTable').innerHTML = "";
    location.reload();
}