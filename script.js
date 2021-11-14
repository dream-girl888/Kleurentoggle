let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    getSidebar.style.width = "60px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (var i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}

const changeClassBackground = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
  bodyElement.classList.remove("orange-background");
  bodyElement.classList.remove("purple-background");
  bodyElement.classList.remove("green-background");
  bodyElement.classList.remove("home-background");
};

const alertButton = function () {
  alert("You clicked on color Red");
};

const attachEventToChangeColorButton = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Red");
  changeColorButton.addEventListener("click", changeClassBackground);
  changeColorButton.addEventListener("click", alertButton);
};

attachEventToChangeColorButton();

const changeClassBackground2 = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("orange-background");
  bodyElement.classList.remove("red-background");
  bodyElement.classList.remove("purple-background");
  bodyElement.classList.remove("green-background");
  bodyElement.classList.remove("home-background");
};

const alertButton2 = function () {
  alert("You clicked on color Orange");
};

const attachEventToChangeColorButton2 = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Orange");
  changeColorButton.addEventListener("click", changeClassBackground2);
  changeColorButton.addEventListener("click", alertButton2);
};

attachEventToChangeColorButton2();

const changeClassBackground3 = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("purple-background");
  bodyElement.classList.remove("red-background");
  bodyElement.classList.remove("orange-background");
  bodyElement.classList.remove("green-background");
  bodyElement.classList.remove("home-background");
};

const alertButton3 = function () {
  alert("You clicked on color Purple");
};

const attachEventToChangeColorButton3 = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Purple");
  changeColorButton.addEventListener("click", changeClassBackground3);
  changeColorButton.addEventListener("click", alertButton3);
};

attachEventToChangeColorButton3();

const changeClassBackground4 = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("green-background");
  bodyElement.classList.remove("red-background");
  bodyElement.classList.remove("orange-background");
  bodyElement.classList.remove("purple-background");
  bodyElement.classList.remove("home-background");
};
const alertButton4 = function () {
  alert("You clicked on color Green");
};

const attachEventToChangeColorButton4 = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Green");
  changeColorButton.addEventListener("click", changeClassBackground4);
  changeColorButton.addEventListener("click", alertButton4);
};

attachEventToChangeColorButton4();

const changeClassBackground5 = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("home-background");
  bodyElement.classList.remove("red-background");
  bodyElement.classList.remove("orange-background");
  bodyElement.classList.remove("purple-background");
  bodyElement.classList.remove("green-background");
};
const alertButton5 = function () {
  alert("You clicked on color Grey");
};
const attachEventToChangeColorButton5 = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Home");
  changeColorButton.addEventListener("click", changeClassBackground5);
  changeColorButton.addEventListener("click", alertButton5);
};

attachEventToChangeColorButton5();



