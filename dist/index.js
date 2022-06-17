// vars for control drop down on desktop devices
var product_link = document.getElementById("navlink_product");
var company_link = document.getElementById("navlink_company");
var connect_link = document.getElementById("navlink_connect");

var product_drop = document.getElementById("dropdown_product");
var compnay_drop = document.getElementById("dropdown_company");
var connect_drop = document.getElementById("dropdown_connect");

product_link.addEventListener("click", () => {
  product_drop.classList.toggle("active");
  var arrow = product_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});
product_drop.addEventListener("mouseleave", () => {
  product_drop.classList.toggle("active");
  var arrow = product_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});

company_link.addEventListener("click", () => {
  compnay_drop.classList.toggle("active");
  var arrow = compnay_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});
compnay_drop.addEventListener("mouseleave", () => {
  compnay_drop.classList.toggle("active");
  var arrow = compnay_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});

connect_link.addEventListener("click", () => {
  connect_drop.classList.toggle("active");
  var arrow = connect_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});
connect_drop.addEventListener("mouseleave", () => {
  connect_drop.classList.toggle("active");
  var arrow = connect_drop.previousElementSibling.children[0];
  arrow.classList.toggle("active");
});

//
//
// vars to control sidepannel on mobile devices
const toggle_button = document.getElementById("toggle_button");
const side_pannel = document.getElementById("side_pannel");
var isSidePannel = false;

const sidepannel_link_product = document.getElementById(
  "sidepannel_link_product"
);
const sidepannel_link_company = document.getElementById(
  "sidepannel_link_company"
);
const sidepannel_link_connect = document.getElementById(
  "sidepannel_link_connect"
);

toggle_button.addEventListener("click", () => {
  isSidePannel = !isSidePannel;
  if (isSidePannel) {
    toggle_button.children[0].src = "./images/icon-close.svg";
    document.body.style.overflow = "hidden";
  } else {
    toggle_button.children[0].src = "./images/icon-hamburger.svg";
    document.body.style.overflow = "auto";
  }
  side_pannel.classList.toggle("active");
});

sidepannel_link_product.addEventListener("click", () => {
  const dropdown = sidepannel_link_product.nextElementSibling;
  sidepannel_link_product.children[1].children[0].classList.toggle("active");
  dropdown.classList.toggle("active");
});

sidepannel_link_company.addEventListener("click", () => {
  const dropdown = sidepannel_link_company.nextElementSibling;
  sidepannel_link_company.children[1].children[0].classList.toggle("active");
  dropdown.classList.toggle("active");
});

sidepannel_link_connect.addEventListener("click", () => {
  const dropdown = sidepannel_link_connect.nextElementSibling;
  sidepannel_link_connect.children[1].children[0].classList.toggle("active");
  dropdown.classList.toggle("active");
});
