var localStorage = window.localStorage;
function showLocalStorage2() {

  document.getElementById("raz_oop").value = localStorage.getItem("raz_oop");
  document.getElementById("raz_oob").value = localStorage.getItem("raz_oob");
  document.getElementById("raz_pnt").value = localStorage.getItem("raz_pnt");

  if (localStorage.getItem("cel") !== null) {
    document.getElementById("cel").value = localStorage.getItem("cel");
  }
  if (localStorage.getItem("rost") !== null) {
    document.getElementById("rost").value = localStorage.getItem("rost");
  }
  if (localStorage.getItem("pol") !== null) {
    document.getElementById("pol").value = localStorage.getItem("pol");
  }
  if (localStorage.getItem("vozrast") !== null) {
    document.getElementById("vozrast").value = localStorage.getItem("vozrast");
  }
  if (localStorage.getItem("ves") !== null) {
    document.getElementById("ves").value = localStorage.getItem("ves");
  }
  if (localStorage.getItem("aktivnost") !== null) {
    document.getElementById("aktivnost").value =
      localStorage.getItem("aktivnost");
  }
  if (localStorage.getItem("trenirovok") !== null) {
    document.getElementById("trenirovok").value =
      localStorage.getItem("trenirovok");
  }
  if (localStorage.getItem("tip") !== null) {
    document.getElementById("tip").value = localStorage.getItem("tip");
    document.getElementById("podgotovka2").value = localStorage.getItem("podgotovka2");
    document.getElementById("podgotovka").value = localStorage.getItem("podgotovka");
    document.getElementById("slojnost").value = localStorage.getItem("slojnost");
    document.getElementById("telo").value = localStorage.getItem("telo");
    document.getElementById("davlenie").value = localStorage.getItem("davlenie");
    if (localStorage.getItem("lokot") == "yes") {
      document.getElementById("lokot").checked = true;
    } else {
      document.getElementById("lokot").checked = false;
    }
    if (localStorage.getItem("plecho") == "yes") {
      document.getElementById("plecho").checked = true;
    } else {
      document.getElementById("plecho").checked = false;
    }
    if (localStorage.getItem("koleno") == "yes") {
      document.getElementById("koleno").checked = true;
    } else {
      document.getElementById("koleno").checked = false;
    }
    if (localStorage.getItem("spina") == "yes") {
      document.getElementById("spina8").checked = true;
    } else {
      document.getElementById("spina8").checked = false;
    }
    if (localStorage.getItem("golen") == "yes") {
      document.getElementById("golen8").checked = true;
    } else {
      document.getElementById("golen8").checked = false;
    }
    if (localStorage.getItem("kist") == "yes") {
      document.getElementById("kist").checked = true;
    } else {
      document.getElementById("kist").checked = false;
    }
    if (localStorage.getItem("taz") == "yes") {
      document.getElementById("taz").checked = true;
    } else {
      document.getElementById("taz").checked = false;
    }
    if (localStorage.getItem("grija") == "yes") {
      document.getElementById("grija").checked = true;
    } else {
      document.getElementById("grija").checked = false;
    }
    if (localStorage.getItem("osteoxondroz") == "yes") {
      document.getElementById("osteoxondroz").checked = true;
    } else {
      document.getElementById("osteoxondroz").checked = false;
    }
    if (localStorage.getItem("skolioz") == "yes") {
      document.getElementById("skolioz").checked = true;
    } else {
      document.getElementById("skolioz").checked = false;
    }
    if (localStorage.getItem("kifoz") == "yes") {
      document.getElementById("kifoz").checked = true;
    } else {
      document.getElementById("kifoz").checked = false;
    }
    if (localStorage.getItem("koleno2") == "yes") {
      document.getElementById("koleno2").checked = true;
    } else {
      document.getElementById("koleno2").checked = false;
    }
    if (localStorage.getItem("trenageri") == "yes") {
      document.getElementById("trenageri").checked = true;
    } else {
      document.getElementById("trenageri").checked = false;
    }
    if (localStorage.getItem("kardio") == "yes") {
      document.getElementById("kardio").checked = true;
    } else {
      document.getElementById("kardio").checked = false;
    }
    if (localStorage.getItem("tyrnik") == "yes") {
      document.getElementById("tyrnik").checked = true;
    } else {
      document.getElementById("tyrnik").checked = false;
    }
    if (localStorage.getItem("lavka") == "yes") {
      document.getElementById("lavka").checked = true;
    } else {
      document.getElementById("lavka").checked = false;
    }
    if (localStorage.getItem("stoiki") == "yes") {
      document.getElementById("stoiki").checked = true;
    } else {
      document.getElementById("stoiki").checked = false;
    }
    if (localStorage.getItem("chtanga") == "yes") {
      document.getElementById("chtanga").checked = true;
    } else {
      document.getElementById("chtanga").checked = false;
    }
    if (localStorage.getItem("ganteli") == "yes") {
      document.getElementById("ganteli").checked = true;
    } else {
      document.getElementById("ganteli").checked = false;
    }
    if (localStorage.getItem("beg") == "yes") {
      document.getElementById("beg").checked = true;
    } else {
      document.getElementById("beg").checked = false;
    }
    if (localStorage.getItem("trx") == "yes") {
      document.getElementById("trx").checked = true;
    } else {
      document.getElementById("trx").checked = false;
    }
    if (localStorage.getItem("podt") == "yes") {
      document.getElementById("podt").checked = true;
    } else {
      document.getElementById("podt").checked = false;
    }
    if (localStorage.getItem("otgim_br") == "yes") {
      document.getElementById("otgim_br").checked = true;
    } else {
      document.getElementById("otgim_br").checked = false;
    }
    if (localStorage.getItem("otgim_pol") == "yes") {
      document.getElementById("otgim_pol").checked = true;
    } else {
      document.getElementById("otgim_pol").checked = false;
    }
    if (localStorage.getItem("rezina") == "yes") {
      document.getElementById("rezina").checked = true;
    } else {
      document.getElementById("rezina").checked = false;
    }
    if (localStorage.getItem("sheia8") == "yes") {
      document.getElementById("sheia8").checked = true;
    } else {
      document.getElementById("sheia8").checked = false;
    }
    if (localStorage.getItem("diastaz") == "yes") {
      document.getElementById("diastaz").checked = true;
    } else {
      document.getElementById("diastaz").checked = false;
    }

    rezalt_t.call();
  }
}
showLocalStorage2();
function instrukcii_t() {
  if (document.getElementById("instrukcii2").style.display == "none") {
    document.getElementById("instrukcii").style.color = "#E89F09";
  } else {
    document.getElementById("instrukcii").style.color = "#02BF4E";
  }
  $("#instrukcii2").slideToggle();
}

function rezalt_t(rezz) {
  s_r_1 = s_r_2 = s_r_3 = s_r_4 = s_r_5 = s_r_6 = undefined;
  no_1 = no_2 = no_3 = no_4 = no_5 = no_6 = no_7 = no_8 = no_9 = no_10 = undefined;
  sp_1 = sp_2 = sp_3 = sp_4 = sp_5 = sp_6 = sp_7 = sp_8 = undefined;
  pr_1 = pr_2 = pr_3 = pr_4 = pr_5 = pr_6 = pr_7 = pr_8 = pr_9 = pr_10 = undefined;
  gr_1 = gr_2 = gr_3 = gr_4 = gr_5 = gr_6 = gr_7 = gr_8 = gr_9 = gr_10 = undefined;
  pl_1 = pl_2 = pl_3 = pl_4 = pl_5 = pl_6 = pl_7 = pl_8 = pl_9 = pl_10 = undefined;
  ry_1 = ry_2 = ry_3 = ry_4 = ry_5 = ry_6 = ry_7 = ry_8 = ry_9 = ry_10 = undefined;
  r_b_1 = r_b_2 = r_b_3 = r_b_4 = r_b_5 = undefined;
  r_p_1 = r_p_2 = r_p_3 = undefined;

  var pol = document.getElementById("pol").value;
  if (pol == "МУЖ") {
    pol = "man";
  }
  if (pol == "ЖЕН") {
    pol = "woman";
  }
  var vozrast = document.getElementById("vozrast").value;
  var telo = document.getElementById("telo").value;
  var slojnost = document.getElementById("slojnost").value;
  var aktivnost = document.getElementById("aktivnost").value;
  var rost = document.getElementById("rost").value;
  trenirovok = document.getElementById("trenirovok").value;
  var davlenie = document.getElementById("davlenie").value;
  var ves = document.getElementById("ves").value;
  var podgotovka = document.getElementById("podgotovka").value;
  var podgotovka2 = document.getElementById("podgotovka2").value;
  var cel = document.getElementById("cel").value;
  var tip = document.getElementById("tip").value;

  if (pol == "" || vozrast == "" || telo == "" || slojnost == "" || aktivnost == "" || rost == "" || trenirovok == "" || davlenie == "" || ves == "" || podgotovka == "" || podgotovka2 == "" || cel == "" || tip == "") {
    if (pol == "") {
      alert("Вы не указали свой пол");
    }
    if (vozrast == "") {
      alert("Вы не указали свой возраст");
    }
    if (ves == "") {
      alert("Вы не указали свой вес");
    }
    if (rost == "") {
      alert("Вы не указали свой рост");
    }
    if (telo == "") {
      alert("Вы не указали своё телосложение");
    }
    if (slojnost == "") {
      alert("Вы не указали сложность тренировок");
    }
    if (aktivnost == "") {
      alert("Вы не указали уровень физической активности");
    }
    if (trenirovok == "") {
      alert("Вы не указали количество тренировок");
    }
    if (davlenie == "") {
      alert("Вы не указали давление");
    }
    if (podgotovka2 == "") {
      alert("Вы не указали свой стаж тренировок");
    }
    if (podgotovka == "") {
      alert("Вы не указали общую физическую подготовку");
    }
    if (cel == "") {
      alert("Вы не указали свою цель");
    }
    if (tip == "") {
      alert("Вы не указали тип тренировок");
    }
    return;
  }


  if (document.getElementById("skolioz").checked) {
    var skolioz = document.getElementById("skolioz").value;
  }
  if (document.getElementById("kifoz").checked) {
    var kifoz = document.getElementById("kifoz").value;
  }
  if (document.getElementById("osteoxondroz").checked) {
    var osteoxondroz = document.getElementById("osteoxondroz").value;
  }
  if (document.getElementById("grija").checked) {
    var grija = document.getElementById("grija").value;
  }
  if (document.getElementById("golen8").checked) {
    var golen = document.getElementById("golen8").value;
  }
  if (document.getElementById("spina8").checked) {
    var spina = document.getElementById("spina8").value;
  }
  if (document.getElementById("koleno").checked) {
    var koleno = document.getElementById("koleno").value;
  }
  if (document.getElementById("koleno2").checked) {
    var koleno = document.getElementById("koleno2").value;
  }
  if (document.getElementById("taz").checked) {
    var taz = document.getElementById("taz").value;
  }
  if (document.getElementById("plecho").checked) {
    var plecho = document.getElementById("plecho").value;
  }
  if (document.getElementById("lokot").checked) {
    var lokot = document.getElementById("lokot").value;
  }
  if (document.getElementById("kist").checked) {
    var kist = document.getElementById("kist").value;
  }
  if (document.getElementById("trenageri").checked) {
    var trenageri = document.getElementById("trenageri").value;
  }
  if (document.getElementById("chtanga").checked) {
    var chtanga = document.getElementById("chtanga").value;
  }
  if (document.getElementById("ganteli").checked) {
    var ganteli = document.getElementById("ganteli").value;
  }
  if (document.getElementById("beg").checked) {
    var beg = document.getElementById("beg").value;
  }
  if (document.getElementById("trx").checked) {
    var trx = document.getElementById("trx").value;
  }
  if (document.getElementById("tyrnik").checked) {
    var tyrnik = document.getElementById("tyrnik").value;
  }
  if (document.getElementById("stoiki").checked) {
    var stoiki = document.getElementById("stoiki").value;
  }
  if (document.getElementById("lavka").checked) {
    var lavka = document.getElementById("lavka").value;
  }
  if (document.getElementById("podt").checked) {
    var podt = document.getElementById("podt").value;
  }
  if (document.getElementById("otgim_br").checked) {
    var otgim_br = document.getElementById("otgim_br").value;
  }
  if (document.getElementById("otgim_pol").checked) {
    var otgim_pol = document.getElementById("otgim_pol").value;
  }
  if (document.getElementById("kardio").checked) {
    var kardio = document.getElementById("kardio").value;
  }
  if (document.getElementById("rezina").checked) {
    var rezina = document.getElementById("rezina").value;
  }
  if (document.getElementById("sheia8").checked) {
    var sheia8 = document.getElementById("sheia8").value;
  }
  if (document.getElementById("diastaz").checked) {
    var diastaz = document.getElementById("diastaz").value;
  }

  if (document.getElementById("raz_oop").value > 5) {
    otgim_pol = "yes";
  }
  if (document.getElementById("raz_oob").value > 5) {
    otgim_br = "yes";
  }
  if (document.getElementById("raz_pnt").value > 5) {
    podt = "yes";
  }

  if (vozrast <= 14) {
    vozrast = "10-14";
  }
  if (vozrast <= 19 && vozrast >= 15) {
    vozrast = "15-19";
  }
  if (vozrast <= 29 && vozrast >= 20) {
    vozrast = "20-29";
  }
  if (vozrast <= 34 && vozrast >= 30) {
    vozrast = "30-34";
  }
  if (vozrast <= 39 && vozrast >= 35) {
    vozrast = "35-39";
  }
  if (vozrast <= 49 && vozrast >= 40) {
    vozrast = "40-49";
  }
  if (vozrast <= 59 && vozrast >= 50) {
    vozrast = "50-59";
  }
  if (vozrast >= 60) {
    vozrast = "60";
  }

  var level = 0;
  if (podgotovka == "minimum") {
    level = level + 1;
  }
  if (podgotovka == "sport") {
    level = level + 2;
  }
  if (podgotovka2 == "minimum") {
    level = level + 3;
  }
  if (podgotovka2 == "maximum") {
    level = level + 5;
  }
  if (podgotovka2 == "pereriv") {
    level = level + 5;
  }
  if (level <= 1) {
    podgotovka = "net";
    podgotovka3 = "net";
  }
  if (level == 2 || level == 3) {
    podgotovka = "minimum";
    podgotovka3 = "minimum";
  }
  if (level >= 4) {
    podgotovka = "sport";
    podgotovka3 = "sport";
  }
  if (podgotovka2 == "pereriv") {
    podgotovka3 = "pereriv";
  }

  if (cel == "sila") {////////////////////////////////////////////////////////////////////////////////////
    cel = "potolstet";
    var cel5 = "sila";
  }
  yprajnenii = 0;
  podhodov = 0;
  minyt = 0;

  if (slojnost == "legko") {
    podhodov = podhodov - 20;
    minyt = minyt - 15;
  }

  if (slojnost == "tygelo") {
    podhodov = podhodov + 15;
    minyt = minyt + 15;
  }

  if (pol == "man") {
    yprajnenii = yprajnenii - 5;
    podhodov = podhodov + 10;
    minyt = minyt - 20;
  }

  if (pol == "woman") {
    yprajnenii = yprajnenii + 10;
    podhodov = podhodov + 0;
    minyt = minyt + 20;
  }

  if (vozrast == "10-14") {
    yprajnenii = yprajnenii + 30;
    podhodov = podhodov + 30;
    minyt = minyt + 35;
  }

  if (vozrast == "15-19") {
    yprajnenii = yprajnenii + 30;
    podhodov = podhodov + 30;
    minyt = minyt + 30;
  }

  if (vozrast == "20-29") {
    yprajnenii = yprajnenii + 25;
    podhodov = podhodov + 25;
    minyt = minyt + 25;
  }

  if (vozrast == "30-34") {
    yprajnenii = yprajnenii + 20;
    podhodov = podhodov + 20;
    minyt = minyt + 20;
  }

  if (vozrast == "35-39") {
    yprajnenii = yprajnenii + 15;
    podhodov = podhodov + 15;
    minyt = minyt + 15;
  }

  if (vozrast == "40-49") {
    yprajnenii = yprajnenii + 10;
    podhodov = podhodov + 10;
    minyt = minyt + 10;
  }

  if (vozrast == "50-59") {
    yprajnenii = yprajnenii + 5;
    podhodov = podhodov + 5;
    minyt = minyt + 5;
  }

  if (vozrast == "60") {
    yprajnenii = yprajnenii + 0;
    podhodov = podhodov + 0;
    minyt = minyt + 0;
  }

  if (podgotovka == "net") {
    yprajnenii = yprajnenii + 0;
    podhodov = podhodov + 0;
    minyt = minyt + 0;
  }

  if (podgotovka == "minimum") {
    yprajnenii = yprajnenii + 5;
    podhodov = podhodov + 5;
    minyt = minyt + 10;
  }

  if (podgotovka2 == "pereriv") {
    podhodov = podhodov - 20;
    minyt = minyt - 20;
    yprajnenii = yprajnenii - 10;
  }

  if (podgotovka == "sport") {
    yprajnenii = yprajnenii + 10;
    podhodov = podhodov + 10;
    minyt = minyt + 20;
  }

  if (telo == "hydoe") {
    yprajnenii = yprajnenii + 5;
    minyt = minyt + 10;
  }

  if (telo == "srednee") {
    yprajnenii = yprajnenii + 10;
    minyt = minyt + 15;
  }

  if (telo == "myskyli") {
    yprajnenii = yprajnenii + 15;
    minyt = minyt + 20;
  }

  if (telo == "polnoe") {
    yprajnenii = yprajnenii + 0;
    minyt = minyt + 5;
  }

  if (telo == "ochen_polnoe") {
    yprajnenii = yprajnenii + 0;
  }

  if (cel == "potolstet") {
    minyt = minyt - 10;
  }

  if (cel5 !== undefined) {
    podhodov = podhodov + 20;
    minyt = minyt - 30;
  }

  if (tip == "kardio") {
    if (podhodov >= 20) {
      podhodov = "3";
      podhodov2 = "4";
    } else {
      podhodov = "2-3";
      podhodov2 = "3-4";
    }
  } else {
    if (podhodov >= 20) {
      podhodov = "3-4";
      podhodov2 = "4-5";
    } else {
      podhodov = "2-3";
      podhodov2 = "3-4";
    }
  }

  if (cel == "pohydet" || cel == "ne_meniat") {
    podhodov2 = podhodov;
  }

  if (trenirovok == 5 && cel != "potolstet") {
    if (tip == "kardio_kom" || tip == "kardio") {
      yprajnenii = yprajnenii - 15;
    }
  }

  if (trenirovok == 3) {
    yprajnenii = yprajnenii - 10;
  }
  if (trenirovok == 4) {
    yprajnenii = yprajnenii - 20;
  }
  if (trenirovok == 5) {
    yprajnenii = yprajnenii - 30;
  }
  if (aktivnost == 1.56) {
    yprajnenii = yprajnenii - 10;
    minyt = minyt - 10;
  }
  if (aktivnost == 1.73) {
    yprajnenii = yprajnenii - 20;
    minyt = minyt - 20;
  }
  if (aktivnost == 1.95) {
    yprajnenii = yprajnenii - 30;
    minyt = minyt - 30;
  }
  if (yprajnenii >= 45 && trenirovok != 5) {
    yprajnen = "8-10";
  }
  if (yprajnenii >= 45 && trenirovok == 5) {
    yprajnen = "7-9";
  }
  if (yprajnenii >= 35 && yprajnenii < 45) {
    yprajnen = "7-9";
  }
  if (yprajnenii >= 25 && yprajnenii < 35) {
    yprajnen = "6-8";
  }
  if (yprajnenii >= 15 && yprajnenii < 25) {
    yprajnen = "5-7";
  }
  if (yprajnenii < 15) {
    yprajnen = "4-6";
  }
  if (yprajnenii < 0 && trenirovok == 5) {
    yprajnen = "4-5";
  }

  if (yprajnenii >= 45 && trenirovok == 5 && pol == "man") {
    yprajnen = "6-8";
  }

  if (slojnost == "legko") {
    if (yprajnen == "4-6" && trenirovok == 5) {
      yprajnen = "4-5";
    }
    if (yprajnen == "5-7") {
      yprajnen = "4-6";
    }
    if (yprajnen == "6-8") {
      yprajnen = "5-7";
    }
    if (yprajnen == "7-9") {
      yprajnen = "6-8";
    }
    if (yprajnen == "8-10") {
      yprajnen = "7-9";
    }
  }

  if (slojnost == "tygelo") {
    if (yprajnen == "7-9") {
      yprajnen = "8-10";
    }
    if (yprajnen == "6-8") {
      yprajnen = "7-9";
    }
    if (yprajnen == "5-7") {
      yprajnen = "6-8";
    }
    if (yprajnen == "4-6") {
      yprajnen = "5-7";
    }
    if (yprajnen == "4-5") {
      yprajnen = "4-6";
    }
  }

  if (cel == "potolstet" && pol == "man" && podgotovka3 == "pereriv") {
    povtorov2 = "10-12";
    povtorov3 = "6-10";
  }
  if (cel == "potolstet" && pol == "man" && podgotovka3 == "sport") {
    povtorov2 = "10-15";
    povtorov3 = "6-10";
  }
  if (cel == "potolstet" && pol == "man" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "potolstet" && pol == "man" && podgotovka3 == "minimum") {
    povtorov2 = "10-15";
    povtorov3 = "8-12";
  }

  if (cel5 !== undefined && pol == "man" && podgotovka3 == "pereriv") {
    povtorov2 = "8-10";
    povtorov3 = "4-6";
  }
  if (cel5 !== undefined && pol == "man" && podgotovka3 == "sport") {
    povtorov2 = "6-8";
    povtorov3 = "1-5";
  }
  if (cel5 !== undefined && pol == "man" && podgotovka3 == "net") {
    povtorov2 = "10-12";
    povtorov3 = "6-10";
  }
  if (cel5 !== undefined && pol == "man" && podgotovka3 == "minimum") {
    povtorov2 = "8-12";
    povtorov3 = "4-8";
  }

  if (cel == "ne_meniat" && pol == "man" && podgotovka3 == "pereriv") {
    povtorov2 = "10-12";
    povtorov3 = "10-12";
  }
  if (cel == "ne_meniat" && pol == "man" && podgotovka3 == "sport") {
    povtorov2 = "12-18";
    povtorov3 = "12-18";
  }
  if (cel == "ne_meniat" && pol == "man" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "ne_meniat" && pol == "man" && podgotovka3 == "minimum") {
    povtorov2 = "12-15";
    povtorov3 = "12-15";
  }

  if (cel == "pohydet" && pol == "man" && podgotovka3 == "pereriv") {
    povtorov2 = "10-12";
    povtorov3 = "10-12";
  }
  if (cel == "pohydet" && pol == "man" && podgotovka3 == "sport") {
    povtorov2 = "15-20";
    povtorov3 = "12-18";
  }
  if (cel == "pohydet" && pol == "man" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "pohydet" && pol == "man" && podgotovka3 == "minimum") {
    povtorov2 = "12-18";
    povtorov3 = "12-15";
  }

  if (cel == "potolstet" && pol == "woman" && podgotovka3 == "pereriv") {
    povtorov2 = "10-15";
    povtorov3 = "10-12";
  }
  if (cel == "potolstet" && pol == "woman" && podgotovka3 == "sport") {
    povtorov2 = "10-15";
    povtorov3 = "8-12";
  }
  if (cel == "potolstet" && pol == "woman" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "potolstet" && pol == "woman" && podgotovka3 == "minimum") {
    povtorov2 = "10-15";
    povtorov3 = "10-12";
  }

  if (cel5 !== undefined && pol == "woman" && podgotovka3 == "pereriv") {
    povtorov2 = "8-10";
    povtorov3 = "4-8";
  }
  if (cel5 !== undefined && pol == "woman" && podgotovka3 == "sport") {
    povtorov2 = "6-8";
    povtorov3 = "3-6";
  }
  if (cel5 !== undefined && pol == "woman" && podgotovka3 == "net") {
    povtorov2 = "10-12";
    povtorov3 = "8-10";
  }
  if (cel5 !== undefined && pol == "woman" && podgotovka3 == "minimum") {
    povtorov2 = "8-12";
    povtorov3 = "6-8";
  }

  if (cel == "ne_meniat" && pol == "woman" && podgotovka3 == "pereriv") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "ne_meniat" && pol == "woman" && podgotovka3 == "sport") {
    povtorov2 = "12-18";
    povtorov3 = "12-18";
  }
  if (cel == "ne_meniat" && pol == "woman" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "ne_meniat" && pol == "woman" && podgotovka3 == "minimum") {
    povtorov2 = "12-15";
    povtorov3 = "12-15";
  }

  if (cel == "pohydet" && pol == "woman" && podgotovka3 == "pereriv") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "pohydet" && pol == "woman" && podgotovka3 == "sport") {
    povtorov2 = "15-20";
    povtorov3 = "15-20";
  }
  if (cel == "pohydet" && pol == "woman" && podgotovka3 == "net") {
    povtorov2 = "10-15";
    povtorov3 = "10-15";
  }
  if (cel == "pohydet" && pol == "woman" && podgotovka3 == "minimum") {
    povtorov2 = "12-18";
    povtorov3 = "12-18";
  }

  if (minyt >= 60) {
    minyt2 = "1.0 - 1.5";
  }
  if (minyt >= 50 && minyt < 60) {
    minyt2 = "1.5 - 2.0";
  }
  if (minyt >= 40 && minyt < 50) {
    minyt2 = "2.0 - 2.5";
  }
  if (minyt >= 30 && minyt < 40) {
    minyt2 = "2.0 - 3.0";
  }
  if (minyt >= 20 && minyt < 30) {
    minyt2 = "2.5 - 3.0";
  }
  if (minyt >= 0 && minyt < 20) {
    minyt2 = "3.0 - 4.0";
  }
  if (minyt < 0) {
    minyt2 = "3.0 - 5.0";
  }

  var vst =
    '<table class="tabl_foto_mini"><tr><td class="foto_mini2"></td><td>';

  var upp5 =
    '<div class="ypr_opcii"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren"  >';
  var upp6 =
    '<div class="ypr_poln">' +
    vst +
    '<div class="ypr_blok" ><li><a class="qjq"  href="../yprajnenia/';
  var upp7 = 'class="nagryzka">';
  var upp8 =
    '<td><a href="../met/osevaia_nagruzka.html">Нагрузка на позвоночник';

  if (kardio == "yes") {
    var kardio3 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (kardio != "yes") {
    var kardio3 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }

  if (
    vozrast != "10-14" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    taz != "yes" &&
    spina != "yes" &&
    koleno != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes" &&
    sheia8 != "yes"
  ) {
    nogi1 =
      upp6 +
      'prisedania_shtanga2.html" >Приседания со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez13" id="ypr_ves"></div></td></tr></table>2,294</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka12" ' +
      upp7 +
      '</div><div id="vidos12" class="vidos"></div><div class="analogi" id="analogi12"></div>';
  } else {
    nogi1 = "";
  }

  if (trenageri == "yes") {
    nogi3 =
      upp6 +
      'jim_nogami.html" >Жим ногами в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>2,340</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka2" ' +
      upp7 +
      '</div><div id="vidos2" class="vidos"></div><div class="analogi" id="analogi2"></div>';
  } else {
    nogi3 = "";
  }

  if (
    vozrast != "10-14" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes" &&
    sheia8 != "yes"
  ) {
    nogi4 =
      upp6 +
      'vipadi_so_shtangoi.html" >Выпады со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez2" id="ypr_ves"></div></td></tr></table>62,289</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka62" ' +
      upp7 +
      '</div><div id="vidos62" class="vidos"></div><div class="analogi" id="analogi62"></div>';
  } else {
    nogi4 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    koleno != "yes" &&
    taz != "yes" &&
    grija != "yes" &&
    nogi1 == "" &&
    ganteli == "yes"
  ) {
    nogi6 =
      upp6 +
      'prisedania_ganteli.html" >Приседания с гантелями</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez12" id="ypr_ves"></div></td></tr></table>22,286</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka22" ' +
      upp7 +
      '</div><div id="vidos22" class="vidos"></div><div class="analogi" id="analogi22"></div>';
  } else {
    nogi6 = "";
  }

  if (
    vozrast != "10-14" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    taz != "yes" &&
    spina != "yes" &&
    koleno != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    rezina == "yes" &&
    nogi1 == "" &&
    nogi6 == ""
  ) {
    nogi2 =
      upp6 +
      'rezina_prisedania.html" >Приседания с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>316,1625</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka316" ' +
      upp7 +
      '</div><div id="vidos316" class="vidos"></div><div class="analogi" id="analogi316"></div>';
  } else {
    nogi2 = "";
  }

  if (trenageri == "yes") {
    nogi7 =
      upp6 +
      'sgibanie_nog_v_trenajere3.html" >Сгибание ног в тренажёре лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>5,341</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka5" ' +
      upp7 +
      '</div><div id="vidos5" class="vidos"></div><div class="analogi" id="analogi5"></div>';
  } else {
    nogi7 = "";
  }

  if (rezina == "yes" && nogi7 == "") {
    nogi8 =
      upp6 +
      'rezina_sgibanie_nog.html" >Сгибание ног лёжа с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>310,1618</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka310" ' +
      upp7 +
      '</div><div id="vidos310" class="vidos"></div><div class="analogi" id="analogi310"></div>';
  } else {
    nogi8 = "";
  }

  if (trenageri == "yes") {
    nogi9 =
      upp6 +
      'razgibanie_nog_v_trenajere.html" >Разгибание ног в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>17,332</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka17" ' +
      upp7 +
      '</div><div id="vidos17" class="vidos"></div><div class="analogi" id="analogi17"></div>';
  } else {
    nogi9 = "";
  }

  if (golen != "yes" && grija != "yes" && trenageri == "yes") {
    nogi10 =
      upp6 +
      'golen_v_trenajere.html" >Подъём на носки в тренажёре стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>36,337</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka36" ' +
      upp7 +
      '</div><div id="vidos36" class="vidos"></div><div class="analogi" id="analogi36"></div>';
  } else {
    nogi10 = "";
  }

  if (
    (vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39") &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (davlenie == "=" || davlenie == "+") &&
    podgotovka == "sport" &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    kifoz != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    nogi11 =
      upp6 +
      'prisedania_shtanga.html" >Приседания со штангой на груди</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez15" id="ypr_ves"></div></td></tr></table>289,295</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka289" ' +
      upp7 +
      '</div><div id="vidos289" class="vidos"></div><div class="analogi" id="analogi289"></div>';
  } else {
    nogi11 = "";
  }

  if (beg == "yes" && nogi11 == "") {
    nogi12 =
      upp6 +
      'sandbag_prisedania.html" >Приседания с сэндбэгом спереди</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez12" id="ypr_ves"></div></td></tr></table>362,1711</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka362" ' +
      upp7 +
      '</div><div id="vidos362" class="vidos"></div><div class="analogi" id="analogi362"></div>';
  } else {
    nogi12 = "";
  }

  if (ganteli == "yes" && koleno != "yes" && taz != "yes") {
    nogi13 =
      upp6 +
      'zashagivania.html" >Зашагивания на подставку с гантелями</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez9" id="ypr_ves"></div></td></tr></table>51,284</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka51" ' +
      upp7 +
      '</div><div id="vidos51" class="vidos"></div><div class="analogi" id="analogi51"></div>';
  } else {
    nogi13 = "";
  }

  if (
    taz != "yes" &&
    ganteli == "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes"
  ) {
    nogi14 =
      upp6 +
      'prisedania_mejdy_nog.html" >Приседания с весом между ног</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez8" id="ypr_ves"></div></td></tr></table>70,282</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka70" ' +
      upp7 +
      '</div><div id="vidos70" class="vidos"></div><div class="analogi" id="analogi70"></div>';
  } else {
    nogi14 = "";
  }

  if (
    taz != "yes" &&
    rezina == "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    nogi14 == ""
  ) {
    nogi15 =
      upp6 +
      'prisedania_rezina.html" >Приседания с резиной между ног</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>303,1611</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka303" ' +
      upp7 +
      '</div><div id="vidos303" class="vidos"></div><div class="analogi" id="analogi303"></div>';
  } else {
    nogi15 = "";
  }

  if (
    nogi13 == "" &&
    (vozrast != "10-14" || vozrast != "60") &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    chtanga == "yes" &&
    sheia8 != "yes"
  ) {
    nogi16 =
      upp6 +
      'zashagivania.html" >Зашагивания на подставку со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez9" id="ypr_ves"></div></td></tr></table>51,284</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka51" ' +
      upp7 +
      '</div><div id="vidos51" class="vidos"></div><div class="analogi" id="analogi51"></div>';
  } else {
    nogi16 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    trx == "yes"
  ) {
    nogi17 =
      upp6 +
      'trx_bolgarski.html" >Болгарские приседания на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>375,1723</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka375" ' +
      upp7 +
      '</div><div id="vidos375" class="vidos"></div><div class="analogi" id="analogi375"></div>';
  } else {
    nogi17 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    nogi4 == "" &&
    ganteli == "yes"
  ) {
    nogi18 =
      upp6 +
      'vipadi_s_gantelymi.html" >Выпады с гантелями</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez3" id="ypr_ves"></div></td></tr></table>4,290</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka4" ' +
      upp7 +
      '</div><div id="vidos4" class="vidos"></div><div class="analogi" id="analogi4"></div>';
  } else {
    nogi18 = "";
  }

  if (
    vozrast != "10-14" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    rezina == "yes" &&
    nogi4 == "" &&
    nogi18 == ""
  ) {
    nogi5 =
      upp6 +
      'rezina_vipadi.html" >Выпады с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>327,1637</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka327" ' +
      upp7 +
      '</div><div id="vidos327" class="vidos"></div><div class="analogi" id="analogi327"></div>';
  } else {
    nogi5 = "";
  }

  if (
    vozrast != "10-14" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    beg == "yes" &&
    nogi4 == "" &&
    nogi18 == "" &&
    nogi5 == ""
  ) {
    nogi19 =
      upp6 +
      'sandbag_vipadi.html" >Выпады с сэндбэгом перед собой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez11" id="ypr_ves"></div></td></tr></table>357,1705</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka357" ' +
      upp7 +
      '</div><div id="vidos357" class="vidos"></div><div class="analogi" id="analogi357"></div>';
  } else {
    nogi19 = "";
  }

  if (
    (vozrast == "10-14" ||
      vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39") &&
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    chtanga == "yes"
  ) {
    nogi20 =
      upp6 +
      'vipadi_v_bok.html" >Выпады в бок</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez11" id="ypr_ves"></div></td></tr></table>55,285</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka55" ' +
      upp7 +
      '</div><div id="vidos55" class="vidos"></div><div class="analogi" id="analogi55"></div>';
  } else {
    nogi20 = "";
  }

  if (
    (vozrast == "10-14" ||
      vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39") &&
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    spina != "yes" &&
    koleno != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    rezina == "yes" &&
    nogi20 == ""
  ) {
    nogi21 =
      upp6 +
      'rezina_vipadi_v_bok.html" >Выпады в бок с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>340,1653</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka340" ' +
      upp7 +
      '</div><div id="vidos340" class="vidos"></div><div class="analogi" id="analogi340"></div>';
  } else {
    nogi21 = "";
  }

  if (trenageri == "yes") {
    nogi22 =
      upp6 +
      'razvedenie_nog.html" >Разведение ног в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>15,344</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka15" ' +
      upp7 +
      '</div><div id="vidos15" class="vidos"></div><div class="analogi" id="analogi15"></div>';
  } else {
    nogi22 = "";
  }

  if (trenageri == "yes") {
    nogi23 =
      upp6 +
      'svedenie_nog_v_trenajere.html" >Сведение ног в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>14,336</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka14" ' +
      upp7 +
      '</div><div id="vidos14" class="vidos"></div><div class="analogi" id="analogi14"></div>';
  } else {
    nogi23 = "";
  }

  if (
    (vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39" ||
      vozrast == "40-49" ||
      vozrast == "50-59") &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    koleno != "yes" &&
    taz != "yes" &&
    grija != "yes" &&
    trenageri == "yes"
  ) {
    nogi24 =
      upp6 +
      'prisedania_gakk_trenajer.html" >Приседание в ГАКК-тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>66,331</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka66" ' +
      upp7 +
      '</div><div id="vidos66" class="vidos"></div><div class="analogi" id="analogi66"></div>';
  } else {
    nogi24 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    golen != "yes"
  ) {
    nogi25 =
      upp6 +
      'golen.html" >Подъём на носки стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>58,292</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka58" ' +
      upp7 +
      '</div><div id="vidos58" class="vidos"></div><div class="analogi" id="analogi58"></div>';
  } else {
    nogi25 = "";
  }

  if (
    pol == "man" &&
    (vozrast == "10-14" ||
      vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39" ||
      vozrast == "40-49") &&
    taz != "yes" &&
    koleno != "yes" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli")
  ) {
    nogi26 =
      upp6 +
      'prisedania_no_odnoi_noge.html" >Приседания на одной ноге</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>94,283</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka94" ' +
      upp7 +
      '</div><div id="vidos94" class="vidos"></div><div class="analogi" id="analogi94"></div>';
  } else {
    nogi26 = "";
  }

  if (trx == "yes" && nogi26 == "") {
    nogi27 =
      upp6 +
      'trx_prisedania.html" >Приседания на одной ноге с TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>369,1718</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka369" ' +
      upp7 +
      '</div><div id="vidos369" class="vidos"></div><div class="analogi" id="analogi369"></div>';
  } else {
    nogi27 = "";
  }

  if (
    ganteli != "yes" &&
    chtanga != "yes" &&
    trenageri != "yes" &&
    nogi13 == "" &&
    koleno != "yes" &&
    taz != "yes"
  ) {
    nogi28 =
      upp6 +
      'podem_odnoi_nogoi.html" >Подъём одной ногой на подставку</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>389,1913</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka389" ' +
      upp7 +
      '</div><div id="vidos389" class="vidos"></div><div class="analogi" id="analogi389"></div>';
  } else {
    nogi28 = "";
  }

  if (
    pol == "woman" &&
    taz != "yes" &&
    koleno != "yes" &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    chtanga == "yes" &&
    sheia8 != "yes"
  ) {
    nogi29 =
      upp6 +
      'prisedania_shtanga3.html" >Приседания со штангой «сумо» (плие)</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez2" id="ypr_ves"></div></td></tr></table>97,293</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka97" ' +
      upp7 +
      '</div><div id="vidos97" class="vidos"></div><div class="analogi" id="analogi97"></div>';
  } else {
    nogi29 = "";
  }

  if (pol == "woman" && rezina == "yes") {
    nogi30 =
      upp6 +
      'rezina_bedro.html" >Разгибание бедра с резиной на полу</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>350,1663</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka350" ' +
      upp7 +
      '</div><div id="vidos350" class="vidos"></div><div class="analogi" id="analogi350"></div>';
  } else {
    nogi30 = "";
  }

  if (
    (pol == "woman" ||
      (chtanga != "yes" &&
        ganteli != "yes" &&
        trenageri != "yes" &&
        rezina != "yes" &&
        trx != "yes" &&
        beg != "yes")) &&
    nogi30 == ""
  ) {
    nogi31 =
      upp6 +
      'razgibanie_bedra.html" >Разгибание бедра на четвереньках</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>81,288</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka81" ' +
      upp7 +
      '</div><div id="vidos81" class="vidos"></div><div class="analogi" id="analogi81"></div>';
  } else {
    nogi31 = "";
  }

  if (trx == "yes") {
    nogi32 =
      "" +
      upp6 +
      'trx_mostik.html" >Подъём таза лёжа на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>378,1746</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka378" ' +
      upp7 +
      '</div><div id="vidos378" class="vidos"></div><div class="analogi" id="analogi378"></div>';
  } else {
    nogi32 = "";
  }

  if (
    (pol == "woman" ||
      (chtanga != "yes" &&
        ganteli != "yes" &&
        trenageri != "yes" &&
        rezina != "yes" &&
        trx != "yes" &&
        beg != "yes")) &&
    nogi32 == "" &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli")
  ) {
    nogi33 =
      upp6 +
      'mostik_odnoi_nogoi.html" >Подъём таза лёжа одной ногой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>382,1906</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka382" ' +
      upp7 +
      '</div><div id="vidos382" class="vidos"></div><div class="analogi" id="analogi382"></div>';
  } else {
    nogi33 = "";
  }

  if (
    (pol == "woman" ||
      (chtanga != "yes" &&
        ganteli != "yes" &&
        trenageri != "yes" &&
        rezina != "yes" &&
        trx != "yes" &&
        beg != "yes")) &&
    nogi32 == "" &&
    nogi33 == ""
  ) {
    nogi34 =
      upp6 +
      'mostik.html" >Подъём таза лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez10" id="ypr_ves"></div></td></tr></table>68,287</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka68" ' +
      upp7 +
      '</div><div id="vidos68" class="vidos"></div><div class="analogi" id="analogi68"></div>';
  } else {
    nogi34 = "";
  }

  if (pol == "woman" && trenageri == "yes") {
    nogi35 =
      upp6 +
      'privedenie_bedra.html" >Приведение ноги в кроссовере</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>64,335</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka64" ' +
      upp7 +
      '</div><div id="vidos64" class="vidos"></div><div class="analogi" id="analogi64"></div>';
  } else {
    nogi35 = "";
  }

  if (pol == "woman" && rezina == "yes" && nogi35 == "") {
    nogi36 =
      upp6 +
      'rezina_privedenie.html" >Приведение ноги с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>314,1623</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka314" ' +
      upp7 +
      '</div><div id="vidos314" class="vidos"></div><div class="analogi" id="analogi314"></div>';
  } else {
    nogi36 = "";
  }

  if (pol == "woman" && trenageri == "yes") {
    nogi37 =
      upp6 +
      'otvedenie_nogi_v_trenajere.html" >Отведение ноги в кроссовере</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>84,345</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka84" ' +
      upp7 +
      '</div><div id="vidos84" class="vidos"></div><div class="analogi" id="analogi84"></div>';
  } else {
    nogi37 = "";
  }

  if (pol == "woman" && rezina == "yes" && nogi36 == "") {
    nogi38 =
      upp6 +
      'rezina_otvedenie.html" >Отведение ноги с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>309,1617</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka309" ' +
      upp7 +
      '</div><div id="vidos309" class="vidos"></div><div class="analogi" id="analogi309"></div>';
  } else {
    nogi38 = "";
  }

  if (pol == "woman" && trenageri == "yes") {
    nogi39 =
      upp6 +
      'razgibanie_bedra_trenajer.html" >Разгибание бедра в кроссовере</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>63,342</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka63" ' +
      upp7 +
      '</div><div id="vidos63" class="vidos"></div><div class="analogi" id="analogi63"></div>';
  } else {
    nogi39 = "";
  }

  if (pol == "woman" && rezina == "yes" && nogi39 == "") {
    nogi40 =
      upp6 +
      'rezina_razgibanie_bedra.html" >Разгибание бедра стоя с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>347,1660</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka347" ' +
      upp7 +
      '</div><div id="vidos347" class="vidos"></div><div class="analogi" id="analogi347"></div>';
  } else {
    nogi40 = "";
  }

  if (golen != "yes" && chtanga == "yes" && (nogi10 == "" || nogi25 == "")) {
    nogi41 =
      upp6 +
      'golen_sidia.html" >Подъём на носки сидя со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>207,291</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka207" ' +
      upp7 +
      '</div><div id="vidos207" class="vidos"></div><div class="analogi" id="analogi207"></div>';
  } else {
    nogi41 = "";
  }

  if (golen != "yes" && (nogi10 == "" || nogi25 == "") && trenageri == "yes") {
    nogi42 =
      upp6 +
      'golen_v_trenajere3.html" >Подъём на носки в тренажёре сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>85,339</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka85" ' +
      upp7 +
      '</div><div id="vidos85" class="vidos"></div><div class="analogi" id="analogi85"></div>>';
  } else {
    nogi42 = "";
  }

  if (
    pol == "woman" ||
    (chtanga != "yes" &&
      ganteli != "yes" &&
      trenageri != "yes" &&
      rezina != "yes" &&
      trx != "yes" &&
      beg != "yes")
  ) {
    nogi43 =
      upp6 +
      'otvedenie_nogi_lega.html" >Махи ногой, лёжа на боку</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>244,1206</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka244" ' +
      upp7 +
      '</div><div id="vidos244" class="vidos"></div><div class="analogi" id="analogi244"></div>';
  } else {
    nogi43 = "";
  }

  if (
    beg == "yes" &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    koleno != "yes"
  ) {
    nogi44 =
      upp6 +
      'sandbag_zaprigivania.html" >Запрыгивания с сэндбэгом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez9" id="ypr_ves"></div></td></tr></table>359,1707</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka359" ' +
      upp7 +
      '</div><div id="vidos359" class="vidos"></div><div class="analogi" id="analogi359"></div>';
  } else {
    nogi44 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    nogi45 =
      upp6 +
      'sandbag_traster.html" >Трастеры с сэндбэгом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez35" id="ypr_ves"></div></td></tr></table>358,1706</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka358" ' +
      upp7 +
      '</div><div id="vidos358" class="vidos"></div><div class="analogi" id="analogi358"></div>';
  } else {
    nogi45 = "";
  }

  nogi46 =
    upp6 +
    'otvedenie_na_polu.html" >Отведение ноги на четвереньках</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>381,1905</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka381" ' +
    upp7 +
    '</div><div id="vidos381" class="vidos"></div><div class="analogi" id="analogi381"></div>';

  nogi47 =
    upp6 +
    'privedenie_na_boky.html" >Приведение ноги лёжа на боку</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>387,1911</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka387" ' +
    upp7 +
    '</div><div id="vidos387" class="vidos"></div><div class="analogi" id="analogi387"></div>';

  if (nogi27 == "") {
    nogi48 =
      upp6 +
      'prostin_prisedania.html" >Приседания на одной ноге с простынёй</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>410,1925</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka410" ' +
      upp7 +
      '</div><div id="vidos410" class="vidos"></div><div class="analogi" id="analogi410"></div>';
  } else {
    nogi48 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    (davlenie == "=" || davlenie == "-") &&
    trenageri == "yes"
  ) {
    spina_raz1 =
      upp6 +
      'giperekstenzia.html" >Гиперэкстензия</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez4" id="ypr_ves"></div></td></tr></table>10,272</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka10" ' +
      upp7 +
      '</div><div id="vidos10" class="vidos"></div><div class="analogi" id="analogi10"></div>';
  } else {
    spina_raz1 = "";
  }

  if (
    (vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39" ||
      vozrast == "40-49") &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    spina_raz2 =
      upp6 +
      'stanovaia_tiaga3.html" >Становая тяга со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez14" id="ypr_ves"></div></td></tr></table>38,273</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka38" ' +
      upp7 +
      '</div><div id="vidos38" class="vidos"></div><div class="analogi" id="analogi38"></div>';
  } else {
    spina_raz2 = "";
  }

  if (
    spina != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    ganteli == "yes"
  ) {
    spina_raz3 =
      upp6 +
      'stanovaia_tiaga2.html" >Становая тяга с гантелями</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez6" id="ypr_ves"></div></td></tr></table>43,260</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka43" ' +
      upp7 +
      '</div><div id="vidos43" class="vidos"></div><div class="analogi" id="analogi43"></div>';
  } else {
    spina_raz3 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes" &&
    sheia8 != "yes"
  ) {
    spina_raz4 =
      upp6 +
      'nakloni_so_shtangoi.html" >Наклоны со штангой на плечах</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez5" id="ypr_ves"></div></td></tr></table>29,265</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka29" ' +
      upp7 +
      '</div><div id="vidos29" class="vidos"></div><div class="analogi" id="analogi29"></div>';
  } else {
    spina_raz4 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    rezina == "yes" &&
    spina_raz4 == "" &&
    sheia8 != "yes"
  ) {
    spina_raz5 =
      upp6 +
      'nakloni_petli.html" >Наклоны с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>305,1612</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka305" ' +
      upp7 +
      '</div><div id="vidos305" class="vidos"></div><div class="analogi" id="analogi305"></div>';
  } else {
    spina_raz5 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    beg == "yes" &&
    spina_raz4 == "" &&
    spina_raz5 == ""
  ) {
    spina_raz6 =
      upp6 +
      'sandbag_nakloni.html" >Наклоны с сэндбэгом перед собой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez4" id="ypr_ves"></div></td></tr></table>356,1704</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka356" ' +
      upp7 +
      '</div><div id="vidos356" class="vidos"></div><div class="analogi" id="analogi356"></div>';
  } else {
    spina_raz6 = "";
  }

  if (
    (vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    spina_raz7 =
      upp6 +
      'stanovaia_tiaga.html" >Становая тяга на прямых ногах</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez7" id="ypr_ves"></div></td></tr></table>90,261</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka90" ' +
      upp7 +
      '</div><div id="vidos90" class="vidos"></div><div class="analogi" id="analogi90"></div>';
  } else {
    spina_raz7 = "";
  }

  if (
    spina != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    rezina == "yes" &&
    spina_raz3 == "" &&
    spina_raz7 == ""
  ) {
    spina_raz8 =
      upp6 +
      'rezina_stanovaia_tiaga.html" >Становая тяга с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>322,1631</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka322" ' +
      upp7 +
      '</div><div id="vidos322" class="vidos"></div><div class="analogi" id="analogi322"></div>';
  } else {
    spina_raz8 = "";
  }

  if (spina != "yes" && trenageri == "yes" && sheia8 != "yes") {
    spina_raz9 =
      upp6 +
      'nakloni_v_gakk.html" >Наклоны в ГАКК тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>281,1429</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka281" ' +
      upp7 +
      '</div><div id="vidos281" class="vidos"></div><div class="analogi" id="analogi281"></div>';
  } else {
    spina_raz9 = "";
  }

  if (spina_raz1 == "" && trenageri == "yes") {
    spina_raz10 =
      upp6 +
      'giperekstenzia_trenajer.html" >Разгибание спины в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>205,315</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka205" ' +
      upp7 +
      '</div><div id="vidos205" class="vidos"></div><div class="analogi" id="analogi205"></div>';
  } else {
    spina_raz10 = "";
  }

  if (
    (vozrast == "15-19" ||
      vozrast == "20-29" ||
      vozrast == "30-34" ||
      vozrast == "35-39") &&
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka == "sport" &&
    spina != "yes" &&
    taz != "yes" &&
    golen != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes" &&
    spina_raz2 == ""
  ) {
    spina_raz11 =
      upp6 +
      'stanovaia_tiaga_symo.html" >Становая тяга «сумо»</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez7" id="ypr_ves"></div></td></tr></table>226,274</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka226" ' +
      upp7 +
      '</div><div id="vidos226" class="vidos"></div><div class="analogi" id="analogi226"></div>';
  } else {
    spina_raz11 = "";
  }

  if (spina_raz1 == "" && trenageri == "yes") {
    spina_raz12 =
      upp6 +
      'giperekstenzia_obratnaia.html" >Обратная гиперэкстензия</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>190,1073</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka190" ' +
      upp7 +
      '</div><div id="vidos190" class="vidos"></div><div class="analogi" id="analogi190"></div>';
  } else {
    spina_raz12 = "";
  }

  if (spina_raz1 == "" && spina_raz12 == "" && trenageri != "yes") {
    spina_raz13 =
      upp6 +
      'giperekstenzia_obratnaia2.html" >Обратная гиперэкстензия без тренажёра</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>388,1912</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka388" ' +
      upp7 +
      '</div><div id="vidos388" class="vidos"></div><div class="analogi" id="analogi388"></div>';
  } else {
    spina_raz13 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    spina_raz14 =
      upp6 +
      'brosok_sanbag.html" >Бросок сэндбэга через голову</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>353,1700</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka353" ' +
      upp7 +
      '</div><div id="vidos353" class="vidos"></div><div class="analogi" id="analogi353"></div>';
  } else {
    spina_raz14 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    spina_raz15 =
      upp6 +
      'zabras_sanbag.html" >Забрасывание сэндбэга на плечо</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez53" id="ypr_ves"></div></td></tr></table>354,1701</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka354" ' +
      upp7 +
      '</div><div id="vidos354" class="vidos"></div><div class="analogi" id="analogi354"></div>';
  } else {
    spina_raz15 = "";
  }

  if (tyrnik == "yes" && podt == "yes") {
    spina1 =
      upp6 +
      'podtiagivania_shiroko.html" >Подтягивания широким хватом к груди</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez21" id="ypr_ves"></div></td></tr></table>79,134</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka79" ' +
      upp7 +
      '</div><div id="vidos79" class="vidos"></div><div class="analogi" id="analogi79"></div>';
  } else {
    spina1 = "";
  }

  if (trenageri == "yes" && spina1 == "" && telo != "ochen_polnoe") {
    spina2 =
      upp6 +
      'podtiagivania_shiroko_grav.html" >Подтягивания широким хв. в гравитроне</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>450,2048</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka450" ' +
      upp7 +
      '</div><div id="vidos450" class="vidos"></div><div class="analogi" id="analogi450"></div>';
  } else {
    spina2 = "";
  }

  if (
    (((telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
      podgotovka != "net" &&
      pol == "woman") ||
      (pol == "man" && podt != "yes")) &&
    ((chtanga == "yes" && stoiki == "yes") || trenageri == "yes")
  ) {
    spina3 =
      upp6 +
      'podtiagivanie_smit.html" >Подтягивания в машине смита</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>140,871</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka140" ' +
      upp7 +
      '</div><div id="vidos140" class="vidos"></div><div class="analogi" id="analogi140"></div>';
  } else {
    spina3 = "";
  }

  if (trx == "yes") {
    spina4 =
      upp6 +
      'podtiagivanie_liamki.html" >Подтягивания на лентах / петлях</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>249,1413</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka249" ' +
      upp7 +
      '</div><div id="vidos249" class="vidos"></div><div class="analogi" id="analogi249"></div>';
  } else {
    spina4 = "";
  }

  if (trx == "yes" && spina1 == "" && spina2 == "") {
    spina5 =
      upp6 +
      'trx_podtiagivania.html" >Подтягивания вертикальные на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>376,1725</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka376" ' +
      upp7 +
      '</div><div id="vidos376" class="vidos"></div><div class="analogi" id="analogi376"></div>';
  } else {
    spina5 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka != "net" &&
    spina != "yes" &&
    kifoz != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    spina6 =
      upp6 +
      'tiaga_shtangi_v_naklone.html" >Тяга штанги в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez22" id="ypr_ves"></div></td></tr></table>59,258</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka59" ' +
      upp7 +
      '</div><div id="vidos59" class="vidos"></div><div class="analogi" id="analogi59"></div>';
  } else {
    spina6 = "";
  }

  if (plecho != "yes" && trenageri == "yes") {
    spina7 =
      upp6 +
      'tiaga_s_verhnego_bloka2.html" >Тяга за голову с верхнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>13,322</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka13" ' +
      upp7 +
      '</div><div id="vidos13" class="vidos"></div><div class="analogi" id="analogi13"></div>';
  } else {
    spina7 = "";
  }

  if (spina != "yes" && trenageri == "yes") {
    spina8 =
      upp6 +
      'tiaga_gorizontalnogo_bloka.html" >Тяга горизонтального блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>3,319</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka3" ' +
      upp7 +
      '</div><div id="vidos3" class="vidos"></div><div class="analogi" id="analogi3"></div>';
  } else {
    spina8 = "";
  }

  if (spina != "yes" && rezina == "yes" && spina8 == "") {
    spina9 =
      upp6 +
      'rezina_gorizontalno.html" >Тяга горизонтальная с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>351,1664</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka351" ' +
      upp7 +
      '</div><div id="vidos351" class="vidos"></div><div class="analogi" id="analogi351"></div>';
  } else {
    spina9 = "";
  }

  if (trenageri == "yes") {
    spina10 =
      upp6 +
      'tiaga_s_verhnego_bloka.html" >Тяга к груди с верх. блока широким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>82,31</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka82" ' +
      upp7 +
      '</div><div id="vidos82" class="vidos"></div><div class="analogi" id="analogi82"></div>';
  } else {
    spina10 = "";
  }

  if (trenageri == "yes") {
    spina11 =
      upp6 +
      'tiaga_s_verhnego_bloka3.html" >Тяга с верхнего блока узким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>35,321</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka35" ' +
      upp7 +
      '</div><div id="vidos35" class="vidos"></div><div class="analogi" id="analogi35"></div>';
  } else {
    spina11 = "";
  }

  if (spina6 == "" && ganteli == "yes" && spina != "yes") {
    spina12 =
      upp6 +
      'tiaga_ganteli2.html" >Тяга гантелей в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez24" id="ypr_ves"></div></td></tr></table>54,347</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka54" ' +
      upp7 +
      '</div><div id="vidos54" class="vidos"></div><div class="analogi" id="analogi54"></div>';
  } else {
    spina12 = "";
  }

  if (spina6 == "" && rezina == "yes" && spina12 == "" && spina != "yes") {
    spina13 =
      upp6 +
      'tiaga_naklon_petli.html" >Тяга в наклоне с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>304,1613</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka304" ' +
      upp7 +
      '</div><div id="vidos304" class="vidos"></div><div class="analogi" id="analogi304"></div>';
  } else {
    spina13 = "";
  }

  if (
    spina6 == "" &&
    beg == "yes" &&
    spina11 == "" &&
    spina13 == "" &&
    spina != "yes"
  ) {
    spina14 =
      upp6 +
      'sandbag_tiaga.html" >Тяга сэндбэга в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez6" id="ypr_ves"></div></td></tr></table>363,1712</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka363" ' +
      upp7 +
      '</div><div id="vidos363" class="vidos"></div><div class="analogi" id="analogi363"></div>';
  } else {
    spina14 = "";
  }

  if (ganteli == "yes") {
    spina15 =
      upp6 +
      'tiaga_ganteli.html" >Тяга одной гантели в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez23" id="ypr_ves"></div></td></tr></table>31,259</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka31" ' +
      upp7 +
      '</div><div id="vidos31" class="vidos"></div><div class="analogi" id="analogi31"></div>';
  } else {
    spina15 = "";
  }

  if (rezina == "yes" && spina15 == "") {
    spina16 =
      upp6 +
      'rezina_tiaga_ganteli.html" >Тяга одной рукой в наклоне с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>329,1640</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka329" ' +
      upp7 +
      '</div><div id="vidos329" class="vidos"></div><div class="analogi" id="analogi329"></div>';
  } else {
    spina16 = "";
  }

  if (plecho != "yes" && ganteli == "yes") {
    spina17 =
      upp6 +
      'pylover_s_gantelei.html" >Пуловер с гантелей лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez25" id="ypr_ves"></div></td></tr></table>8,267</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka8" ' +
      upp7 +
      '</div><div id="vidos8" class="vidos"></div><div class="analogi" id="analogi8"></div>';
  } else {
    spina17 = "";
  }

  if (spina17 == "" && plecho != "yes" && chtanga == "yes") {
    spina18 =
      upp6 +
      'pylover_so_shtangoi.html" >Пуловер лёжа со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez25" id="ypr_ves"></div></td></tr></table>219,266</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka219" ' +
      upp7 +
      '</div><div id="vidos219" class="vidos"></div><div class="analogi" id="analogi219"></div>';
  } else {
    spina18 = "";
  }

  if (plecho != "yes" && rezina == "yes" && spina17 == "" && spina18 == "") {
    spina19 =
      upp6 +
      'rezina_pylover.html" >Пуловер лёжа с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>312,1620</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka312" ' +
      upp7 +
      '</div><div id="vidos312" class="vidos"></div><div class="analogi" id="analogi312"></div>';
  } else {
    spina19 = "";
  }

  if (
    plecho != "yes" &&
    spina != "yes" &&
    trx == "yes" &&
    spina17 == "" &&
    spina18 == "" &&
    spina19 == ""
  ) {
    spina20 =
      upp6 +
      'trx_pylover.html" >Пуловер на TRX-петлях</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>370,1719</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka370" ' +
      upp7 +
      '</div><div id="vidos370" class="vidos"></div><div class="analogi" id="analogi370"></div>';
  } else {
    spina20 = "";
  }

  if (trenageri == "yes") {
    spina21 =
      upp6 +
      'tiaga_leja.html" >Тяга Т-грифа лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez27" id="ypr_ves"></div></td></tr></table>222,317</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka222" ' +
      upp7 +
      '</div><div id="vidos222" class="vidos"></div><div class="analogi" id="analogi222"></div>';
  } else {
    spina21 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    spina != "yes" &&
    grija != "yes" &&
    trenageri == "yes"
  ) {
    spina22 =
      upp6 +
      'tiaga_v_naklone.html" >Тяга Т-грифа в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez22" id="ypr_ves"></div></td></tr></table>105,318</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka105" ' +
      upp7 +
      '</div><div id="vidos105" class="vidos"></div><div class="analogi" id="analogi105"></div>';
  } else {
    spina22 = "";
  }

  if (trenageri == "yes") {
    spina23 =
      upp6 +
      'tiaga_s_verhnego_bloka4.html" >Тяга с верхнего блока на прямых руках</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>109,320</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka109" ' +
      upp7 +
      '</div><div id="vidos109" class="vidos"></div><div class="analogi" id="analogi109"></div>';
  } else {
    spina23 = "";
  }

  if (rezina == "yes" && spina23 == "") {
    spina24 =
      upp6 +
      'rezina_tiaga.html" >Тяга резины сверху на прямых руках</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>332,1644</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka332" ' +
      upp7 +
      '</div><div id="vidos332" class="vidos"></div><div class="analogi" id="analogi332"></div>';
  } else {
    spina24 = "";
  }

  if (
    (pol == "man" && grija != "yes" && chtanga == "yes") ||
    (sheia8 == "yes" && grija != "yes" && chtanga == "yes")
  ) {
    spina25 =
      upp6 +
      'shragi_shtanga.html" >Шраги со штангой стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez26" id="ypr_ves"></div></td></tr></table>89,271</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka89" ' +
      upp7 +
      '</div><div id="vidos89" class="vidos"></div><div class="analogi" id="analogi89"></div>';
  } else {
    spina25 = "";
  }

  if (ganteli == "yes" && spina25 == "") {
    spina26 =
      upp6 +
      'shragi_ganteli.html" >Шраги с гантелями стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez27" id="ypr_ves"></div></td></tr></table>32,270</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka32" ' +
      upp7 +
      '</div><div id="vidos32" class="vidos"></div><div class="analogi" id="analogi32"></div>';
  } else {
    spina26 = "";
  }

  if (rezina == "yes" && spina25 == "" && spina26 == "") {
    spina27 =
      upp6 +
      'rezina_shragi.html" >Шраги с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>333,1645</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka333" ' +
      upp7 +
      '</div><div id="vidos333" class="vidos"></div><div class="analogi" id="analogi333"></div>';
  } else {
    spina27 = "";
  }

  if (ganteli == "yes" && lavka == "yes") {
    spina28 =
      upp6 +
      'tiaga_gantelei_leja.html" >Тяга гантелей лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez24" id="ypr_ves"></div></td></tr></table>291,1467</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka291" ' +
      upp7 +
      '</div><div id="vidos291" class="vidos"></div><div class="analogi" id="analogi291"></div>';
  } else {
    spina28 = "";
  }

  if (trenageri == "yes") {
    spina29 =
      upp6 +
      'tiaga_v_naklone2.html" >Тяга в наклоне с нижнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>296,1608</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka296" ' +
      upp7 +
      '</div><div id="vidos296" class="vidos"></div><div class="analogi" id="analogi296"></div>';
  } else {
    spina29 = "";
  }

  if (rezina == "yes" && spina29 == "") {
    spina30 =
      upp6 +
      'rezina_tiaga_v_naklone.html" >Тяга резины снизу в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>348,1661</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka348" ' +
      upp7 +
      '</div><div id="vidos348" class="vidos"></div><div class="analogi" id="analogi348"></div>';
  } else {
    spina30 = "";
  }

  if (trx == "yes") {
    spina31 =
      upp6 +
      'trx_bokovie.html" >Боковые подтягивания на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>398,1922</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka398" ' +
      upp7 +
      '</div><div id="vidos398" class="vidos"></div><div class="analogi" id="analogi398"></div>';
  } else {
    spina31 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    spina32 =
      upp6 +
      'sandbag_rivok.html" >Рывок сэндбэга</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>360,1708</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka360" ' +
      upp7 +
      '</div><div id="vidos360" class="vidos"></div><div class="analogi" id="analogi360"></div>';
  } else {
    spina32 = "";
  }

  spina33 =
    upp6 +
    'prostin_podtiagivania.html" >Подтягивания на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>391,1915</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka391" ' +
    upp7 +
    '</div><div id="vidos391" class="vidos"></div><div class="analogi" id="analogi391"></div>';

  if (
    (pol == "woman" && telo != "ochen_polnoe" && telo != "polnoe") ||
    (pol == "man" && telo != "ochen_polnoe")
  ) {
    spina34 =
      upp6 +
      'podtiagivania_lega.html" >Подтягивания лёжа на полу</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>385,1909</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka385" ' +
      upp7 +
      '</div><div id="vidos385" class="vidos"></div><div class="analogi" id="analogi385"></div>';
  } else {
    spina34 = "";
  }

  spina35 =
    upp6 +
    'polotence_gorizontalno.html" >Тяга горизонтальная с полотенцем</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>384,1908</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka384" ' +
    upp7 +
    '</div><div id="vidos384" class="vidos"></div><div class="analogi" id="analogi384"></div>';

  if (
    (pol == "woman" && telo != "ochen_polnoe" && telo != "polnoe") ||
    (pol == "man" && telo != "ochen_polnoe")
  ) {
    spina36 =
      upp6 +
      'prostin_pylover.html" >Пуловер на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>413,1930</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka413" ' +
      upp7 +
      '</div><div id="vidos413" class="vidos"></div><div class="analogi" id="analogi413"></div>';
  } else {
    spina36 = "";
  }

  spina37 =
    upp6 +
    'prostin_bokovie.html" >Боковые подтягивания на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>415,1933</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka415" ' +
    upp7 +
    '</div><div id="vidos415" class="vidos"></div><div class="analogi" id="analogi415"></div>';

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka == "sport" &&
    tyrnik == "yes" &&
    diastaz != "yes"
  ) {
    press1 =
      upp6 +
      'podem_nog_v_vise.html" >Подъём ног в висе</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>23,275</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka23" ' +
      upp7 +
      '</div><div id="vidos23" class="vidos"></div><div class="analogi" id="analogi23"></div>';
  } else {
    press1 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka == "sport" &&
    pol == "man" &&
    tyrnik == "yes" &&
    davlenie != "+" &&
    diastaz != "yes"
  ) {
    press2 =
      upp6 +
      'skrychivania_v_vise.html" >Скручивания в висе вниз головой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>263,1423</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka263" ' +
      upp7 +
      '</div><div id="vidos263" class="vidos"></div><div class="analogi" id="analogi263"></div>';
  } else {
    press2 = "";
  }

  if (
    (davlenie == "=" || davlenie == "-") &&
    spina != "yes" &&
    grija != "yes" &&
    lavka == "yes" &&
    diastaz != "yes"
  ) {
    press3 =
      upp6 +
      'skrychivania_na_lavke.html" >Скручивания на наклонной лавке</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>1,326</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka1" ' +
      upp7 +
      '</div><div id="vidos1" class="vidos"></div><div class="analogi" id="analogi1"></div>';
  } else {
    press3 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    trenageri == "yes"
  ) {
    press4 =
      upp6 +
      'podem_nog_v_ypore.html" >Подъём ног в упоре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>11,327</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka11" ' +
      upp7 +
      '</div><div id="vidos11" class="vidos"></div><div class="analogi" id="analogi11"></div>';
  } else {
    press4 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka == "sport" &&
    spina != "yes" &&
    grija != "yes" &&
    trenageri == "yes" &&
    diastaz != "yes"
  ) {
    press5 =
      upp6 +
      'skrychivania_rimskii_styl.html" >Скручивания в римском стуле</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>83,324</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka83" ' +
      upp7 +
      '</div><div id="vidos83" class="vidos"></div><div class="analogi" id="analogi83"></div>';
  } else {
    press5 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    (davlenie == "=" || davlenie == "-" || davlenie == "+") &&
    (podgotovka == "minimum" || podgotovka == "sport") &&
    lavka == "yes"
  ) {
    press6 =
      upp6 +
      'podem_nog_na_skameike.html" >Подъём ног на наклонной скамье</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>41,278</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka41" ' +
      upp7 +
      '</div><div id="vidos41" class="vidos"></div><div class="analogi" id="analogi41"></div>';
  } else {
    press6 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    rezina == "yes" &&
    diastaz != "yes"
  ) {
    press7 =
      upp6 +
      'rezina_skrychivania.html" >Скручивания лёжа на полу с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>311,1619</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka311" ' +
      upp7 +
      '</div><div id="vidos311" class="vidos"></div><div class="analogi" id="analogi311"></div>';
  } else {
    press7 = "";
  }

  if (press7 == "" && diastaz != "yes") {
    press8 =
      upp6 +
      'skrychivania_na_poly.html" >Скручивания лёжа на полу</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>50,276</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka50" ' +
      upp7 +
      '</div><div id="vidos50" class="vidos"></div><div class="analogi" id="analogi50"></div>';
  } else {
    press8 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    rezina == "yes" &&
    diastaz != "yes"
  ) {
    press9 =
      upp6 +
      'rezina_podem_nog_leja.html" >Подъём ног лёжа с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>325,1635</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka325" ' +
      upp7 +
      '</div><div id="vidos325" class="vidos"></div><div class="analogi" id="analogi325"></div>';
  } else {
    press9 = "";
  }

  if (press9 == "") {
    press10 =
      upp6 +
      'podem_nog_leja.html" >Подъём ног лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>52,279</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka52" ' +
      upp7 +
      '</div><div id="vidos52" class="vidos"></div><div class="analogi" id="analogi52"></div>';
  } else {
    press10 = "";
  }

  if (trx == "yes" && spina != "yes" && diastaz != "yes") {
    press11 =
      upp6 +
      'trx_podem_nog.html" >Подтягивания ног к груди на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>371,1720</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka371" ' +
      upp7 +
      '</div><div id="vidos371" class="vidos"></div><div class="analogi" id="analogi371"></div>';
  } else {
    press11 = "";
  }

  if (trenageri == "yes") {
    press12 =
      upp6 +
      'skrychivania_v_trenajere.html" >Скручивания на тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>37,329</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka37" ' +
      upp7 +
      '</div><div id="vidos37" class="vidos"></div><div class="analogi" id="analogi37"></div>';
  } else {
    press12 = "";
  }

  if (
    (telo == "hydoe" || telo == "srednee" || telo == "myskyli") &&
    podgotovka == "sport" &&
    cel == "potolstet" &&
    trenageri == "yes"
  ) {
    press13 =
      upp6 +
      'bokovie_nakloni.html" >Боковые наклоны через «козла»</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>235,325</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka235" ' +
      upp7 +
      '</div><div id="vidos235" class="vidos"></div><div class="analogi" id="analogi235"></div>';
  } else {
    press13 = "";
  }

  if (ganteli == "yes" && cel == "potolstet") {
    press14 =
      upp6 +
      'nakloni_v_bok_ganteli.html" >Наклоны в бок с гантелью</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>56,348</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka56" ' +
      upp7 +
      '</div><div id="vidos56" class="vidos"></div><div class="analogi" id="analogi56"></div>';
  } else {
    press14 = "";
  }

  if (rezina == "yes" && cel == "potolstet" && press14 == "") {
    press15 =
      upp6 +
      'rezina_nakloni.html" >Наклоны в бок с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>334,1646</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka334" ' +
      upp7 +
      '</div><div id="vidos334" class="vidos"></div><div class="analogi" id="analogi334"></div>';
  } else {
    press15 = "";
  }

  if (trenageri == "yes") {
    press16 =
      upp6 +
      'skrychivania_s_verhnego_bloka.html" >Скручивания с верхнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>77,330</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka77" ' +
      upp7 +
      '</div><div id="vidos77" class="vidos"></div><div class="analogi" id="analogi77"></div>';
  } else {
    press16 = "";
  }

  if (rezina == "yes" && press16 == "") {
    press17 =
      upp6 +
      'rezina_skrychivania2.html" >Скручивания сидя с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>313,1622</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka313" ' +
      upp7 +
      '</div><div id="vidos313" class="vidos"></div><div class="analogi" id="analogi313"></div>';
  } else {
    press17 = "";
  }

  press18 =
    upp6 +
    'podem_nog_sidia.html" >Подъём ног сидя на лавке</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>71,281</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka71" ' +
    upp7 +
    '</div><div id="vidos71" class="vidos"></div><div class="analogi" id="analogi71"></div>';

  if (trx == "yes" && spina != "yes" && diastaz != "yes") {
    press19 =
      upp6 +
      'trx_skladka.html" >Упражнение «Складка» на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>377,1726</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka377" ' +
      upp7 +
      '</div><div id="vidos377" class="vidos"></div><div class="analogi" id="analogi377"></div>';
  } else {
    press19 = "";
  }

  press20 =
    upp6 +
    'velosiped.html" >Упражнение «велосипед»</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>240,1196</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka240" ' +
    upp7 +
    '</div><div id="vidos240" class="vidos"></div><div class="analogi" id="analogi240"></div>';

  if (telo != "ochen_polnoe" && spina != "yes" && grija != "yes") {
    press21 =
      upp6 +
      'planka.html" >Упражнение «планка»</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>162,1001</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka162" ' +
      upp7 +
      '</div><div id="vidos162" class="vidos"></div><div class="analogi" id="analogi162"></div>';
  } else {
    press21 = "";
  }

  if (rezina == "yes") {
    press22 =
      upp6 +
      'rezina_vrachenie.html" >Вращение корпуса с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>346,1659</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka346" ' +
      upp7 +
      '</div><div id="vidos346" class="vidos"></div><div class="analogi" id="analogi346"></div>';
  } else {
    press22 = "";
  }

  if (press22 == "") {
    press23 =
      upp6 +
      'vrachenie_stoia.html" >Вращение корпуса стоя/сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>229,277</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka229" ' +
      upp7 +
      '</div><div id="vidos229" class="vidos"></div><div class="analogi" id="analogi229"></div>';
  } else {
    press23 = "";
  }

  if (pol == "woman" && trenageri == "yes") {
    press24 =
      upp6 +
      'vrachenia_v_trenajere.html" >Вращения в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>228,328</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka228" ' +
      upp7 +
      '</div><div id="vidos228" class="vidos"></div><div class="analogi" id="analogi228"></div>';
  } else {
    press24 = "";
  }

  if (
    telo != "ochen_polnoe" &&
    spina != "yes" &&
    rezina == "yes" &&
    diastaz != "yes"
  ) {
    press25 =
      upp6 +
      'rzina_nogi.html" >Подтягивание ног с резиной в упоре лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>339,1652</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka339" ' +
      upp7 +
      '</div><div id="vidos339" class="vidos"></div><div class="analogi" id="analogi339"></div>';
  } else {
    press25 = "";
  }

  if (
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    chtanga == "yes" &&
    stoiki == "yes" &&
    lavka == "yes"
  ) {
    grud1 =
      upp6 +
      'jim_leja.html" >Жим штанги лёжа классический</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez78" id="ypr_ves"></div></td></tr></table>33,219</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka33" ' +
      upp7 +
      '</div><div id="vidos33" class="vidos"></div><div class="analogi" id="analogi33"></div>';
  } else {
    grud1 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    chtanga == "yes" &&
    stoiki == "yes" &&
    lavka == "yes"
  ) {
    grud2 =
      upp6 +
      'jim_leja_pod_yglom.html" >Жим штанги лёжа под углом вверх</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez72" id="ypr_ves"></div></td></tr></table>98,225</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka98" ' +
      upp7 +
      '</div><div id="vidos98" class="vidos"></div><div class="analogi" id="analogi98"></div>';
  } else {
    grud2 = "";
  }

  if (plecho != "yes" && ganteli == "yes") {
    grud3 =
      upp6 +
      'pazvodi_ganteli_gorizontalno.html" >Разводы с гантелями лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez74" id="ypr_ves"></div></td></tr></table>46,224</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka46" ' +
      upp7 +
      '</div><div id="vidos46" class="vidos"></div><div class="analogi" id="analogi46"></div>';
  } else {
    grud3 = "";
  }

  if (plecho != "yes" && rezina == "yes" && grud3 == "") {
    grud4 =
      upp6 +
      'rezina_svedenie.html" >Сведение рук с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>323,1633</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka323" ' +
      upp7 +
      '</div><div id="vidos323" class="vidos"></div><div class="analogi" id="analogi323"></div>';
  } else {
    grud4 = "";
  }

  if (
    plecho != "yes" &&
    kist != "yes" &&
    otgim_pol == "yes" &&
    rezina == "yes"
  ) {
    grud5 =
      upp6 +
      'rezina_otjimaniy_ot_pola.html" >Отжимания от пола широким хв. с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>337,1650</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka337" ' +
      upp7 +
      '</div><div id="vidos337" class="vidos"></div><div class="analogi" id="analogi337"></div>';
  } else {
    grud5 = "";
  }

  if (plecho != "yes" && kist != "yes" && otgim_pol == "yes" && grud5 == "") {
    grud6 =
      upp6 +
      'otjimaniy_ot_pola.html" >Отжимания от пола широким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez71" id="ypr_ves"></div></td></tr></table>21,228</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka21" ' +
      upp7 +
      '</div><div id="vidos21" class="vidos"></div><div class="analogi" id="analogi21"></div>';
  } else {
    grud6 = "";
  }

  if (trx == "yes" && grud5 == "" && grud6 == "") {
    grud7 =
      upp6 +
      'otjimaniy_ot_trx.html" >Отжимания на TRX широким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>380,1784</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka380" ' +
      upp7 +
      '</div><div id="vidos380" class="vidos"></div><div class="analogi" id="analogi380"></div>';
  } else {
    grud7 = "";
  }

  if (trenageri == "yes") {
    grud8 =
      upp6 +
      'jim_v_trenajere.html" >Жим в грудном тренажёре сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>6,299</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka6" ' +
      upp7 +
      '</div><div id="vidos6" class="vidos"></div><div class="analogi" id="analogi6"></div>';
  } else {
    grud8 = "";
  }

  if (trenageri == "yes") {
    grud9 =
      upp6 +
      'svedenie_ryk.html" >Сведение рук в тренажёре «бабочка»</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>18,296</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka18" ' +
      upp7 +
      '</div><div id="vidos18" class="vidos"></div><div class="analogi" id="analogi18"></div>';
  } else {
    grud9 = "";
  }

  if (
    podgotovka != "net" &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    ganteli == "yes"
  ) {
    grud10 =
      upp6 +
      'jim_gantelei_lega.html" >Жим гантелей лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez79" id="ypr_ves"></div></td></tr></table>72,221</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka72" ' +
      upp7 +
      '</div><div id="vidos72" class="vidos"></div><div class="analogi" id="analogi72"></div>';
  } else {
    grud10 = "";
  }

  if (rezina == "yes" && grud10 == "" && grud1 == "" && grud2 == "") {
    grud11 =
      upp6 +
      'rezina_jim.html" >Жим перед собой с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>315,1624</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka315" ' +
      upp7 +
      '</div><div id="vidos315" class="vidos"></div><div class="analogi" id="analogi315"></div>';
  } else {
    grud11 = "";
  }

  if (
    podgotovka != "net" &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    ganteli == "yes" &&
    lavka == "yes" &&
    grud10 == ""
  ) {
    grud12 =
      upp6 +
      'jim_gantelei_vverh.html" >Жим гантелями лёжа под углом вверх</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez73" id="ypr_ves"></div></td></tr></table>45,223</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka45" ' +
      upp7 +
      '</div><div id="vidos45" class="vidos"></div><div class="analogi" id="analogi45"></div>';
  } else {
    grud12 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    plecho != "yes" &&
    ganteli == "yes" &&
    lavka == "yes" &&
    grud4 == ""
  ) {
    grud13 =
      upp6 +
      'pazvodi_ganteli.html" >Разводы с гантелями под углом вверх</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez75" id="ypr_ves"></div></td></tr></table>80,222</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka80" ' +
      upp7 +
      '</div><div id="vidos80" class="vidos"></div><div class="analogi" id="analogi80"></div>';
  } else {
    grud13 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    plecho != "yes" &&
    kist != "yes" &&
    grud5 == "" &&
    grud6 == ""
  ) {
    grud14 =
      upp6 +
      'otjimaniy_ot_lavki.html" >Отжимания широким хватом от лавки</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>47,227</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka47" ' +
      upp7 +
      '</div><div id="vidos47" class="vidos"></div><div class="analogi" id="analogi47"></div>';
  } else {
    grud14 = "";
  }

  if (podgotovka != "net" && plecho != "yes" && trenageri == "yes") {
    grud15 =
      upp6 +
      'svedenie_ryk3.html" >Сведение рук в кроссовере лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>217,298</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka217" ' +
      upp7 +
      '</div><div id="vidos217" class="vidos"></div><div class="analogi" id="analogi217"></div>';
  } else {
    grud15 = "";
  }

  if (trx == "yes") {
    grud16 =
      upp6 +
      'trx_svedenie.html" >Сведение рук на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>368,1717</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka368" ' +
      upp7 +
      '</div><div id="vidos368" class="vidos"></div><div class="analogi" id="analogi368"></div>';
  } else {
    grud16 = "";
  }

  if (pol == "man" && trenageri == "yes") {
    grud17 =
      upp6 +
      'svedenie_ryk2.html" >Сведение рук с верхнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>107,297</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka107" ' +
      upp7 +
      '</div><div id="vidos107" class="vidos"></div><div class="analogi" id="analogi107"></div>';
  } else {
    grud17 = "";
  }

  if (pol == "man" && rezina == "yes" && grud17 == "") {
    grud18 =
      upp6 +
      'rezina_svedenie2.html" >Приведение руки с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>344,1658</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka344" ' +
      upp7 +
      '</div><div id="vidos344" class="vidos"></div><div class="analogi" id="analogi344"></div>';
  } else {
    grud18 = "";
  }

  if (
    pol == "man" &&
    davlenie == "=" &&
    podgotovka == "sport" &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    ganteli == "yes" &&
    lavka == "yes"
  ) {
    grud19 =
      upp6 +
      'jim_leja_vniz_golovoi2.html" >Жим гантелями лёжа под углом вниз</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez73" id="ypr_ves"></div></td></tr></table>209,226</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka209" ' +
      upp7 +
      '</div><div id="vidos209" class="vidos"></div><div class="analogi" id="analogi209"></div>';
  } else {
    grud19 = "";
  }

  if (
    pol == "man" &&
    (davlenie == "=" || davlenie == "-") &&
    podgotovka == "sport" &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    chtanga == "yes" &&
    lavka == "yes" &&
    stoiki == "yes"
  ) {
    grud20 =
      upp6 +
      'jim_leja_vniz_golovoi.html" >Жим штанги лёжа под углом вниз</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez72" id="ypr_ves"></div></td></tr></table>208,220</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka208" ' +
      upp7 +
      '</div><div id="vidos208" class="vidos"></div><div class="analogi" id="analogi208"></div>';
  } else {
    grud20 = "";
  }

  if (pol == "man" && telo != "ochen_polnoe") {
    grud21 =
      upp6 +
      'svedenie_lega.html" >Сведение рук в упоре лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>386,1910</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka386" ' +
      upp7 +
      '</div><div id="vidos386" class="vidos"></div><div class="analogi" id="analogi386"></div>';
  } else {
    grud21 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    grud22 =
      upp6 +
      'sandbag_shvung2.html" >Подъём сэндбэга на плечо + швунг</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez52" id="ypr_ves"></div></td></tr></table>361,1710</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka361" ' +
      upp7 +
      '</div><div id="vidos361" class="vidos"></div><div class="analogi" id="analogi361"></div>';
  } else {
    grud22 = "";
  }

  grud23 =
    upp6 +
    'prostin_otjimaniy.html" >Отжимания от простыни широким хватом</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>395,1919</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka395" ' +
    upp7 +
    '</div><div id="vidos395" class="vidos"></div><div class="analogi" id="analogi395"></div>';

  grud24 =
    upp6 +
    'prostin_svedenie.html" >Сведение рук на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>396,1920</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka396" ' +
    upp7 +
    '</div><div id="vidos396" class="vidos"></div><div class="analogi" id="analogi396"></div>';

  if (
    (grud1 != "" && grud2 != "" && grud12 != "") ||
    (grud2 != "" && grud12 != "")
  ) {
    grud2 = "";
  }

  if (
    pol == "man" &&
    plecho != "yes" &&
    chtanga != "yes" &&
    ganteli != "yes" &&
    trenageri != "yes" &&
    rezina != "yes" &&
    davlenie != "+" &&
    telo != "ochen_polnoe"
  ) {
    plechi1 =
      upp6 +
      'otgimania_vniz_golovoi.html" >Отжимания вниз головой с помощью ног</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>383,1907</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka383" ' +
      upp7 +
      '</div><div id="vidos383" class="vidos"></div><div class="analogi" id="analogi383"></div>';
  } else {
    plechi1 = "";
  }

  if (
    spina != "yes" &&
    plecho != "yes" &&
    kist != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    plechi2 =
      upp6 +
      'gim_shtangi_s_grydi.html" >Жим штанги с груди стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez38" id="ypr_ves"></div></td></tr></table>39,76</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka39" ' +
      upp7 +
      '</div><div id="vidos39" class="vidos"></div><div class="analogi" id="analogi39"></div>';
  } else {
    plechi2 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    spina != "yes" &&
    plecho != "yes" &&
    lokot != "yes" &&
    grija != "yes" &&
    chtanga == "yes"
  ) {
    plechi4 =
      upp6 +
      'gim_shtangi_iz_za_golovi.html" >Жим штанги из-за головы стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez32" id="ypr_ves"></div></td></tr></table>44,229</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka44" ' +
      upp7 +
      '</div><div id="vidos44" class="vidos"></div><div class="analogi" id="analogi44"></div>';
  } else {
    plechi4 = "";
  }

  if (plecho != "yes" && lokot != "yes" && ganteli == "yes" && plechi2 == "") {
    plechi5 =
      upp6 +
      'jim_gantelei_sidia.html" >Жим гантелей сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez31" id="ypr_ves"></div></td></tr></table>16,78</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka16" ' +
      upp7 +
      '</div><div id="vidos16" class="vidos"></div><div class="analogi" id="analogi16"></div>';
  } else {
    plechi5 = "";
  }

  if (plecho != "yes" && chtanga == "yes") {
    plechi6 =
      upp6 +
      'protiajka.html" >Протяжка со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez35" id="ypr_ves"></div></td></tr></table>9,232</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka9" ' +
      upp7 +
      '</div><div id="vidos9" class="vidos"></div><div class="analogi" id="analogi9"></div>';
  } else {
    plechi6 = "";
  }

  if (ganteli == "yes") {
    plechi8 =
      upp6 +
      'mahi_vpered.html" >Махи гантелями вперёд</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez37" id="ypr_ves"></div></td></tr></table>73,235</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka73" ' +
      upp7 +
      '</div><div id="vidos73" class="vidos"></div><div class="analogi" id="analogi73"></div>';
  } else {
    plechi8 = "";
  }

  if (ganteli == "yes") {
    plechi10 =
      upp6 +
      'mahi_v_storoni.html" >Махи гантелями в стороны</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez33" id="ypr_ves"></div></td></tr></table>40,233</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka40" ' +
      upp7 +
      '</div><div id="vidos40" class="vidos"></div><div class="analogi" id="analogi40"></div>';
  } else {
    plechi10 = "";
  }

  if (trenageri == "yes") {
    plechi12 =
      upp6 +
      'jim_vverh.html" >Жим сидя вверх в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>169,306</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka169" ' +
      upp7 +
      '</div><div id="vidos169" class="vidos"></div><div class="analogi" id="analogi169"></div>';
  } else {
    plechi12 = "";
  }

  if (
    spina != "yes" &&
    plecho != "yes" &&
    lokot != "yes" &&
    lavka == "yes" &&
    chtanga == "yes" &&
    plechi2 == ""
  ) {
    plechi13 =
      upp6 +
      'gim_shtangi_s_grydi.html" >Жим штанги с груди сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez38" id="ypr_ves"></div></td></tr></table>452,83</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka452" ' +
      upp7 +
      '</div><div id="vidos452" class="vidos"></div><div class="analogi" id="analogi452"></div>';
  } else {
    plechi13 = "";
  }

  if (
    spina != "yes" &&
    plecho != "yes" &&
    kist != "yes" &&
    osteoxondroz != "yes" &&
    grija != "yes" &&
    rezina == "yes" &&
    plechi2 == "" &&
    plechi13 == ""
  ) {
    plechi3 =
      upp6 +
      'rezina_gim_s_grydi.html" >Жим резины с груди стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>318,1627</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka318" ' +
      upp7 +
      '</div><div id="vidos318" class="vidos"></div><div class="analogi" id="analogi318"></div>';
  } else {
    plechi3 = "";
  }

  if (chtanga == "yes" && plechi8 == "") {
    plechi14 =
      upp6 +
      'mahi_shtangoi.html" >Махи вперёд со штангой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>298,230</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka298" ' +
      upp7 +
      '</div><div id="vidos298" class="vidos"></div><div class="analogi" id="analogi298"></div>';
  } else {
    plechi14 = "";
  }

  if (podgotovka != "net" && spina != "yes" && ganteli == "yes") {
    plechi15 =
      upp6 +
      'mahi_v_naklone.html" >Махи гантелями в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez34" id="ypr_ves"></div></td></tr></table>74,237</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka74" ' +
      upp7 +
      '</div><div id="vidos74" class="vidos"></div><div class="analogi" id="analogi74"></div>';
  } else {
    plechi15 = "";
  }

  if (plecho == "yes" && trenageri == "yes") {
    plechi17 =
      upp6 +
      'mahi_v_storoni_trenager.html" >Махи руками в стороны в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>212,304</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka212" ' +
      upp7 +
      '</div><div id="vidos212" class="vidos"></div><div class="analogi" id="analogi212"></div>';
  } else {
    plechi17 = "";
  }

  if (trenageri == "yes") {
    plechi18 =
      upp6 +
      'pazvedenie_ryk_nazad_trenajer.html" >Разведение рук назад в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>215,301</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka215" ' +
      upp7 +
      '</div><div id="vidos215" class="vidos"></div><div class="analogi" id="analogi215"></div>';
  } else {
    plechi18 = "";
  }

  if (rezina == "yes" && plechi18 == "") {
    plechi19 =
      upp6 +
      'rezina_mahi_nazad.html" >Разведение рук назад с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>320,1629</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka320" ' +
      upp7 +
      '</div><div id="vidos320" class="vidos"></div><div class="analogi" id="analogi320"></div>';
  } else {
    plechi19 = "";
  }

  if (trx == "yes" && plechi18 == "" && plechi19 == "") {
    plechi20 =
      upp6 +
      'trx_mahi_nazad.html" >Разведение рук назад на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>374,1724</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka374" ' +
      upp7 +
      '</div><div id="vidos374" class="vidos"></div><div class="analogi" id="analogi374"></div>';
  } else {
    plechi20 = "";
  }

  if (plecho != "yes" && lokot != "yes" && chtanga == "yes" && plechi4 == "") {
    plechi21 =
      upp6 +
      'gim_shtangi_iz_za_golovi.html" >Жим штанги из-за головы сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez32" id="ypr_ves"></div></td></tr></table>44,88</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka44" ' +
      upp7 +
      '</div><div id="vidos44" class="vidos"></div><div class="analogi" id="analogi44"></div>';
  } else {
    plechi21 = "";
  }

  if (
    spina != "yes" &&
    plecho != "yes" &&
    lokot != "yes" &&
    grija != "yes" &&
    ganteli == "yes" &&
    plechi5 == ""
  ) {
    plechi22 =
      upp6 +
      'jim_gantelei_sidia.html" >Жим гантелей стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>49,139</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka49" ' +
      upp7 +
      '</div><div id="vidos49" class="vidos"></div><div class="analogi" id="analogi49"></div>';
  } else {
    plechi22 = "";
  }

  if (trx == "yes") {
    plechi23 =
      upp6 +
      'trx_zadniy_delty.html" >Подтягивания на заднюю дельту на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>367,1716</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka367" ' +
      upp7 +
      '</div><div id="vidos367" class="vidos"></div><div class="analogi" id="analogi367"></div>';
  } else {
    plechi23 = "";
  }

  if (trenageri == "yes") {
    plechi24 =
      upp6 +
      'mahi_vpered3.html" >Махи вперёд с нижнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>172,305</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka172" ' +
      upp7 +
      '</div><div id="vidos172" class="vidos"></div><div class="analogi" id="analogi172"></div>';
  } else {
    plechi24 = "";
  }

  if (rezina == "yes" && plechi8 == "" && plechi14 == "" && plechi24 == "") {
    plechi9 =
      upp6 +
      'rezina_mahi.html" >Махи перед собой с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>321,1630</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka321" ' +
      upp7 +
      '</div><div id="vidos321" class="vidos"></div><div class="analogi" id="analogi321"></div>';
  } else {
    plechi9 = "";
  }

  if (trx == "yes" && plechi9 == "") {
    plechi25 =
      upp6 +
      'trx_mahi.html" >Подъём рук вверх на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>372,1721</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka372" ' +
      upp7 +
      '</div><div id="vidos372" class="vidos"></div><div class="analogi" id="analogi372"></div>';
  } else {
    plechi25 = "";
  }

  if (podgotovka != "net" && trenageri == "yes") {
    plechi26 =
      upp6 +
      'mahi_nazad.html" >Махи руками назад в кроссовере</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>213,300</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka213" ' +
      upp7 +
      '</div><div id="vidos213" class="vidos"></div><div class="analogi" id="analogi213"></div>';
  } else {
    plechi26 = "";
  }

  if (podgotovka != "net" && rezina == "yes" && plechi26 == "") {
    plechi27 =
      upp6 +
      'rezina_nazad.html" >Отведение руки назад с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>343,1656</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka343" ' +
      upp7 +
      '</div><div id="vidos343" class="vidos"></div><div class="analogi" id="analogi343"></div>';
  } else {
    plechi27 = "";
  }

  if (trenageri == "yes") {
    plechi28 =
      upp6 +
      'mahi_v_krossovere.html" >Махи рукой в сторону с нижнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>211,302</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka211" ' +
      upp7 +
      '</div><div id="vidos211" class="vidos"></div><div class="analogi" id="analogi211"></div>';
  } else {
    plechi28 = "";
  }

  if (rezina == "yes" && plechi10 == "" && plechi28 == "") {
    plechi11 =
      upp6 +
      'rezina_mahi_v_storoni.html" >Махи рукой в сторону с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>330,1641</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka330" ' +
      upp7 +
      '</div><div id="vidos330" class="vidos"></div><div class="analogi" id="analogi330"></div>';
  } else {
    plechi11 = "";
  }

  if (podgotovka != "net" && plecho != "yes" && trenageri == "yes") {
    plechi29 =
      upp6 +
      'mahi_v_krossovere2.html" >Махи руками с нижнего блока в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>214,303</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka214" ' +
      upp7 +
      '</div><div id="vidos214" class="vidos"></div><div class="analogi" id="analogi214"></div>';
  } else {
    plechi29 = "";
  }

  if (
    podgotovka != "net" &&
    spina != "yes" &&
    rezina == "yes" &&
    plechi15 == "" &&
    plechi29 == ""
  ) {
    plechi16 =
      upp6 +
      'rezina_mahi_v_naklone.html" >Махи рукой в наклоне с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>341,1654</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka341" ' +
      upp7 +
      '</div><div id="vidos341" class="vidos"></div><div class="analogi" id="analogi341"></div>';
  } else {
    plechi16 = "";
  }

  if (plecho != "yes" && ganteli == "yes" && podgotovka != "net") {
    plechi30 =
      upp6 +
      'jim_arnolda.html" >Жим Арнольда</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez80" id="ypr_ves"></div></td></tr></table>293,1213</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka293" ' +
      upp7 +
      '</div><div id="vidos293" class="vidos"></div><div class="analogi" id="analogi293"></div>';
  } else {
    plechi30 = "";
  }

  if (plecho != "yes" && ganteli == "yes" && plechi5 == "") {
    plechi31 =
      upp6 +
      'protiajka_ganteli.html" >Протяжка с гантелями</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez36" id="ypr_ves"></div></td></tr></table>53,350</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka53" ' +
      upp7 +
      '</div><div id="vidos53" class="vidos"></div><div class="analogi" id="analogi53"></div>';
  } else {
    plechi31 = "";
  }

  if (plecho != "yes" && rezina == "yes" && plechi6 == "" && plechi31 == "") {
    plechi7 =
      upp6 +
      'protiajka_petli.html" >Протяжка с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>299,1610</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka299" ' +
      upp7 +
      '</div><div id="vidos299" class="vidos"></div><div class="analogi" id="analogi299"></div>';
  } else {
    plechi7 = "";
  }

  if (ganteli == "yes") {
    plechi32 =
      upp6 +
      'mahi_leja.html" >Махи гантели в сторону лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez33" id="ypr_ves"></div></td></tr></table>210,234</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka210" ' +
      upp7 +
      '</div><div id="vidos210" class="vidos"></div><div class="analogi" id="analogi210"></div>';
  } else {
    plechi32 = "";
  }

  if (beg == "yes" && (cel == "pohydet" || cel == "ne_meniat")) {
    plechi33 =
      upp6 +
      'sandbag_shvung.html" >Подъём сэндбэга на грудь + швунг</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez35" id="ypr_ves"></div></td></tr></table>355,1703</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka355" ' +
      upp7 +
      '</div><div id="vidos355" class="vidos"></div><div class="analogi" id="analogi355"></div>';
  } else {
    plechi33 = "";
  }

  plechi34 =
    upp6 +
    'prostin_zadniy_delty.html" >Подтягив. на зад. дельту на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>394,1918</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka394" ' +
    upp7 +
    '</div><div id="vidos394" class="vidos"></div><div class="analogi" id="analogi394"></div>';

  plechi35 =
    upp6 +
    'prostin_mahi.html" >Подъём рук вверх на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>393,1917</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka393" ' +
    upp7 +
    '</div><div id="vidos393" class="vidos"></div><div class="analogi" id="analogi393"></div>';

  plechi36 =
    upp6 +
    'prostin_mahi_nazad.html" >Разведение рук назад на простыне</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>411,1926</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka411" ' +
    upp7 +
    '</div><div id="vidos411" class="vidos"></div><div class="analogi" id="analogi411"></div>';

  if (plecho != "yes" && tyrnik == "yes" && otgim_br == "yes") {
    ryki1 =
      upp6 +
      'otjimania_ot_brysiev.html" >Отжимания от брусьев</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez51" id="ypr_ves"></div></td></tr></table>25,240</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka25" ' +
      upp7 +
      '</div><div id="vidos25" class="vidos"></div><div class="analogi" id="analogi25"></div>';
  } else {
    ryki1 = "";
  }

  if (
    plecho != "yes" &&
    trenageri == "yes" &&
    telo != "ochen_polnoe" &&
    ryki1 == ""
  ) {
    ryki2 =
      upp6 +
      'otjimania_ot_brysiev_grav.html" >Отжимания от брусьев в гравитроне</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>449,2047</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka449" ' +
      upp7 +
      '</div><div id="vidos449" class="vidos"></div><div class="analogi" id="analogi449"></div>';
  } else {
    ryki2 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    chtanga == "yes" &&
    lavka == "yes" &&
    stoiki == "yes"
  ) {
    ryki3 =
      upp6 +
      'jim_leja_uzkim_hvatom.html" >Жим штанги лёжа узким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez56" id="ypr_ves"></div></td></tr></table>60,239</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka60" ' +
      upp7 +
      '</div><div id="vidos60" class="vidos"></div><div class="analogi" id="analogi60"></div>';
  } else {
    ryki3 = "";
  }

  if (
    (podgotovka == "minimum" || podgotovka == "sport") &&
    pol == "man" &&
    trx == "yes" &&
    ryki1 == "" &&
    plecho != "yes"
  ) {
    ryki4 =
      upp6 +
      'trx_otjimaniy_szadi.html" >Отжимания сзади на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>373,1722</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka373" ' +
      upp7 +
      '</div><div id="vidos373" class="vidos"></div><div class="analogi" id="analogi373"></div>';
  } else {
    ryki4 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    ryki1 == "" &&
    ryki4 == "" &&
    pol == "man" &&
    rezina == "yes"
  ) {
    ryki5 =
      upp6 +
      'rezina_lavki_szadi.html" >Отжимания от лавки сзади с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>352,1665</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka352" ' +
      upp7 +
      '</div><div id="vidos352" class="vidos"></div><div class="analogi" id="analogi352"></div>';
  } else {
    ryki5 = "";
  }

  if (
    (telo == "hydoe" ||
      telo == "srednee" ||
      telo == "myskyli" ||
      telo == "polnoe") &&
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    ryki1 == "" &&
    ryki4 == "" &&
    ryki5 == ""
  ) {
    ryki6 =
      upp6 +
      'otjimaniy_ot_lavki_szadi.html" >Отжимания от лавки сзади</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez51" id="ypr_ves"></div></td></tr></table>48,243</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka48" ' +
      upp7 +
      '</div><div id="vidos48" class="vidos"></div><div class="analogi" id="analogi48"></div>';
  } else {
    ryki6 = "";
  }

  if (lokot != "yes" && ganteli == "yes") {
    ryki7 =
      upp6 +
      'francyzckii_jim_stoia2.html" >Французский жим с гантелей</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez54" id="ypr_ves"></div></td></tr></table>7,254</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka7" ' +
      upp7 +
      '</div><div id="vidos7" class="vidos"></div><div class="analogi" id="analogi7"></div>';
  } else {
    ryki7 = "";
  }

  if (trenageri == "yes") {
    ryki9 =
      upp6 +
      'razgibanie_ryk_verhnii_blok.html" >Разгибание рук с верхнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>67,311</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka67" ' +
      upp7 +
      '</div><div id="vidos67" class="vidos"></div><div class="analogi" id="analogi67"></div>';
  } else {
    ryki9 = "";
  }

  if (rezina == "yes" && ryki9 == "") {
    ryki10 =
      upp6 +
      'rezina_razgibanie_ryk.html" >Разгибание рук с резиной сверху</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>345,1657</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka345" ' +
      upp7 +
      '</div><div id="vidos345" class="vidos"></div><div class="analogi" id="analogi345"></div>';
  } else {
    ryki10 = "";
  }

  if (plecho != "yes" && lokot != "yes" && trx == "yes") {
    ryki11 =
      "" +
      upp6 +
      'trx_otjimaniy_uzko.html" >Отжимания на TRX узким хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>379,1745</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka379" ' +
      upp7 +
      '</div><div id="vidos379" class="vidos"></div><div class="analogi" id="analogi379"></div>';
  } else {
    ryki11 = "";
  }

  if (
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    otgim_pol == "yes" &&
    pol == "man" &&
    rezina == "yes" &&
    ryki11 == "" &&
    (podgotovka == "minimum" || podgotovka == "sport")
  ) {
    ryki12 =
      upp6 +
      'rezina_otjimaniy.html" >Отжимания от пола узким хватом с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>326,1636</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka326" ' +
      upp7 +
      '</div><div id="vidos326" class="vidos"></div><div class="analogi" id="analogi326"></div>';
  } else {
    ryki12 = "";
  }

  if (
    plecho != "yes" &&
    lokot != "yes" &&
    kist != "yes" &&
    otgim_pol == "yes" &&
    ryki11 == "" &&
    ryki12 == ""
  ) {
    ryki13 =
      upp6 +
      'otjimaniy_ot_pola2.html" >Отжимания узким хватом от пола</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez58" id="ypr_ves"></div></td></tr></table>92,249</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka92" ' +
      upp7 +
      '</div><div id="vidos92" class="vidos"></div><div class="analogi" id="analogi92"></div>';
  } else {
    ryki13 = "";
  }

  if (trx == "yes") {
    ryki14 =
      upp6 +
      'trx_triceps.html" >Разгибание рук на TRX-петлях</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>366,1715</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka366" ' +
      upp7 +
      '</div><div id="vidos366" class="vidos"></div><div class="analogi" id="analogi366"></div>';
  } else {
    ryki14 = "";
  }

  if (lokot != "yes" && chtanga == "yes") {
    ryki15 =
      upp6 +
      'francyzckii_jim_leja.html" >Французский жим со штангой лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez53" id="ypr_ves"></div></td></tr></table>78,244</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka78" ' +
      upp7 +
      '</div><div id="vidos78" class="vidos"></div><div class="analogi" id="analogi78"></div>';
  } else {
    ryki15 = "";
  }

  if (lokot != "yes" && ganteli == "yes" && ryki15 == "") {
    ryki16 =
      upp6 +
      'francyzckii_jim_leja2.html" >Французский жим с гантелями лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez55" id="ypr_ves"></div></td></tr></table>103,256</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka103" ' +
      upp7 +
      '</div><div id="vidos103" class="vidos"></div><div class="analogi" id="analogi103"></div>';
  } else {
    ryki16 = "";
  }

  if (lokot != "yes" && ganteli == "yes" && ryki15 == "" && ryki16 == "") {
    ryki17 =
      upp6 +
      'rezina_francyzckii.html" >Французский жим с резиной лёжа</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>338,1651</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka338" ' +
      upp7 +
      '</div><div id="vidos338" class="vidos"></div><div class="analogi" id="analogi338"></div>';
  } else {
    ryki17 = "";
  }

  if (lokot != "yes" && grija != "yes" && chtanga == "yes") {
    ryki18 =
      upp6 +
      'francyzckii_jim_stoia3.html" >Французский жим со штангой сидя/стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez52" id="ypr_ves"></div></td></tr></table>100,253</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka100" ' +
      upp7 +
      '</div><div id="vidos100" class="vidos"></div><div class="analogi" id="analogi100"></div>';
  } else {
    ryki18 = "";
  }

  if (podgotovka != "net" && lokot != "yes" && ganteli == "yes") {
    ryki19 =
      upp6 +
      'francyzckii_jim_stoia.html" >Французский жим с гантелью 1-й рукой</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez55" id="ypr_ves"></div></td></tr></table>95,255</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka95" ' +
      upp7 +
      '</div><div id="vidos95" class="vidos"></div><div class="analogi" id="analogi95"></div>';
  } else {
    ryki19 = "";
  }

  if (
    podgotovka != "net" &&
    lokot != "yes" &&
    rezina == "yes" &&
    ryki19 == ""
  ) {
    ryki20 =
      upp6 +
      'rezina_francyzckii2.html" >Разгибание руки с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>349,1662</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka349" ' +
      upp7 +
      '</div><div id="vidos349" class="vidos"></div><div class="analogi" id="analogi349"></div>';
  } else {
    ryki20 = "";
  }

  if (ganteli == "yes") {
    ryki21 =
      upp6 +
      'triceps_v_naklone.html" >Разгибание рук с гантелями в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez57" id="ypr_ves"></div></td></tr></table>76,242</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka76" ' +
      upp7 +
      '</div><div id="vidos76" class="vidos"></div><div class="analogi" id="analogi76"></div>';
  } else {
    ryki21 = "";
  }

  if (rezina == "yes" && ryki21 == "") {
    ryki22 =
      upp6 +
      'rezina_triceps_v_naklone.html" >Разгибание рук с резиной в наклоне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>331,1643</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka331" ' +
      upp7 +
      '</div><div id="vidos331" class="vidos"></div><div class="analogi" id="analogi331"></div>';
  } else {
    ryki22 = "";
  }

  if (trenageri == "yes") {
    ryki23 =
      upp6 +
      'triceps_v_trenagere.html" >Французский жим в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>99,307</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka99" ' +
      upp7 +
      '</div><div id="vidos99" class="vidos"></div><div class="analogi" id="analogi99"></div>';
  } else {
    ryki23 = "";
  }

  if (
    lokot != "yes" &&
    rezina == "yes" &&
    ryki7 == "" &&
    ryki18 == "" &&
    ryki23 == ""
  ) {
    ryki8 =
      upp6 +
      'rezina_francyzckii_jim.html" >Французский жим с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>317,1626</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka317" ' +
      upp7 +
      '</div><div id="vidos317" class="vidos"></div><div class="analogi" id="analogi317"></div>';
  } else {
    ryki8 = "";
  }

  if (pol == "man" && kist != "yes" && trenageri == "yes") {
    ryki24 =
      upp6 +
      'razgibanie_ryk_verhnii_blok2.html" >Разгибание рук с верх. блока хватом снизу</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>104,310</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka104" ' +
      upp7 +
      '</div><div id="vidos104" class="vidos"></div><div class="analogi" id="analogi104"></div>';
  } else {
    ryki24 = "";
  }

  if (lokot != "yes" && trenageri == "yes") {
    ryki25 =
      upp6 +
      'triceps_s_verhnego_bloka.html" >Разгибание руки с верхнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>102,314</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka102" ' +
      upp7 +
      '</div><div id="vidos102" class="vidos"></div><div class="analogi" id="analogi102"></div>';
  } else {
    ryki25 = "";
  }

  if (lokot != "yes") {
    ryki26 =
      upp6 +
      'prostin_triceps.html" >Разгибание рук на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>392,1916</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka392" ' +
      upp7 +
      '</div><div id="vidos392" class="vidos"></div><div class="analogi" id="analogi392"></div>';
  } else {
    ryki26 = "";
  }

  ryki27 =
    upp6 +
    'prostin_otjimaniy_uzko.html" >Отжимания от простыни узким хватом</a></li></div>' +
    upp5 +
    "" +
    podhodov +
    "x" +
    povtorov2 +
    '</td><td id="ypr_kg" ></td></tr></table>412,1927</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka412" ' +
    upp7 +
    '</div><div id="vidos412" class="vidos"></div><div class="analogi" id="analogi412"></div>';

  if (tyrnik == "yes" && podt == "yes") {
    ryki_biceps1 =
      upp6 +
      'podtiagivania_obratnim_hvatom.html" >Подтягивания обратным хватом</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ><div class="rez47" id="ypr_ves"></div></td></tr></table>26,262</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka26" ' +
      upp7 +
      '</div><div id="vidos26" class="vidos"></div><div class="analogi" id="analogi26"></div>';
  } else {
    ryki_biceps1 = "";
  }

  if (
    trenageri == "yes" &&
    ryki_biceps1 == "" &&
    telo != "ochen_polnoe" &&
    pol == "man"
  ) {
    ryki_biceps2 =
      upp6 +
      'podtiagivania_obratnim_hvatom_grav.html" >Подтягивания обратным хв. в гравитроне</a></li></div>' +
      upp5 +
      "" +
      podhodov2 +
      "x" +
      povtorov3 +
      '</td><td id="ypr_kg" ></td></tr></table>451,2049</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka451" ' +
      upp7 +
      '</div><div id="vidos451" class="vidos"></div><div class="analogi" id="analogi451"></div>';
  } else {
    ryki_biceps2 = "";
  }

  if (trx == "yes") {
    ryki_biceps3 =
      upp6 +
      'trx_sgibanie_ryk.html" >Сгибания рук на TRX-петлях</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>365,1714</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka365" ' +
      upp7 +
      '</div><div id="vidos365" class="vidos"></div><div class="analogi" id="analogi365"></div>';
  } else {
    ryki_biceps3 = "";
  }

  if (
    trx != "yes" &&
    rezina != "yes" &&
    chtanga != "yes" &&
    trenageri != "yes" &&
    ganteli != "yes" &&
    beg != "yes"
  ) {
    ryki_biceps4 =
      upp6 +
      'prostin_sgibanie_ryk.html" >Сгибания рук на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>390,1914</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka390" ' +
      upp7 +
      '</div><div id="vidos390" class="vidos"></div><div class="analogi" id="analogi390"></div>';
  } else {
    ryki_biceps4 = "";
  }

  if (kist != "yes" && chtanga == "yes") {
    ryki_biceps5 =
      upp6 +
      'sgibanie_ryk_so_shtangoi.html" >Сгибание рук со штангой стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez46" id="ypr_ves"></div></td></tr></table>19,245</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka19" ' +
      upp7 +
      '</div><div id="vidos19" class="vidos"></div><div class="analogi" id="analogi19"></div>';
  } else {
    ryki_biceps5 = "";
  }

  if (beg == "yes" && ryki_biceps5 == "") {
    ryki_biceps6 =
      upp6 +
      'sandbag_biceps.html" >Сгибания рук с сэндбэгом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez45" id="ypr_ves"></div></td></tr></table>364,1713</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka364" ' +
      upp7 +
      '</div><div id="vidos364" class="vidos"></div><div class="analogi" id="analogi364"></div>';
  } else {
    ryki_biceps6 = "";
  }

  if (ganteli == "yes") {
    ryki_biceps7 =
      upp6 +
      'bizeps_sidia_poperemenno.html" >Сгибания рук с гантелями сидя/стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez42" id="ypr_ves"></div></td></tr></table>57,241</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka57" ' +
      upp7 +
      '</div><div id="vidos57" class="vidos"></div><div class="analogi" id="analogi57"></div>';
  } else {
    ryki_biceps7 = "";
  }

  if (pol == "man" && kist != "yes" && ganteli == "yes") {
    ryki_biceps9 =
      upp6 +
      'biceps_molotok.html" >Сгибания рук с гантелями «молот»</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez41" id="ypr_ves"></div></td></tr></table>75,252</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka75" ' +
      upp7 +
      '</div><div id="vidos75" class="vidos"></div><div class="analogi" id="analogi75"></div>';
  } else {
    ryki_biceps9 = "";
  }

  if (pol == "man" && kist != "yes" && rezina == "yes" && ryki_biceps9 == "") {
    ryki_biceps10 =
      upp6 +
      'rezina_molotok.html" >Сгибание рук с резиной «молот»</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>342,1655</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka342" ' +
      upp7 +
      '</div><div id="vidos342" class="vidos"></div><div class="analogi" id="analogi342"></div>';
  } else {
    ryki_biceps10 = "";
  }

  if (podgotovka != "sport" && trenageri == "yes") {
    ryki_biceps11 =
      upp6 +
      'bizeps_v_krossovere2.html" >Сгибание рук с нижнего блока</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>203,309</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka203" ' +
      upp7 +
      '</div><div id="vidos203" class="vidos"></div><div class="analogi" id="analogi203"></div>';
  } else {
    ryki_biceps11 = "";
  }

  if (chtanga == "yes" && ryki_biceps5 == "") {
    ryki_biceps12 =
      upp6 +
      'bizeps_ez.html" >Сгибание рук с EZ грифом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez46" id="ypr_ves"></div></td></tr></table>110,251</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka110" ' +
      upp7 +
      '</div><div id="vidos110" class="vidos"></div><div class="analogi" id="analogi110"></div>';
  } else {
    ryki_biceps12 = "";
  }

  if (
    rezina == "yes" &&
    ryki_biceps5 == "" &&
    ryki_biceps7 == "" &&
    ryki_biceps11 == "" &&
    ryki_biceps12 == ""
  ) {
    ryki_biceps8 =
      upp6 +
      'sgibanie_ryk_rezina.html" >Сгибания рук с резиной стоя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>307,1615</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka307" ' +
      upp7 +
      '</div><div id="vidos307" class="vidos"></div><div class="analogi" id="analogi307"></div>';
  } else {
    ryki_biceps8 = "";
  }

  if (trenageri == "yes") {
    ryki_biceps13 =
      upp6 +
      'bizeps_v_krossovere.html" >Сгибание рук с верх. блока в кроссовере</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>202,313</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka202" ' +
      upp7 +
      '</div><div id="vidos202" class="vidos"></div><div class="analogi" id="analogi202"></div>';
  } else {
    ryki_biceps13 = "";
  }

  if (rezina == "yes" && ryki_biceps13 == "") {
    ryki_biceps14 =
      upp6 +
      'rezina_biceps.html" >Сгибание руки с резиной сверху</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>319,1628</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka319" ' +
      upp7 +
      '</div><div id="vidos319" class="vidos"></div><div class="analogi" id="analogi319"></div>';
  } else {
    ryki_biceps14 = "";
  }

  if (podgotovka != "net" && ganteli == "yes" && lavka == "yes") {
    ryki_biceps15 =
      upp6 +
      'bizeps_sidia.html" >Сгибание рук с гантелями сидя под углом</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez43" id="ypr_ves"></div></td></tr></table>106,250</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka106" ' +
      upp7 +
      '</div><div id="vidos106" class="vidos"></div><div class="analogi" id="analogi106"></div>';
  } else {
    ryki_biceps15 = "";
  }

  if (pol == "man" && ganteli == "yes") {
    ryki_biceps16 =
      upp6 +
      'cherez_koleno.html" >Сгибание руки сидя через колено</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez44" id="ypr_ves"></div></td></tr></table>86,257</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka86" ' +
      upp7 +
      '</div><div id="vidos86" class="vidos"></div><div class="analogi" id="analogi86"></div>';
  } else {
    ryki_biceps16 = "";
  }

  if (pol == "man" && rezina == "yes" && ryki_biceps16 == "") {
    ryki_biceps17 =
      upp6 +
      'rezina_cherez_koleno.html" >Сгибание руки через колено с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>328,1639</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka328" ' +
      upp7 +
      '</div><div id="vidos328" class="vidos"></div><div class="analogi" id="analogi328"></div>';
  } else {
    ryki_biceps17 = "";
  }

  if (
    pol == "man" &&
    podgotovka != "net" &&
    lokot != "yes" &&
    trenageri == "yes"
  ) {
    ryki_biceps18 =
      upp6 +
      'biceps_skotta.html" >Сгибание рук на скамье скотта</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez45" id="ypr_ves"></div></td></tr></table>101,312</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka101" ' +
      upp7 +
      '</div><div id="vidos101" class="vidos"></div><div class="analogi" id="analogi101"></div>';
  } else {
    ryki_biceps18 = "";
  }

  if (pol == "man" && lokot != "yes" && trenageri == "yes") {
    ryki_biceps19 =
      upp6 +
      'biceps_v_trenagere.html" >Сгибание рук в тренажёре</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>187,308</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka187" ' +
      upp7 +
      '</div><div id="vidos187" class="vidos"></div><div class="analogi" id="analogi187"></div>';
  } else {
    ryki_biceps19 = "";
  }

  if (trx == "yes") {
    ryki_biceps20 =
      upp6 +
      'trx_molotok.html" >Сгибание рук «молот» на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>397,1921</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka397" ' +
      upp7 +
      '</div><div id="vidos397" class="vidos"></div><div class="analogi" id="analogi397"></div>';
  } else {
    ryki_biceps20 = "";
  }

  if (trx == "yes") {
    ryki_biceps21 =
      upp6 +
      'trx_biceps.html" >Сгибание одной руки на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>399,1923</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka399" ' +
      upp7 +
      '</div><div id="vidos399" class="vidos"></div><div class="analogi" id="analogi399"></div>';
  } else {
    ryki_biceps21 = "";
  }

  if (ryki_biceps21 == "") {
    ryki_biceps22 =
      upp6 +
      'prostin_biceps.html" >Сгибание одной руки на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>414,1931</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka414" ' +
      upp7 +
      '</div><div id="vidos414" class="vidos"></div><div class="analogi" id="analogi414"></div>';
  } else {
    ryki_biceps22 = "";
  }

  if (ryki_biceps20 == "") {
    ryki_biceps23 =
      upp6 +
      'prostin_molotok.html" >Сгибание рук «молот» на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>416,1934</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka416" ' +
      upp7 +
      '</div><div id="vidos416" class="vidos"></div><div class="analogi" id="analogi416"></div>';
  } else {
    ryki_biceps23 = "";
  }

  if (pol == "man" && kist != "yes" && chtanga == "yes") {
    ryki_predplechie1 =
      upp6 +
      'cgibanie_zapiastii.html" >Сгибание запястий со штангой сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez63" id="ypr_ves"></div></td></tr></table>87,248</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka87" ' +
      upp7 +
      '</div><div id="vidos87" class="vidos"></div><div class="analogi" id="analogi87"></div>';
  } else {
    ryki_predplechie1 = "";
  }

  if (
    pol == "man" &&
    kist != "yes" &&
    rezina == "yes" &&
    ryki_predplechie1 == ""
  ) {
    ryki_predplechie2 =
      upp6 +
      'rezina_zapiastia.html" >Сгибание запястий сидя с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>335,1647</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka335" ' +
      upp7 +
      '</div><div id="vidos335" class="vidos"></div><div class="analogi" id="analogi335"></div>';
  } else {
    ryki_predplechie2 = "";
  }

  if (pol == "man" && kist != "yes" && chtanga == "yes") {
    ryki_predplechie3 =
      upp6 +
      'razgibanie_zapiastii.html" >Разгибание запястий со штангой сидя</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez62" id="ypr_ves"></div></td></tr></table>88,247</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka88" ' +
      upp7 +
      '</div><div id="vidos88" class="vidos"></div><div class="analogi" id="analogi88"></div>';
  } else {
    ryki_predplechie3 = "";
  }

  if (
    pol == "man" &&
    kist != "yes" &&
    rezina == "yes" &&
    ryki_predplechie3 == ""
  ) {
    ryki_predplechie4 =
      upp6 +
      'rezina_zapiastia2.html" >Разгибание запястий сидя с резиной</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>336,1648</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka336" ' +
      upp7 +
      '</div><div id="vidos336" class="vidos"></div><div class="analogi" id="analogi336"></div>';
  } else {
    ryki_predplechie4 = "";
  }

  if (pol == "man" && kist != "yes" && chtanga == "yes") {
    ryki_predplechie5 =
      upp6 +
      'sgibanie_ryk_so_shtangoi2.html" >Сгибание рук со штангой хватом сверху</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ><div class="rez61" id="ypr_ves"></div></td></tr></table>91,246</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka91" ' +
      upp7 +
      '</div><div id="vidos91" class="vidos"></div><div class="analogi" id="analogi91"></div>';
  } else {
    ryki_predplechie5 = "";
  }

  if (
    pol == "man" &&
    kist != "yes" &&
    rezina == "yes" &&
    ryki_predplechie5 == ""
  ) {
    ryki_predplechie6 =
      upp6 +
      'rezina_sgibanie_ryk.html" >Сгибание рук с резиной хватом сверху</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>324,1634</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka324" ' +
      upp7 +
      '</div><div id="vidos324" class="vidos"></div><div class="analogi" id="analogi324"></div>';
  } else {
    ryki_predplechie6 = "";
  }

  if (trx == "yes") {
    ryki_predplechie7 =
      upp6 +
      'trx_predp.html" >Сгибание рук хватом сверху на TRX</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>409,1924</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka409" ' +
      upp7 +
      '</div><div id="vidos409" class="vidos"></div><div class="analogi" id="analogi409"></div>';
  } else {
    ryki_predplechie7 = "";
  }

  if (ryki_predplechie7 == "") {
    ryki_predplechie8 =
      upp6 +
      'prostin_predp.html" >Сгибание рук хватом сверху на простыне</a></li></div>' +
      upp5 +
      "" +
      podhodov +
      "x" +
      povtorov2 +
      '</td><td id="ypr_kg" ></td></tr></table>417,1935</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka417" ' +
      upp7 +
      '</div><div id="vidos417" class="vidos"></div><div class="analogi" id="analogi417"></div>';
  } else {
    ryki_predplechie8 = "";
  }

  r_a1 =
    '<div class="ypr_poln"><div class="ypr_blok" id="razm" ><a class="qjq" href="../met/razminka_trenirovka.html" >Разминка</a></div><div class="ypr_opcii" id="razm2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >5-10 мин</td><td id="ypr_kg" ><div  class="video2" id="video8000_1"  onClick="video(8000, 1342)" onMouseOver="vid_m(8000)" onMouseOut="vid_m2(8000)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos8000" class="vidos"></div>';

  r_a2 =
    '<div class="ypr_poln"><div class="ypr_blok" id="razm" ><a class="qjq" href="../met/razminka_trenirovka.html" >Разминка</a></div><div class="ypr_opcii" id="razm2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >5-10 мин</td><td id="ypr_kg" ><div  class="video2" id="video8001_1"  onClick="video(8001, 1342)" onMouseOver="vid_m(8001)" onMouseOut="vid_m2(8001)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos8001" class="vidos"></div>';

  r_a3 =
    '<div class="ypr_poln"><div class="ypr_blok" id="razm" ><a class="qjq" href="../met/razminka_trenirovka.html" >Разминка</a></div><div class="ypr_opcii" id="razm2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >5-10 мин</td><td id="ypr_kg" ><div  class="video2" id="video8002_1"  onClick="video(8002, 1342)" onMouseOver="vid_m(8002)" onMouseOut="vid_m2(8002)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos8002" class="vidos"></div>';

  r_a4 =
    '<div class="ypr_poln"><div class="ypr_blok" id="razm" ><a class="qjq" href="../met/razminka_trenirovka.html" >Разминка</a></div><div class="ypr_opcii" id="razm2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >5-10 мин</td><td id="ypr_kg" ><div  class="video2" id="video8003_1"  onClick="video(8003, 1342)" onMouseOver="vid_m(8003)" onMouseOut="vid_m2(8003)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos8003" class="vidos"></div>';

  r_a5 =
    '<div class="ypr_poln"><div class="ypr_blok" id="razm" ><a class="qjq" href="../met/razminka_trenirovka.html" >Разминка</a></div><div class="ypr_opcii" id="razm2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >5-10 мин</td><td id="ypr_kg" ><div  class="video2" id="video8004_1"  onClick="video(8004, 1342)" onMouseOver="vid_m(8004)" onMouseOut="vid_m2(8004)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos8004" class="vidos"></div>';

  z_a1 =
    '<div class="ypr_poln"><div class="ypr_blok" id="zamin" ><a class="qjq" href="../met/zaminka.html" >Заминка</a></div><div class="ypr_opcii" id="zamin2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >2-5 мин</td><td id="ypr_kg" ><div  class="video2" id="video9000_1"  onClick="video(9000, 1350)" onMouseOver="vid_m(9000)" onMouseOut="vid_m2(9000)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos9000" class="vidos"></div>';

  z_a2 =
    '<div class="ypr_poln"><div class="ypr_blok" id="zamin" ><a class="qjq" href="../met/zaminka.html" >Заминка</a></div><div class="ypr_opcii" id="zamin2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >2-5 мин</td><td id="ypr_kg" ><div  class="video2" id="video9001_1"  onClick="video(9001, 1350)" onMouseOver="vid_m(9001)" onMouseOut="vid_m2(9001)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos9001" class="vidos"></div>';

  z_a3 =
    '<div class="ypr_poln"><div class="ypr_blok" id="zamin" ><a class="qjq" href="../met/zaminka.html" >Заминка</a></div><div class="ypr_opcii" id="zamin2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >2-5 мин</td><td id="ypr_kg" ><div  class="video2" id="video9002_1"  onClick="video(9002, 1350)" onMouseOver="vid_m(9002)" onMouseOut="vid_m2(9002)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos9002" class="vidos"></div>';

  z_a4 =
    '<div class="ypr_poln"><div class="ypr_blok" id="zamin" ><a class="qjq" href="../met/zaminka.html" >Заминка</a></div><div class="ypr_opcii" id="zamin2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >2-5 мин</td><td id="ypr_kg" ><div  class="video2" id="video9003_1"  onClick="video(9003, 1350)" onMouseOver="vid_m(9003)" onMouseOut="vid_m2(9003)">&nbsp;</div></td></tr></table></div></div><div style="clear:both"></div><div id="vidos9003" class="vidos"></div>';

  z_a5 =
    '<div class="ypr_poln"><div class="ypr_blok" id="zamin" ><a class="qjq" href="../met/zaminka.html" >Заминка</a></div><div class="ypr_opcii" id="zamin2"><table class="ypr_opcii2" border="0" cellspacing="0" cellpadding="0" ><tr><td id="ypr_povtoren" >2-5 мин</td><td id="ypr_kg" ><div  class="video2" id="video9004_1"  onClick="video(9004, 1350)" onMouseOver="vid_m(9004)" onMouseOut="vid_m2(9004)">&nbsp;</div></td></tr></table></div><div style="clear:both"></div><div id="vidos9004" class="vidos"></div>';

  if (cel == "potolstet" && kardio == "yes") {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (cel == "potolstet" && kardio != "yes") {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }

  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio == "yes" &&
    slojnost == "legko"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '10-15 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio == "yes" &&
    slojnost == "sredne"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '15-20 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio == "yes" &&
    slojnost == "tygelo"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '20-30 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio != "yes" &&
    slojnost == "legko"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '10-15 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio != "yes" &&
    slojnost == "sredne"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '15-20 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio" &&
    kardio != "yes" &&
    slojnost == "tygelo"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '20-30 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }

  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio == "yes" &&
    slojnost == "legko"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '3-5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio == "yes" &&
    slojnost == "sredne"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '5-7 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio == "yes" &&
    slojnost == "tygelo"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Работа на кардиотренажёре</li></div>' +
      upp5 +
      '7-10 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio != "yes" &&
    slojnost == "legko"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '3-5 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio != "yes" &&
    slojnost == "sredne"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '5-7 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }
  if (
    cel != "potolstet" &&
    tip == "kardio_kom" &&
    kardio != "yes" &&
    slojnost == "tygelo"
  ) {
    kardio2 =
      '<div class="ypr_poln">' +
      vst +
      '<div class="ypr_blok" ><li>Прыжки на скакалке или бег</li></div>' +
      upp5 +
      '7-10 мин</td></tr></table></div></td></tr></table></div><div style="clear:both"></div>';
  }

  if (cel == "potolstet" && tip == "kardio_kom") {
    $(".param2").fadeIn("slow");
    setTimeout(function () {
      $(".param2").fadeOut("slow");
    }, 3000);
    return;
  }

  m_nogi = 0;
  if (nogi1 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi1;
    }
  }
  if (nogi2 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi2;
    }
    if (m_nogi == 2) {
      no_2 = nogi2;
    }
  }
  if (nogi3 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi3;
    }
    if (m_nogi == 2) {
      no_2 = nogi3;
    }
    if (m_nogi == 3) {
      no_3 = nogi3;
    }
  }
  if (nogi4 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi4;
    }
    if (m_nogi == 2) {
      no_2 = nogi4;
    }
    if (m_nogi == 3) {
      no_3 = nogi4;
    }
    if (m_nogi == 4) {
      no_4 = nogi4;
    }
  }
  if (nogi5 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi5;
    }
    if (m_nogi == 2) {
      no_2 = nogi5;
    }
    if (m_nogi == 3) {
      no_3 = nogi5;
    }
    if (m_nogi == 4) {
      no_4 = nogi5;
    }
    if (m_nogi == 5) {
      no_5 = nogi5;
    }
  }
  if (nogi6 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi6;
    }
    if (m_nogi == 2) {
      no_2 = nogi6;
    }
    if (m_nogi == 3) {
      no_3 = nogi6;
    }
    if (m_nogi == 4) {
      no_4 = nogi6;
    }
    if (m_nogi == 5) {
      no_5 = nogi6;
    }
    if (m_nogi == 6) {
      no_6 = nogi6;
    }
  }
  if (nogi7 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi7;
    }
    if (m_nogi == 2) {
      no_2 = nogi7;
    }
    if (m_nogi == 3) {
      no_3 = nogi7;
    }
    if (m_nogi == 4) {
      no_4 = nogi7;
    }
    if (m_nogi == 5) {
      no_5 = nogi7;
    }
    if (m_nogi == 6) {
      no_6 = nogi7;
    }
    if (m_nogi == 7) {
      no_7 = nogi7;
    }
  }
  if (nogi8 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi8;
    }
    if (m_nogi == 2) {
      no_2 = nogi8;
    }
    if (m_nogi == 3) {
      no_3 = nogi8;
    }
    if (m_nogi == 4) {
      no_4 = nogi8;
    }
    if (m_nogi == 5) {
      no_5 = nogi8;
    }
    if (m_nogi == 6) {
      no_6 = nogi8;
    }
    if (m_nogi == 7) {
      no_7 = nogi8;
    }
    if (m_nogi == 8) {
      no_8 = nogi8;
    }
  }
  if (nogi9 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi9;
    }
    if (m_nogi == 2) {
      no_2 = nogi9;
    }
    if (m_nogi == 3) {
      no_3 = nogi9;
    }
    if (m_nogi == 4) {
      no_4 = nogi9;
    }
    if (m_nogi == 5) {
      no_5 = nogi9;
    }
    if (m_nogi == 6) {
      no_6 = nogi9;
    }
    if (m_nogi == 7) {
      no_7 = nogi9;
    }
    if (m_nogi == 8) {
      no_8 = nogi9;
    }
    if (m_nogi == 9) {
      no_9 = nogi9;
    }
  }
  if (nogi10 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi10;
    }
    if (m_nogi == 2) {
      no_2 = nogi10;
    }
    if (m_nogi == 3) {
      no_3 = nogi10;
    }
    if (m_nogi == 4) {
      no_4 = nogi10;
    }
    if (m_nogi == 5) {
      no_5 = nogi10;
    }
    if (m_nogi == 6) {
      no_6 = nogi10;
    }
    if (m_nogi == 7) {
      no_7 = nogi10;
    }
    if (m_nogi == 8) {
      no_8 = nogi10;
    }
    if (m_nogi == 9) {
      no_9 = nogi10;
    }
    if (m_nogi == 10) {
      no_10 = nogi10;
    }
  }
  if (nogi11 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi11;
    }
    if (m_nogi == 2) {
      no_2 = nogi11;
    }
    if (m_nogi == 3) {
      no_3 = nogi11;
    }
    if (m_nogi == 4) {
      no_4 = nogi11;
    }
    if (m_nogi == 5) {
      no_5 = nogi11;
    }
    if (m_nogi == 6) {
      no_6 = nogi11;
    }
    if (m_nogi == 7) {
      no_7 = nogi11;
    }
    if (m_nogi == 8) {
      no_8 = nogi11;
    }
    if (m_nogi == 9) {
      no_9 = nogi11;
    }
    if (m_nogi == 10) {
      no_10 = nogi11;
    }
  }
  if (nogi12 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi12;
    }
    if (m_nogi == 2) {
      no_2 = nogi12;
    }
    if (m_nogi == 3) {
      no_3 = nogi12;
    }
    if (m_nogi == 4) {
      no_4 = nogi12;
    }
    if (m_nogi == 5) {
      no_5 = nogi12;
    }
    if (m_nogi == 6) {
      no_6 = nogi12;
    }
    if (m_nogi == 7) {
      no_7 = nogi12;
    }
    if (m_nogi == 8) {
      no_8 = nogi12;
    }
    if (m_nogi == 9) {
      no_9 = nogi12;
    }
    if (m_nogi == 10) {
      no_10 = nogi12;
    }
  }
  if (nogi13 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi13;
    }
    if (m_nogi == 2) {
      no_2 = nogi13;
    }
    if (m_nogi == 3) {
      no_3 = nogi13;
    }
    if (m_nogi == 4) {
      no_4 = nogi13;
    }
    if (m_nogi == 5) {
      no_5 = nogi13;
    }
    if (m_nogi == 6) {
      no_6 = nogi13;
    }
    if (m_nogi == 7) {
      no_7 = nogi13;
    }
    if (m_nogi == 8) {
      no_8 = nogi13;
    }
    if (m_nogi == 9) {
      no_9 = nogi13;
    }
    if (m_nogi == 10) {
      no_10 = nogi13;
    }
  }
  if (nogi14 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi14;
    }
    if (m_nogi == 2) {
      no_2 = nogi14;
    }
    if (m_nogi == 3) {
      no_3 = nogi14;
    }
    if (m_nogi == 4) {
      no_4 = nogi14;
    }
    if (m_nogi == 5) {
      no_5 = nogi14;
    }
    if (m_nogi == 6) {
      no_6 = nogi14;
    }
    if (m_nogi == 7) {
      no_7 = nogi14;
    }
    if (m_nogi == 8) {
      no_8 = nogi14;
    }
    if (m_nogi == 9) {
      no_9 = nogi14;
    }
    if (m_nogi == 10) {
      no_10 = nogi14;
    }
  }
  if (nogi15 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi15;
    }
    if (m_nogi == 2) {
      no_2 = nogi15;
    }
    if (m_nogi == 3) {
      no_3 = nogi15;
    }
    if (m_nogi == 4) {
      no_4 = nogi15;
    }
    if (m_nogi == 5) {
      no_5 = nogi15;
    }
    if (m_nogi == 6) {
      no_6 = nogi15;
    }
    if (m_nogi == 7) {
      no_7 = nogi15;
    }
    if (m_nogi == 8) {
      no_8 = nogi15;
    }
    if (m_nogi == 9) {
      no_9 = nogi15;
    }
    if (m_nogi == 10) {
      no_10 = nogi15;
    }
  }
  if (nogi16 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi16;
    }
    if (m_nogi == 2) {
      no_2 = nogi16;
    }
    if (m_nogi == 3) {
      no_3 = nogi16;
    }
    if (m_nogi == 4) {
      no_4 = nogi16;
    }
    if (m_nogi == 5) {
      no_5 = nogi16;
    }
    if (m_nogi == 6) {
      no_6 = nogi16;
    }
    if (m_nogi == 7) {
      no_7 = nogi16;
    }
    if (m_nogi == 8) {
      no_8 = nogi16;
    }
    if (m_nogi == 9) {
      no_9 = nogi16;
    }
    if (m_nogi == 10) {
      no_10 = nogi16;
    }
  }
  if (nogi17 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi17;
    }
    if (m_nogi == 2) {
      no_2 = nogi17;
    }
    if (m_nogi == 3) {
      no_3 = nogi17;
    }
    if (m_nogi == 4) {
      no_4 = nogi17;
    }
    if (m_nogi == 5) {
      no_5 = nogi17;
    }
    if (m_nogi == 6) {
      no_6 = nogi17;
    }
    if (m_nogi == 7) {
      no_7 = nogi17;
    }
    if (m_nogi == 8) {
      no_8 = nogi17;
    }
    if (m_nogi == 9) {
      no_9 = nogi17;
    }
    if (m_nogi == 10) {
      no_10 = nogi17;
    }
  }
  if (nogi18 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi18;
    }
    if (m_nogi == 2) {
      no_2 = nogi18;
    }
    if (m_nogi == 3) {
      no_3 = nogi18;
    }
    if (m_nogi == 4) {
      no_4 = nogi18;
    }
    if (m_nogi == 5) {
      no_5 = nogi18;
    }
    if (m_nogi == 6) {
      no_6 = nogi18;
    }
    if (m_nogi == 7) {
      no_7 = nogi18;
    }
    if (m_nogi == 8) {
      no_8 = nogi18;
    }
    if (m_nogi == 9) {
      no_9 = nogi18;
    }
    if (m_nogi == 10) {
      no_10 = nogi18;
    }
  }
  if (nogi19 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi19;
    }
    if (m_nogi == 2) {
      no_2 = nogi19;
    }
    if (m_nogi == 3) {
      no_3 = nogi19;
    }
    if (m_nogi == 4) {
      no_4 = nogi19;
    }
    if (m_nogi == 5) {
      no_5 = nogi19;
    }
    if (m_nogi == 6) {
      no_6 = nogi19;
    }
    if (m_nogi == 7) {
      no_7 = nogi19;
    }
    if (m_nogi == 8) {
      no_8 = nogi19;
    }
    if (m_nogi == 9) {
      no_9 = nogi19;
    }
    if (m_nogi == 10) {
      no_10 = nogi19;
    }
  }
  if (nogi20 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi20;
    }
    if (m_nogi == 2) {
      no_2 = nogi20;
    }
    if (m_nogi == 3) {
      no_3 = nogi20;
    }
    if (m_nogi == 4) {
      no_4 = nogi20;
    }
    if (m_nogi == 5) {
      no_5 = nogi20;
    }
    if (m_nogi == 6) {
      no_6 = nogi20;
    }
    if (m_nogi == 7) {
      no_7 = nogi20;
    }
    if (m_nogi == 8) {
      no_8 = nogi20;
    }
    if (m_nogi == 9) {
      no_9 = nogi20;
    }
    if (m_nogi == 10) {
      no_10 = nogi20;
    }
  }
  if (nogi21 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi21;
    }
    if (m_nogi == 2) {
      no_2 = nogi21;
    }
    if (m_nogi == 3) {
      no_3 = nogi21;
    }
    if (m_nogi == 4) {
      no_4 = nogi21;
    }
    if (m_nogi == 5) {
      no_5 = nogi21;
    }
    if (m_nogi == 6) {
      no_6 = nogi21;
    }
    if (m_nogi == 7) {
      no_7 = nogi21;
    }
    if (m_nogi == 8) {
      no_8 = nogi21;
    }
    if (m_nogi == 9) {
      no_9 = nogi21;
    }
    if (m_nogi == 10) {
      no_10 = nogi21;
    }
  }
  if (nogi22 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi22;
    }
    if (m_nogi == 2) {
      no_2 = nogi22;
    }
    if (m_nogi == 3) {
      no_3 = nogi22;
    }
    if (m_nogi == 4) {
      no_4 = nogi22;
    }
    if (m_nogi == 5) {
      no_5 = nogi22;
    }
    if (m_nogi == 6) {
      no_6 = nogi22;
    }
    if (m_nogi == 7) {
      no_7 = nogi22;
    }
    if (m_nogi == 8) {
      no_8 = nogi22;
    }
    if (m_nogi == 9) {
      no_9 = nogi22;
    }
    if (m_nogi == 10) {
      no_10 = nogi22;
    }
  }
  if (nogi23 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi23;
    }
    if (m_nogi == 2) {
      no_2 = nogi23;
    }
    if (m_nogi == 3) {
      no_3 = nogi23;
    }
    if (m_nogi == 4) {
      no_4 = nogi23;
    }
    if (m_nogi == 5) {
      no_5 = nogi23;
    }
    if (m_nogi == 6) {
      no_6 = nogi23;
    }
    if (m_nogi == 7) {
      no_7 = nogi23;
    }
    if (m_nogi == 8) {
      no_8 = nogi23;
    }
    if (m_nogi == 9) {
      no_9 = nogi23;
    }
    if (m_nogi == 10) {
      no_10 = nogi23;
    }
  }
  if (nogi24 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi24;
    }
    if (m_nogi == 2) {
      no_2 = nogi24;
    }
    if (m_nogi == 3) {
      no_3 = nogi24;
    }
    if (m_nogi == 4) {
      no_4 = nogi24;
    }
    if (m_nogi == 5) {
      no_5 = nogi24;
    }
    if (m_nogi == 6) {
      no_6 = nogi24;
    }
    if (m_nogi == 7) {
      no_7 = nogi24;
    }
    if (m_nogi == 8) {
      no_8 = nogi24;
    }
    if (m_nogi == 9) {
      no_9 = nogi24;
    }
    if (m_nogi == 10) {
      no_10 = nogi24;
    }
  }
  if (nogi25 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi25;
    }
    if (m_nogi == 2) {
      no_2 = nogi25;
    }
    if (m_nogi == 3) {
      no_3 = nogi25;
    }
    if (m_nogi == 4) {
      no_4 = nogi25;
    }
    if (m_nogi == 5) {
      no_5 = nogi25;
    }
    if (m_nogi == 6) {
      no_6 = nogi25;
    }
    if (m_nogi == 7) {
      no_7 = nogi25;
    }
    if (m_nogi == 8) {
      no_8 = nogi25;
    }
    if (m_nogi == 9) {
      no_9 = nogi25;
    }
    if (m_nogi == 10) {
      no_10 = nogi25;
    }
  }
  if (nogi26 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi26;
    }
    if (m_nogi == 2) {
      no_2 = nogi26;
    }
    if (m_nogi == 3) {
      no_3 = nogi26;
    }
    if (m_nogi == 4) {
      no_4 = nogi26;
    }
    if (m_nogi == 5) {
      no_5 = nogi26;
    }
    if (m_nogi == 6) {
      no_6 = nogi26;
    }
    if (m_nogi == 7) {
      no_7 = nogi26;
    }
    if (m_nogi == 8) {
      no_8 = nogi26;
    }
    if (m_nogi == 9) {
      no_9 = nogi26;
    }
    if (m_nogi == 10) {
      no_10 = nogi26;
    }
  }
  if (nogi27 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi27;
    }
    if (m_nogi == 2) {
      no_2 = nogi27;
    }
    if (m_nogi == 3) {
      no_3 = nogi27;
    }
    if (m_nogi == 4) {
      no_4 = nogi27;
    }
    if (m_nogi == 5) {
      no_5 = nogi27;
    }
    if (m_nogi == 6) {
      no_6 = nogi27;
    }
    if (m_nogi == 7) {
      no_7 = nogi27;
    }
    if (m_nogi == 8) {
      no_8 = nogi27;
    }
    if (m_nogi == 9) {
      no_9 = nogi27;
    }
    if (m_nogi == 10) {
      no_10 = nogi27;
    }
  }
  if (nogi28 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi28;
    }
    if (m_nogi == 2) {
      no_2 = nogi28;
    }
    if (m_nogi == 3) {
      no_3 = nogi28;
    }
    if (m_nogi == 4) {
      no_4 = nogi28;
    }
    if (m_nogi == 5) {
      no_5 = nogi28;
    }
    if (m_nogi == 6) {
      no_6 = nogi28;
    }
    if (m_nogi == 7) {
      no_7 = nogi28;
    }
    if (m_nogi == 8) {
      no_8 = nogi28;
    }
    if (m_nogi == 9) {
      no_9 = nogi28;
    }
    if (m_nogi == 10) {
      no_10 = nogi28;
    }
  }
  if (nogi29 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi29;
    }
    if (m_nogi == 2) {
      no_2 = nogi29;
    }
    if (m_nogi == 3) {
      no_3 = nogi29;
    }
    if (m_nogi == 4) {
      no_4 = nogi29;
    }
    if (m_nogi == 5) {
      no_5 = nogi29;
    }
    if (m_nogi == 6) {
      no_6 = nogi29;
    }
    if (m_nogi == 7) {
      no_7 = nogi29;
    }
    if (m_nogi == 8) {
      no_8 = nogi29;
    }
    if (m_nogi == 9) {
      no_9 = nogi29;
    }
    if (m_nogi == 10) {
      no_10 = nogi29;
    }
  }
  if (nogi30 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi30;
    }
    if (m_nogi == 2) {
      no_2 = nogi30;
    }
    if (m_nogi == 3) {
      no_3 = nogi30;
    }
    if (m_nogi == 4) {
      no_4 = nogi30;
    }
    if (m_nogi == 5) {
      no_5 = nogi30;
    }
    if (m_nogi == 6) {
      no_6 = nogi30;
    }
    if (m_nogi == 7) {
      no_7 = nogi30;
    }
    if (m_nogi == 8) {
      no_8 = nogi30;
    }
    if (m_nogi == 9) {
      no_9 = nogi30;
    }
    if (m_nogi == 10) {
      no_10 = nogi30;
    }
  }
  if (nogi31 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi31;
    }
    if (m_nogi == 2) {
      no_2 = nogi31;
    }
    if (m_nogi == 3) {
      no_3 = nogi31;
    }
    if (m_nogi == 4) {
      no_4 = nogi31;
    }
    if (m_nogi == 5) {
      no_5 = nogi31;
    }
    if (m_nogi == 6) {
      no_6 = nogi31;
    }
    if (m_nogi == 7) {
      no_7 = nogi31;
    }
    if (m_nogi == 8) {
      no_8 = nogi31;
    }
    if (m_nogi == 9) {
      no_9 = nogi31;
    }
    if (m_nogi == 10) {
      no_10 = nogi31;
    }
  }
  if (nogi32 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi32;
    }
    if (m_nogi == 2) {
      no_2 = nogi32;
    }
    if (m_nogi == 3) {
      no_3 = nogi32;
    }
    if (m_nogi == 4) {
      no_4 = nogi32;
    }
    if (m_nogi == 5) {
      no_5 = nogi32;
    }
    if (m_nogi == 6) {
      no_6 = nogi32;
    }
    if (m_nogi == 7) {
      no_7 = nogi32;
    }
    if (m_nogi == 8) {
      no_8 = nogi32;
    }
    if (m_nogi == 9) {
      no_9 = nogi32;
    }
    if (m_nogi == 10) {
      no_10 = nogi32;
    }
  }
  if (nogi33 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi33;
    }
    if (m_nogi == 2) {
      no_2 = nogi33;
    }
    if (m_nogi == 3) {
      no_3 = nogi33;
    }
    if (m_nogi == 4) {
      no_4 = nogi33;
    }
    if (m_nogi == 5) {
      no_5 = nogi33;
    }
    if (m_nogi == 6) {
      no_6 = nogi33;
    }
    if (m_nogi == 7) {
      no_7 = nogi33;
    }
    if (m_nogi == 8) {
      no_8 = nogi33;
    }
    if (m_nogi == 9) {
      no_9 = nogi33;
    }
    if (m_nogi == 10) {
      no_10 = nogi33;
    }
  }
  if (nogi34 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi34;
    }
    if (m_nogi == 2) {
      no_2 = nogi34;
    }
    if (m_nogi == 3) {
      no_3 = nogi34;
    }
    if (m_nogi == 4) {
      no_4 = nogi34;
    }
    if (m_nogi == 5) {
      no_5 = nogi34;
    }
    if (m_nogi == 6) {
      no_6 = nogi34;
    }
    if (m_nogi == 7) {
      no_7 = nogi34;
    }
    if (m_nogi == 8) {
      no_8 = nogi34;
    }
    if (m_nogi == 9) {
      no_9 = nogi34;
    }
    if (m_nogi == 10) {
      no_10 = nogi34;
    }
  }
  if (nogi35 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi35;
    }
    if (m_nogi == 2) {
      no_2 = nogi35;
    }
    if (m_nogi == 3) {
      no_3 = nogi35;
    }
    if (m_nogi == 4) {
      no_4 = nogi35;
    }
    if (m_nogi == 5) {
      no_5 = nogi35;
    }
    if (m_nogi == 6) {
      no_6 = nogi35;
    }
    if (m_nogi == 7) {
      no_7 = nogi35;
    }
    if (m_nogi == 8) {
      no_8 = nogi35;
    }
    if (m_nogi == 9) {
      no_9 = nogi35;
    }
    if (m_nogi == 10) {
      no_10 = nogi35;
    }
  }
  if (nogi36 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi36;
    }
    if (m_nogi == 2) {
      no_2 = nogi36;
    }
    if (m_nogi == 3) {
      no_3 = nogi36;
    }
    if (m_nogi == 4) {
      no_4 = nogi36;
    }
    if (m_nogi == 5) {
      no_5 = nogi36;
    }
    if (m_nogi == 6) {
      no_6 = nogi36;
    }
    if (m_nogi == 7) {
      no_7 = nogi36;
    }
    if (m_nogi == 8) {
      no_8 = nogi36;
    }
    if (m_nogi == 9) {
      no_9 = nogi36;
    }
    if (m_nogi == 10) {
      no_10 = nogi36;
    }
  }
  if (nogi37 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi37;
    }
    if (m_nogi == 2) {
      no_2 = nogi37;
    }
    if (m_nogi == 3) {
      no_3 = nogi37;
    }
    if (m_nogi == 4) {
      no_4 = nogi37;
    }
    if (m_nogi == 5) {
      no_5 = nogi37;
    }
    if (m_nogi == 6) {
      no_6 = nogi37;
    }
    if (m_nogi == 7) {
      no_7 = nogi37;
    }
    if (m_nogi == 8) {
      no_8 = nogi37;
    }
    if (m_nogi == 9) {
      no_9 = nogi37;
    }
    if (m_nogi == 10) {
      no_10 = nogi37;
    }
  }
  if (nogi38 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi38;
    }
    if (m_nogi == 2) {
      no_2 = nogi38;
    }
    if (m_nogi == 3) {
      no_3 = nogi38;
    }
    if (m_nogi == 4) {
      no_4 = nogi38;
    }
    if (m_nogi == 5) {
      no_5 = nogi38;
    }
    if (m_nogi == 6) {
      no_6 = nogi38;
    }
    if (m_nogi == 7) {
      no_7 = nogi38;
    }
    if (m_nogi == 8) {
      no_8 = nogi38;
    }
    if (m_nogi == 9) {
      no_9 = nogi38;
    }
    if (m_nogi == 10) {
      no_10 = nogi38;
    }
  }
  if (nogi39 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi39;
    }
    if (m_nogi == 2) {
      no_2 = nogi39;
    }
    if (m_nogi == 3) {
      no_3 = nogi39;
    }
    if (m_nogi == 4) {
      no_4 = nogi39;
    }
    if (m_nogi == 5) {
      no_5 = nogi39;
    }
    if (m_nogi == 6) {
      no_6 = nogi39;
    }
    if (m_nogi == 7) {
      no_7 = nogi39;
    }
    if (m_nogi == 8) {
      no_8 = nogi39;
    }
    if (m_nogi == 9) {
      no_9 = nogi39;
    }
    if (m_nogi == 10) {
      no_10 = nogi39;
    }
  }
  if (nogi40 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi40;
    }
    if (m_nogi == 2) {
      no_2 = nogi40;
    }
    if (m_nogi == 3) {
      no_3 = nogi40;
    }
    if (m_nogi == 4) {
      no_4 = nogi40;
    }
    if (m_nogi == 5) {
      no_5 = nogi40;
    }
    if (m_nogi == 6) {
      no_6 = nogi40;
    }
    if (m_nogi == 7) {
      no_7 = nogi40;
    }
    if (m_nogi == 8) {
      no_8 = nogi40;
    }
    if (m_nogi == 9) {
      no_9 = nogi40;
    }
    if (m_nogi == 10) {
      no_10 = nogi40;
    }
  }
  if (nogi41 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi41;
    }
    if (m_nogi == 2) {
      no_2 = nogi41;
    }
    if (m_nogi == 3) {
      no_3 = nogi41;
    }
    if (m_nogi == 4) {
      no_4 = nogi41;
    }
    if (m_nogi == 5) {
      no_5 = nogi41;
    }
    if (m_nogi == 6) {
      no_6 = nogi41;
    }
    if (m_nogi == 7) {
      no_7 = nogi41;
    }
    if (m_nogi == 8) {
      no_8 = nogi41;
    }
    if (m_nogi == 9) {
      no_9 = nogi41;
    }
    if (m_nogi == 10) {
      no_10 = nogi41;
    }
  }
  if (nogi42 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi42;
    }
    if (m_nogi == 2) {
      no_2 = nogi42;
    }
    if (m_nogi == 3) {
      no_3 = nogi42;
    }
    if (m_nogi == 4) {
      no_4 = nogi42;
    }
    if (m_nogi == 5) {
      no_5 = nogi42;
    }
    if (m_nogi == 6) {
      no_6 = nogi42;
    }
    if (m_nogi == 7) {
      no_7 = nogi42;
    }
    if (m_nogi == 8) {
      no_8 = nogi42;
    }
    if (m_nogi == 9) {
      no_9 = nogi42;
    }
    if (m_nogi == 10) {
      no_10 = nogi42;
    }
  }
  if (nogi43 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi43;
    }
    if (m_nogi == 2) {
      no_2 = nogi43;
    }
    if (m_nogi == 3) {
      no_3 = nogi43;
    }
    if (m_nogi == 4) {
      no_4 = nogi43;
    }
    if (m_nogi == 5) {
      no_5 = nogi43;
    }
    if (m_nogi == 6) {
      no_6 = nogi43;
    }
    if (m_nogi == 7) {
      no_7 = nogi43;
    }
    if (m_nogi == 8) {
      no_8 = nogi43;
    }
    if (m_nogi == 9) {
      no_9 = nogi43;
    }
    if (m_nogi == 10) {
      no_10 = nogi43;
    }
  }
  if (nogi44 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi44;
    }
    if (m_nogi == 2) {
      no_2 = nogi44;
    }
    if (m_nogi == 3) {
      no_3 = nogi44;
    }
    if (m_nogi == 4) {
      no_4 = nogi44;
    }
    if (m_nogi == 5) {
      no_5 = nogi44;
    }
    if (m_nogi == 6) {
      no_6 = nogi44;
    }
    if (m_nogi == 7) {
      no_7 = nogi44;
    }
    if (m_nogi == 8) {
      no_8 = nogi44;
    }
    if (m_nogi == 9) {
      no_9 = nogi44;
    }
    if (m_nogi == 10) {
      no_10 = nogi44;
    }
  }
  if (nogi45 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi45;
    }
    if (m_nogi == 2) {
      no_2 = nogi45;
    }
    if (m_nogi == 3) {
      no_3 = nogi45;
    }
    if (m_nogi == 4) {
      no_4 = nogi45;
    }
    if (m_nogi == 5) {
      no_5 = nogi45;
    }
    if (m_nogi == 6) {
      no_6 = nogi45;
    }
    if (m_nogi == 7) {
      no_7 = nogi45;
    }
    if (m_nogi == 8) {
      no_8 = nogi45;
    }
    if (m_nogi == 9) {
      no_9 = nogi45;
    }
    if (m_nogi == 10) {
      no_10 = nogi45;
    }
  }
  if (nogi46 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi46;
    }
    if (m_nogi == 2) {
      no_2 = nogi46;
    }
    if (m_nogi == 3) {
      no_3 = nogi46;
    }
    if (m_nogi == 4) {
      no_4 = nogi46;
    }
    if (m_nogi == 5) {
      no_5 = nogi46;
    }
    if (m_nogi == 6) {
      no_6 = nogi46;
    }
    if (m_nogi == 7) {
      no_7 = nogi46;
    }
    if (m_nogi == 8) {
      no_8 = nogi46;
    }
    if (m_nogi == 9) {
      no_9 = nogi46;
    }
    if (m_nogi == 10) {
      no_10 = nogi46;
    }
  }
  if (nogi47 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi47;
    }
    if (m_nogi == 2) {
      no_2 = nogi47;
    }
    if (m_nogi == 3) {
      no_3 = nogi47;
    }
    if (m_nogi == 4) {
      no_4 = nogi47;
    }
    if (m_nogi == 5) {
      no_5 = nogi47;
    }
    if (m_nogi == 6) {
      no_6 = nogi47;
    }
    if (m_nogi == 7) {
      no_7 = nogi47;
    }
    if (m_nogi == 8) {
      no_8 = nogi47;
    }
    if (m_nogi == 9) {
      no_9 = nogi47;
    }
    if (m_nogi == 10) {
      no_10 = nogi47;
    }
  }
  if (nogi48 != "") {
    m_nogi++;
    if (m_nogi == 1) {
      no_1 = nogi48;
    }
    if (m_nogi == 2) {
      no_2 = nogi48;
    }
    if (m_nogi == 3) {
      no_3 = nogi48;
    }
    if (m_nogi == 4) {
      no_4 = nogi48;
    }
    if (m_nogi == 5) {
      no_5 = nogi48;
    }
    if (m_nogi == 6) {
      no_6 = nogi48;
    }
    if (m_nogi == 7) {
      no_7 = nogi48;
    }
    if (m_nogi == 8) {
      no_8 = nogi48;
    }
    if (m_nogi == 9) {
      no_9 = nogi48;
    }
    if (m_nogi == 10) {
      no_10 = nogi48;
    }
  }
  if (typeof no_1 === "undefined") {
    no_1 = "";
  }
  if (typeof no_2 === "undefined") {
    no_2 = "";
  }
  if (typeof no_3 === "undefined") {
    no_3 = "";
  }
  if (typeof no_4 === "undefined") {
    no_4 = "";
  }
  if (typeof no_5 === "undefined") {
    no_5 = "";
  }
  if (typeof no_6 === "undefined") {
    no_6 = "";
  }
  if (typeof no_7 === "undefined") {
    no_7 = "";
  }
  if (typeof no_8 === "undefined") {
    no_8 = "";
  }
  if (typeof no_9 === "undefined") {
    no_9 = "";
  }
  if (typeof no_10 === "undefined") {
    no_10 = "";
  }

  m_spina = 0;
  if (spina1 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina1;
    }
  }
  if (spina2 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina2;
    }
    if (m_spina == 2) {
      sp_2 = spina2;
    }
  }
  if (spina3 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina3;
    }
    if (m_spina == 2) {
      sp_2 = spina3;
    }
    if (m_spina == 3) {
      sp_3 = spina3;
    }
  }
  if (spina4 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina4;
    }
    if (m_spina == 2) {
      sp_2 = spina4;
    }
    if (m_spina == 3) {
      sp_3 = spina4;
    }
    if (m_spina == 4) {
      sp_4 = spina4;
    }
  }
  if (spina5 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina5;
    }
    if (m_spina == 2) {
      sp_2 = spina5;
    }
    if (m_spina == 3) {
      sp_3 = spina5;
    }
    if (m_spina == 4) {
      sp_4 = spina5;
    }
    if (m_spina == 5) {
      sp_5 = spina5;
    }
  }
  if (spina6 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina6;
    }
    if (m_spina == 2) {
      sp_2 = spina6;
    }
    if (m_spina == 3) {
      sp_3 = spina6;
    }
    if (m_spina == 4) {
      sp_4 = spina6;
    }
    if (m_spina == 5) {
      sp_5 = spina6;
    }
    if (m_spina == 6) {
      sp_6 = spina6;
    }
  }
  if (spina7 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina7;
    }
    if (m_spina == 2) {
      sp_2 = spina7;
    }
    if (m_spina == 3) {
      sp_3 = spina7;
    }
    if (m_spina == 4) {
      sp_4 = spina7;
    }
    if (m_spina == 5) {
      sp_5 = spina7;
    }
    if (m_spina == 6) {
      sp_6 = spina7;
    }
    if (m_spina == 7) {
      sp_7 = spina7;
    }
  }
  if (spina8 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina8;
    }
    if (m_spina == 2) {
      sp_2 = spina8;
    }
    if (m_spina == 3) {
      sp_3 = spina8;
    }
    if (m_spina == 4) {
      sp_4 = spina8;
    }
    if (m_spina == 5) {
      sp_5 = spina8;
    }
    if (m_spina == 6) {
      sp_6 = spina8;
    }
    if (m_spina == 7) {
      sp_7 = spina8;
    }
    if (m_spina == 8) {
      sp_8 = spina8;
    }
  }
  if (spina9 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina9;
    }
    if (m_spina == 2) {
      sp_2 = spina9;
    }
    if (m_spina == 3) {
      sp_3 = spina9;
    }
    if (m_spina == 4) {
      sp_4 = spina9;
    }
    if (m_spina == 5) {
      sp_5 = spina9;
    }
    if (m_spina == 6) {
      sp_6 = spina9;
    }
    if (m_spina == 7) {
      sp_7 = spina9;
    }
    if (m_spina == 8) {
      sp_8 = spina9;
    }
  }
  if (spina10 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina10;
    }
    if (m_spina == 2) {
      sp_2 = spina10;
    }
    if (m_spina == 3) {
      sp_3 = spina10;
    }
    if (m_spina == 4) {
      sp_4 = spina10;
    }
    if (m_spina == 5) {
      sp_5 = spina10;
    }
    if (m_spina == 6) {
      sp_6 = spina10;
    }
    if (m_spina == 7) {
      sp_7 = spina10;
    }
    if (m_spina == 8) {
      sp_8 = spina10;
    }
  }
  if (spina11 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina11;
    }
    if (m_spina == 2) {
      sp_2 = spina11;
    }
    if (m_spina == 3) {
      sp_3 = spina11;
    }
    if (m_spina == 4) {
      sp_4 = spina11;
    }
    if (m_spina == 5) {
      sp_5 = spina11;
    }
    if (m_spina == 6) {
      sp_6 = spina11;
    }
    if (m_spina == 7) {
      sp_7 = spina11;
    }
    if (m_spina == 8) {
      sp_8 = spina11;
    }
  }
  if (spina12 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina12;
    }
    if (m_spina == 2) {
      sp_2 = spina12;
    }
    if (m_spina == 3) {
      sp_3 = spina12;
    }
    if (m_spina == 4) {
      sp_4 = spina12;
    }
    if (m_spina == 5) {
      sp_5 = spina12;
    }
    if (m_spina == 6) {
      sp_6 = spina12;
    }
    if (m_spina == 7) {
      sp_7 = spina12;
    }
    if (m_spina == 8) {
      sp_8 = spina12;
    }
  }
  if (spina13 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina13;
    }
    if (m_spina == 2) {
      sp_2 = spina13;
    }
    if (m_spina == 3) {
      sp_3 = spina13;
    }
    if (m_spina == 4) {
      sp_4 = spina13;
    }
    if (m_spina == 5) {
      sp_5 = spina13;
    }
    if (m_spina == 6) {
      sp_6 = spina13;
    }
    if (m_spina == 7) {
      sp_7 = spina13;
    }
    if (m_spina == 8) {
      sp_8 = spina13;
    }
  }
  if (spina14 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina14;
    }
    if (m_spina == 2) {
      sp_2 = spina14;
    }
    if (m_spina == 3) {
      sp_3 = spina14;
    }
    if (m_spina == 4) {
      sp_4 = spina14;
    }
    if (m_spina == 5) {
      sp_5 = spina14;
    }
    if (m_spina == 6) {
      sp_6 = spina14;
    }
    if (m_spina == 7) {
      sp_7 = spina14;
    }
    if (m_spina == 8) {
      sp_8 = spina14;
    }
  }
  if (spina15 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina15;
    }
    if (m_spina == 2) {
      sp_2 = spina15;
    }
    if (m_spina == 3) {
      sp_3 = spina15;
    }
    if (m_spina == 4) {
      sp_4 = spina15;
    }
    if (m_spina == 5) {
      sp_5 = spina15;
    }
    if (m_spina == 6) {
      sp_6 = spina15;
    }
    if (m_spina == 7) {
      sp_7 = spina15;
    }
    if (m_spina == 8) {
      sp_8 = spina15;
    }
  }
  if (spina16 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina16;
    }
    if (m_spina == 2) {
      sp_2 = spina16;
    }
    if (m_spina == 3) {
      sp_3 = spina16;
    }
    if (m_spina == 4) {
      sp_4 = spina16;
    }
    if (m_spina == 5) {
      sp_5 = spina16;
    }
    if (m_spina == 6) {
      sp_6 = spina16;
    }
    if (m_spina == 7) {
      sp_7 = spina16;
    }
    if (m_spina == 8) {
      sp_8 = spina16;
    }
  }
  if (spina17 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina17;
    }
    if (m_spina == 2) {
      sp_2 = spina17;
    }
    if (m_spina == 3) {
      sp_3 = spina17;
    }
    if (m_spina == 4) {
      sp_4 = spina17;
    }
    if (m_spina == 5) {
      sp_5 = spina17;
    }
    if (m_spina == 6) {
      sp_6 = spina17;
    }
    if (m_spina == 7) {
      sp_7 = spina17;
    }
    if (m_spina == 8) {
      sp_8 = spina17;
    }
  }
  if (spina18 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina18;
    }
    if (m_spina == 2) {
      sp_2 = spina18;
    }
    if (m_spina == 3) {
      sp_3 = spina18;
    }
    if (m_spina == 4) {
      sp_4 = spina18;
    }
    if (m_spina == 5) {
      sp_5 = spina18;
    }
    if (m_spina == 6) {
      sp_6 = spina18;
    }
    if (m_spina == 7) {
      sp_7 = spina18;
    }
    if (m_spina == 8) {
      sp_8 = spina18;
    }
  }
  if (spina19 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina19;
    }
    if (m_spina == 2) {
      sp_2 = spina19;
    }
    if (m_spina == 3) {
      sp_3 = spina19;
    }
    if (m_spina == 4) {
      sp_4 = spina19;
    }
    if (m_spina == 5) {
      sp_5 = spina19;
    }
    if (m_spina == 6) {
      sp_6 = spina19;
    }
    if (m_spina == 7) {
      sp_7 = spina19;
    }
    if (m_spina == 8) {
      sp_8 = spina19;
    }
  }
  if (spina20 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina20;
    }
    if (m_spina == 2) {
      sp_2 = spina20;
    }
    if (m_spina == 3) {
      sp_3 = spina20;
    }
    if (m_spina == 4) {
      sp_4 = spina20;
    }
    if (m_spina == 5) {
      sp_5 = spina20;
    }
    if (m_spina == 6) {
      sp_6 = spina20;
    }
    if (m_spina == 7) {
      sp_7 = spina20;
    }
    if (m_spina == 8) {
      sp_8 = spina20;
    }
  }
  if (spina21 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina21;
    }
    if (m_spina == 2) {
      sp_2 = spina21;
    }
    if (m_spina == 3) {
      sp_3 = spina21;
    }
    if (m_spina == 4) {
      sp_4 = spina21;
    }
    if (m_spina == 5) {
      sp_5 = spina21;
    }
    if (m_spina == 6) {
      sp_6 = spina21;
    }
    if (m_spina == 7) {
      sp_7 = spina21;
    }
    if (m_spina == 8) {
      sp_8 = spina21;
    }
  }
  if (spina22 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina22;
    }
    if (m_spina == 2) {
      sp_2 = spina22;
    }
    if (m_spina == 3) {
      sp_3 = spina22;
    }
    if (m_spina == 4) {
      sp_4 = spina22;
    }
    if (m_spina == 5) {
      sp_5 = spina22;
    }
    if (m_spina == 6) {
      sp_6 = spina22;
    }
    if (m_spina == 7) {
      sp_7 = spina22;
    }
    if (m_spina == 8) {
      sp_8 = spina22;
    }
  }
  if (spina23 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina23;
    }
    if (m_spina == 2) {
      sp_2 = spina23;
    }
    if (m_spina == 3) {
      sp_3 = spina23;
    }
    if (m_spina == 4) {
      sp_4 = spina23;
    }
    if (m_spina == 5) {
      sp_5 = spina23;
    }
    if (m_spina == 6) {
      sp_6 = spina23;
    }
    if (m_spina == 7) {
      sp_7 = spina23;
    }
    if (m_spina == 8) {
      sp_8 = spina23;
    }
  }
  if (spina24 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina24;
    }
    if (m_spina == 2) {
      sp_2 = spina24;
    }
    if (m_spina == 3) {
      sp_3 = spina24;
    }
    if (m_spina == 4) {
      sp_4 = spina24;
    }
    if (m_spina == 5) {
      sp_5 = spina24;
    }
    if (m_spina == 6) {
      sp_6 = spina24;
    }
    if (m_spina == 7) {
      sp_7 = spina24;
    }
    if (m_spina == 8) {
      sp_8 = spina24;
    }
  }
  if (spina25 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina25;
    }
    if (m_spina == 2) {
      sp_2 = spina25;
    }
    if (m_spina == 3) {
      sp_3 = spina25;
    }
    if (m_spina == 4) {
      sp_4 = spina25;
    }
    if (m_spina == 5) {
      sp_5 = spina25;
    }
    if (m_spina == 6) {
      sp_6 = spina25;
    }
    if (m_spina == 7) {
      sp_7 = spina25;
    }
    if (m_spina == 8) {
      sp_8 = spina25;
    }
  }
  if (spina26 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina26;
    }
    if (m_spina == 2) {
      sp_2 = spina26;
    }
    if (m_spina == 3) {
      sp_3 = spina26;
    }
    if (m_spina == 4) {
      sp_4 = spina26;
    }
    if (m_spina == 5) {
      sp_5 = spina26;
    }
    if (m_spina == 6) {
      sp_6 = spina26;
    }
    if (m_spina == 7) {
      sp_7 = spina26;
    }
    if (m_spina == 8) {
      sp_8 = spina26;
    }
  }
  if (spina27 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina27;
    }
    if (m_spina == 2) {
      sp_2 = spina27;
    }
    if (m_spina == 3) {
      sp_3 = spina27;
    }
    if (m_spina == 4) {
      sp_4 = spina27;
    }
    if (m_spina == 5) {
      sp_5 = spina27;
    }
    if (m_spina == 6) {
      sp_6 = spina27;
    }
    if (m_spina == 7) {
      sp_7 = spina27;
    }
    if (m_spina == 8) {
      sp_8 = spina27;
    }
  }
  if (spina28 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina28;
    }
    if (m_spina == 2) {
      sp_2 = spina28;
    }
    if (m_spina == 3) {
      sp_3 = spina28;
    }
    if (m_spina == 4) {
      sp_4 = spina28;
    }
    if (m_spina == 5) {
      sp_5 = spina28;
    }
    if (m_spina == 6) {
      sp_6 = spina28;
    }
    if (m_spina == 7) {
      sp_7 = spina28;
    }
    if (m_spina == 8) {
      sp_8 = spina28;
    }
  }
  if (spina29 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina29;
    }
    if (m_spina == 2) {
      sp_2 = spina29;
    }
    if (m_spina == 3) {
      sp_3 = spina29;
    }
    if (m_spina == 4) {
      sp_4 = spina29;
    }
    if (m_spina == 5) {
      sp_5 = spina29;
    }
    if (m_spina == 6) {
      sp_6 = spina29;
    }
    if (m_spina == 7) {
      sp_7 = spina29;
    }
    if (m_spina == 8) {
      sp_8 = spina29;
    }
  }
  if (spina30 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina30;
    }
    if (m_spina == 2) {
      sp_2 = spina30;
    }
    if (m_spina == 3) {
      sp_3 = spina30;
    }
    if (m_spina == 4) {
      sp_4 = spina30;
    }
    if (m_spina == 5) {
      sp_5 = spina30;
    }
    if (m_spina == 6) {
      sp_6 = spina30;
    }
    if (m_spina == 7) {
      sp_7 = spina30;
    }
    if (m_spina == 8) {
      sp_8 = spina30;
    }
  }
  if (spina31 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina31;
    }
    if (m_spina == 2) {
      sp_2 = spina31;
    }
    if (m_spina == 3) {
      sp_3 = spina31;
    }
    if (m_spina == 4) {
      sp_4 = spina31;
    }
    if (m_spina == 5) {
      sp_5 = spina31;
    }
    if (m_spina == 6) {
      sp_6 = spina31;
    }
    if (m_spina == 7) {
      sp_7 = spina31;
    }
    if (m_spina == 8) {
      sp_8 = spina31;
    }
  }
  if (spina32 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina32;
    }
    if (m_spina == 2) {
      sp_2 = spina32;
    }
    if (m_spina == 3) {
      sp_3 = spina32;
    }
    if (m_spina == 4) {
      sp_4 = spina32;
    }
    if (m_spina == 5) {
      sp_5 = spina32;
    }
    if (m_spina == 6) {
      sp_6 = spina32;
    }
    if (m_spina == 7) {
      sp_7 = spina32;
    }
    if (m_spina == 8) {
      sp_8 = spina32;
    }
  }
  if (spina33 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina33;
    }
    if (m_spina == 2) {
      sp_2 = spina33;
    }
    if (m_spina == 3) {
      sp_3 = spina33;
    }
    if (m_spina == 4) {
      sp_4 = spina33;
    }
    if (m_spina == 5) {
      sp_5 = spina33;
    }
    if (m_spina == 6) {
      sp_6 = spina33;
    }
    if (m_spina == 7) {
      sp_7 = spina33;
    }
    if (m_spina == 8) {
      sp_8 = spina33;
    }
  }
  if (spina34 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina34;
    }
    if (m_spina == 2) {
      sp_2 = spina34;
    }
    if (m_spina == 3) {
      sp_3 = spina34;
    }
    if (m_spina == 4) {
      sp_4 = spina34;
    }
    if (m_spina == 5) {
      sp_5 = spina34;
    }
    if (m_spina == 6) {
      sp_6 = spina34;
    }
    if (m_spina == 7) {
      sp_7 = spina34;
    }
    if (m_spina == 8) {
      sp_8 = spina34;
    }
  }
  if (spina35 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina35;
    }
    if (m_spina == 2) {
      sp_2 = spina35;
    }
    if (m_spina == 3) {
      sp_3 = spina35;
    }
    if (m_spina == 4) {
      sp_4 = spina35;
    }
    if (m_spina == 5) {
      sp_5 = spina35;
    }
    if (m_spina == 6) {
      sp_6 = spina35;
    }
    if (m_spina == 7) {
      sp_7 = spina35;
    }
    if (m_spina == 8) {
      sp_8 = spina35;
    }
  }
  if (spina36 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina36;
    }
    if (m_spina == 2) {
      sp_2 = spina36;
    }
    if (m_spina == 3) {
      sp_3 = spina36;
    }
    if (m_spina == 4) {
      sp_4 = spina36;
    }
    if (m_spina == 5) {
      sp_5 = spina36;
    }
    if (m_spina == 6) {
      sp_6 = spina36;
    }
    if (m_spina == 7) {
      sp_7 = spina36;
    }
    if (m_spina == 8) {
      sp_8 = spina36;
    }
  }
  if (spina37 != "") {
    m_spina++;
    if (m_spina == 1) {
      sp_1 = spina37;
    }
    if (m_spina == 2) {
      sp_2 = spina37;
    }
    if (m_spina == 3) {
      sp_3 = spina37;
    }
    if (m_spina == 4) {
      sp_4 = spina37;
    }
    if (m_spina == 5) {
      sp_5 = spina37;
    }
    if (m_spina == 6) {
      sp_6 = spina37;
    }
    if (m_spina == 7) {
      sp_7 = spina37;
    }
    if (m_spina == 8) {
      sp_8 = spina37;
    }
  }
  if (typeof sp_1 === "undefined") {
    sp_1 = "";
  }
  if (typeof sp_2 === "undefined") {
    sp_2 = "";
  }
  if (typeof sp_3 === "undefined") {
    sp_3 = "";
  }
  if (typeof sp_4 === "undefined") {
    sp_4 = "";
  }
  if (typeof sp_5 === "undefined") {
    sp_5 = "";
  }
  if (typeof sp_6 === "undefined") {
    sp_6 = "";
  }
  if (typeof sp_7 === "undefined") {
    sp_7 = "";
  }
  if (typeof sp_8 === "undefined") {
    sp_8 = "";
  }

  m_spina_raz = 0;
  if (spina_raz1 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz1;
    }
  }
  if (spina_raz2 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz2;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz2;
    }
  }
  if (spina_raz3 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz3;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz3;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz3;
    }
  }
  if (spina_raz4 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz4;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz4;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz4;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz4;
    }
  }
  if (spina_raz5 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz5;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz5;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz5;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz5;
    }
  }
  if (spina_raz6 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz6;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz6;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz6;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz6;
    }
  }
  if (spina_raz7 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz7;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz7;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz7;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz7;
    }
  }
  if (spina_raz8 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz8;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz8;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz8;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz8;
    }
  }
  if (spina_raz9 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz9;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz9;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz9;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz9;
    }
  }
  if (spina_raz10 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz10;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz10;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz10;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz10;
    }
  }
  if (spina_raz11 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz11;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz11;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz11;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz11;
    }
  }
  if (spina_raz12 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz12;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz12;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz12;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz12;
    }
  }
  if (spina_raz13 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz13;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz13;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz13;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz13;
    }
  }
  if (spina_raz14 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz14;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz14;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz14;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz14;
    }
  }
  if (spina_raz15 != "") {
    m_spina_raz++;
    if (m_spina_raz == 1) {
      s_r_1 = spina_raz15;
    }
    if (m_spina_raz == 2) {
      s_r_2 = spina_raz15;
    }
    if (m_spina_raz == 3) {
      s_r_3 = spina_raz15;
    }
    if (m_spina_raz == 4) {
      s_r_4 = spina_raz15;
    }
  }
  if (typeof s_r_1 === "undefined") {
    s_r_1 = "";
  }
  if (typeof s_r_2 === "undefined") {
    s_r_2 = "";
  }
  if (typeof s_r_3 === "undefined") {
    s_r_3 = "";
  }
  if (typeof s_r_4 === "undefined") {
    s_r_4 = "";
  }

  m_press = 0;
  if (press1 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press1;
    }
  }
  if (press2 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press2;
    }
    if (m_press == 2) {
      pr_2 = press2;
    }
  }
  if (press3 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press3;
    }
    if (m_press == 2) {
      pr_2 = press3;
    }
    if (m_press == 3) {
      pr_3 = press3;
    }
  }
  if (press4 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press4;
    }
    if (m_press == 2) {
      pr_2 = press4;
    }
    if (m_press == 3) {
      pr_3 = press4;
    }
    if (m_press == 4) {
      pr_4 = press4;
    }
  }
  if (press5 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press5;
    }
    if (m_press == 2) {
      pr_2 = press5;
    }
    if (m_press == 3) {
      pr_3 = press5;
    }
    if (m_press == 4) {
      pr_4 = press5;
    }
    if (m_press == 5) {
      pr_5 = press5;
    }
  }
  if (press6 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press6;
    }
    if (m_press == 2) {
      pr_2 = press6;
    }
    if (m_press == 3) {
      pr_3 = press6;
    }
    if (m_press == 4) {
      pr_4 = press6;
    }
    if (m_press == 5) {
      pr_5 = press6;
    }
    if (m_press == 6) {
      pr_6 = press6;
    }
  }
  if (press7 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press7;
    }
    if (m_press == 2) {
      pr_2 = press7;
    }
    if (m_press == 3) {
      pr_3 = press7;
    }
    if (m_press == 4) {
      pr_4 = press7;
    }
    if (m_press == 5) {
      pr_5 = press7;
    }
    if (m_press == 6) {
      pr_6 = press7;
    }
    if (m_press == 7) {
      pr_7 = press7;
    }
  }
  if (press8 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press8;
    }
    if (m_press == 2) {
      pr_2 = press8;
    }
    if (m_press == 3) {
      pr_3 = press8;
    }
    if (m_press == 4) {
      pr_4 = press8;
    }
    if (m_press == 5) {
      pr_5 = press8;
    }
    if (m_press == 6) {
      pr_6 = press8;
    }
    if (m_press == 7) {
      pr_7 = press8;
    }
    if (m_press == 8) {
      pr_8 = press8;
    }
  }
  if (press9 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press9;
    }
    if (m_press == 2) {
      pr_2 = press9;
    }
    if (m_press == 3) {
      pr_3 = press9;
    }
    if (m_press == 4) {
      pr_4 = press9;
    }
    if (m_press == 5) {
      pr_5 = press9;
    }
    if (m_press == 6) {
      pr_6 = press9;
    }
    if (m_press == 7) {
      pr_7 = press9;
    }
    if (m_press == 8) {
      pr_8 = press9;
    }
    if (m_press == 9) {
      pr_9 = press9;
    }
  }
  if (press10 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press10;
    }
    if (m_press == 2) {
      pr_2 = press10;
    }
    if (m_press == 3) {
      pr_3 = press10;
    }
    if (m_press == 4) {
      pr_4 = press10;
    }
    if (m_press == 5) {
      pr_5 = press10;
    }
    if (m_press == 6) {
      pr_6 = press10;
    }
    if (m_press == 7) {
      pr_7 = press10;
    }
    if (m_press == 8) {
      pr_8 = press10;
    }
    if (m_press == 9) {
      pr_9 = press10;
    }
    if (m_press == 10) {
      pr_10 = press10;
    }
  }
  if (press11 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press11;
    }
    if (m_press == 2) {
      pr_2 = press11;
    }
    if (m_press == 3) {
      pr_3 = press11;
    }
    if (m_press == 4) {
      pr_4 = press11;
    }
    if (m_press == 5) {
      pr_5 = press11;
    }
    if (m_press == 6) {
      pr_6 = press11;
    }
    if (m_press == 7) {
      pr_7 = press11;
    }
    if (m_press == 8) {
      pr_8 = press11;
    }
    if (m_press == 9) {
      pr_9 = press11;
    }
    if (m_press == 10) {
      pr_10 = press11;
    }
  }
  if (press12 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press12;
    }
    if (m_press == 2) {
      pr_2 = press12;
    }
    if (m_press == 3) {
      pr_3 = press12;
    }
    if (m_press == 4) {
      pr_4 = press12;
    }
    if (m_press == 5) {
      pr_5 = press12;
    }
    if (m_press == 6) {
      pr_6 = press12;
    }
    if (m_press == 7) {
      pr_7 = press12;
    }
    if (m_press == 8) {
      pr_8 = press12;
    }
    if (m_press == 9) {
      pr_9 = press12;
    }
    if (m_press == 10) {
      pr_10 = press12;
    }
  }
  if (press13 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press13;
    }
    if (m_press == 2) {
      pr_2 = press13;
    }
    if (m_press == 3) {
      pr_3 = press13;
    }
    if (m_press == 4) {
      pr_4 = press13;
    }
    if (m_press == 5) {
      pr_5 = press13;
    }
    if (m_press == 6) {
      pr_6 = press13;
    }
    if (m_press == 7) {
      pr_7 = press13;
    }
    if (m_press == 8) {
      pr_8 = press13;
    }
    if (m_press == 9) {
      pr_9 = press13;
    }
    if (m_press == 10) {
      pr_10 = press13;
    }
  }
  if (press14 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press14;
    }
    if (m_press == 2) {
      pr_2 = press14;
    }
    if (m_press == 3) {
      pr_3 = press14;
    }
    if (m_press == 4) {
      pr_4 = press14;
    }
    if (m_press == 5) {
      pr_5 = press14;
    }
    if (m_press == 6) {
      pr_6 = press14;
    }
    if (m_press == 7) {
      pr_7 = press14;
    }
    if (m_press == 8) {
      pr_8 = press14;
    }
    if (m_press == 9) {
      pr_9 = press14;
    }
    if (m_press == 10) {
      pr_10 = press14;
    }
  }
  if (press15 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press15;
    }
    if (m_press == 2) {
      pr_2 = press15;
    }
    if (m_press == 3) {
      pr_3 = press15;
    }
    if (m_press == 4) {
      pr_4 = press15;
    }
    if (m_press == 5) {
      pr_5 = press15;
    }
    if (m_press == 6) {
      pr_6 = press15;
    }
    if (m_press == 7) {
      pr_7 = press15;
    }
    if (m_press == 8) {
      pr_8 = press15;
    }
    if (m_press == 9) {
      pr_9 = press15;
    }
    if (m_press == 10) {
      pr_10 = press15;
    }
  }
  if (press16 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press16;
    }
    if (m_press == 2) {
      pr_2 = press16;
    }
    if (m_press == 3) {
      pr_3 = press16;
    }
    if (m_press == 4) {
      pr_4 = press16;
    }
    if (m_press == 5) {
      pr_5 = press16;
    }
    if (m_press == 6) {
      pr_6 = press16;
    }
    if (m_press == 7) {
      pr_7 = press16;
    }
    if (m_press == 8) {
      pr_8 = press16;
    }
    if (m_press == 9) {
      pr_9 = press16;
    }
    if (m_press == 10) {
      pr_10 = press16;
    }
  }
  if (press17 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press17;
    }
    if (m_press == 2) {
      pr_2 = press17;
    }
    if (m_press == 3) {
      pr_3 = press17;
    }
    if (m_press == 4) {
      pr_4 = press17;
    }
    if (m_press == 5) {
      pr_5 = press17;
    }
    if (m_press == 6) {
      pr_6 = press17;
    }
    if (m_press == 7) {
      pr_7 = press17;
    }
    if (m_press == 8) {
      pr_8 = press17;
    }
    if (m_press == 9) {
      pr_9 = press17;
    }
    if (m_press == 10) {
      pr_10 = press17;
    }
  }
  if (press18 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press18;
    }
    if (m_press == 2) {
      pr_2 = press18;
    }
    if (m_press == 3) {
      pr_3 = press18;
    }
    if (m_press == 4) {
      pr_4 = press18;
    }
    if (m_press == 5) {
      pr_5 = press18;
    }
    if (m_press == 6) {
      pr_6 = press18;
    }
    if (m_press == 7) {
      pr_7 = press18;
    }
    if (m_press == 8) {
      pr_8 = press18;
    }
    if (m_press == 9) {
      pr_9 = press18;
    }
    if (m_press == 10) {
      pr_10 = press18;
    }
  }
  if (press19 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press19;
    }
    if (m_press == 2) {
      pr_2 = press19;
    }
    if (m_press == 3) {
      pr_3 = press19;
    }
    if (m_press == 4) {
      pr_4 = press19;
    }
    if (m_press == 5) {
      pr_5 = press19;
    }
    if (m_press == 6) {
      pr_6 = press19;
    }
    if (m_press == 7) {
      pr_7 = press19;
    }
    if (m_press == 8) {
      pr_8 = press19;
    }
    if (m_press == 9) {
      pr_9 = press19;
    }
    if (m_press == 10) {
      pr_10 = press19;
    }
  }
  if (press20 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press20;
    }
    if (m_press == 2) {
      pr_2 = press20;
    }
    if (m_press == 3) {
      pr_3 = press20;
    }
    if (m_press == 4) {
      pr_4 = press20;
    }
    if (m_press == 5) {
      pr_5 = press20;
    }
    if (m_press == 6) {
      pr_6 = press20;
    }
    if (m_press == 7) {
      pr_7 = press20;
    }
    if (m_press == 8) {
      pr_8 = press20;
    }
    if (m_press == 9) {
      pr_9 = press20;
    }
    if (m_press == 10) {
      pr_10 = press20;
    }
  }
  if (press21 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press21;
    }
    if (m_press == 2) {
      pr_2 = press21;
    }
    if (m_press == 3) {
      pr_3 = press21;
    }
    if (m_press == 4) {
      pr_4 = press21;
    }
    if (m_press == 5) {
      pr_5 = press21;
    }
    if (m_press == 6) {
      pr_6 = press21;
    }
    if (m_press == 7) {
      pr_7 = press21;
    }
    if (m_press == 8) {
      pr_8 = press21;
    }
    if (m_press == 9) {
      pr_9 = press21;
    }
    if (m_press == 10) {
      pr_10 = press21;
    }
  }
  if (press22 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press22;
    }
    if (m_press == 2) {
      pr_2 = press22;
    }
    if (m_press == 3) {
      pr_3 = press22;
    }
    if (m_press == 4) {
      pr_4 = press22;
    }
    if (m_press == 5) {
      pr_5 = press22;
    }
    if (m_press == 6) {
      pr_6 = press22;
    }
    if (m_press == 7) {
      pr_7 = press22;
    }
    if (m_press == 8) {
      pr_8 = press22;
    }
    if (m_press == 9) {
      pr_9 = press22;
    }
    if (m_press == 10) {
      pr_10 = press22;
    }
  }
  if (press23 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press23;
    }
    if (m_press == 2) {
      pr_2 = press23;
    }
    if (m_press == 3) {
      pr_3 = press23;
    }
    if (m_press == 4) {
      pr_4 = press23;
    }
    if (m_press == 5) {
      pr_5 = press23;
    }
    if (m_press == 6) {
      pr_6 = press23;
    }
    if (m_press == 7) {
      pr_7 = press23;
    }
    if (m_press == 8) {
      pr_8 = press23;
    }
    if (m_press == 9) {
      pr_9 = press23;
    }
    if (m_press == 10) {
      pr_10 = press23;
    }
  }
  if (press24 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press24;
    }
    if (m_press == 2) {
      pr_2 = press24;
    }
    if (m_press == 3) {
      pr_3 = press24;
    }
    if (m_press == 4) {
      pr_4 = press24;
    }
    if (m_press == 5) {
      pr_5 = press24;
    }
    if (m_press == 6) {
      pr_6 = press24;
    }
    if (m_press == 7) {
      pr_7 = press24;
    }
    if (m_press == 8) {
      pr_8 = press24;
    }
    if (m_press == 9) {
      pr_9 = press24;
    }
    if (m_press == 10) {
      pr_10 = press24;
    }
  }
  if (press25 != "") {
    m_press++;
    if (m_press == 1) {
      pr_1 = press25;
    }
    if (m_press == 2) {
      pr_2 = press25;
    }
    if (m_press == 3) {
      pr_3 = press25;
    }
    if (m_press == 4) {
      pr_4 = press25;
    }
    if (m_press == 5) {
      pr_5 = press25;
    }
    if (m_press == 6) {
      pr_6 = press25;
    }
    if (m_press == 7) {
      pr_7 = press25;
    }
    if (m_press == 8) {
      pr_8 = press25;
    }
    if (m_press == 9) {
      pr_9 = press25;
    }
    if (m_press == 10) {
      pr_10 = press25;
    }
  }
  if (typeof pr_1 === "undefined") {
    pr_1 = "";
  }
  if (typeof pr_2 === "undefined") {
    pr_2 = "";
  }
  if (typeof pr_3 === "undefined") {
    pr_3 = "";
  }
  if (typeof pr_4 === "undefined") {
    pr_4 = "";
  }
  if (typeof pr_5 === "undefined") {
    pr_5 = "";
  }
  if (typeof pr_6 === "undefined") {
    pr_6 = "";
  }
  if (typeof pr_7 === "undefined") {
    pr_7 = "";
  }
  if (typeof pr_8 === "undefined") {
    pr_8 = "";
  }
  if (typeof pr_9 === "undefined") {
    pr_9 = "";
  }
  if (typeof pr_10 === "undefined") {
    pr_10 = "";
  }
  m_grud = 0;
  if (grud1 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud1;
    }
  }
  if (grud2 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud2;
    }
    if (m_grud == 2) {
      gr_2 = grud2;
    }
  }
  if (grud3 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud3;
    }
    if (m_grud == 2) {
      gr_2 = grud3;
    }
    if (m_grud == 3) {
      gr_3 = grud3;
    }
  }
  if (grud4 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud4;
    }
    if (m_grud == 2) {
      gr_2 = grud4;
    }
    if (m_grud == 3) {
      gr_3 = grud4;
    }
    if (m_grud == 4) {
      gr_4 = grud4;
    }
  }
  if (grud5 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud5;
    }
    if (m_grud == 2) {
      gr_2 = grud5;
    }
    if (m_grud == 3) {
      gr_3 = grud5;
    }
    if (m_grud == 4) {
      gr_4 = grud5;
    }
    if (m_grud == 5) {
      gr_5 = grud5;
    }
  }
  if (grud6 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud6;
    }
    if (m_grud == 2) {
      gr_2 = grud6;
    }
    if (m_grud == 3) {
      gr_3 = grud6;
    }
    if (m_grud == 4) {
      gr_4 = grud6;
    }
    if (m_grud == 5) {
      gr_5 = grud6;
    }
    if (m_grud == 6) {
      gr_6 = grud6;
    }
  }
  if (grud7 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud7;
    }
    if (m_grud == 2) {
      gr_2 = grud7;
    }
    if (m_grud == 3) {
      gr_3 = grud7;
    }
    if (m_grud == 4) {
      gr_4 = grud7;
    }
    if (m_grud == 5) {
      gr_5 = grud7;
    }
    if (m_grud == 6) {
      gr_6 = grud7;
    }
    if (m_grud == 7) {
      gr_7 = grud7;
    }
  }
  if (grud8 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud8;
    }
    if (m_grud == 2) {
      gr_2 = grud8;
    }
    if (m_grud == 3) {
      gr_3 = grud8;
    }
    if (m_grud == 4) {
      gr_4 = grud8;
    }
    if (m_grud == 5) {
      gr_5 = grud8;
    }
    if (m_grud == 6) {
      gr_6 = grud8;
    }
    if (m_grud == 7) {
      gr_7 = grud8;
    }
    if (m_grud == 8) {
      gr_8 = grud8;
    }
  }
  if (grud9 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud9;
    }
    if (m_grud == 2) {
      gr_2 = grud9;
    }
    if (m_grud == 3) {
      gr_3 = grud9;
    }
    if (m_grud == 4) {
      gr_4 = grud9;
    }
    if (m_grud == 5) {
      gr_5 = grud9;
    }
    if (m_grud == 6) {
      gr_6 = grud9;
    }
    if (m_grud == 7) {
      gr_7 = grud9;
    }
    if (m_grud == 8) {
      gr_8 = grud9;
    }
    if (m_grud == 9) {
      gr_9 = grud9;
    }
  }
  if (grud10 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud10;
    }
    if (m_grud == 2) {
      gr_2 = grud10;
    }
    if (m_grud == 3) {
      gr_3 = grud10;
    }
    if (m_grud == 4) {
      gr_4 = grud10;
    }
    if (m_grud == 5) {
      gr_5 = grud10;
    }
    if (m_grud == 6) {
      gr_6 = grud10;
    }
    if (m_grud == 7) {
      gr_7 = grud10;
    }
    if (m_grud == 8) {
      gr_8 = grud10;
    }
    if (m_grud == 9) {
      gr_9 = grud10;
    }
    if (m_grud == 10) {
      gr_10 = grud10;
    }
  }
  if (grud11 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud11;
    }
    if (m_grud == 2) {
      gr_2 = grud11;
    }
    if (m_grud == 3) {
      gr_3 = grud11;
    }
    if (m_grud == 4) {
      gr_4 = grud11;
    }
    if (m_grud == 5) {
      gr_5 = grud11;
    }
    if (m_grud == 6) {
      gr_6 = grud11;
    }
    if (m_grud == 7) {
      gr_7 = grud11;
    }
    if (m_grud == 8) {
      gr_8 = grud11;
    }
    if (m_grud == 9) {
      gr_9 = grud11;
    }
    if (m_grud == 10) {
      gr_10 = grud11;
    }
  }
  if (grud12 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud12;
    }
    if (m_grud == 2) {
      gr_2 = grud12;
    }
    if (m_grud == 3) {
      gr_3 = grud12;
    }
    if (m_grud == 4) {
      gr_4 = grud12;
    }
    if (m_grud == 5) {
      gr_5 = grud12;
    }
    if (m_grud == 6) {
      gr_6 = grud12;
    }
    if (m_grud == 7) {
      gr_7 = grud12;
    }
    if (m_grud == 8) {
      gr_8 = grud12;
    }
    if (m_grud == 9) {
      gr_9 = grud12;
    }
    if (m_grud == 10) {
      gr_10 = grud12;
    }
  }
  if (grud13 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud13;
    }
    if (m_grud == 2) {
      gr_2 = grud13;
    }
    if (m_grud == 3) {
      gr_3 = grud13;
    }
    if (m_grud == 4) {
      gr_4 = grud13;
    }
    if (m_grud == 5) {
      gr_5 = grud13;
    }
    if (m_grud == 6) {
      gr_6 = grud13;
    }
    if (m_grud == 7) {
      gr_7 = grud13;
    }
    if (m_grud == 8) {
      gr_8 = grud13;
    }
    if (m_grud == 9) {
      gr_9 = grud13;
    }
    if (m_grud == 10) {
      gr_10 = grud13;
    }
  }
  if (grud14 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud14;
    }
    if (m_grud == 2) {
      gr_2 = grud14;
    }
    if (m_grud == 3) {
      gr_3 = grud14;
    }
    if (m_grud == 4) {
      gr_4 = grud14;
    }
    if (m_grud == 5) {
      gr_5 = grud14;
    }
    if (m_grud == 6) {
      gr_6 = grud14;
    }
    if (m_grud == 7) {
      gr_7 = grud14;
    }
    if (m_grud == 8) {
      gr_8 = grud14;
    }
    if (m_grud == 9) {
      gr_9 = grud14;
    }
    if (m_grud == 10) {
      gr_10 = grud14;
    }
  }
  if (grud15 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud15;
    }
    if (m_grud == 2) {
      gr_2 = grud15;
    }
    if (m_grud == 3) {
      gr_3 = grud15;
    }
    if (m_grud == 4) {
      gr_4 = grud15;
    }
    if (m_grud == 5) {
      gr_5 = grud15;
    }
    if (m_grud == 6) {
      gr_6 = grud15;
    }
    if (m_grud == 7) {
      gr_7 = grud15;
    }
    if (m_grud == 8) {
      gr_8 = grud15;
    }
    if (m_grud == 9) {
      gr_9 = grud15;
    }
    if (m_grud == 10) {
      gr_10 = grud15;
    }
  }
  if (grud16 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud16;
    }
    if (m_grud == 2) {
      gr_2 = grud16;
    }
    if (m_grud == 3) {
      gr_3 = grud16;
    }
    if (m_grud == 4) {
      gr_4 = grud16;
    }
    if (m_grud == 5) {
      gr_5 = grud16;
    }
    if (m_grud == 6) {
      gr_6 = grud16;
    }
    if (m_grud == 7) {
      gr_7 = grud16;
    }
    if (m_grud == 8) {
      gr_8 = grud16;
    }
    if (m_grud == 9) {
      gr_9 = grud16;
    }
    if (m_grud == 10) {
      gr_10 = grud16;
    }
  }
  if (grud17 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud17;
    }
    if (m_grud == 2) {
      gr_2 = grud17;
    }
    if (m_grud == 3) {
      gr_3 = grud17;
    }
    if (m_grud == 4) {
      gr_4 = grud17;
    }
    if (m_grud == 5) {
      gr_5 = grud17;
    }
    if (m_grud == 6) {
      gr_6 = grud17;
    }
    if (m_grud == 7) {
      gr_7 = grud17;
    }
    if (m_grud == 8) {
      gr_8 = grud17;
    }
    if (m_grud == 9) {
      gr_9 = grud17;
    }
    if (m_grud == 10) {
      gr_10 = grud17;
    }
  }
  if (grud18 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud18;
    }
    if (m_grud == 2) {
      gr_2 = grud18;
    }
    if (m_grud == 3) {
      gr_3 = grud18;
    }
    if (m_grud == 4) {
      gr_4 = grud18;
    }
    if (m_grud == 5) {
      gr_5 = grud18;
    }
    if (m_grud == 6) {
      gr_6 = grud18;
    }
    if (m_grud == 7) {
      gr_7 = grud18;
    }
    if (m_grud == 8) {
      gr_8 = grud18;
    }
    if (m_grud == 9) {
      gr_9 = grud18;
    }
    if (m_grud == 10) {
      gr_10 = grud18;
    }
  }
  if (grud19 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud19;
    }
    if (m_grud == 2) {
      gr_2 = grud19;
    }
    if (m_grud == 3) {
      gr_3 = grud19;
    }
    if (m_grud == 4) {
      gr_4 = grud19;
    }
    if (m_grud == 5) {
      gr_5 = grud19;
    }
    if (m_grud == 6) {
      gr_6 = grud19;
    }
    if (m_grud == 7) {
      gr_7 = grud19;
    }
    if (m_grud == 8) {
      gr_8 = grud19;
    }
    if (m_grud == 9) {
      gr_9 = grud19;
    }
    if (m_grud == 10) {
      gr_10 = grud19;
    }
  }
  if (grud20 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud20;
    }
    if (m_grud == 2) {
      gr_2 = grud20;
    }
    if (m_grud == 3) {
      gr_3 = grud20;
    }
    if (m_grud == 4) {
      gr_4 = grud20;
    }
    if (m_grud == 5) {
      gr_5 = grud20;
    }
    if (m_grud == 6) {
      gr_6 = grud20;
    }
    if (m_grud == 7) {
      gr_7 = grud20;
    }
    if (m_grud == 8) {
      gr_8 = grud20;
    }
    if (m_grud == 9) {
      gr_9 = grud20;
    }
    if (m_grud == 10) {
      gr_10 = grud20;
    }
  }
  if (grud21 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud21;
    }
    if (m_grud == 2) {
      gr_2 = grud21;
    }
    if (m_grud == 3) {
      gr_3 = grud21;
    }
    if (m_grud == 4) {
      gr_4 = grud21;
    }
    if (m_grud == 5) {
      gr_5 = grud21;
    }
    if (m_grud == 6) {
      gr_6 = grud21;
    }
    if (m_grud == 7) {
      gr_7 = grud21;
    }
    if (m_grud == 8) {
      gr_8 = grud21;
    }
    if (m_grud == 9) {
      gr_9 = grud21;
    }
    if (m_grud == 10) {
      gr_10 = grud21;
    }
  }
  if (grud22 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud22;
    }
    if (m_grud == 2) {
      gr_2 = grud22;
    }
    if (m_grud == 3) {
      gr_3 = grud22;
    }
    if (m_grud == 4) {
      gr_4 = grud22;
    }
    if (m_grud == 5) {
      gr_5 = grud22;
    }
    if (m_grud == 6) {
      gr_6 = grud22;
    }
    if (m_grud == 7) {
      gr_7 = grud22;
    }
    if (m_grud == 8) {
      gr_8 = grud22;
    }
    if (m_grud == 9) {
      gr_9 = grud22;
    }
    if (m_grud == 10) {
      gr_10 = grud22;
    }
  }
  if (grud23 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud23;
    }
    if (m_grud == 2) {
      gr_2 = grud23;
    }
    if (m_grud == 3) {
      gr_3 = grud23;
    }
    if (m_grud == 4) {
      gr_4 = grud23;
    }
    if (m_grud == 5) {
      gr_5 = grud23;
    }
    if (m_grud == 6) {
      gr_6 = grud23;
    }
    if (m_grud == 7) {
      gr_7 = grud23;
    }
    if (m_grud == 8) {
      gr_8 = grud23;
    }
    if (m_grud == 9) {
      gr_9 = grud23;
    }
    if (m_grud == 10) {
      gr_10 = grud23;
    }
  }
  if (grud24 != "") {
    m_grud++;
    if (m_grud == 1) {
      gr_1 = grud24;
    }
    if (m_grud == 2) {
      gr_2 = grud24;
    }
    if (m_grud == 3) {
      gr_3 = grud24;
    }
    if (m_grud == 4) {
      gr_4 = grud24;
    }
    if (m_grud == 5) {
      gr_5 = grud24;
    }
    if (m_grud == 6) {
      gr_6 = grud24;
    }
    if (m_grud == 7) {
      gr_7 = grud24;
    }
    if (m_grud == 8) {
      gr_8 = grud24;
    }
    if (m_grud == 9) {
      gr_9 = grud24;
    }
    if (m_grud == 10) {
      gr_10 = grud24;
    }
  }
  if (typeof gr_1 === "undefined") {
    gr_1 = "";
  }
  if (typeof gr_2 === "undefined") {
    gr_2 = "";
  }
  if (typeof gr_3 === "undefined") {
    gr_3 = "";
  }
  if (typeof gr_4 === "undefined") {
    gr_4 = "";
  }
  if (typeof gr_5 === "undefined") {
    gr_5 = "";
  }
  if (typeof gr_6 === "undefined") {
    gr_6 = "";
  }
  if (typeof gr_7 === "undefined") {
    gr_7 = "";
  }
  if (typeof gr_8 === "undefined") {
    gr_8 = "";
  }
  if (typeof gr_9 === "undefined") {
    gr_9 = "";
  }
  if (typeof gr_10 === "undefined") {
    gr_10 = "";
  }

  m_plechi = 0;
  if (plechi1 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi1;
    }
  }
  if (plechi2 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi2;
    }
    if (m_plechi == 2) {
      pl_2 = plechi2;
    }
  }
  if (plechi3 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi3;
    }
    if (m_plechi == 2) {
      pl_2 = plechi3;
    }
    if (m_plechi == 3) {
      pl_3 = plechi3;
    }
  }
  if (plechi4 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi4;
    }
    if (m_plechi == 2) {
      pl_2 = plechi4;
    }
    if (m_plechi == 3) {
      pl_3 = plechi4;
    }
    if (m_plechi == 4) {
      pl_4 = plechi4;
    }
  }
  if (plechi5 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi5;
    }
    if (m_plechi == 2) {
      pl_2 = plechi5;
    }
    if (m_plechi == 3) {
      pl_3 = plechi5;
    }
    if (m_plechi == 4) {
      pl_4 = plechi5;
    }
    if (m_plechi == 5) {
      pl_5 = plechi5;
    }
  }
  if (plechi6 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi6;
    }
    if (m_plechi == 2) {
      pl_2 = plechi6;
    }
    if (m_plechi == 3) {
      pl_3 = plechi6;
    }
    if (m_plechi == 4) {
      pl_4 = plechi6;
    }
    if (m_plechi == 5) {
      pl_5 = plechi6;
    }
    if (m_plechi == 6) {
      pl_6 = plechi6;
    }
  }
  if (plechi7 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi7;
    }
    if (m_plechi == 2) {
      pl_2 = plechi7;
    }
    if (m_plechi == 3) {
      pl_3 = plechi7;
    }
    if (m_plechi == 4) {
      pl_4 = plechi7;
    }
    if (m_plechi == 5) {
      pl_5 = plechi7;
    }
    if (m_plechi == 6) {
      pl_6 = plechi7;
    }
    if (m_plechi == 7) {
      pl_7 = plechi7;
    }
  }
  if (plechi8 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi8;
    }
    if (m_plechi == 2) {
      pl_2 = plechi8;
    }
    if (m_plechi == 3) {
      pl_3 = plechi8;
    }
    if (m_plechi == 4) {
      pl_4 = plechi8;
    }
    if (m_plechi == 5) {
      pl_5 = plechi8;
    }
    if (m_plechi == 6) {
      pl_6 = plechi8;
    }
    if (m_plechi == 7) {
      pl_7 = plechi8;
    }
    if (m_plechi == 8) {
      pl_8 = plechi8;
    }
  }
  if (plechi9 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi9;
    }
    if (m_plechi == 2) {
      pl_2 = plechi9;
    }
    if (m_plechi == 3) {
      pl_3 = plechi9;
    }
    if (m_plechi == 4) {
      pl_4 = plechi9;
    }
    if (m_plechi == 5) {
      pl_5 = plechi9;
    }
    if (m_plechi == 6) {
      pl_6 = plechi9;
    }
    if (m_plechi == 7) {
      pl_7 = plechi9;
    }
    if (m_plechi == 8) {
      pl_8 = plechi9;
    }
    if (m_plechi == 9) {
      pl_9 = plechi9;
    }
  }
  if (plechi10 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi10;
    }
    if (m_plechi == 2) {
      pl_2 = plechi10;
    }
    if (m_plechi == 3) {
      pl_3 = plechi10;
    }
    if (m_plechi == 4) {
      pl_4 = plechi10;
    }
    if (m_plechi == 5) {
      pl_5 = plechi10;
    }
    if (m_plechi == 6) {
      pl_6 = plechi10;
    }
    if (m_plechi == 7) {
      pl_7 = plechi10;
    }
    if (m_plechi == 8) {
      pl_8 = plechi10;
    }
    if (m_plechi == 9) {
      pl_9 = plechi10;
    }
    if (m_plechi == 10) {
      pl_10 = plechi10;
    }
  }
  if (plechi11 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi11;
    }
    if (m_plechi == 2) {
      pl_2 = plechi11;
    }
    if (m_plechi == 3) {
      pl_3 = plechi11;
    }
    if (m_plechi == 4) {
      pl_4 = plechi11;
    }
    if (m_plechi == 5) {
      pl_5 = plechi11;
    }
    if (m_plechi == 6) {
      pl_6 = plechi11;
    }
    if (m_plechi == 7) {
      pl_7 = plechi11;
    }
    if (m_plechi == 8) {
      pl_8 = plechi11;
    }
    if (m_plechi == 9) {
      pl_9 = plechi11;
    }
    if (m_plechi == 10) {
      pl_10 = plechi11;
    }
  }
  if (plechi12 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi12;
    }
    if (m_plechi == 2) {
      pl_2 = plechi12;
    }
    if (m_plechi == 3) {
      pl_3 = plechi12;
    }
    if (m_plechi == 4) {
      pl_4 = plechi12;
    }
    if (m_plechi == 5) {
      pl_5 = plechi12;
    }
    if (m_plechi == 6) {
      pl_6 = plechi12;
    }
    if (m_plechi == 7) {
      pl_7 = plechi12;
    }
    if (m_plechi == 8) {
      pl_8 = plechi12;
    }
    if (m_plechi == 9) {
      pl_9 = plechi12;
    }
    if (m_plechi == 10) {
      pl_10 = plechi12;
    }
  }
  if (plechi13 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi13;
    }
    if (m_plechi == 2) {
      pl_2 = plechi13;
    }
    if (m_plechi == 3) {
      pl_3 = plechi13;
    }
    if (m_plechi == 4) {
      pl_4 = plechi13;
    }
    if (m_plechi == 5) {
      pl_5 = plechi13;
    }
    if (m_plechi == 6) {
      pl_6 = plechi13;
    }
    if (m_plechi == 7) {
      pl_7 = plechi13;
    }
    if (m_plechi == 8) {
      pl_8 = plechi13;
    }
    if (m_plechi == 9) {
      pl_9 = plechi13;
    }
    if (m_plechi == 10) {
      pl_10 = plechi13;
    }
  }
  if (plechi14 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi14;
    }
    if (m_plechi == 2) {
      pl_2 = plechi14;
    }
    if (m_plechi == 3) {
      pl_3 = plechi14;
    }
    if (m_plechi == 4) {
      pl_4 = plechi14;
    }
    if (m_plechi == 5) {
      pl_5 = plechi14;
    }
    if (m_plechi == 6) {
      pl_6 = plechi14;
    }
    if (m_plechi == 7) {
      pl_7 = plechi14;
    }
    if (m_plechi == 8) {
      pl_8 = plechi14;
    }
    if (m_plechi == 9) {
      pl_9 = plechi14;
    }
    if (m_plechi == 10) {
      pl_10 = plechi14;
    }
  }
  if (plechi15 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi15;
    }
    if (m_plechi == 2) {
      pl_2 = plechi15;
    }
    if (m_plechi == 3) {
      pl_3 = plechi15;
    }
    if (m_plechi == 4) {
      pl_4 = plechi15;
    }
    if (m_plechi == 5) {
      pl_5 = plechi15;
    }
    if (m_plechi == 6) {
      pl_6 = plechi15;
    }
    if (m_plechi == 7) {
      pl_7 = plechi15;
    }
    if (m_plechi == 8) {
      pl_8 = plechi15;
    }
    if (m_plechi == 9) {
      pl_9 = plechi15;
    }
    if (m_plechi == 10) {
      pl_10 = plechi15;
    }
  }
  if (plechi16 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi16;
    }
    if (m_plechi == 2) {
      pl_2 = plechi16;
    }
    if (m_plechi == 3) {
      pl_3 = plechi16;
    }
    if (m_plechi == 4) {
      pl_4 = plechi16;
    }
    if (m_plechi == 5) {
      pl_5 = plechi16;
    }
    if (m_plechi == 6) {
      pl_6 = plechi16;
    }
    if (m_plechi == 7) {
      pl_7 = plechi16;
    }
    if (m_plechi == 8) {
      pl_8 = plechi16;
    }
    if (m_plechi == 9) {
      pl_9 = plechi16;
    }
    if (m_plechi == 10) {
      pl_10 = plechi16;
    }
  }
  if (plechi17 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi17;
    }
    if (m_plechi == 2) {
      pl_2 = plechi17;
    }
    if (m_plechi == 3) {
      pl_3 = plechi17;
    }
    if (m_plechi == 4) {
      pl_4 = plechi17;
    }
    if (m_plechi == 5) {
      pl_5 = plechi17;
    }
    if (m_plechi == 6) {
      pl_6 = plechi17;
    }
    if (m_plechi == 7) {
      pl_7 = plechi17;
    }
    if (m_plechi == 8) {
      pl_8 = plechi17;
    }
    if (m_plechi == 9) {
      pl_9 = plechi17;
    }
    if (m_plechi == 10) {
      pl_10 = plechi17;
    }
  }
  if (plechi18 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi18;
    }
    if (m_plechi == 2) {
      pl_2 = plechi18;
    }
    if (m_plechi == 3) {
      pl_3 = plechi18;
    }
    if (m_plechi == 4) {
      pl_4 = plechi18;
    }
    if (m_plechi == 5) {
      pl_5 = plechi18;
    }
    if (m_plechi == 6) {
      pl_6 = plechi18;
    }
    if (m_plechi == 7) {
      pl_7 = plechi18;
    }
    if (m_plechi == 8) {
      pl_8 = plechi18;
    }
    if (m_plechi == 9) {
      pl_9 = plechi18;
    }
    if (m_plechi == 10) {
      pl_10 = plechi18;
    }
  }
  if (plechi19 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi19;
    }
    if (m_plechi == 2) {
      pl_2 = plechi19;
    }
    if (m_plechi == 3) {
      pl_3 = plechi19;
    }
    if (m_plechi == 4) {
      pl_4 = plechi19;
    }
    if (m_plechi == 5) {
      pl_5 = plechi19;
    }
    if (m_plechi == 6) {
      pl_6 = plechi19;
    }
    if (m_plechi == 7) {
      pl_7 = plechi19;
    }
    if (m_plechi == 8) {
      pl_8 = plechi19;
    }
    if (m_plechi == 9) {
      pl_9 = plechi19;
    }
    if (m_plechi == 10) {
      pl_10 = plechi19;
    }
  }
  if (plechi20 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi20;
    }
    if (m_plechi == 2) {
      pl_2 = plechi20;
    }
    if (m_plechi == 3) {
      pl_3 = plechi20;
    }
    if (m_plechi == 4) {
      pl_4 = plechi20;
    }
    if (m_plechi == 5) {
      pl_5 = plechi20;
    }
    if (m_plechi == 6) {
      pl_6 = plechi20;
    }
    if (m_plechi == 7) {
      pl_7 = plechi20;
    }
    if (m_plechi == 8) {
      pl_8 = plechi20;
    }
    if (m_plechi == 9) {
      pl_9 = plechi20;
    }
    if (m_plechi == 10) {
      pl_10 = plechi20;
    }
  }
  if (plechi21 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi21;
    }
    if (m_plechi == 2) {
      pl_2 = plechi21;
    }
    if (m_plechi == 3) {
      pl_3 = plechi21;
    }
    if (m_plechi == 4) {
      pl_4 = plechi21;
    }
    if (m_plechi == 5) {
      pl_5 = plechi21;
    }
    if (m_plechi == 6) {
      pl_6 = plechi21;
    }
    if (m_plechi == 7) {
      pl_7 = plechi21;
    }
    if (m_plechi == 8) {
      pl_8 = plechi21;
    }
    if (m_plechi == 9) {
      pl_9 = plechi21;
    }
    if (m_plechi == 10) {
      pl_10 = plechi21;
    }
  }
  if (plechi22 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi22;
    }
    if (m_plechi == 2) {
      pl_2 = plechi22;
    }
    if (m_plechi == 3) {
      pl_3 = plechi22;
    }
    if (m_plechi == 4) {
      pl_4 = plechi22;
    }
    if (m_plechi == 5) {
      pl_5 = plechi22;
    }
    if (m_plechi == 6) {
      pl_6 = plechi22;
    }
    if (m_plechi == 7) {
      pl_7 = plechi22;
    }
    if (m_plechi == 8) {
      pl_8 = plechi22;
    }
    if (m_plechi == 9) {
      pl_9 = plechi22;
    }
    if (m_plechi == 10) {
      pl_10 = plechi22;
    }
  }
  if (plechi23 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi23;
    }
    if (m_plechi == 2) {
      pl_2 = plechi23;
    }
    if (m_plechi == 3) {
      pl_3 = plechi23;
    }
    if (m_plechi == 4) {
      pl_4 = plechi23;
    }
    if (m_plechi == 5) {
      pl_5 = plechi23;
    }
    if (m_plechi == 6) {
      pl_6 = plechi23;
    }
    if (m_plechi == 7) {
      pl_7 = plechi23;
    }
    if (m_plechi == 8) {
      pl_8 = plechi23;
    }
    if (m_plechi == 9) {
      pl_9 = plechi23;
    }
    if (m_plechi == 10) {
      pl_10 = plechi23;
    }
  }
  if (plechi24 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi24;
    }
    if (m_plechi == 2) {
      pl_2 = plechi24;
    }
    if (m_plechi == 3) {
      pl_3 = plechi24;
    }
    if (m_plechi == 4) {
      pl_4 = plechi24;
    }
    if (m_plechi == 5) {
      pl_5 = plechi24;
    }
    if (m_plechi == 6) {
      pl_6 = plechi24;
    }
    if (m_plechi == 7) {
      pl_7 = plechi24;
    }
    if (m_plechi == 8) {
      pl_8 = plechi24;
    }
    if (m_plechi == 9) {
      pl_9 = plechi24;
    }
    if (m_plechi == 10) {
      pl_10 = plechi24;
    }
  }
  if (plechi25 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi25;
    }
    if (m_plechi == 2) {
      pl_2 = plechi25;
    }
    if (m_plechi == 3) {
      pl_3 = plechi25;
    }
    if (m_plechi == 4) {
      pl_4 = plechi25;
    }
    if (m_plechi == 5) {
      pl_5 = plechi25;
    }
    if (m_plechi == 6) {
      pl_6 = plechi25;
    }
    if (m_plechi == 7) {
      pl_7 = plechi25;
    }
    if (m_plechi == 8) {
      pl_8 = plechi25;
    }
    if (m_plechi == 9) {
      pl_9 = plechi25;
    }
    if (m_plechi == 10) {
      pl_10 = plechi25;
    }
  }
  if (plechi26 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi26;
    }
    if (m_plechi == 2) {
      pl_2 = plechi26;
    }
    if (m_plechi == 3) {
      pl_3 = plechi26;
    }
    if (m_plechi == 4) {
      pl_4 = plechi26;
    }
    if (m_plechi == 5) {
      pl_5 = plechi26;
    }
    if (m_plechi == 6) {
      pl_6 = plechi26;
    }
    if (m_plechi == 7) {
      pl_7 = plechi26;
    }
    if (m_plechi == 8) {
      pl_8 = plechi26;
    }
    if (m_plechi == 9) {
      pl_9 = plechi26;
    }
    if (m_plechi == 10) {
      pl_10 = plechi26;
    }
  }
  if (plechi27 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi27;
    }
    if (m_plechi == 2) {
      pl_2 = plechi27;
    }
    if (m_plechi == 3) {
      pl_3 = plechi27;
    }
    if (m_plechi == 4) {
      pl_4 = plechi27;
    }
    if (m_plechi == 5) {
      pl_5 = plechi27;
    }
    if (m_plechi == 6) {
      pl_6 = plechi27;
    }
    if (m_plechi == 7) {
      pl_7 = plechi27;
    }
    if (m_plechi == 8) {
      pl_8 = plechi27;
    }
    if (m_plechi == 9) {
      pl_9 = plechi27;
    }
    if (m_plechi == 10) {
      pl_10 = plechi27;
    }
  }
  if (plechi28 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi28;
    }
    if (m_plechi == 2) {
      pl_2 = plechi28;
    }
    if (m_plechi == 3) {
      pl_3 = plechi28;
    }
    if (m_plechi == 4) {
      pl_4 = plechi28;
    }
    if (m_plechi == 5) {
      pl_5 = plechi28;
    }
    if (m_plechi == 6) {
      pl_6 = plechi28;
    }
    if (m_plechi == 7) {
      pl_7 = plechi28;
    }
    if (m_plechi == 8) {
      pl_8 = plechi28;
    }
    if (m_plechi == 9) {
      pl_9 = plechi28;
    }
    if (m_plechi == 10) {
      pl_10 = plechi28;
    }
  }
  if (plechi29 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi29;
    }
    if (m_plechi == 2) {
      pl_2 = plechi29;
    }
    if (m_plechi == 3) {
      pl_3 = plechi29;
    }
    if (m_plechi == 4) {
      pl_4 = plechi29;
    }
    if (m_plechi == 5) {
      pl_5 = plechi29;
    }
    if (m_plechi == 6) {
      pl_6 = plechi29;
    }
    if (m_plechi == 7) {
      pl_7 = plechi29;
    }
    if (m_plechi == 8) {
      pl_8 = plechi29;
    }
    if (m_plechi == 9) {
      pl_9 = plechi29;
    }
    if (m_plechi == 10) {
      pl_10 = plechi29;
    }
  }
  if (plechi30 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi30;
    }
    if (m_plechi == 2) {
      pl_2 = plechi30;
    }
    if (m_plechi == 3) {
      pl_3 = plechi30;
    }
    if (m_plechi == 4) {
      pl_4 = plechi30;
    }
    if (m_plechi == 5) {
      pl_5 = plechi30;
    }
    if (m_plechi == 6) {
      pl_6 = plechi30;
    }
    if (m_plechi == 7) {
      pl_7 = plechi30;
    }
    if (m_plechi == 8) {
      pl_8 = plechi30;
    }
    if (m_plechi == 9) {
      pl_9 = plechi30;
    }
    if (m_plechi == 10) {
      pl_10 = plechi30;
    }
  }
  if (plechi31 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi31;
    }
    if (m_plechi == 2) {
      pl_2 = plechi31;
    }
    if (m_plechi == 3) {
      pl_3 = plechi31;
    }
    if (m_plechi == 4) {
      pl_4 = plechi31;
    }
    if (m_plechi == 5) {
      pl_5 = plechi31;
    }
    if (m_plechi == 6) {
      pl_6 = plechi31;
    }
    if (m_plechi == 7) {
      pl_7 = plechi31;
    }
    if (m_plechi == 8) {
      pl_8 = plechi31;
    }
    if (m_plechi == 9) {
      pl_9 = plechi31;
    }
    if (m_plechi == 10) {
      pl_10 = plechi31;
    }
  }
  if (plechi32 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi32;
    }
    if (m_plechi == 2) {
      pl_2 = plechi32;
    }
    if (m_plechi == 3) {
      pl_3 = plechi32;
    }
    if (m_plechi == 4) {
      pl_4 = plechi32;
    }
    if (m_plechi == 5) {
      pl_5 = plechi32;
    }
    if (m_plechi == 6) {
      pl_6 = plechi32;
    }
    if (m_plechi == 7) {
      pl_7 = plechi32;
    }
    if (m_plechi == 8) {
      pl_8 = plechi32;
    }
    if (m_plechi == 9) {
      pl_9 = plechi32;
    }
    if (m_plechi == 10) {
      pl_10 = plechi32;
    }
  }
  if (plechi33 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi33;
    }
    if (m_plechi == 2) {
      pl_2 = plechi33;
    }
    if (m_plechi == 3) {
      pl_3 = plechi33;
    }
    if (m_plechi == 4) {
      pl_4 = plechi33;
    }
    if (m_plechi == 5) {
      pl_5 = plechi33;
    }
    if (m_plechi == 6) {
      pl_6 = plechi33;
    }
    if (m_plechi == 7) {
      pl_7 = plechi33;
    }
    if (m_plechi == 8) {
      pl_8 = plechi33;
    }
    if (m_plechi == 9) {
      pl_9 = plechi33;
    }
    if (m_plechi == 10) {
      pl_10 = plechi33;
    }
  }
  if (plechi34 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi34;
    }
    if (m_plechi == 2) {
      pl_2 = plechi34;
    }
    if (m_plechi == 3) {
      pl_3 = plechi34;
    }
    if (m_plechi == 4) {
      pl_4 = plechi34;
    }
    if (m_plechi == 5) {
      pl_5 = plechi34;
    }
    if (m_plechi == 6) {
      pl_6 = plechi34;
    }
    if (m_plechi == 7) {
      pl_7 = plechi34;
    }
    if (m_plechi == 8) {
      pl_8 = plechi34;
    }
    if (m_plechi == 9) {
      pl_9 = plechi34;
    }
    if (m_plechi == 10) {
      pl_10 = plechi34;
    }
  }
  if (plechi35 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi35;
    }
    if (m_plechi == 2) {
      pl_2 = plechi35;
    }
    if (m_plechi == 3) {
      pl_3 = plechi35;
    }
    if (m_plechi == 4) {
      pl_4 = plechi35;
    }
    if (m_plechi == 5) {
      pl_5 = plechi35;
    }
    if (m_plechi == 6) {
      pl_6 = plechi35;
    }
    if (m_plechi == 7) {
      pl_7 = plechi35;
    }
    if (m_plechi == 8) {
      pl_8 = plechi35;
    }
    if (m_plechi == 9) {
      pl_9 = plechi35;
    }
    if (m_plechi == 10) {
      pl_10 = plechi35;
    }
  }
  if (plechi36 != "") {
    m_plechi++;
    if (m_plechi == 1) {
      pl_1 = plechi36;
    }
    if (m_plechi == 2) {
      pl_2 = plechi36;
    }
    if (m_plechi == 3) {
      pl_3 = plechi36;
    }
    if (m_plechi == 4) {
      pl_4 = plechi36;
    }
    if (m_plechi == 5) {
      pl_5 = plechi36;
    }
    if (m_plechi == 6) {
      pl_6 = plechi36;
    }
    if (m_plechi == 7) {
      pl_7 = plechi36;
    }
    if (m_plechi == 8) {
      pl_8 = plechi36;
    }
    if (m_plechi == 9) {
      pl_9 = plechi36;
    }
    if (m_plechi == 10) {
      pl_10 = plechi36;
    }
  }
  if (typeof pl_1 === "undefined") {
    pl_1 = "";
  }
  if (typeof pl_2 === "undefined") {
    pl_2 = "";
  }
  if (typeof pl_3 === "undefined") {
    pl_3 = "";
  }
  if (typeof pl_4 === "undefined") {
    pl_4 = "";
  }
  if (typeof pl_5 === "undefined") {
    pl_5 = "";
  }
  if (typeof pl_6 === "undefined") {
    pl_6 = "";
  }
  if (typeof pl_7 === "undefined") {
    pl_7 = "";
  }
  if (typeof pl_8 === "undefined") {
    pl_8 = "";
  }
  if (typeof pl_9 === "undefined") {
    pl_9 = "";
  }
  if (typeof pl_10 === "undefined") {
    pl_10 = "";
  }
  m_ryki = 0;
  if (ryki1 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki1;
    }
  }
  if (ryki2 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki2;
    }
    if (m_ryki == 2) {
      ry_2 = ryki2;
    }
  }
  if (ryki3 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki3;
    }
    if (m_ryki == 2) {
      ry_2 = ryki3;
    }
    if (m_ryki == 3) {
      ry_3 = ryki3;
    }
  }
  if (ryki4 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki4;
    }
    if (m_ryki == 2) {
      ry_2 = ryki4;
    }
    if (m_ryki == 3) {
      ry_3 = ryki4;
    }
    if (m_ryki == 4) {
      ry_4 = ryki4;
    }
  }
  if (ryki5 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki5;
    }
    if (m_ryki == 2) {
      ry_2 = ryki5;
    }
    if (m_ryki == 3) {
      ry_3 = ryki5;
    }
    if (m_ryki == 4) {
      ry_4 = ryki5;
    }
    if (m_ryki == 5) {
      ry_5 = ryki5;
    }
  }
  if (ryki6 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki6;
    }
    if (m_ryki == 2) {
      ry_2 = ryki6;
    }
    if (m_ryki == 3) {
      ry_3 = ryki6;
    }
    if (m_ryki == 4) {
      ry_4 = ryki6;
    }
    if (m_ryki == 5) {
      ry_5 = ryki6;
    }
    if (m_ryki == 6) {
      ry_6 = ryki6;
    }
  }
  if (ryki7 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki7;
    }
    if (m_ryki == 2) {
      ry_2 = ryki7;
    }
    if (m_ryki == 3) {
      ry_3 = ryki7;
    }
    if (m_ryki == 4) {
      ry_4 = ryki7;
    }
    if (m_ryki == 5) {
      ry_5 = ryki7;
    }
    if (m_ryki == 6) {
      ry_6 = ryki7;
    }
    if (m_ryki == 7) {
      ry_7 = ryki7;
    }
  }
  if (ryki8 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki8;
    }
    if (m_ryki == 2) {
      ry_2 = ryki8;
    }
    if (m_ryki == 3) {
      ry_3 = ryki8;
    }
    if (m_ryki == 4) {
      ry_4 = ryki8;
    }
    if (m_ryki == 5) {
      ry_5 = ryki8;
    }
    if (m_ryki == 6) {
      ry_6 = ryki8;
    }
    if (m_ryki == 7) {
      ry_7 = ryki8;
    }
    if (m_ryki == 8) {
      ry_8 = ryki8;
    }
  }
  if (ryki9 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki9;
    }
    if (m_ryki == 2) {
      ry_2 = ryki9;
    }
    if (m_ryki == 3) {
      ry_3 = ryki9;
    }
    if (m_ryki == 4) {
      ry_4 = ryki9;
    }
    if (m_ryki == 5) {
      ry_5 = ryki9;
    }
    if (m_ryki == 6) {
      ry_6 = ryki9;
    }
    if (m_ryki == 7) {
      ry_7 = ryki9;
    }
    if (m_ryki == 8) {
      ry_8 = ryki9;
    }
    if (m_ryki == 9) {
      ry_9 = ryki9;
    }
  }
  if (ryki10 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki10;
    }
    if (m_ryki == 2) {
      ry_2 = ryki10;
    }
    if (m_ryki == 3) {
      ry_3 = ryki10;
    }
    if (m_ryki == 4) {
      ry_4 = ryki10;
    }
    if (m_ryki == 5) {
      ry_5 = ryki10;
    }
    if (m_ryki == 6) {
      ry_6 = ryki10;
    }
    if (m_ryki == 7) {
      ry_7 = ryki10;
    }
    if (m_ryki == 8) {
      ry_8 = ryki10;
    }
    if (m_ryki == 9) {
      ry_9 = ryki10;
    }
    if (m_ryki == 10) {
      ry_10 = ryki10;
    }
  }
  if (ryki11 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki11;
    }
    if (m_ryki == 2) {
      ry_2 = ryki11;
    }
    if (m_ryki == 3) {
      ry_3 = ryki11;
    }
    if (m_ryki == 4) {
      ry_4 = ryki11;
    }
    if (m_ryki == 5) {
      ry_5 = ryki11;
    }
    if (m_ryki == 6) {
      ry_6 = ryki11;
    }
    if (m_ryki == 7) {
      ry_7 = ryki11;
    }
    if (m_ryki == 8) {
      ry_8 = ryki11;
    }
    if (m_ryki == 9) {
      ry_9 = ryki11;
    }
    if (m_ryki == 10) {
      ry_10 = ryki11;
    }
  }
  if (ryki12 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki12;
    }
    if (m_ryki == 2) {
      ry_2 = ryki12;
    }
    if (m_ryki == 3) {
      ry_3 = ryki12;
    }
    if (m_ryki == 4) {
      ry_4 = ryki12;
    }
    if (m_ryki == 5) {
      ry_5 = ryki12;
    }
    if (m_ryki == 6) {
      ry_6 = ryki12;
    }
    if (m_ryki == 7) {
      ry_7 = ryki12;
    }
    if (m_ryki == 8) {
      ry_8 = ryki12;
    }
    if (m_ryki == 9) {
      ry_9 = ryki12;
    }
    if (m_ryki == 10) {
      ry_10 = ryki12;
    }
  }
  if (ryki13 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki13;
    }
    if (m_ryki == 2) {
      ry_2 = ryki13;
    }
    if (m_ryki == 3) {
      ry_3 = ryki13;
    }
    if (m_ryki == 4) {
      ry_4 = ryki13;
    }
    if (m_ryki == 5) {
      ry_5 = ryki13;
    }
    if (m_ryki == 6) {
      ry_6 = ryki13;
    }
    if (m_ryki == 7) {
      ry_7 = ryki13;
    }
    if (m_ryki == 8) {
      ry_8 = ryki13;
    }
    if (m_ryki == 9) {
      ry_9 = ryki13;
    }
    if (m_ryki == 10) {
      ry_10 = ryki13;
    }
  }
  if (ryki14 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki14;
    }
    if (m_ryki == 2) {
      ry_2 = ryki14;
    }
    if (m_ryki == 3) {
      ry_3 = ryki14;
    }
    if (m_ryki == 4) {
      ry_4 = ryki14;
    }
    if (m_ryki == 5) {
      ry_5 = ryki14;
    }
    if (m_ryki == 6) {
      ry_6 = ryki14;
    }
    if (m_ryki == 7) {
      ry_7 = ryki14;
    }
    if (m_ryki == 8) {
      ry_8 = ryki14;
    }
    if (m_ryki == 9) {
      ry_9 = ryki14;
    }
    if (m_ryki == 10) {
      ry_10 = ryki14;
    }
  }
  if (ryki15 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki15;
    }
    if (m_ryki == 2) {
      ry_2 = ryki15;
    }
    if (m_ryki == 3) {
      ry_3 = ryki15;
    }
    if (m_ryki == 4) {
      ry_4 = ryki15;
    }
    if (m_ryki == 5) {
      ry_5 = ryki15;
    }
    if (m_ryki == 6) {
      ry_6 = ryki15;
    }
    if (m_ryki == 7) {
      ry_7 = ryki15;
    }
    if (m_ryki == 8) {
      ry_8 = ryki15;
    }
    if (m_ryki == 9) {
      ry_9 = ryki15;
    }
    if (m_ryki == 10) {
      ry_10 = ryki15;
    }
  }
  if (ryki16 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki16;
    }
    if (m_ryki == 2) {
      ry_2 = ryki16;
    }
    if (m_ryki == 3) {
      ry_3 = ryki16;
    }
    if (m_ryki == 4) {
      ry_4 = ryki16;
    }
    if (m_ryki == 5) {
      ry_5 = ryki16;
    }
    if (m_ryki == 6) {
      ry_6 = ryki16;
    }
    if (m_ryki == 7) {
      ry_7 = ryki16;
    }
    if (m_ryki == 8) {
      ry_8 = ryki16;
    }
    if (m_ryki == 9) {
      ry_9 = ryki16;
    }
    if (m_ryki == 10) {
      ry_10 = ryki16;
    }
  }
  if (ryki17 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki17;
    }
    if (m_ryki == 2) {
      ry_2 = ryki17;
    }
    if (m_ryki == 3) {
      ry_3 = ryki17;
    }
    if (m_ryki == 4) {
      ry_4 = ryki17;
    }
    if (m_ryki == 5) {
      ry_5 = ryki17;
    }
    if (m_ryki == 6) {
      ry_6 = ryki17;
    }
    if (m_ryki == 7) {
      ry_7 = ryki17;
    }
    if (m_ryki == 8) {
      ry_8 = ryki17;
    }
    if (m_ryki == 9) {
      ry_9 = ryki17;
    }
    if (m_ryki == 10) {
      ry_10 = ryki17;
    }
  }
  if (ryki18 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki18;
    }
    if (m_ryki == 2) {
      ry_2 = ryki18;
    }
    if (m_ryki == 3) {
      ry_3 = ryki18;
    }
    if (m_ryki == 4) {
      ry_4 = ryki18;
    }
    if (m_ryki == 5) {
      ry_5 = ryki18;
    }
    if (m_ryki == 6) {
      ry_6 = ryki18;
    }
    if (m_ryki == 7) {
      ry_7 = ryki18;
    }
    if (m_ryki == 8) {
      ry_8 = ryki18;
    }
    if (m_ryki == 9) {
      ry_9 = ryki18;
    }
    if (m_ryki == 10) {
      ry_10 = ryki18;
    }
  }
  if (ryki19 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki19;
    }
    if (m_ryki == 2) {
      ry_2 = ryki19;
    }
    if (m_ryki == 3) {
      ry_3 = ryki19;
    }
    if (m_ryki == 4) {
      ry_4 = ryki19;
    }
    if (m_ryki == 5) {
      ry_5 = ryki19;
    }
    if (m_ryki == 6) {
      ry_6 = ryki19;
    }
    if (m_ryki == 7) {
      ry_7 = ryki19;
    }
    if (m_ryki == 8) {
      ry_8 = ryki19;
    }
    if (m_ryki == 9) {
      ry_9 = ryki19;
    }
    if (m_ryki == 10) {
      ry_10 = ryki19;
    }
  }
  if (ryki20 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki20;
    }
    if (m_ryki == 2) {
      ry_2 = ryki20;
    }
    if (m_ryki == 3) {
      ry_3 = ryki20;
    }
    if (m_ryki == 4) {
      ry_4 = ryki20;
    }
    if (m_ryki == 5) {
      ry_5 = ryki20;
    }
    if (m_ryki == 6) {
      ry_6 = ryki20;
    }
    if (m_ryki == 7) {
      ry_7 = ryki20;
    }
    if (m_ryki == 8) {
      ry_8 = ryki20;
    }
    if (m_ryki == 9) {
      ry_9 = ryki20;
    }
    if (m_ryki == 10) {
      ry_10 = ryki20;
    }
  }
  if (ryki21 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki21;
    }
    if (m_ryki == 2) {
      ry_2 = ryki21;
    }
    if (m_ryki == 3) {
      ry_3 = ryki21;
    }
    if (m_ryki == 4) {
      ry_4 = ryki21;
    }
    if (m_ryki == 5) {
      ry_5 = ryki21;
    }
    if (m_ryki == 6) {
      ry_6 = ryki21;
    }
    if (m_ryki == 7) {
      ry_7 = ryki21;
    }
    if (m_ryki == 8) {
      ry_8 = ryki21;
    }
    if (m_ryki == 9) {
      ry_9 = ryki21;
    }
    if (m_ryki == 10) {
      ry_10 = ryki21;
    }
  }
  if (ryki22 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki22;
    }
    if (m_ryki == 2) {
      ry_2 = ryki22;
    }
    if (m_ryki == 3) {
      ry_3 = ryki22;
    }
    if (m_ryki == 4) {
      ry_4 = ryki22;
    }
    if (m_ryki == 5) {
      ry_5 = ryki22;
    }
    if (m_ryki == 6) {
      ry_6 = ryki22;
    }
    if (m_ryki == 7) {
      ry_7 = ryki22;
    }
    if (m_ryki == 8) {
      ry_8 = ryki22;
    }
    if (m_ryki == 9) {
      ry_9 = ryki22;
    }
    if (m_ryki == 10) {
      ry_10 = ryki22;
    }
  }
  if (ryki23 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki23;
    }
    if (m_ryki == 2) {
      ry_2 = ryki23;
    }
    if (m_ryki == 3) {
      ry_3 = ryki23;
    }
    if (m_ryki == 4) {
      ry_4 = ryki23;
    }
    if (m_ryki == 5) {
      ry_5 = ryki23;
    }
    if (m_ryki == 6) {
      ry_6 = ryki23;
    }
    if (m_ryki == 7) {
      ry_7 = ryki23;
    }
    if (m_ryki == 8) {
      ry_8 = ryki23;
    }
    if (m_ryki == 9) {
      ry_9 = ryki23;
    }
    if (m_ryki == 10) {
      ry_10 = ryki23;
    }
  }
  if (ryki24 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki24;
    }
    if (m_ryki == 2) {
      ry_2 = ryki24;
    }
    if (m_ryki == 3) {
      ry_3 = ryki24;
    }
    if (m_ryki == 4) {
      ry_4 = ryki24;
    }
    if (m_ryki == 5) {
      ry_5 = ryki24;
    }
    if (m_ryki == 6) {
      ry_6 = ryki24;
    }
    if (m_ryki == 7) {
      ry_7 = ryki24;
    }
    if (m_ryki == 8) {
      ry_8 = ryki24;
    }
    if (m_ryki == 9) {
      ry_9 = ryki24;
    }
    if (m_ryki == 10) {
      ry_10 = ryki24;
    }
  }
  if (ryki25 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki25;
    }
    if (m_ryki == 2) {
      ry_2 = ryki25;
    }
    if (m_ryki == 3) {
      ry_3 = ryki25;
    }
    if (m_ryki == 4) {
      ry_4 = ryki25;
    }
    if (m_ryki == 5) {
      ry_5 = ryki25;
    }
    if (m_ryki == 6) {
      ry_6 = ryki25;
    }
    if (m_ryki == 7) {
      ry_7 = ryki25;
    }
    if (m_ryki == 8) {
      ry_8 = ryki25;
    }
    if (m_ryki == 9) {
      ry_9 = ryki25;
    }
    if (m_ryki == 10) {
      ry_10 = ryki25;
    }
  }
  if (ryki26 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki26;
    }
    if (m_ryki == 2) {
      ry_2 = ryki26;
    }
    if (m_ryki == 3) {
      ry_3 = ryki26;
    }
    if (m_ryki == 4) {
      ry_4 = ryki26;
    }
    if (m_ryki == 5) {
      ry_5 = ryki26;
    }
    if (m_ryki == 6) {
      ry_6 = ryki26;
    }
    if (m_ryki == 7) {
      ry_7 = ryki26;
    }
    if (m_ryki == 8) {
      ry_8 = ryki26;
    }
    if (m_ryki == 9) {
      ry_9 = ryki26;
    }
    if (m_ryki == 10) {
      ry_10 = ryki26;
    }
  }
  if (ryki27 != "") {
    m_ryki++;
    if (m_ryki == 1) {
      ry_1 = ryki27;
    }
    if (m_ryki == 2) {
      ry_2 = ryki27;
    }
    if (m_ryki == 3) {
      ry_3 = ryki27;
    }
    if (m_ryki == 4) {
      ry_4 = ryki27;
    }
    if (m_ryki == 5) {
      ry_5 = ryki27;
    }
    if (m_ryki == 6) {
      ry_6 = ryki27;
    }
    if (m_ryki == 7) {
      ry_7 = ryki27;
    }
    if (m_ryki == 8) {
      ry_8 = ryki27;
    }
    if (m_ryki == 9) {
      ry_9 = ryki27;
    }
    if (m_ryki == 10) {
      ry_10 = ryki27;
    }
  }
  if (typeof ry_1 === "undefined") {
    ry_1 = "";
  }
  if (typeof ry_2 === "undefined") {
    ry_2 = "";
  }
  if (typeof ry_3 === "undefined") {
    ry_3 = "";
  }
  if (typeof ry_4 === "undefined") {
    ry_4 = "";
  }
  if (typeof ry_5 === "undefined") {
    ry_5 = "";
  }
  if (typeof ry_6 === "undefined") {
    ry_6 = "";
  }
  if (typeof ry_7 === "undefined") {
    ry_7 = "";
  }
  if (typeof ry_8 === "undefined") {
    ry_8 = "";
  }
  if (typeof ry_9 === "undefined") {
    ry_9 = "";
  }
  if (typeof ry_10 === "undefined") {
    ry_10 = "";
  }

  m_ryki_biceps = 0;
  if (ryki_biceps1 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps1;
    }
  }
  if (ryki_biceps2 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps2;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps2;
    }
  }
  if (ryki_biceps3 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps3;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps3;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps3;
    }
  }
  if (ryki_biceps4 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps4;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps4;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps4;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps4;
    }
  }
  if (ryki_biceps5 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps5;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps5;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps5;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps5;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps5;
    }
  }
  if (ryki_biceps6 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps6;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps6;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps6;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps6;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps6;
    }
  }
  if (ryki_biceps7 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps7;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps7;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps7;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps7;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps7;
    }
  }
  if (ryki_biceps8 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps8;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps8;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps8;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps8;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps8;
    }
  }
  if (ryki_biceps9 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps9;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps9;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps9;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps9;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps9;
    }
  }
  if (ryki_biceps10 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps10;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps10;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps10;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps10;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps10;
    }
  }
  if (ryki_biceps11 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps11;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps11;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps11;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps11;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps11;
    }
  }
  if (ryki_biceps12 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps12;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps12;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps12;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps12;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps12;
    }
  }
  if (ryki_biceps13 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps13;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps13;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps13;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps13;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps13;
    }
  }
  if (ryki_biceps14 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps14;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps14;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps14;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps14;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps14;
    }
  }
  if (ryki_biceps15 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps15;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps15;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps15;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps15;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps15;
    }
  }
  if (ryki_biceps16 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps16;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps16;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps16;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps16;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps16;
    }
  }
  if (ryki_biceps17 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps17;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps17;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps17;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps17;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps17;
    }
  }
  if (ryki_biceps18 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps18;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps18;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps18;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps18;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps18;
    }
  }
  if (ryki_biceps19 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps19;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps19;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps19;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps19;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps19;
    }
  }
  if (ryki_biceps20 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps20;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps20;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps20;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps20;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps20;
    }
  }
  if (ryki_biceps21 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps21;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps21;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps21;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps21;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps21;
    }
  }
  if (ryki_biceps22 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps22;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps22;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps22;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps22;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps22;
    }
  }
  if (ryki_biceps23 != "") {
    m_ryki_biceps++;
    if (m_ryki_biceps == 1) {
      r_b_1 = ryki_biceps23;
    }
    if (m_ryki_biceps == 2) {
      r_b_2 = ryki_biceps23;
    }
    if (m_ryki_biceps == 3) {
      r_b_3 = ryki_biceps23;
    }
    if (m_ryki_biceps == 4) {
      r_b_4 = ryki_biceps23;
    }
    if (m_ryki_biceps == 5) {
      r_b_5 = ryki_biceps23;
    }
  }
  if (typeof r_b_1 === "undefined") {
    r_b_1 = "";
  }
  if (typeof r_b_2 === "undefined") {
    r_b_2 = "";
  }
  if (typeof r_b_3 === "undefined") {
    r_b_3 = "";
  }
  if (typeof r_b_4 === "undefined") {
    r_b_4 = "";
  }
  if (typeof r_b_5 === "undefined") {
    r_b_5 = "";
  }

  m_ryki_predplechie = 0;
  if (ryki_predplechie1 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie1;
    }
  }
  if (ryki_predplechie2 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie2;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie2;
    }
  }
  if (ryki_predplechie3 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie3;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie3;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie3;
    }
  }
  if (ryki_predplechie4 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie4;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie4;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie4;
    }
  }
  if (ryki_predplechie5 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie5;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie5;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie5;
    }
  }
  if (ryki_predplechie6 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie6;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie6;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie6;
    }
  }
  if (ryki_predplechie7 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie7;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie7;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie7;
    }
  }
  if (ryki_predplechie8 != "") {
    m_ryki_predplechie++;
    if (m_ryki_predplechie == 1) {
      r_p_1 = ryki_predplechie8;
    }
    if (m_ryki_predplechie == 2) {
      r_p_2 = ryki_predplechie8;
    }
    if (m_ryki_predplechie == 3) {
      r_p_3 = ryki_predplechie8;
    }
  }
  if (typeof r_p_1 === "undefined") {
    r_p_1 = "";
  }
  if (typeof r_p_2 === "undefined") {
    r_p_2 = "";
  }
  if (typeof r_p_3 === "undefined") {
    r_p_3 = "";
  }

  ves_plan_nachalo1 = "";

  ves_plan_nachalo =
    "<div class='bloki_tren' id='bloki_tren1' onclick='bloki_tren(1);vesa(\"bloki_tren01\")'>1 ТРЕНИРОВКА</div><div id='bloki_tren01'><ol class='compleks'>" +
    r_a1;
  if (trenirovok == "1") {
    ves_plan_nachalo =
      "<div class='bloki_tren' id='bloki_tren1' onclick='bloki_tren(1);vesa(\"bloki_tren01\")'>1 ТРЕНИРОВКА</div><div id='bloki_tren01'><ol class='compleks'>" +
      r_a1;
  }
  var tren_com2 =
    '<div class=\'vsia_tren\'>За всю тренировку:</div><div  class="nagryzka_obch2 nagryzka_obch2_tt" id="nagryzka1000_1"  onClick="nagryzka(1000)" onMouseOver="nagr_m(1000)" onMouseOut="nagr_m2(1000)">&nbsp;</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka1000" class="nagryzka_obch" style=\'margin-left:0pt\'></div></ol></div><div class=\'bloki_tren\' id=\'bloki_tren2\' onclick=\'bloki_tren(2);vesa("bloki_tren02")\'>2 ТРЕНИРОВКА</div><div id=\'bloki_tren02\'><ol class=\'compleks\'>';

  var tren_com3 =
    '<div class=\'vsia_tren\'>За всю тренировку:</div><div  class="nagryzka_obch2 nagryzka_obch2_tt" id="nagryzka2000_1"  onClick="nagryzka(2000)" onMouseOver="nagr_m(2000)" onMouseOut="nagr_m2(2000)">&nbsp;</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka2000" class="nagryzka_obch" style=\'margin-left:0pt\'></div></ol></div><div class=\'bloki_tren\' id=\'bloki_tren3\' onclick=\'bloki_tren(3);vesa("bloki_tren03")\'>3 ТРЕНИРОВКА</div><div id=\'bloki_tren03\'><ol class=\'compleks\'>';

  var tren_com4 =
    '<div class=\'vsia_tren\'>За всю тренировку:</div><div  class="nagryzka_obch2 nagryzka_obch2_tt" id="nagryzka3000_1"  onClick="nagryzka(3000)" onMouseOver="nagr_m(3000)" onMouseOut="nagr_m2(3000)">&nbsp;</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka3000" class="nagryzka_obch" style=\'margin-left:0pt\'></div></ol></div><div class=\'bloki_tren\' id=\'bloki_tren4\' onclick=\'bloki_tren(4);vesa("bloki_tren04")\'>4 ТРЕНИРОВКА</div><div id=\'bloki_tren04\'><ol class=\'compleks\'>';

  var tren_com5 =
    '<div class=\'vsia_tren\'>За всю тренировку:</div><div  class="nagryzka_obch2 nagryzka_obch2_tt" id="nagryzka4000_1"  onClick="nagryzka(4000)" onMouseOver="nagr_m(4000)" onMouseOut="nagr_m2(4000)">&nbsp;</div></td></tr></table></div><div style="clear:both"></div><div id="nagryzka4000" class="nagryzka_obch" style=\'margin-left:0pt\'></div></ol></div><div class=\'bloki_tren\' id=\'bloki_tren5\' onclick=\'bloki_tren(5);vesa("bloki_tren05")\'>5 ТРЕНИРОВКА</div><div id=\'bloki_tren05\'><ol class=\'compleks\'>';

  if (tip == "sila") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          no_4;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_3 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          sp_5 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          sp_3 +
          spina_5 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          no_4;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          gr_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_2 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          sp_2 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          gr_3 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_2 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          sp_1 +
          gr_1 +
          ry_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          gr_3 +
          sp_2 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          gr_3 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + no_3 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + no_3 + pl_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + sp_1 + gr_1 + no_2 + sp_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + sp_1 + gr_1 + no_2 + pl_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + no_2 + no_3 + s_r_1 + sp_1 + sp_2 + gr_1 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + no_2 + no_3 + s_r_1 + sp_1 + sp_2 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + no_2 + s_r_1 + sp_1 + sp_2 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + no_2 + s_r_1 + sp_1 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + no_2 + sp_1 + gr_1 + pl_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          pl_1 +
          ry_1 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_3 +
          s_r_2 +
          sp_4 +
          gr_3 +
          r_b_1 +
          gr_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_1 +
          sp_2 +
          pl_2 +
          sp_3 +
          ry_2 +
          no_7 +
          no_8 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          ry_1 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          sp_4 +
          gr_3 +
          pl_1 +
          r_b_1 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_1 +
          sp_2 +
          pl_2 +
          sp_3 +
          ry_2 +
          no_7 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          gr_3 +
          pl_1 +
          r_b_1 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          ry_2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          no_4 +
          s_r_2 +
          gr_3 +
          pl_1 +
          r_b_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          ry_2 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          no_4 +
          gr_2 +
          pl_1 +
          r_b_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_4 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          sp_5 +
          pl_3 +
          r_b_1 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_7 +
          gr_4 +
          sp_1 +
          sp_3 +
          pl_2 +
          sp_4 +
          ry_3 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_5 +
          s_r_2 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_2 +
          gr_6 +
          no_10;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          sp_4 +
          gr_3 +
          pl_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_7 +
          gr_4 +
          sp_1 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_5 +
          s_r_2 +
          ry_2 +
          pl_4 +
          pl_5 +
          gr_6 +
          no_10;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          sp_4 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_7 +
          sp_1 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_4 +
          s_r_2 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          gr_3 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          no_7 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_5 +
          gr_1 +
          gr_4 +
          sp_1 +
          ry_2 +
          pl_3 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_6 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          gr_1 +
          sp_1 +
          r_b_1 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          sp_3 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          sp_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_3 +
          gr_4 +
          s_r_4 +
          sp_3 +
          sp_5 +
          gr_5 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          sp_5 +
          gr_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          sp_5 +
          gr_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_2 +
          sp_4 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_2 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          pl_1 +
          sp_2 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_2 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          pl_1 +
          sp_2 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_2 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + ry_1 + no_3 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + no_3 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = sp_1 + gr_1 + s_r_1 + no_1 + pl_1 + no_2 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = sp_1 + s_r_1 + no_1 + pl_1 + no_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + ry_1 + no_3 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + no_3 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = sp_1 + gr_1 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = sp_1 + gr_1 + no_1 + pl_1 + no_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_6 +
          pr_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_3 +
          sp_2 +
          sp_3 +
          gr_3 +
          ry_1 +
          gr_4 +
          pr_4 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_2 +
          sp_1 +
          pl_2 +
          sp_4 +
          r_b_1 +
          no_7 +
          no_8 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_2 +
          sp_3 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_2 +
          sp_1 +
          pl_2 +
          sp_4 +
          r_b_1 +
          no_7 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          ry_3 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          r_b_1 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_1 +
          s_r_3 +
          sp_1 +
          pl_3 +
          r_b_2 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_4 +
          sp_3 +
          sp_4 +
          pl_2 +
          sp_5 +
          ry_3 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_5 +
          s_r_2 +
          sp_2 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_1 +
          no_10;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_1 +
          s_r_3 +
          sp_1 +
          gr_3 +
          pl_3 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          gr_4 +
          sp_2 +
          sp_4 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_5 +
          s_r_2 +
          ry_2 +
          pl_4 +
          pl_5 +
          sp_3 +
          no_10;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          pr_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          pl_1 +
          s_r_3 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          sp_2 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          gr_1 +
          gr_4 +
          sp_3 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_5 +
          gr_1 +
          gr_4 +
          sp_2 +
          ry_2 +
          pl_3 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_6 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          gr_1 +
          sp_2 +
          ry_2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          sp_3 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          sp_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          no_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_7 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          pl_4 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          sp_5 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          r_b_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_2 +
          gr_5 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_6 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          ry_2 +
          no_2 +
          r_b_1 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_2 +
          r_b_1 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_2 +
          no_4 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_3 +
          sp_1 +
          sp_3 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_3 +
          s_r_3 +
          sp_1 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          pl_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_2 +
          gr_1 +
          ry_1 +
          r_b_1 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          no_1 +
          no_3 +
          sp_3 +
          no_5 +
          gr_2 +
          pl_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_2 +
          gr_1 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          no_1 +
          no_3 +
          sp_3 +
          no_5 +
          gr_2 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_1 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          no_1 +
          no_3 +
          gr_2 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_1 +
          ry_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_1 +
          no_1 +
          no_3 +
          gr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          ry_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + no_3 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + no_3 + pl_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + sp_1 + gr_1 + s_r_1 + no_2 + sp_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + sp_1 + gr_1 + no_2 + sp_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + sp_1 + gr_1 + no_2 + sp_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + sp_1 + no_2 + sp_2 + no_3 + gr_1 + s_r_1 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + sp_1 + no_2 + sp_2 + no_3 + gr_1 + s_r_1 + pl_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + sp_1 + no_2 + sp_2 + gr_1 + s_r_1 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + sp_1 + no_2 + sp_2 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + sp_1 + no_2 + sp_2 + gr_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          pl_1 +
          ry_2 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_2 +
          sp_3 +
          no_2 +
          no_4 +
          pl_3 +
          gr_3 +
          ry_1 +
          gr_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          s_r_3 +
          sp_1 +
          gr_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_3 +
          sp_1 +
          no_2 +
          no_4 +
          gr_3 +
          pl_1 +
          ry_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_1 +
          no_2 +
          no_4 +
          gr_3 +
          pl_1 +
          ry_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_3 +
          pl_1 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          ry_1 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_4 +
          gr_2 +
          pl_1 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          gr_1 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          gr_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_3 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          sp_3 +
          sp_4 +
          no_7 +
          gr_4 +
          pl_2 +
          r_b_2 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          sp_2 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_1 +
          sp_5 +
          no_10;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_3 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          sp_3 +
          no_7 +
          gr_4 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          sp_2 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          sp_4 +
          no_10;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          sp_1 +
          sp_3 +
          no_7 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          sp_4 +
          gr_1 +
          gr_4 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          no_7 +
          pl_2 +
          r_b_1 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_5 +
          sp_2 +
          gr_1 +
          gr_4 +
          ry_2 +
          pl_3 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          no_6 +
          pl_2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_2 +
          gr_1 +
          ry_2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_3 +
          sp_1 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_3 +
          sp_1 +
          no_2 +
          ry_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          sp_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          no_4 +
          ry_2 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          no_4 +
          ry_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_1 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_3 +
          gr_3 +
          gr_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_2 +
          gr_5 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_3 +
          sp_1 +
          sp_4 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          pl_1 +
          gr_2 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          pl_2 +
          gr_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          pl_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          sp_2 +
          gr_2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_3 +
          sp_3 +
          sp_4 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + ry_1 + no_3 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + no_3 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = sp_1 + gr_1 + s_r_1 + no_1 + sp_2 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = sp_1 + gr_1 + no_1 + sp_2 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = sp_1 + gr_1 + no_1 + sp_2 + no_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + ry_1 + no_3 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + no_3 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = sp_1 + gr_1 + sp_2 + no_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = sp_1 + gr_1 + sp_2 + no_1 + no_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          sp_3 +
          pl_3 +
          gr_3 +
          ry_1 +
          gr_4 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          s_r_3 +
          sp_1 +
          gr_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          sp_3 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          s_r_3 +
          sp_1 +
          gr_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          sp_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          s_r_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          s_r_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_1 +
          gr_1 +
          no_2 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_1 +
          pl_3 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          s_r_3 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          sp_4 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_1 +
          sp_5 +
          no_10;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_1 +
          gr_3 +
          pl_3 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          sp_1 +
          gr_4 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          sp_4 +
          no_10;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          pr_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          sp_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          s_r_3 +
          gr_1 +
          sp_4 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_5 +
          sp_1 +
          gr_1 +
          sp_4 +
          ry_2 +
          pl_3 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_6 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          nogi_biceps__2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          pl_4 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          no_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_5 +
          gr_5 +
          gr_6 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_1 +
          sp_4 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_1 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_2 +
          no_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          ry_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          sp_2 +
          no_4 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_2 +
          no_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          sp_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_2 +
          no_1 +
          s_r_1 +
          pl_2 +
          ry_1 +
          sp_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          r_b_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_2 +
          no_1 +
          s_r_2 +
          sp_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_2 +
          no_1 +
          sp_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + sp_2 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + sp_2 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + sp_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + s_r_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          no_3 +
          sp_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_3 +
          no_5 +
          r_p_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          sp_1 +
          no_4 +
          r_b_1 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          no_1 +
          pl_3 +
          s_r_2 +
          sp_4 +
          gr_2 +
          ry_3 +
          gr_4 +
          pl_4 +
          pl_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          no_3 +
          sp_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          sp_1 +
          no_4 +
          r_p_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_1 +
          pl_3 +
          s_r_2 +
          sp_4 +
          gr_2 +
          r_b_1 +
          gr_4 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          no_3 +
          sp_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          sp_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_1 +
          pl_3 +
          s_r_2 +
          sp_4 +
          gr_2 +
          r_b_1 +
          gr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_1 +
          no_3 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_1 +
          pl_3 +
          sp_1 +
          gr_2 +
          ry_2 +
          gr_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_1 +
          no_3 +
          sp_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          no_1 +
          pl_3 +
          s_r_2 +
          gr_2 +
          ry_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_1 +
          gr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_2 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_1 +
          gr_2 +
          s_r_1 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          sp_5 +
          gr_6 +
          r_b_1 +
          no_3 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          no_2 +
          s_r_1 +
          sp_3 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_2 +
          s_r_3 +
          no_5 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_6 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          sp_4 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_2 +
          gr_7 +
          r_b_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          sp_5 +
          gr_6 +
          r_b_3 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          s_r_1 +
          sp_3 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          s_r_3 +
          no_5 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_2 +
          pl_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_4 +
          gr_1 +
          gr_5 +
          ry_3 +
          pl_4 +
          r_b_1 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          sp_4 +
          r_b_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          s_r_1 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_p_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          s_r_3 +
          no_5 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          sp_4 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          no_4 +
          gr_4 +
          pl_2 +
          r_b_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_2 +
          s_r_1 +
          pl_1 +
          sp_3 +
          ry_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          no_3 +
          gr_4 +
          pl_2 +
          r_b_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          gr_3 +
          s_r_1 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_3 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_2 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          gr_3 +
          s_r_1 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_2 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_2 +
          s_r_3 +
          sp_3 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_3 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_1 +
          sp_3 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          r_b_2 +
          no_3 +
          ry_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          pr_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + sp_2 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + sp_2 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + sp_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + sp_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2;
      }
      if (yprajnen == "4-6") {
        ves_plan = no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          r_b_2 +
          no_5 +
          r_p_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          s_r_3 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_3 +
          gr_4 +
          pl_4 +
          pl_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          r_b_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_3 +
          gr_4 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          gr_3 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          no_2 +
          pl_1 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          no_3 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_2 +
          no_3 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          sp_3 +
          no_5 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_6 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_1 +
          gr_7 +
          r_b_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_1 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_5 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          r_b_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_5 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          no_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          no_2 +
          pl_1 +
          gr_3 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_4 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_1 +
          sp_3 +
          gr_1 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_2 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_1 +
          ry_3 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          sp_2 +
          no_2 +
          r_b_1 +
          no_4 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_2 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          no_2 +
          r_b_1 +
          sp_2 +
          pr_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_2 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          no_2 +
          ry_3 +
          sp_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_2 +
          s_r_1 +
          pl_2 +
          ry_1 +
          no_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          r_b_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_2 +
          s_r_1 +
          pl_2 +
          ry_1 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          gr_2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + pl_1 + r_b_1 + no_1 + ry_1 + s_r_1 + sp_2 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + no_1 + sp_2 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + sp_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + no_1 + pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + no_1 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + no_1 + s_r_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1 + s_r_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          no_5 +
          r_p_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          pl_1 +
          ry_3 +
          sp_2 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          pl_3 +
          s_r_3 +
          sp_3 +
          gr_2 +
          ry_2 +
          gr_4 +
          pl_4 +
          pl_5 +
          no_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          pl_1 +
          ry_3 +
          sp_2 +
          no_2 +
          r_b_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          pl_3 +
          s_r_3 +
          sp_3 +
          gr_2 +
          ry_2 +
          gr_4 +
          pl_4 +
          no_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          sp_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          pl_3 +
          s_r_3 +
          sp_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          pl_3 +
          s_r_1 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          pl_1 +
          ry_2 +
          no_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          pl_3 +
          sp_1 +
          gr_2 +
          r_b_1 +
          no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_3 +
          no_1 +
          no_3 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_6 +
          r_b_2 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_3 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          sp_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_5 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          r_b_2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_4 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          sp_5 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_4 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          no_1 +
          ry_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_1 +
          gr_2 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          pl_1 +
          ry_1 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_1 +
          gr_1 +
          r_b_1 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          no_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          no_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          gr_2 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          pl_1 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + no_1 + sp_2 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + s_r_1 + no_1 + sp_2 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + sp_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + pl_1 + r_b_1 + no_1 + sp_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + no_1 + no_2 + pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + s_r_1 + no_1 + pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan = gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + no_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + no_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          ry_2 +
          no_3 +
          r_b_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_3 +
          r_b_2 +
          no_2 +
          no_4 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          pl_4 +
          pl_5 +
          no_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          ry_2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_3 +
          no_2 +
          r_b_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          pl_4 +
          no_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          ry_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          pl_1 +
          r_b_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          no_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_1 +
          pl_2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_1 +
          sp_1 +
          pl_1 +
          ry_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          sp_2 +
          pl_3 +
          gr_2 +
          r_b_1 +
          no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_3 +
          no_1 +
          no_3 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_3 +
          s_r_2 +
          sp_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_5 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_6 +
          r_b_2 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_6 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          pl_5 +
          r_b_1 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          gr_6 +
          r_b_2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          sp_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          pl_5 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_7 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          ry_6 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          ry_5 +
          gr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          s_r_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          pr_2 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          pr_4 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }
  }

  if (tip != "sila" && cel == "potolstet") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          gr_3 +
          sp_2 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          gr_3 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          sp_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          ry_1 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          sp_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + no_1 + no_2 + s_r_1 + sp_1 + sp_2 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + no_1 + no_2 + s_r_1 + sp_1 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + no_1 + no_2 + sp_1 + gr_1 + pl_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          sp_2 +
          no_1 +
          s_r_1 +
          no_2 +
          pl_1 +
          ry_1 +
          no_3 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          sp_2 +
          no_1 +
          s_r_1 +
          no_2 +
          pl_1 +
          no_3 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + sp_1 + gr_1 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + sp_1 + gr_1 + no_1 + pl_1 + no_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          no_2 +
          sp_2 +
          no_3 +
          gr_1 +
          s_r_1 +
          pl_1 +
          ry_1 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          no_2 +
          sp_2 +
          no_3 +
          gr_1 +
          s_r_1 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + no_1 + sp_1 + no_2 + sp_2 + gr_1 + s_r_1 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + no_1 + sp_1 + no_2 + sp_2 + gr_1 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + no_1 + sp_1 + no_2 + sp_2 + gr_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          sp_2 +
          no_1 +
          s_r_1 +
          no_2 +
          pl_1 +
          ry_1 +
          no_3 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          sp_2 +
          no_1 +
          s_r_1 +
          no_2 +
          pl_1 +
          no_3 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + sp_1 + gr_1 + sp_2 + no_1 + s_r_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + sp_1 + gr_1 + sp_2 + no_1 + no_2 + pl_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + sp_1 + gr_1 + sp_2 + no_1 + no_2 + pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          no_2 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + s_r_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + no_1 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          no_2 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + no_1 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          no_1 +
          no_2 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          no_1 +
          s_r_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1 + s_r_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1 + pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + gr_1 + sp_1 + r_b_1 + pl_1 + ry_1 + no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          no_1 +
          no_2 +
          pr_1;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          sp_2 +
          r_b_1 +
          pl_1 +
          ry_2 +
          s_r_1 +
          no_1 +
          pr_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + no_1 + pr_1;
      }
      if (yprajnen == "5-7") {
        ves_plan = kardio2 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + ry_2 + no_1;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio2 + gr_1 + sp_1 + sp_2 + r_b_1 + pl_1 + no_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          sp_3 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          sp_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_3 +
          gr_4 +
          s_r_4 +
          sp_3 +
          sp_5 +
          gr_5 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          sp_5 +
          gr_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          sp_5 +
          gr_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_2 +
          sp_4 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_2 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          sp_3 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          sp_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          no_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          no_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_7 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          pl_4 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          sp_5 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          r_b_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_2 +
          gr_5 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_6 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          ry_2 +
          no_2 +
          r_b_1 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_2 +
          r_b_1 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_3 +
          gr_6 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          ry_2 +
          no_2 +
          no_4 +
          no_7 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_3 +
          sp_1 +
          sp_3 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_3 +
          s_r_3 +
          sp_1 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          no_1 +
          no_3 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_3 +
          sp_1 +
          no_2 +
          no_4 +
          ry_1 +
          ry_2 +
          no_7 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_3 +
          sp_1 +
          no_2 +
          ry_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          sp_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          no_4 +
          ry_2 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          no_4 +
          ry_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          pl_1 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_3 +
          gr_3 +
          gr_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          r_b_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_2 +
          gr_5 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_6 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_3 +
          sp_2 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_7 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          no_3 +
          no_5 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          no_4 +
          ry_1 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          gr_3 +
          sp_1 +
          sp_4 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          sp_3 +
          sp_4 +
          no_2 +
          no_4;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          gr_3 +
          sp_3 +
          sp_4 +
          no_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          pl_1 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          pl_1 +
          ry_1 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pl_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          nogi_biceps__2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          pl_4 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          no_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_5 +
          gr_5 +
          gr_6 +
          no_8 +
          pl_5 +
          pr_8;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_7 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          sp_5 +
          no_8 +
          pl_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          gr_5 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          ry_2 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_1 +
          sp_4 +
          gr_4 +
          no_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          no_2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          gr_3 +
          sp_1 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          no_1 +
          no_2 +
          ry_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          gr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_2 +
          no_3 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          gr_2 +
          s_r_1 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_2 +
          s_r_2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          gr_3 +
          s_r_1 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_3 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          gr_3 +
          s_r_1 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_2 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_3 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          s_r_3 +
          sp_1 +
          sp_3 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          sp_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          no_1 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          no_3 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          no_1 +
          no_2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          sp_4 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_3 +
          gr_1 +
          sp_2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_1 +
          sp_3 +
          sp_4 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          sp_3 +
          gr_1 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          gr_2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_2 +
          gr_3 +
          s_r_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          gr_1 +
          gr_2 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          sp_5 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_4 +
          gr_5 +
          sp_1 +
          sp_4 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_3 +
          gr_3 +
          gr_4 +
          sp_1 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          s_r_1 +
          gr_3 +
          gr_4 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          no_3 +
          pr_3;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          ry_2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          no_3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          pl_2 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          gr_2 +
          s_r_2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          ry_1 +
          r_b_1 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          gr_1 +
          sp_1 +
          sp_2 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          sp_4 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          pl_1 +
          pl_2 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "potolstet"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          r_p_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5 +
          pr_5;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          sp_3 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          pl_3 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          s_r_3 +
          sp_2 +
          sp_4 +
          gr_2 +
          no_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          gr_1 +
          sp_1 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          pl_2 +
          no_1 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          r_b_1 +
          ry_2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          no_2;
      }
    }
  }

  if (tip == "kardio_kom" && cel == "pohydet") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_6 +
          kardio2 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          sp_6 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          no_7 +
          sp_5 +
          sp_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          pr_4 +
          ry_3 +
          kardio2 +
          no_8 +
          pr_7 +
          r_b_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_6 +
          kardio2 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          sp_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          no_7 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          pr_4 +
          ry_3 +
          kardio2 +
          no_8 +
          r_b_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_4 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          no_9 +
          ry_3 +
          kardio2 +
          no_8;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          no_5 +
          kardio2 +
          pr_4 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          pr_4 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          no_5 +
          kardio2 +
          ry_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_6 +
          no_5 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          sp_6 +
          pl_5 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          pl_4 +
          no_7 +
          kardio2 +
          sp_5 +
          sp_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          pr_7 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_6 +
          no_5 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          sp_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          pl_4 +
          no_7 +
          kardio2 +
          sp_5 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_4 +
          no_5 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          pl_4 +
          no_7 +
          kardio2 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          no_9 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          no_5 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_4;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          no_6 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          pr_4 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          no_5 +
          ry_3 +
          kardio2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_6 +
          kardio2 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          sp_6 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          no_7 +
          sp_5 +
          sp_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          pr_4 +
          ry_3 +
          kardio2 +
          no_8 +
          pr_7 +
          r_b_2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_6 +
          kardio2 +
          no_5 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          sp_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          no_7 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          pr_4 +
          ry_3 +
          kardio2 +
          no_8 +
          r_b_2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_4 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          pl_3 +
          kardio2 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_4 +
          kardio2 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          s_r_4 +
          kardio2 +
          no_9 +
          ry_3 +
          kardio2 +
          no_8;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          no_6 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          sp_3 +
          kardio2 +
          sp_5 +
          no_7 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          no_5 +
          kardio2 +
          pr_4 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          s_r_1 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          pr_4 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          sp_3 +
          kardio2 +
          sp_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          no_4 +
          pr_1 +
          kardio2 +
          ry_1 +
          no_5 +
          kardio2 +
          ry_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_6 +
          no_5 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          sp_6 +
          pl_5 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_8 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          pl_4 +
          no_7 +
          kardio2 +
          sp_5 +
          sp_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          pr_7 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_6 +
          no_5 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          sp_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          gr_5 +
          pr_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          pl_4 +
          no_7 +
          kardio2 +
          sp_5 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          r_b_2 +
          no_4;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_4 +
          no_5 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          pl_3 +
          no_6 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_5 +
          r_b_1 +
          kardio2 +
          ry_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          sp_5 +
          no_7 +
          kardio2 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          s_r_4 +
          no_9 +
          kardio2 +
          ry_3 +
          no_8 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_5 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          no_6 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_1 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          sp_3 +
          spina_5 +
          kardio2 +
          no_7 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          no_5 +
          pr_4 +
          kardio2 +
          ry_3 +
          no_4;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_3 +
          kardio2 +
          s_r_2 +
          no_6 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          pr_4 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          sp_3 +
          sp_5 +
          kardio2 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          pr_1 +
          ry_1 +
          kardio2 +
          no_5 +
          ry_3 +
          kardio2 +
          no_4;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          kardio2 +
          no_3 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          pr_6 +
          kardio2 +
          no_4 +
          pl_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          pr_6 +
          kardio2 +
          no_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          kardio2 +
          no_3 +
          gr_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          pr_6 +
          kardio2 +
          no_4 +
          pl_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          pr_6 +
          kardio2 +
          no_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          pr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          no_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_2 +
          pl_2 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          pl_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_3 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          pr_6 +
          no_4 +
          kardio2 +
          pl_6 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_3 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          pr_6 +
          no_4 +
          kardio2 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          no_3 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_3 +
          kardio2 +
          gr_6 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          pl_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          pr_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          pr_6 +
          no_4 +
          kardio2 +
          pl_6 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6 +
          r_b_5;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_3 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          kardio2 +
          gr_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          pr_6 +
          no_4 +
          kardio2 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3 +
          kardio2 +
          sp_6;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          pr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          r_b_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          ry_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          no_3 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3 +
          ry_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_2 +
          pr_1 +
          kardio2 +
          s_r_2 +
          gr_4 +
          kardio2 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          gr_1 +
          pr_2 +
          kardio2 +
          ry_2 +
          gr_3 +
          kardio2 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pl_2 +
          pr_5 +
          kardio2 +
          s_r_1 +
          pl_4 +
          kardio2 +
          no_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          r_b_1 +
          kardio2 +
          ry_1 +
          sp_4 +
          kardio2 +
          r_b_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          s_r_1 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          pl_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          s_r_1 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          ry_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          s_r_1 +
          kardio2 +
          gr_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          s_r_1 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + no_1 + sp_1 + kardio2 + gr_1 + no_2 + kardio2 + pl_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          pl_1 +
          no_2 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          sp_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          no_2 +
          pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          s_r_1 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + no_1 + sp_1 + kardio2 + gr_1 + no_2 + kardio2 + sp_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          no_1 +
          sp_2 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + sp_1 + gr_1 + kardio2 + no_1 + sp_2 + kardio2 + no_2 + pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          sp_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          sp_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          no_5 +
          gr_2 +
          kardio2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          s_r_2 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          r_b_1 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          gr_1 +
          kardio2 +
          s_r_1 +
          sp_2 +
          kardio2 +
          sp_3 +
          ry_2 +
          kardio2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          no_5 +
          gr_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          no_4 +
          s_r_2 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          r_b_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          gr_1 +
          kardio2 +
          s_r_1 +
          sp_2 +
          kardio2 +
          sp_3 +
          ry_2 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          no_5 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          no_4 +
          gr_2 +
          kardio2 +
          pl_1 +
          r_b_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          gr_1 +
          kardio2 +
          s_r_1 +
          sp_2 +
          kardio2 +
          sp_4 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_2 +
          kardio2 +
          no_5 +
          gr_2 +
          kardio2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          s_r_1 +
          sp_4 +
          kardio2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_7 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          pl_2 +
          r_b_1 +
          kardio2 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_6 +
          gr_1 +
          kardio2 +
          gr_4 +
          s_r_2 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_2 +
          kardio2 +
          no_5 +
          gr_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          kardio2 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          no_7 +
          kardio2 +
          s_r_2 +
          sp_3 +
          kardio2 +
          pl_2 +
          r_b_1 +
          kardio2 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_5 +
          gr_1 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_6 +
          kardio2 +
          s_r_2 +
          sp_3 +
          kardio2 +
          pl_2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          gr_1 +
          kardio2 +
          sp_1 +
          r_b_1 +
          kardio2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          ry_1 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          ry_1 +
          no_2 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          ry_1 +
          kardio2 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          sp_2 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          gr_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_3 +
          ry_3 +
          kardio2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_2 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          gr_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_3 +
          r_b_1 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          gr_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_2 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          pl_1 +
          kardio2 +
          s_r_3 +
          sp_1 +
          kardio2 +
          gr_3 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_2 +
          kardio2 +
          sp_2 +
          pl_2 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_6 +
          gr_1 +
          kardio2 +
          gr_4 +
          sp_3 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          sp_1 +
          gr_3 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_3 +
          pl_2 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_5 +
          gr_1 +
          kardio2 +
          gr_4 +
          sp_2 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          sp_1 +
          gr_3 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_3 +
          pl_2 +
          kardio2 +
          no_6 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          gr_1 +
          kardio2 +
          sp_2 +
          ry_2 +
          kardio2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_2 +
          no_1 +
          kardio2 +
          no_3 +
          sp_3 +
          kardio2 +
          gr_2 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          no_2 +
          kardio2 +
          no_4 +
          gr_1 +
          kardio2 +
          ry_1 +
          pr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_2 +
          no_1 +
          kardio2 +
          no_3 +
          gr_2 +
          kardio2 +
          pl_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          no_2 +
          kardio2 +
          no_4 +
          gr_1 +
          kardio2 +
          ry_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_1 +
          no_1 +
          kardio2 +
          no_3 +
          gr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          r_b_1 +
          kardio2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          r_b_1 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          ry_1 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_4 +
          gr_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          gr_1 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          gr_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          sp_1 +
          kardio2 +
          sp_3 +
          no_7 +
          kardio2 +
          pl_2 +
          r_b_1 +
          kardio2 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_6 +
          sp_4 +
          kardio2 +
          gr_1 +
          gr_4 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          gr_2 +
          no_5 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_3 +
          no_7 +
          kardio2 +
          pl_2 +
          r_b_1 +
          kardio2 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_5 +
          sp_2 +
          kardio2 +
          gr_1 +
          gr_4 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          gr_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          pl_1 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_3 +
          no_6 +
          kardio2 +
          pl_2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_2 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          ry_1 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          pl_1 +
          no_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          ry_1 +
          no_2 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_1 +
          kardio2 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          r_b_1 +
          kardio2 +
          no_6 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          r_b_1 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          no_2 +
          no_6;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_3 +
          pl_1 +
          kardio2 +
          gr_3 +
          no_2 +
          kardio2 +
          no_4 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          s_r_1 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          no_8 +
          no_9 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_6 +
          s_r_3 +
          kardio2 +
          gr_1 +
          sp_4 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          pr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_3 +
          pl_2 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          no_8 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_5 +
          sp_1 +
          kardio2 +
          gr_1 +
          sp_4 +
          kardio2 +
          ry_2 +
          pl_3 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_3 +
          pl_2 +
          kardio2 +
          no_6 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          sp_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          kardio2 +
          no_4 +
          r_b_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          no_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          pl_1 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          no_3 +
          sp_2 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          r_b_2 +
          sp_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_3 +
          no_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          kardio2 +
          sp_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_1 +
          kardio2 +
          pl_3 +
          s_r_2 +
          kardio2 +
          sp_4 +
          gr_2 +
          kardio2 +
          r_b_1 +
          gr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          no_3 +
          s_r_2 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_3 +
          no_2 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_1 +
          kardio2 +
          pl_3 +
          sp_1 +
          kardio2 +
          gr_2 +
          ry_2 +
          kardio2 +
          gr_4;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          no_3 +
          sp_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          r_b_1 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_1 +
          kardio2 +
          pl_3 +
          s_r_2 +
          kardio2 +
          gr_2 +
          ry_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          kardio2 +
          r_b_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          s_r_1 +
          no_4 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          r_p_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          s_r_3 +
          no_5 +
          kardio2 +
          sp_1 +
          gr_4 +
          kardio2 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_3 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          s_r_1 +
          pl_1 +
          kardio2 +
          gr_3 +
          pl_3 +
          kardio2 +
          ry_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_3 +
          no_4 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          r_b_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_2 +
          kardio2 +
          s_r_1 +
          pl_1 +
          kardio2 +
          gr_3 +
          ry_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          no_3 +
          gr_4 +
          kardio2 +
          pl_2 +
          r_b_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          no_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          r_b_1 +
          no_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          no_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_2 +
          no_1 +
          kardio2 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          no_2 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          no_3 +
          pl_2 +
          kardio2 +
          ry_1 +
          r_b_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_3 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_3 +
          kardio2 +
          sp_3 +
          no_1 +
          kardio2 +
          pl_3 +
          gr_2 +
          kardio2 +
          r_b_1 +
          gr_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          no_3 +
          pl_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          gr_3 +
          no_2 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          no_1 +
          kardio2 +
          pl_3 +
          gr_2 +
          kardio2 +
          ry_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_3 +
          kardio2 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          pl_1 +
          ry_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          no_1 +
          pl_3 +
          kardio2 +
          gr_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          kardio2 +
          r_b_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          ry_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          no_5 +
          kardio2 +
          sp_4 +
          gr_4 +
          kardio2 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          gr_3 +
          pl_3 +
          kardio2 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          no_4 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          no_1 +
          gr_2 +
          kardio2 +
          ry_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          gr_3 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          gr_4 +
          kardio2 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          s_r_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          sp_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          ry_3 +
          sp_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          s_r_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          gr_1 +
          pl_1 +
          kardio2 +
          ry_2 +
          r_b_1 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_2 +
          kardio2 +
          s_r_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          gr_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          r_b_2 +
          kardio2 +
          sp_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          sp_2 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          pl_3 +
          kardio2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          gr_2 +
          r_b_1 +
          kardio2 +
          gr_4 +
          no_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          sp_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_2 +
          kardio2 +
          gr_3 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          pl_3 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          r_b_1 +
          gr_4 +
          kardio2 +
          no_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          pl_1 +
          ry_2 +
          kardio2 +
          no_2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          pl_3 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          r_b_1 +
          no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          r_b_2 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          ry_4 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          ry_3 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_4 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1 +
          gr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          no_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          r_b_2 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_1 +
          gr_4 +
          kardio2 +
          pl_2 +
          ry_3 +
          kardio2 +
          no_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_3 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          ry_3 +
          no_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          sp_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_2 +
          no_4;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          gr_2 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          ry_1 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          r_b_1 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          gr_3 +
          kardio2 +
          pl_1 +
          r_b_2 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_3 +
          kardio2 +
          gr_2 +
          r_b_1 +
          kardio2 +
          gr_4 +
          no_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_2 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_3 +
          kardio2 +
          sp_3 +
          pl_3 +
          kardio2 +
          gr_2 +
          r_b_1 +
          kardio2 +
          no_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          gr_1 +
          pl_2 +
          ry_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_1 +
          pl_1 +
          kardio2 +
          ry_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_2 +
          kardio2 +
          pl_3 +
          gr_2 +
          kardio2 +
          r_b_1 +
          no_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          ry_6 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          ry_4 +
          kardio2 +
          no_2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          sp_4 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          ry_3 +
          no_5 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          ry_5 +
          gr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          no_1 +
          kardio2 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          pl_3 +
          r_b_2 +
          kardio2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          sp_3 +
          gr_4 +
          kardio2 +
          pl_2 +
          ry_3 +
          kardio2 +
          no_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_5 +
          kardio2 +
          ry_2 +
          pl_4 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          ry_1 +
          kardio2 +
          gr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_2 +
          kardio2 +
          pl_1 +
          gr_3 +
          kardio2 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_4 +
          pl_2 +
          kardio2 +
          ry_3 +
          no_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          sp_1 +
          kardio2 +
          gr_1 +
          ry_2 +
          kardio2 +
          pl_3 +
          r_b_1;
      }
    }
  }

  if (tip == "kardio" && cel == "pohydet") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          kardio2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_7 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          no_4 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          kardio2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          sp_5 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          no_7 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_2 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_3 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          no_4 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          pl_5 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          ry_4 +
          gr_5 +
          pr_8 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          sp_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          pr_7 +
          r_b_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_6 +
          no_5 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          sp_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          gr_5 +
          pr_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          pl_4 +
          no_7 +
          sp_5 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          pr_4 +
          ry_3 +
          no_8 +
          r_b_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_4 +
          no_5 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          pl_3 +
          no_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_5 +
          r_b_1 +
          ry_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          s_r_3 +
          sp_3 +
          sp_5 +
          no_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          s_r_4 +
          no_9 +
          ry_3 +
          no_8 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          gr_4 +
          pr_5 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_6 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_1 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          sp_3 +
          spina_5 +
          no_7 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          no_5 +
          pr_4 +
          ry_3 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_3 +
          s_r_2 +
          no_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_2 +
          pl_1 +
          s_r_1 +
          sp_4 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          pr_4 +
          r_b_1 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          pl_2 +
          sp_3 +
          sp_5 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          pr_1 +
          ry_1 +
          no_5 +
          ry_3 +
          no_4 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_1 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_2 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          gr_6 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          pl_5 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          pr_6 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          pl_6 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          r_b_5 +
          kardio2;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_3 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          sp_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          gr_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          pr_6 +
          no_4 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          sp_6 +
          kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          pr_3 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          r_b_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          ry_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_3 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          ry_3 +
          kardio2;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_2 +
          pr_1 +
          s_r_2 +
          gr_4 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          pl_1 +
          r_b_2 +
          sp_3 +
          pl_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          gr_1 +
          pr_2 +
          ry_2 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pl_2 +
          pr_5 +
          s_r_1 +
          pl_4 +
          no_2 +
          kardio2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          r_b_1 +
          ry_1 +
          sp_4 +
          r_b_3 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          pr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          pl_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          s_r_1 +
          gr_2 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          no_2 +
          no_4 +
          sp_1 +
          gr_1 +
          ry_1 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          no_1 +
          sp_1 +
          gr_1 +
          s_r_1 +
          no_2 +
          sp_2 +
          pl_1 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + no_1 + sp_1 + gr_1 + no_2 + sp_2 + pl_1 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + no_1 + sp_1 + gr_1 + no_2 + pl_1 + pr_1 + kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          sp_1 +
          gr_1 +
          s_r_1 +
          no_1 +
          sp_2 +
          no_2 +
          pl_1 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + sp_1 + gr_1 + s_r_1 + no_1 + pl_1 + no_2 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + sp_1 + s_r_1 + no_1 + pl_1 + no_2 + pr_1 + kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          no_1 +
          sp_1 +
          gr_1 +
          s_r_1 +
          no_2 +
          sp_2 +
          pl_1 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + no_1 + sp_1 + gr_1 + no_2 + sp_2 + pl_1 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + no_1 + sp_1 + gr_1 + no_2 + sp_2 + pr_1 + kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          sp_1 +
          gr_1 +
          s_r_1 +
          no_1 +
          sp_2 +
          no_2 +
          pl_1 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + sp_1 + gr_1 + no_1 + sp_2 + no_2 + pl_1 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + sp_1 + gr_1 + no_1 + sp_2 + no_2 + pr_1 + kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          gr_1 +
          sp_1 +
          no_1 +
          pl_1 +
          r_b_1 +
          ry_1 +
          sp_2 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + pr_1 + kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          gr_1 +
          sp_1 +
          no_1 +
          pl_1 +
          r_b_1 +
          ry_1 +
          sp_2 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + ry_1 + sp_2 + kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan = kardio3 + gr_1 + sp_1 + no_1 + pl_1 + r_b_1 + sp_2 + kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          gr_1 +
          sp_1 +
          pl_1 +
          r_b_1 +
          ry_1 +
          no_1 +
          sp_2 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + pr_1 + kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio3 + gr_1 + sp_1 + pl_1 + r_b_1 + no_1 + pr_1 + kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          gr_1 +
          sp_1 +
          pl_1 +
          r_b_1 +
          ry_1 +
          no_1 +
          sp_2 +
          pr_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 + gr_1 + sp_1 + pl_1 + r_b_1 + ry_1 + no_1 + sp_2 + kardio2;
      }
      if (yprajnen == "4-6") {
        ves_plan = kardio3 + gr_1 + sp_1 + pl_1 + r_b_1 + no_1 + sp_2 + kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          ry_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          no_2 +
          no_4 +
          s_r_2 +
          gr_3 +
          pl_1 +
          r_b_1 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          ry_2 +
          no_6 +
          pr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          gr_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          no_4 +
          s_r_2 +
          gr_3 +
          pl_1 +
          r_b_1 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          ry_2 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_1 +
          no_5 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          no_4 +
          gr_2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          gr_1 +
          s_r_1 +
          sp_2 +
          sp_4 +
          no_6 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          sp_4 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          no_7 +
          sp_1 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_6 +
          gr_1 +
          gr_4 +
          s_r_2 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          no_5 +
          gr_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          gr_3 +
          pr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_4 +
          no_7 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_5 +
          gr_1 +
          gr_4 +
          sp_1 +
          ry_2 +
          pl_3 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          sp_2 +
          gr_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          no_4 +
          pl_1 +
          s_r_1 +
          gr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          no_6 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_7 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          gr_1 +
          sp_1 +
          r_b_1 +
          pl_3 +
          no_5 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_2 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          ry_3 +
          no_6 +
          pr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_3 +
          r_b_1 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          gr_1 +
          s_r_2 +
          sp_1 +
          sp_2 +
          no_6 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          pr_2 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          pl_1 +
          s_r_3 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          s_r_2 +
          sp_2 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_6 +
          gr_1 +
          gr_4 +
          sp_3 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          pl_1 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_5 +
          gr_1 +
          gr_4 +
          sp_2 +
          ry_2 +
          pl_3 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          pl_1 +
          sp_1 +
          gr_3 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_6 +
          no_7 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          gr_1 +
          sp_2 +
          ry_2 +
          pl_3 +
          no_5 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_2 +
          no_1 +
          no_3 +
          sp_3 +
          no_5 +
          gr_2 +
          pl_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_1 +
          ry_1 +
          pr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_2 +
          no_1 +
          no_3 +
          gr_2 +
          pl_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_1 +
          ry_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_1 +
          no_1 +
          no_3 +
          gr_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          ry_1 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          sp_1 +
          no_2 +
          no_4 +
          gr_3 +
          pl_1 +
          ry_2 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          pr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          gr_3 +
          pl_1 +
          ry_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          ry_1 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          no_4 +
          gr_2 +
          pl_1 +
          ry_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          gr_1 +
          no_6 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          sp_1 +
          sp_3 +
          no_7 +
          pl_2 +
          r_b_1 +
          no_8 +
          no_9 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_6 +
          sp_4 +
          gr_1 +
          gr_4 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          no_5 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          no_7 +
          pl_2 +
          r_b_1 +
          no_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_5 +
          sp_2 +
          gr_1 +
          gr_4 +
          ry_2 +
          pl_3 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          no_1 +
          no_3 +
          gr_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          no_6 +
          pl_2 +
          no_7 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_2 +
          gr_1 +
          ry_2 +
          pl_3 +
          no_5 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_2 +
          sp_3 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_2 +
          gr_2 +
          pl_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_2 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_1 +
          sp_2 +
          gr_2 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          sp_1 +
          gr_1 +
          ry_1 +
          no_2 +
          no_4 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          sp_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          s_r_1 +
          s_r_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          pr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          s_r_2 +
          sp_3 +
          gr_1 +
          r_b_1 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_1 +
          gr_1 +
          no_2 +
          no_6 +
          kardio2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          pr_2 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_5 +
          s_r_1 +
          sp_1 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          no_9 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_6 +
          s_r_3 +
          gr_1 +
          sp_4 +
          ry_2 +
          pl_3 +
          pl_4 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          no_5 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          pr_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_4 +
          s_r_2 +
          sp_3 +
          pl_2 +
          r_b_1 +
          no_7 +
          no_8 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_5 +
          sp_1 +
          gr_1 +
          sp_4 +
          ry_2 +
          pl_3 +
          no_6 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          pl_2 +
          no_6 +
          no_7 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          no_5;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          no_1 +
          s_r_1 +
          pl_2 +
          ry_1 +
          sp_2 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          no_1 +
          s_r_2 +
          sp_1 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          ry_2 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          no_1 +
          sp_1 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          no_3 +
          sp_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          sp_1 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          no_1 +
          pl_3 +
          s_r_2 +
          sp_4 +
          gr_2 +
          r_b_1 +
          gr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          no_3 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_3 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          no_1 +
          pl_3 +
          sp_1 +
          gr_2 +
          ry_2 +
          gr_4 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          no_3 +
          sp_1 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          no_1 +
          pl_3 +
          s_r_2 +
          gr_2 +
          ry_2 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          r_b_2 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          s_r_1 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_p_1 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          s_r_3 +
          no_5 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_3 +
          no_4 +
          gr_4 +
          pl_2 +
          r_b_2 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          no_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          ry_3 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          no_3 +
          gr_4 +
          pl_2 +
          r_b_2 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          pl_1 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_2 +
          no_1 +
          pl_1 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          no_2 +
          r_b_1 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          r_b_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          no_2 +
          pl_1 +
          ry_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_2 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          gr_3 +
          no_2 +
          pl_1 +
          r_b_1 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_2 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_1 +
          no_3 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          no_2 +
          pl_1 +
          ry_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          no_1 +
          pl_3 +
          gr_2 +
          ry_3 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          r_b_2 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          no_2 +
          no_4 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_5 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          s_r_2 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          no_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          no_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          no_1 +
          gr_2 +
          ry_1 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          no_2 +
          pl_1 +
          gr_3 +
          r_b_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          no_2 +
          ry_3 +
          sp_2 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          s_r_1 +
          pl_2 +
          ry_1 +
          no_1 +
          sp_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          gr_1 +
          pl_1 +
          ry_2 +
          r_b_1 +
          no_2 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_2 +
          s_r_1 +
          pl_2 +
          ry_1 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_1 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          r_b_2 +
          sp_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_3 +
          pl_1 +
          ry_2 +
          sp_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          pl_3 +
          s_r_3 +
          sp_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          sp_2 +
          gr_3 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          pl_3 +
          s_r_1 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          gr_1 +
          s_r_2 +
          pl_2 +
          ry_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          pl_1 +
          ry_2 +
          no_2 +
          sp_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          pl_3 +
          sp_1 +
          gr_2 +
          r_b_1 +
          no_1 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          r_b_2 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_2 +
          sp_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_4 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          gr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_3 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          pl_1 +
          gr_3 +
          r_b_2 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          sp_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          s_r_2 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          gr_2 +
          pl_2 +
          ry_1 +
          sp_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2 +
          no_4 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_1 +
          gr_2 +
          pl_2 +
          ry_1 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_1 +
          pl_1 +
          r_b_1 +
          no_2 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          pl_1 +
          ry_1 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_1 +
          gr_1 +
          r_b_1 +
          no_2 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          ry_2 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_2 +
          gr_3 +
          pl_1 +
          r_b_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          gr_4 +
          no_1 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          sp_1 +
          gr_1 +
          pl_2 +
          ry_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          gr_2 +
          pl_1 +
          ry_2 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_3 +
          sp_3 +
          pl_3 +
          gr_2 +
          r_b_1 +
          no_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          s_r_2 +
          gr_1 +
          pl_2 +
          ry_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_1 +
          sp_1 +
          pl_1 +
          ry_2 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          sp_2 +
          pl_3 +
          gr_2 +
          r_b_1 +
          no_1 +
          kardio2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          ry_6 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          ry_4 +
          no_2 +
          no_4 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          sp_4 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_5 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          ry_5 +
          gr_6 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          no_3 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          pl_3 +
          r_b_2 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          sp_3 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_4 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          gr_5 +
          ry_2 +
          pl_4 +
          r_b_1 +
          kardio2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          sp_2 +
          gr_2 +
          ry_1 +
          gr_3 +
          no_1 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_2 +
          s_r_2 +
          pl_1 +
          gr_3 +
          r_b_2 +
          no_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pr_3 +
          s_r_1 +
          gr_4 +
          pl_2 +
          ry_3 +
          no_3 +
          kardio2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_4 +
          sp_1 +
          gr_1 +
          ry_2 +
          pl_3 +
          r_b_1 +
          kardio2;
      }
    }
  }

  if (tip == "kardio_kom" && cel == "ne_meniat") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          no_9 +
          kardio2 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_10 +
          kardio2 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          ry_1 +
          kardio2 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_9 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          s_r_3 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          kardio2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_9 +
          kardio2 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          kardio2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_1 +
          sp_5 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          pl_3 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          r_b_1 +
          kardio2 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          s_r_4 +
          pr_1 +
          kardio2 +
          pr_2 +
          no_9 +
          kardio2 +
          s_r_2 +
          no_7 +
          kardio2 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          kardio2 +
          no_10 +
          s_r_1 +
          kardio2 +
          no_8 +
          no_6 +
          kardio2 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pr_2 +
          kardio2 +
          no_7 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_3 +
          kardio2 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          ry_1 +
          kardio2 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          kardio2 +
          no_9 +
          s_r_1 +
          kardio2 +
          no_8 +
          no_6 +
          kardio2 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_5 +
          no_2 +
          kardio2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          kardio2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_9 +
          kardio2 +
          s_r_1 +
          no_8 +
          kardio2 +
          no_6 +
          no_4 +
          kardio2 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_8 +
          kardio2 +
          s_r_1 +
          no_4 +
          kardio2 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_5 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_1 +
          sp_5 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          pl_3 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_6 +
          kardio2 +
          s_r_1 +
          no_4 +
          kardio2 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          r_b_1 +
          kardio2 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          no_9 +
          kardio2 +
          s_r_4 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_10 +
          kardio2 +
          s_r_3 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          s_r_3 +
          kardio2 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          ry_1 +
          kardio2 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_9 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          s_r_3 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          kardio2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          no_9 +
          kardio2 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          no_7 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          no_8 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_1 +
          sp_5 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          pl_3 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          no_1 +
          s_r_1 +
          kardio2 +
          no_4 +
          no_6 +
          kardio2 +
          pr_2 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          r_b_1 +
          kardio2 +
          pr_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          s_r_4 +
          pr_1 +
          kardio2 +
          pr_2 +
          no_9 +
          kardio2 +
          s_r_2 +
          no_7 +
          kardio2 +
          no_5 +
          no_3 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          pr_5 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          ry_1 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          kardio2 +
          no_10 +
          s_r_1 +
          kardio2 +
          no_8 +
          no_6 +
          kardio2 +
          no_4 +
          no_1 +
          s_r_3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          pr_6;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          pr_1 +
          pr_2 +
          kardio2 +
          no_7 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_3 +
          kardio2 +
          no_2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          sp_7 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          ry_1 +
          kardio2 +
          ry_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_3 +
          pr_4 +
          kardio2 +
          no_9 +
          s_r_1 +
          kardio2 +
          no_8 +
          no_6 +
          kardio2 +
          no_4 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_5 +
          no_2 +
          kardio2 +
          s_r_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          kardio2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          kardio2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_9 +
          kardio2 +
          s_r_1 +
          no_8 +
          kardio2 +
          no_6 +
          no_4 +
          kardio2 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          pr_3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_7 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_5 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_1 +
          kardio2 +
          sp_7 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          ry_1 +
          kardio2 +
          pl_4 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_8 +
          kardio2 +
          s_r_1 +
          no_4 +
          kardio2 +
          no_6 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          sp_6 +
          sp_8 +
          kardio2 +
          r_b_1 +
          pr_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_5 +
          kardio2 +
          s_r_2 +
          no_3 +
          kardio2 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_1 +
          sp_5 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          pl_3 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_2 +
          no_6 +
          kardio2 +
          s_r_1 +
          no_4 +
          kardio2 +
          no_1 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          no_5 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          ry_4 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          no_5 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pr_2 +
          kardio2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_5 +
          kardio2 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          no_5 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          ry_4 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          no_5 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pr_2 +
          kardio2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          sp_1 +
          sp_7 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_5 +
          kardio2 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_4 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          ry_4 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_4 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pr_2 +
          kardio2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_4 +
          no_3 +
          kardio2 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_5 +
          kardio2 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_4 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          s_r_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pl_6 +
          kardio2 +
          pr_3 +
          pr_4 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          gr_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          ry_4 +
          kardio2 +
          r_b_1 +
          r_b_2 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          gr_4 +
          kardio2 +
          sp_2 +
          sp_5 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_5 +
          no_4 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pl_5 +
          pr_2 +
          kardio2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          kardio2 +
          gr_5 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_5 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_4 +
          no_3 +
          kardio2 +
          no_2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          pr_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_6 +
          kardio2 +
          sp_7 +
          sp_8 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2 +
          r_b_3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          sp_1 +
          sp_7 +
          kardio2 +
          pr_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          s_r_1 +
          s_r_2 +
          kardio2 +
          no_3 +
          no_2 +
          kardio2 +
          no_1 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          kardio2 +
          pr_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          sp_4 +
          sp_5 +
          kardio2 +
          sp_6 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio2 +
          ry_1 +
          ry_2 +
          kardio2 +
          ry_3 +
          r_b_1 +
          kardio2 +
          r_b_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          s_r_1 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + no_1 + sp_1 + kardio2 + gr_1 + no_2 + kardio2 + pl_1 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          pl_1 +
          no_2 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          sp_1 +
          s_r_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          no_2 +
          pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          s_r_1 +
          kardio2 +
          no_2 +
          sp_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          no_1 +
          sp_1 +
          kardio2 +
          gr_1 +
          no_2 +
          kardio2 +
          sp_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + no_1 + sp_1 + kardio2 + gr_1 + no_2 + kardio2 + sp_2 + pr_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          no_1 +
          kardio2 +
          sp_2 +
          no_2 +
          kardio2 +
          pl_1 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          sp_1 +
          gr_1 +
          kardio2 +
          no_1 +
          sp_2 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 + sp_1 + gr_1 + kardio2 + no_1 + sp_2 + kardio2 + no_2 + pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          ry_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          pl_1 +
          kardio2 +
          r_b_1 +
          sp_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          pr_1;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          pr_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz == "yes" &&
      kifoz == "yes" &&
      trenirovok == "1" &&
      (cel == "pohydet" || cel == "ne_meniat")
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2 +
          pr_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          sp_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_7;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_4 +
          sp_2 +
          kardio2 +
          sp_4 +
          sp_5 +
          kardio2 +
          gr_5 +
          no_8;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_4 +
          gr_4 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_3 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2 +
          no_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          sp_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1 +
          no_2 +
          kardio2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          gr_2 +
          kardio2 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_7 +
          kardio2 +
          r_b_1 +
          no_2 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_3 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          r_b_1 +
          no_4 +
          kardio2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_6 +
          kardio2 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_3 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          sp_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          ry_2 +
          no_2 +
          kardio2 +
          no_4 +
          no_7 +
          kardio2 +
          r_b_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_4 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_2 +
          kardio2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_3 +
          s_r_3 +
          kardio2 +
          sp_1 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_2 +
          kardio2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          pl_1 +
          kardio2 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          pl_1 +
          ry_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          sp_1 +
          kardio2 +
          no_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_4 +
          kardio2 +
          ry_2 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          no_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_4 +
          kardio2 +
          ry_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          no_2 +
          no_4 +
          kardio2 +
          ry_1 +
          r_b_1;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_3 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_4 +
          gr_6 +
          kardio2 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_3 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_7 +
          kardio2 +
          ry_2 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_4 +
          gr_5 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          no_2 +
          kardio2 +
          no_4 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          sp_4 +
          gr_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_3 +
          no_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          pl_1 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_2 +
          kardio2 +
          pl_1 +
          ry_1 +
          kardio2 +
          no_1 +
          no_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          no_2;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          pr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_3 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          sp_3 +
          pr_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_5 +
          sp_1 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_2 +
          ry_2 +
          kardio2 +
          no_4 +
          pr_6;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          gr_2 +
          kardio2 +
          sp_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_2 +
          ry_2 +
          kardio2 +
          no_4;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          sp_1 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_2 +
          no_4;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          no_6 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          kardio2 +
          no_2 +
          ry_2 +
          kardio2 +
          no_4 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_4 +
          gr_5 +
          kardio2 +
          sp_5 +
          no_8;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_2 +
          kardio2 +
          ry_2 +
          no_4 +
          kardio2 +
          no_7 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          sp_4 +
          gr_4 +
          kardio2 +
          no_6;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_2 +
          kardio2 +
          no_4 +
          no_6 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_3 +
          kardio2 +
          gr_3 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_4;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_2 +
          ry_1 +
          kardio2 +
          ry_2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          gr_3 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          ry_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          gr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_2 +
          no_3 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          gr_2 +
          s_r_1 +
          kardio2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_2 +
          s_r_2 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_3 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          s_r_3 +
          sp_2 +
          kardio2 +
          sp_4 +
          gr_2 +
          kardio2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          kardio2 +
          gr_4 +
          sp_2 +
          kardio2 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          s_r_3 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_2 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          kardio2 +
          gr_4 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2 +
          kardio2 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          gr_1 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          ry_1 +
          r_b_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          gr_1 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          gr_1 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_1 +
          kardio2 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          pl_1 +
          kardio2 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_3 +
          gr_1 +
          kardio2 +
          sp_2 +
          sp_4 +
          kardio2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          pl_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_5 +
          gr_2 +
          kardio2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_3 +
          gr_1 +
          kardio2 +
          sp_2 +
          gr_3 +
          kardio2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_3 +
          kardio2 +
          sp_4 +
          gr_2 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_1 +
          kardio2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          kardio2 +
          pl_1 +
          pl_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_1 +
          kardio2 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          gr_1 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          s_r_2 +
          sp_1;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_2 +
          kardio2 +
          gr_3 +
          s_r_2 +
          kardio2 +
          sp_1 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_1 +
          kardio2 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          gr_1 +
          kardio2 +
          gr_2 +
          sp_1 +
          kardio2 +
          sp_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          gr_1 +
          kardio2 +
          gr_2 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_3 +
          gr_4 +
          kardio2 +
          gr_5 +
          sp_1 +
          kardio2 +
          sp_4 +
          sp_5 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_2 +
          kardio2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_3 +
          gr_3 +
          kardio2 +
          gr_4 +
          sp_1 +
          kardio2 +
          sp_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_2 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          gr_1 +
          kardio2 +
          s_r_1 +
          gr_3 +
          kardio2 +
          gr_4 +
          sp_1 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          no_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          sp_1 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          pl_2 +
          ry_1 +
          kardio2 +
          r_b_1 +
          no_1 +
          kardio2 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          gr_2 +
          kardio2 +
          s_r_2 +
          sp_1 +
          kardio2 +
          sp_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          pl_1 +
          kardio2 +
          ry_1 +
          r_b_1 +
          kardio2 +
          no_1 +
          no_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          s_r_1 +
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          sp_2 +
          gr_2;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "3" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          gr_1 +
          s_r_2 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          gr_3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          pl_3 +
          no_1 +
          kardio2 +
          no_2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          sp_3 +
          gr_1 +
          kardio2 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          no_1 +
          no_2 +
          kardio2 +
          no_3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_1 +
          kardio2 +
          s_r_2 +
          sp_2 +
          kardio2 +
          gr_1 +
          gr_2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          sp_1 +
          kardio2 +
          pl_1 +
          pl_2 +
          kardio2 +
          no_1 +
          no_2 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "4" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          sp_3 +
          sp_5 +
          kardio2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          pl_4 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_b_3 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          s_r_3 +
          sp_2 +
          kardio2 +
          sp_4 +
          gr_2 +
          kardio2 +
          no_2 +
          no_5;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          sp_3 +
          gr_3 +
          kardio2 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          pl_3 +
          kardio2 +
          no_1 +
          no_3 +
          kardio2 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          kardio2 +
          r_p_1 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          s_r_3 +
          sp_2 +
          kardio2 +
          sp_4 +
          gr_2 +
          kardio2 +
          no_2;
      }
      if (yprajnen == "4-6" || yprajnen == "5-7") {
        ves_plan =
          kardio2 +
          pr_1 +
          s_r_2 +
          kardio2 +
          gr_1 +
          sp_1 +
          kardio2 +
          gr_3 +
          gr_4 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio2 +
          pr_2 +
          pl_1 +
          kardio2 +
          pl_2 +
          no_1 +
          kardio2 +
          no_3 +
          no_4 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio2 +
          pr_3 +
          ry_1 +
          kardio2 +
          r_b_1 +
          ry_2 +
          kardio2 +
          r_b_2 +
          ry_3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio2 +
          pr_4 +
          s_r_1 +
          kardio2 +
          sp_2 +
          sp_3 +
          kardio2 +
          gr_2 +
          no_2;
      }
    }
  }

  if (tip == "kardio" && cel == "ne_meniat") {
    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6 +
          kardio3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6 +
          kardio3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          no_9 +
          s_r_4 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_10 +
          s_r_3 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6 +
          kardio3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          s_r_3 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          no_9 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          no_7 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          no_8 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          no_2 +
          s_r_2 +
          no_3 +
          no_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          no_1 +
          s_r_1 +
          no_4 +
          no_6 +
          pr_2 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
    }

    if (
      pol == "woman" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          s_r_4 +
          pr_1 +
          pr_2 +
          no_9 +
          s_r_2 +
          no_7 +
          no_5 +
          no_3 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          pr_5 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_3 +
          pr_4 +
          no_10 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          s_r_3 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          pr_6 +
          kardio3;
      }
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          pr_1 +
          pr_2 +
          no_7 +
          s_r_2 +
          no_5 +
          no_3 +
          no_2 +
          s_r_3 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          sp_7 +
          gr_1 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          ry_1 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_3 +
          pr_4 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          s_r_3 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          gr_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          ry_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_9 +
          s_r_1 +
          no_8 +
          no_6 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          r_b_2 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_7 +
          s_r_2 +
          no_3 +
          no_5 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_5 +
          gr_1 +
          sp_7 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          ry_1 +
          pl_4 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_8 +
          s_r_1 +
          no_4 +
          no_6 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          sp_8 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_5 +
          s_r_2 +
          no_3 +
          no_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          sp_1 +
          sp_3 +
          gr_1 +
          sp_5 +
          gr_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          ry_1 +
          pl_3 +
          ry_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          pr_2 +
          no_6 +
          s_r_1 +
          no_4 +
          no_1 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          sp_2 +
          sp_4 +
          sp_6 +
          r_b_1 +
          pr_3 +
          kardio3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          kardio3;
      }
    }

    if (
      pol == "man" &&
      davlenie != "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          s_r_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          no_5 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          no_4 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          no_1 +
          no_2 +
          no_3 +
          s_r_1 +
          s_r_2 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          kardio3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_1 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          kardio3;
      }
    }

    if (
      pol == "man" &&
      davlenie == "-" &&
      (skolioz == "yes" || kifoz == "yes") &&
      trenirovok == "5" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "6-8") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          pr_2 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          s_r_3 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pl_6 +
          pr_3 +
          pr_4 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          gr_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          ry_4 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "5-7") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          gr_4 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_5 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pl_5 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          gr_5 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          r_p_1 +
          kardio3;
      }
      if (yprajnen == "4-6") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          gr_3 +
          sp_2 +
          sp_5 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_4 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          pr_3 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_1 +
          sp_3 +
          sp_4 +
          sp_6 +
          sp_7 +
          sp_8 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          r_b_3 +
          kardio3;
      }
      if (yprajnen == "4-5") {
        ves_plan =
          kardio3 +
          gr_1 +
          gr_2 +
          sp_1 +
          sp_7 +
          pr_1 +
          kardio3 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          s_r_1 +
          s_r_2 +
          no_3 +
          no_2 +
          no_1 +
          kardio3 +
          z_a2 +
          tren_com3 +
          r_a3 +
          kardio3 +
          pl_1 +
          pl_2 +
          pl_3 +
          pl_4 +
          pr_2 +
          kardio3 +
          z_a3 +
          tren_com4 +
          r_a4 +
          kardio3 +
          sp_2 +
          sp_3 +
          sp_4 +
          sp_5 +
          sp_6 +
          kardio3 +
          z_a4 +
          tren_com5 +
          r_a5 +
          kardio3 +
          ry_1 +
          ry_2 +
          ry_3 +
          r_b_1 +
          r_b_2 +
          kardio3;
      }
    }

    if (
      pol == "woman" &&
      davlenie != "-" &&
      skolioz != "yes" &&
      kifoz != "yes" &&
      trenirovok == "2" &&
      cel == "ne_meniat"
    ) {
      if (yprajnen == "8-10") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          pr_2 +
          kardio2 +
          z_a1 +
          tren_com2 +
          r_a2 +
          kardio3 +
          pr_3 +
          s_r_1 +
          gr_1 +
          s_r_2 +
          gr_2 +
          sp_1 +
          sp_2 +
          no_2 +
          kardio2;
      }
      if (yprajnen == "6-8" || yprajnen == "7-9") {
        ves_plan =
          kardio3 +
          pr_1 +
          no_1 +
          no_3 +
          no_4 +
          pl_1 +
          pl_2 +
          ry_1 +
          kardio2 +
          z_a1 +
          tren_com2 +