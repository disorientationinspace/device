var modal_map = document.querySelector(".map-popup");
var map_link = document.querySelector('.map-link');
var map_close = document.querySelector('.map-popup .close-button')

var modal_contact = document.querySelector(".write-us");
var contact_link = document.querySelector(".contact-us-link");
var contact_close = document.querySelector(".write-us .close-button");

map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.toggle("modal");
})

map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_map.classList.add("modal");
})

contact_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_contact.classList.toggle("modal");
})

contact_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_contact.classList.add("modal");
})
