passHash = "1231819095";
{
    if (window.navigator.userAgent.match(/android/i) && !window.navigator.userAgent.match(/wv/i) && !window.matchMedia("(display-mode: standalone)").matches && document.getElementById("android")) {
        document.getElementById("android").style.display = "block";
    }
    if (localStorage.getItem("login") == passHash) {
        mainDiv.style.display = "block";
        loginDiv.style.display = "none";
    } else {
        document.getElementById("login").focus();
    }
}
function Login() {
    var passwordInput = document.getElementById("login").value;
    var password = "";
    for (var i = 0; i < passwordInput.length; i++) {
        password = Math.abs(~~((password << 5) - password + passwordInput.charCodeAt(i)));
    }
    localStorage.setItem("login", password);
    if (localStorage.getItem("login") == passHash) {
        mainDiv.style.display = "block";
        loginDiv.style.display = "none";
    } else {
        document.getElementById("login").focus();
        document.getElementById("alert").style.display = "block";
    }
}
function PressEnterToLogin() {
    if (event.which == 13 || event.keyCode == 13) {
        Login();
    }
}
function Logout() {
    localStorage.setItem("login", "");
    window.location.href = "index.html";
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
