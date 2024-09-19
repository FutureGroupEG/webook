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
    if (window.location.href.indexOf("android") > -1) {
        android.style.display = "none";
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
