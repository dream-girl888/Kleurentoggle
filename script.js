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

};

const attachtoggleNavButton = function () { //klik event vast maken aan nieuwe button. 
  const toggleNavButton = document.getElementById("Hamburger");
  toggleNavButton.addEventListener("mouseover", toggleNav, false); // bonus: muis hover gaat sidebar open
  toggleNavButton.addEventListener("mouseout", toggleNav, true);// bonus: muis hover weg gaat sidebar sluiten

};

attachtoggleNavButton();

const changeClassBackground1 = function () { //als klik op button wordt de class home background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("home-background");
  bodyElement.classList.remove("red-background", "purple-background", "orange-background", "green-background");
};
const alertButton1 = function () { //bonus:alert melding
  alert("You clicked on color Grey");
};
const attachEventToChangeColorButton1 = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("Home");
  changeColorButton.addEventListener("click", changeClassBackground1);
  changeColorButton.addEventListener("click", alertButton1);
};

const attachtoggleNavButton1 = function () { //klik event vast maken aan sluiten menu
  const toggleNavButton = document.getElementById("Home");
  toggleNavButton.addEventListener("click", toggleNav, true);
  toggleNavButton.addEventListener("mouseover", toggleNav, false) // bonus: menu blijft open als muis hover erover
};

attachtoggleNavButton1();
attachEventToChangeColorButton1();

const changeClassBackground2 = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
  bodyElement.classList.remove("home-background", "purple-background", "orange-background", "green-background");
};

const alertButton2 = function () {
  alert("You clicked on color Red");
};

const attachEventToChangeColorButton2 = function () {
  const changeColorButton = document.getElementById("Red");
  changeColorButton.addEventListener("click", changeClassBackground2);
  changeColorButton.addEventListener("click", alertButton2);
};

const attachtoggleNavButton2 = function () {
  const toggleNavButton = document.getElementById("Red");
  toggleNavButton.addEventListener("click", toggleNav, true);
};

attachtoggleNavButton2();
attachEventToChangeColorButton2();


const changeClassBackground3 = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("orange-background");
  bodyElement.classList.remove("home-background", "purple-background", "red-background", "green-background");
};

const alertButton3 = function () {
  alert("You clicked on color Orange");
};

const attachEventToChangeColorButton3 = function () {
  const changeColorButton = document.getElementById("Orange");
  changeColorButton.addEventListener("click", changeClassBackground3);
  changeColorButton.addEventListener("click", alertButton3);
};

const attachtoggleNavButton3 = function () {
  const toggleNavButton = document.getElementById("Orange");
  toggleNavButton.addEventListener("click", toggleNav, true);
};

attachtoggleNavButton3();
attachEventToChangeColorButton3();

const changeClassBackground4 = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("purple-background");
  bodyElement.classList.remove("home-background", "red-background", "orange-background", "green-background");
};

const alertButton4 = function () {
  alert("You clicked on color Purple");
};

const attachEventToChangeColorButton4 = function () {
  const changeColorButton = document.getElementById("Purple");
  changeColorButton.addEventListener("click", changeClassBackground4);
  changeColorButton.addEventListener("click", alertButton4);
};

const attachtoggleNavButton4 = function () {
  const toggleNavButton = document.getElementById("Purple");
  toggleNavButton.addEventListener("click", toggleNav, true);
};

attachtoggleNavButton4();
attachEventToChangeColorButton4();

const changeClassBackground5 = function () {
  const bodyElement = document.body;
  bodyElement.classList.add("green-background");
  bodyElement.classList.remove("home-background", "purple-background", "orange-background", "red-background");
};
const alertButton5 = function () {
  alert("You clicked on color Green");
};

const attachEventToChangeColorButton5 = function () {
  const changeColorButton = document.getElementById("Green");
  changeColorButton.addEventListener("click", changeClassBackground5);
  changeColorButton.addEventListener("click", alertButton5);
};
const attachtoggleNavButton5 = function () {
  const toggleNavButton = document.getElementById("Green");
  toggleNavButton.addEventListener("click", toggleNav, true);
};

attachtoggleNavButton5();
attachEventToChangeColorButton5();



