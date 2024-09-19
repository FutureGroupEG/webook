var passwordHash = "1231819095";
{
    init1: function Login() {
        var passwordInput = document.getElementById("login").value;
        var password = "";
        for (var i = 0; i < passwordInput.length; i++) {
            password = Math.abs(~~((password << 5) - password + passwordInput.charCodeAt(i)));
        }
        localStorage.setItem("login", password);
        if (localStorage.getItem("login") == passwordHash) {
            loginDiv.style.display = "none";
            mainDiv.style.display = "block";
        } else {
            loginDiv.style.display = "block";
            mainDiv.style.display = "none";
            document.getElementById("alert").style.display = "block";
        }
    }
}
window.onload = function () {
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
        android.style.display = "none";
    } else {
        android.style.display = "Block";
    }
};
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
    } else {
        document.getElementById("logout").style.top = "-50px";
    }
};
