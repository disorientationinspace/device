var current_slide = document.querySelector(".current-slide")

var top_slide1 = document.querySelector(".js-slide-1");
var top_slide2 = document.querySelector(".js-slide-2");
var top_slide3 = document.querySelector(".js-slide-3");

var js_radio1 = document.querySelector(".js-radio-1");
var js_radio2 = document.querySelector(".js-radio-2");
var js_radio3 = document.querySelector(".js-radio-3");


js_radio1.addEventListener("click", function(evt) {
  current_slide.classList.remove("current-slide");
  top_slide1.classList.add('current-slide');
  current_slide = top_slide1;
})

js_radio2.addEventListener("click", function(evt) {
  current_slide.classList.remove("current-slide");
  top_slide2.classList.add('current-slide');
  current_slide = top_slide2;
})

js_radio3.addEventListener("click", function(evt) {
  current_slide.classList.remove("current-slide");
  top_slide3.classList.add('current-slide');
  current_slide = top_slide3;
})




var current_service = document.querySelector('.current-service');
var current_link = document.querySelector('.current-link');

var service1 = document.querySelector(".js-shipping-service");
var service2 = document.querySelector(".js-guarantee-service");
var service3 = document.querySelector(".js-credit-service");

var link1 = document.querySelector(".js-shipping-button");
var link2 = document.querySelector(".js-guarantee-button");
var link3 = document.querySelector(".js-credit-button");


link1.addEventListener("click", function(evt) {
  evt.preventDefault();
  current_link.classList.remove("current-link");
  link1.classList.add("current-link");
  current_service.classList.remove("current-service");
  service1.classList.add('current-service');
  current_service = service1;
  current_link = link1;
})

link2.addEventListener("click", function(evt) {
  evt.preventDefault();
  current_link.classList.remove("current-link");
  link2.classList.add("current-link");
  current_service.classList.remove("current-service");
  service2.classList.add('current-service');
  current_service = service2;
  current_link = link2;
})
link3.addEventListener("click", function(evt) {
  evt.preventDefault();
  current_link.classList.remove("current-link");
  link3.classList.add("current-link");
  current_service.classList.remove("current-service");
  service3.classList.add('current-service');
  current_service = service3;
  current_link = link3;
})
