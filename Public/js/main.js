const menu_btn = document.getElementById("menu_btn");
const mobileNav = document.querySelector(".small_devices_navbar" )

menu_btn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobnav")
});
