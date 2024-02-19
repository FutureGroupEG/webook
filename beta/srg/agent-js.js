function EnableRestore() {
    if (localStorage.getItem("agentRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("users");
        sessionStorage.removeItem("newuser");
    } else {
        sessionStorage.setItem("users", "1");
        localStorage.setItem("currentUser", "1");
    }
    if (localStorage.getItem("users") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
    }
}
function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
    DaysFix();
}
function DaysFix() {
    var daysinmonth = new Date(document.getElementById("year").value, document.getElementById("month").value, 0).getDate();
    if (daysinmonth < 31 && document.getElementById("day").value == 31) {
        document.getElementById("day").selectedIndex = "30";
    }
    if (daysinmonth < 30 && document.getElementById("day").value == 30) {
        document.getElementById("day").selectedIndex = "29";
    }
    if (daysinmonth < 29 && document.getElementById("day").value == 29) {
        document.getElementById("day").selectedIndex = "28";
    }
    if (daysinmonth < 31 && document.getElementById("day").length == "32") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 30 && document.getElementById("day").length == "31") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 29 && document.getElementById("day").length == "30") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "31") {
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 29 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
    }
}
function NextTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Next__1() {
    if (document.getElementById("users").value == "newuser") {
        multi.style.display = "none";
        NewUser();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newuser.style.display = "none";
        NextTransform();
    }
}
function Next__2() {
    Next__3();
}
function Next__3() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        target.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__4() {
    if (document.getElementById("day").value == 1 && target.style.display === "block") {
        target.style.display = "none";
        today.style.display = "block";
    } else {
        target.style.display = "none";
        achieved.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back__1() {
    window.open("index.html", "_self");
}
function Back__2() {
    if (localStorage.getItem("users") > "1") {
        document.getElementById("users").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("users") > "1" && sessionStorage.getItem("newuser") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("users").innerHTML = "";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("users");
    sessionStorage.removeItem("newuser");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        agent.style.display = "block";
    }
    if (localStorage.getItem("agentRestore") == "true") {
        row__1.style.display = "none";
        row__2.style.display = "block";
    } else {
        row__1.style.display = "block";
        row__2.style.display = "none";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        target.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__6() {
    if (document.getElementById("day").value == 1 && today.style.display === "block") {
        today.style.display = "none";
        target.style.display = "block";
    } else {
        today.style.display = "none";
        achieved.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__7() {
    if (report.style.display === "block") {
        report.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__8() {
    Back__7();
    basic.style.display = "block";
    agent.style.display = "none";
}
function Continue() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    agent.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.4agent." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.4agent." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.4agent." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.4agent." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.4agent." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.4agent." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.4agent." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.4agent." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.4agent." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.4agent." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.4agent." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent." + x);
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.4agent." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.4agent." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.4agent." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.4agent." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.4agent." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.4agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewMonth() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.4agent." + x);
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.4agent." + x);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.4agent." + x);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.4agent." + x);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.4agent." + x);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent." + x);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent." + x);
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.4agent." + x);
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent." + x);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.4agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewUser() {
    sessionStorage.setItem("newuser", "true");
    users = parseInt(localStorage.getItem("users"));
    x = users + 1;
    sessionStorage.setItem("users", x);
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
}
function GenerateSalesReport() {
    if (today.style.display === "block") {
        today.style.display = "none";
        report.style.display = "block";
    }
    if (basic.style.display === "block") {
        basic.style.display = "none";
        row__3.style.display = "none";
        row__4.style.display = "block";
    } else {
        row__3.style.display = "block";
        row__4.style.display = "none";
    }
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
    daysinmonth = new Date(year, month, 0).getDate();
    yourname = document.getElementById("yourname").value;
    todaypayg = parseInt(document.getElementById("todaypayg").value) || 0;
    achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    utdpayg = todaypayg + achievedpayg || 0;
    targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    todaydata = parseInt(document.getElementById("todaydata").value) || 0;
    achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    utddata = todaydata + achieveddata || 0;
    targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    todaysuperkix20 = parseInt(document.getElementById("todaysuperkix20").value) || 0;
    todaysuperkix25 = parseInt(document.getElementById("todaysuperkix25").value) || 0;
    todaysuperkix35 = parseInt(document.getElementById("todaysuperkix35").value) || 0;
    todaysuperkix45 = parseInt(document.getElementById("todaysuperkix45").value) || 0;
    todaysuperkix65 = parseInt(document.getElementById("todaysuperkix65").value) || 0;
    todaysuperkix80 = parseInt(document.getElementById("todaysuperkix80").value) || 0;
    todaysuperkix100 = parseInt(document.getElementById("todaysuperkix100").value) || 0;
    if (todaysuperkix20 == "0") {
        todaysuperkix20report = "";
    } else {
        todaysuperkix20report = todaysuperkix20 + "*20 ";
    }
    if (todaysuperkix25 == "0") {
        todaysuperkix25report = "";
    } else {
        todaysuperkix25report = todaysuperkix25 + "*25 ";
    }
    if (todaysuperkix35 == "0") {
        todaysuperkix35report = "";
    } else {
        todaysuperkix35report = todaysuperkix35 + "*35 ";
    }
    if (todaysuperkix45 == "0") {
        todaysuperkix45report = "";
    } else {
        todaysuperkix45report = todaysuperkix45 + "*45 ";
    }
    if (todaysuperkix65 == "0") {
        todaysuperkix65report = "";
    } else {
        todaysuperkix65report = todaysuperkix65 + "*65 ";
    }
    if (todaysuperkix80 == "0") {
        todaysuperkix80report = "";
    } else {
        todaysuperkix80report = todaysuperkix80 + "*80 ";
    }
    if (todaysuperkix100 == "0") {
        todaysuperkix100report = "";
    } else {
        todaysuperkix100report = todaysuperkix100 + "*100 ";
    }
    todaysuperkixreport = todaysuperkix20report + todaysuperkix25report + todaysuperkix35report + todaysuperkix45report + todaysuperkix65report + todaysuperkix80report + todaysuperkix100report;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeet30 = parseInt(document.getElementById("todaytazbeet30").value) || 0;
    todaytazbeet40 = parseInt(document.getElementById("todaytazbeet40").value) || 0;
    todaytazbeet70 = parseInt(document.getElementById("todaytazbeet70").value) || 0;
    todaytazbeet110 = parseInt(document.getElementById("todaytazbeet110").value) || 0;
    if (todaytazbeet30 == "0") {
        todaytazbeet30report = "";
    } else {
        todaytazbeet30report = todaytazbeet30 + "*30 ";
    }
    if (todaytazbeet40 == "0") {
        todaytazbeet40report = "";
    } else {
        todaytazbeet40report = todaytazbeet40 + "*40 ";
    }
    if (todaytazbeet70 == "0") {
        todaytazbeet70report = "";
    } else {
        todaytazbeet70report = todaytazbeet70 + "*70 ";
    }
    if (todaytazbeet110 == "0") {
        todaytazbeet110report = "";
    } else {
        todaytazbeet110report = todaytazbeet110 + "*110 ";
    }
    todaytazbeetreport = todaytazbeet30report + todaytazbeet40report + todaytazbeet70report + todaytazbeet110report;
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclub25 = parseInt(document.getElementById("todayweclub25").value) || 0;
    todayweclub40 = parseInt(document.getElementById("todayweclub40").value) || 0;
    todayweclub65 = parseInt(document.getElementById("todayweclub65").value) || 0;
    todayweclub100 = parseInt(document.getElementById("todayweclub100").value) || 0;
    if (todayweclub25 == "0") {
        todayweclub25report = "";
    } else {
        todayweclub25report = todayweclub25 + "*25 ";
    }
    if (todayweclub40 == "0") {
        todayweclub40report = "";
    } else {
        todayweclub40report = todayweclub40 + "*40 ";
    }
    if (todayweclub65 == "0") {
        todayweclub65report = "";
    } else {
        todayweclub65report = todayweclub65 + "*65 ";
    }
    if (todayweclub100 == "0") {
        todayweclub100report = "";
    } else {
        todayweclub100report = todayweclub100 + "*100 ";
    }
    todayweclubreport = todayweclub25report + todayweclub40report + todayweclub65report + todayweclub100report;
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemix165 = parseInt(document.getElementById("todaywemix165").value) || 0;
    todaywemix240 = parseInt(document.getElementById("todaywemix240").value) || 0;
    if (todaywemix165 == "0") {
        todaywemix165report = "";
    } else {
        todaywemix165report = todaywemix165 + "*165 ";
    }
    if (todaywemix240 == "0") {
        todaywemix240report = "";
    } else {
        todaywemix240report = todaywemix240 + "*240 ";
    }
    todaywemixreport = todaywemix165report + todaywemix240report;
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaygold200 = parseInt(document.getElementById("todaygold200").value) || 0;
    todaygold400 = parseInt(document.getElementById("todaygold400").value) || 0;
    todaygold600 = parseInt(document.getElementById("todaygold600").value) || 0;
    todaygold800 = parseInt(document.getElementById("todaygold800").value) || 0;
    todaygold1000 = parseInt(document.getElementById("todaygold1000").value) || 0;
    todaygold1500 = parseInt(document.getElementById("todaygold1500").value) || 0;
    if (todaygold200 == "0") {
        todaygold200report = "";
    } else {
        todaygold200report = todaygold200 + "*200 ";
    }
    if (todaygold400 == "0") {
        todaygold400report = "";
    } else {
        todaygold400report = todaygold400 + "*400 ";
    }
    if (todaygold600 == "0") {
        todaygold600report = "";
    } else {
        todaygold600report = todaygold600 + "*600 ";
    }
    if (todaygold800 == "0") {
        todaygold800report = "";
    } else {
        todaygold800report = todaygold800 + "*800 ";
    }
    if (todaygold1000 == "0") {
        todaygold1000report = "";
    } else {
        todaygold1000report = todaygold1000 + "*1000 ";
    }
    if (todaygold1500 == "0") {
        todaygold1500report = "";
    } else {
        todaygold1500report = todaygold1500 + "*1500 ";
    }
    todaygold = todaygold200report + todaygold400report + todaygold600report + todaygold800report + todaygold1000report + todaygold1500report || 0;
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaygold200 + todaygold400 + todaygold600 + todaygold800 + todaygold1000 + todaygold1500 + achievedwegold || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
    todayadsl140 = parseInt(document.getElementById("todayadsl140").value) || 0;
    todayadsl200 = parseInt(document.getElementById("todayadsl200").value) || 0;
    todayadsl250 = parseInt(document.getElementById("todayadsl250").value) || 0;
    todayadsl400 = parseInt(document.getElementById("todayadsl400").value) || 0;
    todayadsl600 = parseInt(document.getElementById("todayadsl600").value) || 0;
    todayadsl1000 = parseInt(document.getElementById("todayadsl1000").value) || 0;
    todayadsl = todayadsl140 + todayadsl200 + todayadsl250 + todayadsl400 + todayadsl600 + todayadsl1000 || 0;
    if (todayadsl140 == "0") {
        todayadsl140report = "";
    } else {
        todayadsl140report = todayadsl140 + "*140GB ";
    }
    if (todayadsl200 == "0") {
        todayadsl200report = "";
    } else {
        todayadsl200report = todayadsl200 + "*200GB ";
    }
    if (todayadsl250 == "0") {
        todayadsl250report = "";
    } else {
        todayadsl250report = todayadsl250 + "*250GB ";
    }
    if (todayadsl400 == "0") {
        todayadsl400report = "";
    } else {
        todayadsl400report = todayadsl400 + "*400GB ";
    }
    if (todayadsl600 == "0") {
        todayadsl600report = "";
    } else {
        todayadsl600report = todayadsl600 + "*600GB ";
    }
    if (todayadsl1000 == "0") {
        todayadsl1000report = "";
    } else {
        todayadsl1000report = todayadsl1000 + "*1TB ";
    }
    todayadslreport = todayadsl140report + todayadsl200report + todayadsl250report + todayadsl400report + todayadsl600report + todayadsl1000report || 0;
    achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    utdadsl = todayadsl140 + todayadsl200 + todayadsl250 + todayadsl400 + todayadsl600 + todayadsl1000 + achievedadsl || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixed = parseInt(document.getElementById("todayfixed").value) || 0;
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    todaywallet = parseInt(document.getElementById("todaywallet").value) || 0;
    achievedwallet = parseInt(document.getElementById("achievedwallet").value) || 0;
    utdwallet = todaywallet + achievedwallet || 0;
    targetwallet = parseInt(document.getElementById("targetwallet").value) || 0;
    todayadslbills = parseInt(document.getElementById("todayadslbills").value) || 0;
    todaypostpaidbills = parseInt(document.getElementById("todaypostpaidbills").value) || 0;
    todayfixedbills = parseInt(document.getElementById("todayfixedbills").value) || 0;
    todaysimswap = parseInt(document.getElementById("todaysimswap").value) || 0;
    todaycash = parseInt(document.getElementById("todaycash").value) || 0;
    dailymobile =
        todaypayg +
            todaydata +
            todaysuperkix20 +
            todaysuperkix25 +
            todaysuperkix35 +
            todaysuperkix45 +
            todaysuperkix65 +
            todaysuperkix80 +
            todaysuperkix100 +
            todaytazbeet30 +
            todaytazbeet40 +
            todaytazbeet70 +
            todaytazbeet110 +
            todayweclub25 +
            todayweclub40 +
            todayweclub65 +
            todayweclub100 +
            todaywemix165 +
            todaywemix240 +
            todaygold200 +
            todaygold400 +
            todaygold600 +
            todaygold800 +
            todaygold1000 +
            todaygold1500 || 0;
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold || 0;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold || 0;
    vsPAYG = ~~Number(Math.round((utdpayg / targetpayg) * 100)) || 0;
    vsData = ~~Number(Math.round((utddata / targetdata) * 100)) || 0;
    vsSuperKix = ~~Number(Math.round((utdsuperkix / targetsuperkix) * 100)) || 0;
    vsTaz = ~~Number(Math.round((utdtaz / targettaz) * 100)) || 0;
    vsWeClub = ~~Number(Math.round((utdweclub / targetweclub) * 100)) || 0;
    vsWeMix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsWallet = ~~Number(Math.round((utdwallet / targetwallet) * 100)) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    if (todaypayg == "0") {
        todaypaygreport = "";
    } else {
        todaypaygreport = "\n" + "PAYG: " + todaypayg;
    }
    if (todaydata == "0") {
        todaydatareport = "";
    } else {
        todaydatareport = "\n" + "Data: " + todaydata;
    }
    if (todaysuperkixreport == "") {
        superkixreport = "";
    } else {
        superkixreport = "\n" + "Kix: " + todaysuperkixreport;
    }
    if (todaytazbeetreport == "") {
        tazbeetreport = "";
    } else {
        tazbeetreport = "\n" + "Tazbeet: " + todaytazbeetreport;
    }
    if (todayweclubreport == "") {
        weclubreport = "";
    } else {
        weclubreport = "\n" + "We Club: " + todayweclubreport;
    }
    if (todaywemixreport == "") {
        wemixreport = "";
    } else {
        wemixreport = "\n" + "We Mix: " + todaywemixreport;
    }
    if (todaygold == "0") {
        todaygoldreport = "";
    } else {
        todaygoldreport = "\n" + "We Gold: " + todaygold;
    }
    if (todayadsl == "0") {
        todayadslreport = "";
    } else {
        todayadslreport = "\n" + "ADSL: " + todayadslreport;
    }
    if (todayfixed == "0") {
        todayfixedreport = "";
    } else {
        todayfixedreport = "\n" + "Fixed: " + todayfixed;
    }
    if (todaywallet == "0") {
        todaywalletreport = "";
    } else {
        todaywalletreport = "\n" + "Wallet: " + todaywallet;
    }
    todaysales = todaypaygreport + todaydatareport + superkixreport + tazbeetreport + weclubreport + wemixreport + todaygoldreport + todayadslreport + todayfixedreport + todaywalletreport;
    if (todaysales == "") {
        todaysalesdetails = "";
    } else {
        todaysalesdetails = todaysales + "\n" + "--------------------------";
    }
    dailyrequired = ~~Number(Math.ceil((targetmobile - utdmobile) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequired <= "0") {
        dailyrequiredreport = "-";
    } else {
        dailyrequiredreport = dailyrequired;
    }
    if (daysinmonth - day == "0") {
        reMobilereport = "-";
    } else {
        reMobilereport = reMobile + "%";
    }
    if (todayadsl == "0") {
        todayadslfordailysales = "";
    } else {
        todayadslfordailysales = " + " + todayadsl + " ADSL";
    }
    if (todayfixed == "0") {
        todayfixedfordailysales = "";
    } else {
        todayfixedfordailysales = " + " + todayfixed + " Fixed";
    }
    var targetArray = [
        "T",
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    var fakeTargetArray = [
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    let maxTarget = Math.max(...fakeTargetArray).toString().length;
    if (maxTarget < 5) {
        newMaxTarget = 5;
    } else {
        newMaxTarget = maxTarget;
    }
    var targetArrayAdjusted = correctLength(targetArray, newMaxTarget);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    targetHeader = targetArrayAdjusted[0];
    targetpaygAdjusted = targetArrayAdjusted[1];
    targetdataAdjusted = targetArrayAdjusted[2];
    targetsuperkixAdjusted = targetArrayAdjusted[3];
    targettazAdjusted = targetArrayAdjusted[4];
    targetweclubAdjusted = targetArrayAdjusted[5];
    targetwemixAdjusted = targetArrayAdjusted[6];
    targetwegoldAdjusted = targetArrayAdjusted[7];
    targetadslAdjusted = targetArrayAdjusted[8];
    targetfixedAdjusted = targetArrayAdjusted[9];
    targetwalletAdjusted = targetArrayAdjusted[10];
    targetmobileAdjusted = targetArrayAdjusted[11];
    var utdArray = [
        "A",
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    var fakeUtdArray = [
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    let maxUtd = Math.max(...fakeUtdArray).toString().length;
    if (maxUtd < 5) {
        newMaxUtd = 5;
    } else {
        newMaxUtd = maxUtd;
    }
    var utdArrayAdjusted = correctLength(utdArray, newMaxUtd);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    achievedHeader = utdArrayAdjusted[0];
    utdpaygAdjusted = utdArrayAdjusted[1];
    utddataAdjusted = utdArrayAdjusted[2];
    utdsuperkixAdjusted = utdArrayAdjusted[3];
    utdtazAdjusted = utdArrayAdjusted[4];
    utdweclubAdjusted = utdArrayAdjusted[5];
    utdwemixAdjusted = utdArrayAdjusted[6];
    utdwegoldAdjusted = utdArrayAdjusted[7];
    utdadslAdjusted = utdArrayAdjusted[8];
    utdfixedAdjusted = utdArrayAdjusted[9];
    utdwalletAdjusted = utdArrayAdjusted[10];
    utdmobileAdjusted = utdArrayAdjusted[11];
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Name: " +
        yourname +
        "\n" +
        "--------------------------" +
        todaysalesdetails +
        "\n" +
        "Today Sales: " +
        +dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        "\n" +
        "--------------------------" +
        "\n" +
        "Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "RE: " +
        reMobilereport +
        "\n" +
        "#--------------------------" +
        "\n" +
        "Product:   " +
        targetHeader +
        " " +
        achievedHeader +
        " VS" +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG   :   " +
        targetpaygAdjusted +
        " " +
        utdpaygAdjusted +
        " " +
        vsPAYG +
        "%" +
        "\n" +
        "Data   :   " +
        targetdataAdjusted +
        " " +
        utddataAdjusted +
        " " +
        vsData +
        "%" +
        "\n" +
        "Kix    :   " +
        targetsuperkixAdjusted +
        " " +
        utdsuperkixAdjusted +
        " " +
        vsSuperKix +
        "%" +
        "\n" +
        "Tazbeet:   " +
        targettazAdjusted +
        " " +
        utdtazAdjusted +
        " " +
        vsTaz +
        "%" +
        "\n" +
        "We Club:   " +
        targetweclubAdjusted +
        " " +
        utdweclubAdjusted +
        " " +
        vsWeClub +
        "%" +
        "\n" +
        "We Mix :   " +
        targetwemixAdjusted +
        " " +
        utdwemixAdjusted +
        " " +
        vsWeMix +
        "%" +
        "\n" +
        "We Gold:   " +
        targetwegoldAdjusted +
        " " +
        utdwegoldAdjusted +
        " " +
        vsGold +
        "%" +
        "\n" +
        "ADSL   :   " +
        targetadslAdjusted +
        " " +
        utdadslAdjusted +
        " " +
        vsAdsl +
        "%" +
        "\n" +
        "Fixed  :   " +
        targetfixedAdjusted +
        " " +
        utdfixedAdjusted +
        " " +
        vsFixed +
        "%" +
        "\n" +
        "Wallet :   " +
        targetwalletAdjusted +
        " " +
        utdwalletAdjusted +
        " " +
        vsWallet +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Total  :   " +
        targetmobileAdjusted +
        " " +
        utdmobileAdjusted +
        " " +
        vsMobile +
        "%" +
        "\n" +
        "--------------------------#" +
        "\n" +
        "ADSL Bills: " +
        todayadslbills +
        "\n" +
        "Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "SIM Swap: " +
        todaysimswap +
        "\n" +
        "Cash: " +
        todaycash +
        " LE";
    document.getElementById("save__1").disabled = false;
    document.getElementById("save__2").disabled = false;
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.getElementById("save__1").innerHTML = "Save";
    document.getElementById("save__2").innerHTML = "Save";
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy__1() {
    salesreportValue = document.getElementById("salesreport").value.replace(/#/gi, "```");
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy__1").disabled = true;
    document.getElementById("copy__2").disabled = true;
    document.getElementById("copy__1").innerHTML = "Copied";
    document.getElementById("copy__2").innerHTML = "Copied";
}
function Copy__2() {
    Copy__1();
}
function Share__1() {
    salesreportValue = document.getElementById("salesreport").value.replace(/#/gi, "```");
    if (navigator.share) {
        navigator.share({
            title: "Sales Report",
            text: salesreportValue,
        });
    } else {
        message = window.encodeURIComponent(document.getElementById("salesreport").value);
        link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Share__2() {
    Share__1();
}
function Save__1() {
    let x = parseInt(localStorage.getItem("currentUser"));
    localStorage.setItem("yourname.4agent." + x, document.getElementById("yourname").value || "Agent " + x);
    localStorage.setItem("achievedpayg.4agent." + x, utdpayg);
    localStorage.setItem("targetpayg.4agent." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.4agent." + x, utddata);
    localStorage.setItem("targetdata.4agent." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.4agent." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.4agent." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.4agent." + x, utdtaz);
    localStorage.setItem("targettaz.4agent." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.4agent." + x, utdweclub);
    localStorage.setItem("targetweclub.4agent." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.4agent." + x, utdwemix);
    localStorage.setItem("targetwemix.4agent." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegold.4agent." + x, utdwegold);
    localStorage.setItem("targetwegold.4agent." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl.4agent." + x, utdadsl);
    localStorage.setItem("targetadsl.4agent." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.4agent." + x, utdfixed);
    localStorage.setItem("targetfixed.4agent." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedwallet.4agent." + x, utdwallet);
    localStorage.setItem("targetwallet.4agent." + x, document.getElementById("targetwallet").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("agentRestore", "true");
    localStorage.setItem("users", sessionStorage.getItem("users"));
}
function Save__2() {
    Save__1();
}
function Print__1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>").replace(/#/gi, ""));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
