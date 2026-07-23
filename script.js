(function() {
    console.log("[Hungzizc] Bio page ready — map & mod preview");

    const footer = document.querySelector('footer p');
    if (footer) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB');
        footer.innerHTML = `© 2026 Hungzizc — All resources are original • ${dateStr}`;
    }

    // Removed badge click because no badges remain, but keep logo click
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        logoImg.addEventListener('click', () => {
            const h1 = document.querySelector('h1');
            if (h1) {
                h1.style.transition = '0.2s';
                h1.style.textShadow = '0 0 8px #ffffff';
                setTimeout(() => { h1.style.textShadow = ''; }, 300);
            }
        });
    }

    console.log("📢 Telegram: https://t.me/hungzizcvn | Discord: https://discord.gg/XGy5D7A75q");
})();
function createMeteor(){

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    const size = 80 + Math.random() * 120;

    meteor.style.width = size + "px";

    const startX = Math.random() * window.innerWidth;

    const startY = -100;

    const angle = 135;
    meteor.style.left = startX + "px";

    meteor.style.top = startY + "px";
    document.body.appendChild(meteor);

    const duration = 1500 + Math.random() * 1500;

    meteor.animate([

{

    transform:`translate(0,0) rotate(135deg)`

},

{

    transform:`translate(-800px,1000px) rotate(135deg)`

}

],{

    duration:duration,

    easing:"linear"

});
        
    setTimeout(()=>meteor.remove(),duration);

}

function meteorWave(){

    const r = Math.random();

let count = 1;

if(r > 0.9) count = 2;

if(r > 0.98) count = 3;

    for(let i=0;i<count;i++){

        setTimeout(createMeteor,i*300);

    }

    setTimeout(

        meteorWave,

        2000 + Math.random()*6000

    );

}

meteorWave();
const roles = [

    "Developer. ",

    "Designer. ",

    "Gamer. ",

    "Creator. "

];

let roleIndex = 0;

let charIndex = 0;

const roleEl = document.getElementById("role");

function typeRole(){

    if(!roleEl) return;

    if(charIndex < roles[roleIndex].length){

        roleEl.textContent += roles[roleIndex][charIndex];

        charIndex++;

        setTimeout(typeRole, 100);

    }else{

        setTimeout(() => {

            roleEl.textContent = "";

            charIndex = 0;

            roleIndex = (roleIndex + 1) % roles.length;

            typeRole();

        }, 1500);

    }

}

typeRole();
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

})
function openModal(){

    document.getElementById("downloadModal").style.display="flex";

}

function closeModal(){

    document.getElementById("downloadModal").style.display="none";

}

window.onclick=function(e){

    const modal=document.getElementById("downloadModal");

    if(e.target===modal){

        closeModal();

    }

}
window.onload = function(){

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },500);

    },2000);

}