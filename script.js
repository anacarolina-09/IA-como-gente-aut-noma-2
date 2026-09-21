// MENU MOBILE

function abrirMenu() {
    const nav = document.querySelector("nav");

    nav.classList.toggle("active");
}


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector("nav").classList.remove("active");

    });

});


// ANIMAÇÃO AO ENTRAR NA TELA

const elementos = document.querySelectorAll(
    ".card, .risk, .compare-card, .flow-item, .info-box"
);

const observer = new IntersectionObserver(

    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(25px)";
    elemento.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});