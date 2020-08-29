function displayMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("menu-mobile");
}

function openMod() {
    var open = document.querySelector(".mod-domicilio");
    var gray = document.querySelector(".total");
    open.style.display = "flex";
    gray.style.background = "#CFCFCF";
    gray.style.opacity = "0.5";

}

function closeMod() {
    var exit = document.querySelector(".mod-domicilio");
    var gray = document.querySelector(".total");
    exit.style.display = "none";
    gray.style.background = "";
    gray.style.opacity = "1";
}

function openModReg() {
    var open = document.querySelector(".logIn");
    var gray = document.querySelector(".total");
    open.style.display = "flex";
    gray.style.background = "#CFCFCF";
    gray.style.opacity = "0.5";

}

function closeModReg() {
    var exit = document.querySelector(".logIn");
    var gray = document.querySelector(".total");
    exit.style.display = "none";
    gray.style.background = "";
    gray.style.opacity = "1";
}