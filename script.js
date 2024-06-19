// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// bg sound
function toggleAudio() {
    var audio = document.getElementById('audio-player');
    var button = document.querySelector('.button-audio');
    
    if (audio.paused) {
        audio.play();
        audio.loop = true;
        button.textContent = 'Stop';
    } else {
        audio.pause();
        button.textContent = 'Play';
        audio.currentTime = 0; 
    }
}

// rotate text js code  
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// Gallery fillter 
document.addEventListener('DOMContentLoaded', function() {
    var mixer = mixitup('.portfolio-gallery', {
        selectors: {
            target: '.portfolio-box'
        },
        animation: {
            duration: 300
        }
    });
});

let filterButtons = document.querySelectorAll('.fillter-buttons button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('mixitup-control-active'));
        button.classList.add('mixitup-control-active');
    });
});

// playlist js
document.addEventListener('DOMContentLoaded', function () {
    const mainVideo = document.getElementById('main-video');
    const mainVideoTitle = document.getElementById('main-video-title');
    const videoThumbnails = document.querySelectorAll('.video-list .vid');

    videoThumbnails.forEach(vid => {
        vid.addEventListener('click', function () {
            const newSrc = this.getAttribute('data-src');
            const newTitle = this.getAttribute('data-title');
            
            mainVideo.src = newSrc;
            mainVideoTitle.textContent = newTitle;
            mainVideo.play();
        });
    });
});

//   skill Progress bar 
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}

// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Display last modified date

window.onload = function() {
    var latestDate = new Date(document.lastModified);
    var formattedDate = latestDate.toLocaleString();
    document.getElementById("lastModfied").innerHTML = "Copyright © 2024 by <span>Muhammad Hilmi Bin Mohd Hisham</span> || All Right Reserved. Last update: " + formattedDate;
}

// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});

ScrollReveal().reveal('.hero-info,.main-text,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.gallery,.portfolio-gallery,footer,.img-hero', { origin: "bottom" });

