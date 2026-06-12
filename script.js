// Dynamic bio interactions – subtle console info + click handlers
(function() {
    console.log("[Zack AOV] Bio page ready — map & mod preview");

    // Add current date display to footer (optional)
    const footer = document.querySelector('footer p');
    if (footer) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-GB');
        footer.innerHTML = `© 2026 Zack AOV — All resources are original • ${dateStr}`;
    }

    // Interactive badges: show alert with key info (non-intrusive)
    const keys = document.querySelectorAll('.badge');
    keys.forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const parentCard = badge.closest('.project-card');
            if (parentCard) {
                const title = parentCard.querySelector('h3')?.innerText || 'product';
                alert(`🔑 ${title} · Key available in Telegram / Discord group. Contact @ZackAOV`);
            } else {
                alert('⚡ License info: join official groups.');
            }
        });
    });

    // social buttons -> placeholder redirects (replace # with real links)
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = btn.innerText.toLowerCase();
            if (text.includes('telegram')) {
                window.open('https://t.me/zackaov_group', '_blank');
            } else if (text.includes('discord')) {
                window.open('https://discord.gg/zackaov', '_blank');
            } else if (text.includes('zackaov.com')) {
                window.open('https://zackaov.com', '_blank');
            } else {
                alert(`🌐 External link: ${btn.innerText} — replace with actual URL`);
            }
        });
    });

    // Avatar click effect: simulate cool vibe
    const avatar = document.querySelector('.avatar img');
    if (avatar) {
        avatar.addEventListener('click', () => {
            const h1 = document.querySelector('h1');
            if (h1) {
                h1.style.transition = '0.2s';
                h1.style.textShadow = '0 0 8px #4f7eff';
                setTimeout(() => { h1.style.textShadow = ''; }, 300);
            }
        });
    }

    // Check for key dates (just visual)
    const infoCards = document.querySelectorAll('.info-card .value');
    if (infoCards.length >= 2) {
        console.log(`📅 AntiRevoke DNS active · Liên Quân server: stable`);
    }
})();