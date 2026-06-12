(function() {
    console.log("[Hungzizc] Bio page ready — map & mod preview");

    // Update footer date
    const footer = document.querySelector('footer p');
    if (footer) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB');
        footer.innerHTML = `© 2026 Hungzizc — All resources are original • ${dateStr}`;
    }

    // Badge click alert
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentCard = badge.closest('.project-card');
            if (parentCard) {
                const title = parentCard.querySelector('h3')?.innerText || 'product';
                alert(`🔑 ${title} · Key available in Telegram / Discord group. Contact @Hungzizc`);
            } else {
                alert('⚡ License info: join official groups.');
            }
        });
    });

    // Social buttons already have direct hrefs – ensure they work (no extra override)
    // But for any missing click prevention, allow default link behavior.
    // No extra handling needed – they point to correct URLs.

    // Logo click effect (avatar div now contains .logo-text)
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('click', () => {
            const h1 = document.querySelector('h1');
            if (h1) {
                h1.style.transition = '0.2s';
                h1.style.textShadow = '0 0 8px #ffaa44';
                setTimeout(() => { h1.style.textShadow = ''; }, 300);
            }
        });
    }

    // Optional console info
    console.log("📢 Telegram: https://t.me/hungzizcvn | Discord: https://discord.gg/XGy5D7A75q");
})();