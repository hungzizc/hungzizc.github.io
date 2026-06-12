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

    const size = 150 + Math.random() * 250;

    meteor.style.width = size + "px";

    const startX = Math.random() * window.innerWidth;

    const startY = -100;

    const angle = 110 + Math.random() * 50;

    meteor.style.left = startX + "px";

    meteor.style.top = startY + "px";

    meteor.style.transform = `rotate(${angle}deg)`;

    document.body.appendChild(meteor);

    const duration = 1500 + Math.random() * 1500;

    meteor.animate([

        {

            transform:`translate(0,0) rotate(${angle}deg)`

        },

        {

            transform:`translate(-800px,1000px) rotate(${angle}deg)`

        }

    ],{

        duration:duration,

        easing:"linear"

    });

    setTimeout(()=>meteor.remove(),duration);

}

function meteorWave(){

    const count = Math.floor(Math.random()*3)+1;

    for(let i=0;i<count;i++){

        setTimeout(createMeteor,i*300);

    }

    setTimeout(

        meteorWave,

        2000 + Math.random()*6000

    );

}

meteorWave();