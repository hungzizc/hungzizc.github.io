(function () {

    console.log("Hungzizc Bio Loaded");

    const footer = document.querySelector("footer p");

    if (footer) {
        const now = new Date();
        footer.innerHTML =
            © 2026 Hungzizc • ${now.toLocaleDateString("en-GB")};
    }

    const logo = document.querySelector(".logo-img");

    if (logo) {

        logo.addEventListener("click", () => {

            logo.style.transform = "scale(1.08)";
            logo.style.transition = "0.25s ease";

            setTimeout(() => {
                logo.style.transform = "scale(1)";
            }, 250);

        });

    }

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

})();