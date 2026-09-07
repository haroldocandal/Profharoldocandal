/* Comportamentos compartilhados do site */
(function () {
    // Menu móvel
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
        toggle.addEventListener("click", function () {
            var open = links.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            toggle.querySelector("i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        });
    }

    // Respeita a preferência por menos movimento: pausa vídeos de fundo
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll("video[autoplay]").forEach(function (v) {
            v.removeAttribute("autoplay");
            v.pause();
        });
    }

    // Ano do rodapé
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
})();
