{
    var isWebView = false;
    var userAgent = navigator.userAgent;
    if (/Android/.test(userAgent)) {
        var androidVersion = parseFloat(userAgent.slice(userAgent.indexOf("Android") + 8));
        if (androidVersion >= 10) {
            isWebView = / (wv)/.test(userAgent);
        } else {
            isWebView = userAgent.includes("Version/");
        }
    }
    if (isWebView) {
        localStorage.setItem("AndroidAPP", "true");
    } else {
        localStorage.setItem("AndroidAPP", "false");
    }
    if (localStorage.getItem("AndroidAPP") == "true" && document.getElementById("android")) {
        android.style.display = "none";
    }
}
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
