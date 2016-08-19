/* Set the width of the side navigation to 250px */
function moveNav() {
  var navBar = document.getElementById("mySideNav");
  if (navBar.style.right == "0px") {
      navBar.style.right = "-300px";
  } else {
      navBar.style.right = "0px";
  }
}
