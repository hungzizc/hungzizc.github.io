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