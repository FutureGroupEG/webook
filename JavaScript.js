{
    if (localStorage.getItem("login") == "1231819095") {
        loginDiv.style.display = "none";
        mainDiv.style.display = "block";
    } else {
        loginDiv.style.display = "block";
        mainDiv.style.display = "none";
        document.getElementById("login").focus();
    }
}
function AppOrBrowser() {
    if (window.navigator.userAgent.match(/Android/i) && document.getElementById("android")) {
		alert(window.navigator.userAgent);
        android.style.display = "none";
    }
}
function Login() {
    var passwordInput = document.getElementById("login").value;
    var password = "";
    for (var i = 0; i < passwordInput.length; i++) {
        password = Math.abs(~~((password << 5) - password + passwordInput.charCodeAt(i)));
    }
    localStorage.setItem("login", password);
    if (localStorage.getItem("login") == "1231819095") {
        loginDiv.style.display = "none";
        mainDiv.style.display = "block";
    } else {
        loginDiv.style.display = "block";
        mainDiv.style.display = "none";
        document.getElementById("alert").style.display = "block";
        document.getElementById("login").focus();
    }
}
function PressEnterToLogin() {
    if (event.which == 13 || event.keyCode == 13) {
        Login();
    }
}
function Logout() {
    localStorage.setItem("login", "");
    location.reload();
}
window.onscroll = function () {
    if (window.pageYOffset < 10) {
        document.getElementById("logout").style.top = "15px";
        if (document.getElementById("android")) {
            document.getElementById("android").style.top = "15px";
        }
        if (document.getElementById("notifications")) {
            document.getElementById("notifications").style.top = "15px";
        }
        if (document.getElementById("about")) {
            document.getElementById("about").style.top = "15px";
        }
    } else {
        document.getElementById("logout").style.top = "-50px";
        if (document.getElementById("android")) {
            document.getElementById("android").style.top = "-50px";
        }
        if (document.getElementById("notifications")) {
            document.getElementById("notifications").style.top = "-50px";
        }
        if (document.getElementById("about")) {
            document.getElementById("about").style.top = "-50px";
        }
    }
};
