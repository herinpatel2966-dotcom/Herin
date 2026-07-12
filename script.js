/* ==========================================
   PROFESSIONAL PORTFOLIO
   script.js
========================================== */

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}

// ===========================
// Typing Animation
// ===========================

const typing = document.getElementById("typing");

const words = [
"Front-End Developer",
"Web Designer",
"JavaScript Developer",
"Responsive Website Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

if(!typing) return;

let currentWord = words[wordIndex];

if(isDeleting){

typing.textContent = currentWord.substring(0,charIndex--);

}else{

typing.textContent = currentWord.substring(0,charIndex++);

}

let speed = isDeleting ? 60 : 120;

if(!isDeleting && charIndex === currentWord.length){

speed = 1500;

isDeleting = true;

}

else if(isDeleting && charIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

setTimeout(typeEffect,speed);

}

typeEffect();

// ===========================
// Scroll To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(!topBtn) return;

if(document.body.scrollTop > 300 ||

document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

};

if(topBtn){

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

// ===========================
// Contact Form Validation
// ===========================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let subject = document.getElementById("subject").value.trim();

let message = document.getElementById("message").value.trim();

if(name==="" ||

email==="" ||

subject==="" ||

message===""){

alert("Please fill all fields.");

return;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Enter a valid email address.");

return;

}

// Save Name

localStorage.setItem("visitorName",name);

alert("Message Sent Successfully!");

contactForm.reset();

});

}

// ===========================
// Welcome Message
// ===========================

let visitor = localStorage.getItem("visitorName");

if(visitor){

console.log("Welcome "+visitor);

}

// ===========================
// Dark Mode
// ===========================

const darkBtn = document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";
darkBtn.style.right="25px";
darkBtn.style.bottom="100px";
darkBtn.style.width="50px";
darkBtn.style.height="50px";
darkBtn.style.borderRadius="50%";
darkBtn.style.border="none";
darkBtn.style.cursor="pointer";
darkBtn.style.background="#38bdf8";
darkBtn.style.color="#fff";
darkBtn.style.fontSize="20px";
darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark-mode");

darkBtn.innerHTML="☀️";

}

darkBtn.onclick=function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

darkBtn.innerHTML="☀️";

}

else{

localStorage.setItem("theme","light");

darkBtn.innerHTML="🌙";

}

};

// ===========================
// Fade Animation on Scroll
// ===========================

const cards=document.querySelectorAll(".card,.project-card,.timeline-box,.stat-box,.info-box");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.7s";

observer.observe(card);

});

console.log("Portfolio Loaded Successfully!");