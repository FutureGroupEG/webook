function EnableRestore() {
    if (localStorage.getItem("storeRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("stores");
        sessionStorage.removeItem("newstore");
    } else {
        sessionStorage.setItem("stores", "1");
        localStorage.setItem("currentStore", "1");
    }
    if (localStorage.getItem("stores") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
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
    if (document.getElementById("stores").value == "newstore") {
        multi.style.display = "none";
        NewStore();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newstore.style.display = "none";
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
    if (localStorage.getItem("stores") > "1") {
        document.getElementById("stores").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("stores") > "1" && sessionStorage.getItem("newstore") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("stores").innerHTML = "";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("stores");
    sessionStorage.removeItem("newstore");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        store.style.display = "block";
    }
    if (localStorage.getItem("storeRestore") == "true") {
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
    store.style.display = "none";
}
function Continue() {
    let x = document.getElementById("stores").value || 1;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    store.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.store." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.store." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.store." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.store." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.store." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.store." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.store." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.store." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.store." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.store." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.store." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.store." + x);
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.store." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.store." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.store." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
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
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewMonth() {
    let x = document.getElementById("stores").value || 1;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.store." + x);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.store." + x);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.store." + x);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.store." + x);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.store." + x);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.store." + x);
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.store." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
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
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewStore() {
    sessionStorage.setItem("newstore", "true");
    stores = parseInt(localStorage.getItem("stores"));
    x = stores + 1;
    sessionStorage.setItem("stores", x);
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = "";
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
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
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
    storename = document.getElementById("storename").value;
    todaypaygInput = document.getElementById("todaypayg").value.split(" ");
    todaypayg = 0;
    for (i = 0; i < todaypaygInput.length; i++) {
        todaypayg += parseInt(todaypaygInput[i]) || 0;
    }
    achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    utdpayg = todaypayg + achievedpayg || 0;
    targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    todaydataInput = document.getElementById("todaydata").value.split(" ");
    todaydata = 0;
    for (i = 0; i < todaydataInput.length; i++) {
        todaydata += parseInt(todaydataInput[i]) || 0;
    }
    achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    utddata = todaydata + achieveddata || 0;
    targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    todaysuperkixInput = document.getElementById("todaysuperkix").value.split(" ");
    todaysuperkix = 0;
    for (i = 0; i < todaysuperkixInput.length; i++) {
        todaysuperkix += parseInt(todaysuperkixInput[i]) || 0;
    }
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeetInput = document.getElementById("todaytazbeet").value.split(" ");
    todaytazbeet = 0;
    for (i = 0; i < todaytazbeetInput.length; i++) {
        todaytazbeet += parseInt(todaytazbeetInput[i]) || 0;
    }
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclubInput = document.getElementById("todayweclub").value.split(" ");
    todayweclub = 0;
    for (i = 0; i < todayweclubInput.length; i++) {
        todayweclub += parseInt(todayweclubInput[i]) || 0;
    }
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemixInput = document.getElementById("todaywemix").value.split(" ");
    todaywemix = 0;
    for (i = 0; i < todaywemixInput.length; i++) {
        todaywemix += parseInt(todaywemixInput[i]) || 0;
    }
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaygold200Input = document.getElementById("todaygold200").value.split(" ");
    todaygold200 = 0;
    for (i = 0; i < todaygold200Input.length; i++) {
        todaygold200 += parseInt(todaygold200Input[i]) || 0;
    }
    todaygold400Input = document.getElementById("todaygold400").value.split(" ");
    todaygold400 = 0;
    for (i = 0; i < todaygold400Input.length; i++) {
        todaygold400 += parseInt(todaygold400Input[i]) || 0;
    }
    todaygold600Input = document.getElementById("todaygold600").value.split(" ");
    todaygold600 = 0;
    for (i = 0; i < todaygold600Input.length; i++) {
        todaygold600 += parseInt(todaygold600Input[i]) || 0;
    }
    todaygold800Input = document.getElementById("todaygold800").value.split(" ");
    todaygold800 = 0;
    for (i = 0; i < todaygold800Input.length; i++) {
        todaygold800 += parseInt(todaygold800Input[i]) || 0;
    }
    todaygold1000Input = document.getElementById("todaygold1000").value.split(" ");
    todaygold1000 = 0;
    for (i = 0; i < todaygold1000Input.length; i++) {
        todaygold1000 += parseInt(todaygold1000Input[i]) || 0;
    }
    todaygold1500Input = document.getElementById("todaygold1500").value.split(" ");
    todaygold1500 = 0;
    for (i = 0; i < todaygold1500Input.length; i++) {
        todaygold1500 += parseInt(todaygold1500Input[i]) || 0;
    }
    todaygold = todaygold200 + todaygold400 + todaygold600 + todaygold800 + todaygold1000 + todaygold1500 || 0;
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
    todaygoldreport = todaygold200report + todaygold400report + todaygold600report + todaygold800report + todaygold1000report + todaygold1500report || 0;
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaygold + achievedwegold || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
    todayadsl140Input = document.getElementById("todayadsl140").value.split(" ");
    todayadsl140 = 0;
    for (i = 0; i < todayadsl140Input.length; i++) {
        todayadsl140 += parseInt(todayadsl140Input[i]) || 0;
    }
    todayadsl200Input = document.getElementById("todayadsl200").value.split(" ");
    todayadsl200 = 0;
    for (i = 0; i < todayadsl200Input.length; i++) {
        todayadsl200 += parseInt(todayadsl200Input[i]) || 0;
    }
    todayadsl250Input = document.getElementById("todayadsl250").value.split(" ");
    todayadsl250 = 0;
    for (i = 0; i < todayadsl250Input.length; i++) {
        todayadsl250 += parseInt(todayadsl250Input[i]) || 0;
    }
    todayadsl400Input = document.getElementById("todayadsl400").value.split(" ");
    todayadsl400 = 0;
    for (i = 0; i < todayadsl400Input.length; i++) {
        todayadsl400 += parseInt(todayadsl400Input[i]) || 0;
    }
    todayadsl600Input = document.getElementById("todayadsl600").value.split(" ");
    todayadsl600 = 0;
    for (i = 0; i < todayadsl600Input.length; i++) {
        todayadsl600 += parseInt(todayadsl600Input[i]) || 0;
    }
    todayadsl1000Input = document.getElementById("todayadsl1000").value.split(" ");
    todayadsl1000 = 0;
    for (i = 0; i < todayadsl1000Input.length; i++) {
        todayadsl1000 += parseInt(todayadsl1000Input[i]) || 0;
    }
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
    utdadsl = todayadsl + achievedadsl || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixedInput = document.getElementById("todayfixed").value.split(" ");
    todayfixed = 0;
    for (i = 0; i < todayfixedInput.length; i++) {
        todayfixed += parseInt(todayfixedInput[i]) || 0;
    }
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    todaywalletInput = document.getElementById("todaywallet").value.split(" ");
    todaywallet = 0;
    for (i = 0; i < todaywalletInput.length; i++) {
        todaywallet += parseInt(todaywalletInput[i]) || 0;
    }
    achievedwallet = parseInt(document.getElementById("achievedwallet").value) || 0;
    utdwallet = todaywallet + achievedwallet || 0;
    targetwallet = parseInt(document.getElementById("targetwallet").value) || 0;
    todayadslbillsInput = document.getElementById("todayadslbills").value.split(" ");
    todayadslbills = 0;
    for (i = 0; i < todayadslbillsInput.length; i++) {
        todayadslbills += parseInt(todayadslbillsInput[i]) || 0;
    }
    todaypostpaidbillsInput = document.getElementById("todaypostpaidbills").value.split(" ");
    todaypostpaidbills = 0;
    for (i = 0; i < todaypostpaidbillsInput.length; i++) {
        todaypostpaidbills += parseInt(todaypostpaidbillsInput[i]) || 0;
    }
    todayfixedbillsInput = document.getElementById("todayfixedbills").value.split(" ");
    todayfixedbills = 0;
    for (i = 0; i < todayfixedbillsInput.length; i++) {
        todayfixedbills += parseInt(todayfixedbillsInput[i]) || 0;
    }
    todaycashInput = document.getElementById("todaycash").value.split(" ");
    todaycash = 0;
    for (i = 0; i < todaycashInput.length; i++) {
        todaycash += parseInt(todaycashInput[i]) || 0;
    }
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todaygold;
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold;
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
        "Store: " +
        storename +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG: " +
        todaypayg +
        "\n" +
        "Data: " +
        todaydata +
        "\n" +
        "Kix: " +
        todaysuperkix +
        "\n" +
        "Tazbeet: " +
        todaytazbeet +
        "\n" +
        "We Club: " +
        todayweclub +
        "\n" +
        "We Mix: " +
        todaywemix +
        "\n" +
        "We Gold: " +
        todaygoldreport +
        "\n" +
        "ADSL: " +
        todayadslreport +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
        "Wallet: " +
        todaywallet +
        "\n" +
        "--------------------------" +
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
    let x = parseInt(localStorage.getItem("currentStore"));
    localStorage.setItem("storename.store." + x, document.getElementById("storename").value || "Store " + x);
    localStorage.setItem("achievedpayg.store." + x, utdpayg);
    localStorage.setItem("targetpayg.store." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.store." + x, utddata);
    localStorage.setItem("targetdata.store." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.store." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.store." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.store." + x, utdtaz);
    localStorage.setItem("targettaz.store." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.store." + x, utdweclub);
    localStorage.setItem("targetweclub.store." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.store." + x, utdwemix);
    localStorage.setItem("targetwemix.store." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegold.store." + x, utdwegold);
    localStorage.setItem("targetwegold.store." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl.store." + x, utdadsl);
    localStorage.setItem("targetadsl.store." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.store." + x, utdfixed);
    localStorage.setItem("targetfixed.store." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedwallet.store." + x, utdwallet);
    localStorage.setItem("targetwallet.store." + x, document.getElementById("targetwallet").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("storeRestore", "true");
    localStorage.setItem("stores", sessionStorage.getItem("stores"));
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
