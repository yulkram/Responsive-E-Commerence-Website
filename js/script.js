 let menu = document.getElementById("menubar");
 let navbar = document.querySelector(".navbar");

 menu.onclick = () =>{
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
 }

 let slides = document.querySelectorAll(".slide-container");
 let index = 0;

 function next(){
   slides[index].classList.remove("active");
   index = (index+1 + slides.length) % slides.length;
   slides[index].classList.add("active");
 }

 function prev(){
   slides[index].classList.remove("active");
   index = (index-1 + slides.length) % slides.length;
   slides[index].classList.add("active");
 }

 document.querySelectorAll(".featured-image").forEach(image_1 =>{
    image_1.addEventListener("click", () => {
      var src = image_1.getAttribute("src");
      document.querySelector(".big-image img").src = src;
    });
 });